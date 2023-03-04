<?php

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 *
 * @since 0.1.0
 */

register_block_type(
    GbBlocks_URL . 'build/blocks/blogoverview',
    [
        'render_callback' => 'render_blogoverview',
    ]
);


function render_blogoverview($attrs, $content, $block)
{

    $attrs      = wp_parse_args(
        $attrs,
        [
            'listTaxonomy'      => array(),
            'featuredId' => 0

        ]
    );

    $taxonomy = $attrs['listTaxonomy'];
    $featuredId = $attrs['featuredId'];

    $html = '';
    // featured blog.
    if($featuredId){ 
        $attachment_id =  get_post_thumbnail_id($featuredId); 
        $post_fullimage = get_the_post_thumbnail_url($featuredId);
        $full_imgsrc = wp_get_attachment_image_src( $attachment_id , 'full');
        $alt = '';
        $sizearray = array();
        if(!empty($attachment_id) && !empty($post_fullimage)){
             $featuredimagearray = wp_get_attachment_metadata($attachment_id);
             $alt = get_post_meta( $attachment_id, '_wp_attachment_image_alt', true );
             $sizearray = isset($featuredimagearray['sizes']) && !empty($featuredimagearray['sizes']) ? $featuredimagearray['sizes'] :  array();
             $fileParts = pathinfo($post_fullimage); 
             $file_dirname = $fileParts['dirname']; 

        }

        $terms = get_the_terms($featuredId,'category');
        
     }
    
        $paged = 1;
        $post_per_page = 6;
        $query_args = array(
            'post_type'         => 'blog',
            'posts_per_page'    => $post_per_page,
            'post_status'       => 'publish',
            'orderby'           => 'date',
            'paged'             => $paged,
        );

        if($featuredId){
            $query_args['post__not_in'] = array($featuredId);
        }

       
        if (!empty($taxonomy)) {
            $query_args['tax_query'] = array(
                array(
                    'taxonomy'     => 'category',
                    'terms'        => $taxonomy,
                ),
            );
        }

        $blog_lists = new WP_Query($query_args);
        $pages = $blog_lists->max_num_pages;
        

        $anchor = ($attrs['anchor'] != '') ? ' id="' . $attrs['anchor'] . '" ' : '';

        ob_start();
        ?> 
        <section <?php echo $anchor; ?> class="section section--logo section--blog-featured">
            <div class="section__background">
                <picture>
                    <source media="(min-width:1025px)" srcset="<?php echo get_stylesheet_directory_uri(). '/assets/images/smt-hero-shape.svg'; ?>">
                    <source media="(min-width:481px)" srcset="<?php echo get_stylesheet_directory_uri(). '/assets/images/smt-hero-shape-md.svg'; ?>">
                    <source media="(max-width:480px)" srcset="<?php echo get_stylesheet_directory_uri(). '/assets/images/smt-hero-shape-xs.svg'; ?>">
                    <img loading="lazy" decoding="async" src="<?php echo get_stylesheet_directory_uri(). '/assets/images/smt-hero-shape.svg'; ?>" alt="" width="auto" height="auto">
                </picture>
            </div>
                <a href="/" class="section__logo section__logo--light">
                <img decoding="async" src="<?php echo get_stylesheet_directory_uri(). '/assets/images/smtLogo.svg'; ?>" alt="SMT - School of Management and Technology">
            </a>
            <div class="section__content">
                <div class="row-wrapper row-wrapper--ct-wd">
                    <div class="row">
                        <div class="col col--xs-12">
                            <div class="col__content col__header">
                                <h1 class="headline headline--color-one headline--style-three headline--align-xs-center">DER SMT-BLOG</h1>
                                <h2 class="headline headline--color-one headline--style-two headline--align-xs-center">IMMER AUF DEM AKTUELLSTEN STAND</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row row--col-ht row--gap-custom">
                        <div class="col col--xs-12 col--md-12 col--xl-6">
                            <div class="col__content">
                                <?php if( !empty($featuredimagearray) && !empty($post_fullimage)){ ?>
                                    <div class="image">
                                        <picture class="image__content">

                                                <?php if(isset($sizearray['xl_webp']) && !empty($sizearray['xl_webp'])): ?>
                                                <source media="(min-width:1025px)" srcset="<?php echo $file_dirname . '/' . $sizearray['xl_webp']['file']; ?>" type="image/webp">
                                            <?php endif; ?>
                                            
                                            <?php if(isset($sizearray['xl']) && !empty($sizearray['xl'])): ?>
                                                <source media="(min-width:1025px)" srcset="<?php echo $file_dirname . '/' . $sizearray['xl']['file']; ?>">
                                            <?php endif; ?>
                                            
                                            <?php if(isset($sizearray['md_webp']) && !empty($sizearray['md_webp'])): ?>
                                                <source media="(min-width:481px)" srcset="<?php echo $file_dirname . '/' . $sizearray['md_webp']['file']; ?>" type="image/webp">
                                            <?php endif; ?>
                                            
                                            <?php if(isset($sizearray['md']) && !empty($sizearray['md'])): ?>
                                                <source media="(min-width:481px)" srcset="<?php echo $file_dirname . '/' . $sizearray['md']['file']; ?>">
                                            <?php endif; ?>
                                            
                                            <?php if(isset($sizearray['xs_webp']) && !empty($sizearray['xs_webp'])): ?>
                                                <source media="(max-width:480px)" srcset="<?php echo $file_dirname . '/' . $sizearray['xs_webp']['file']; ?>" type="image/webp">
                                            <?php endif; ?>
                                            
                                            <?php if(isset($sizearray['xs']) && !empty($sizearray['xs'])): ?>
                                                <source media="(max-width:480px)" srcset="<?php echo $file_dirname . '/' . $sizearray['xs']['file']; ?>">
                                            <?php endif; ?>
                                            
                                            <?php if(isset($post_fullimage) && !empty($post_fullimage)): ?>
                                                <img decoding="async" src="<?php echo $post_fullimage; ?>" alt="<?php echo $alt; ?>">
                                        </picture>
                                            <?php endif; ?>
                                    </div>
                                <?php } ?>
                            </div>
                        </div>
                        <div class="col col--xs-12 col--md-12 col--xl-6">
                            <div class="col__content col__blog">
                                <h1 class="headline headline--align-xs-left headline--style-four headline--color-seven"><?php echo get_the_title($featuredId); ?></h1>
                                <span class="blog--date"><?php echo strtoupper(get_the_date('d M. Y', $featuredId)); ?></span>
                                <div class="blog--tags">
                                    <?php
                                        if(!empty($terms) && is_array($terms)){
                                            foreach ( $terms as $term ) { ?>
                                        <span><?php echo $term->name; ?></span>      
                                        <?php }
                                        }
                                    ?>
                                </div>
                                <p class="text text--align-xs-left text--color-eight text--style-two "><?php echo get_the_excerpt($featuredId); ?></p>
                                <a href="<?php echo get_the_permalink($featuredId); ?>" class="button--cta button--style-two button--color-three button--align-xs-left button--width-xs-inline"><span class="button--text">mehr erfahren</span></a>
                            </div>
                        </div>
                      
                    </div>
                </div>
            </div>
         </section>
         <section class="section">
            <div class="section__content">
                <?php  if ($blog_lists->have_posts()) : ?>
                        <div class="listing-blog">
                            <div class="listing-blog__filter" data-featured=<?php echo $featuredId; ?>>
                                <div class="listing-blog__filter-tax active-tax" data-id="0">Alle Einträge</div>
                                <?php 
                                if (!empty($taxonomy)) {
                                    if (count($taxonomy) > 0) {
                                        for ($i = 0; $i < count($taxonomy); $i++) {
                                            $term = get_term_by('id', $taxonomy[$i], 'category'); ?>
                                            <div class="listing-blog__filter-tax" data-id="<?php echo $taxonomy[$i]; ?>"><?php echo $term->name; ?></div> <?php
                                        }
                                    }
                                } ?>
                            </div> 
                            <div class="listing-blog__content">
                                <div class="row-wrapper row-wrapper--ct-wd">
                                    <div class="row row--col-ht row--xs-left row--gap-1">
                                        <?php echo get_blog_list($blog_lists); ?>
                                    </div>
                                </div>
                                <span class="listing-blog__loadMore" data-paged="<?php echo $pages; ?>"><i class="fa fa-spinner"></i></span>
                            </div>
                        </div>
                <?php  endif; ?>
            </div>
        </section>
       <?php
    $html = ob_get_clean();
    return $html;
}
