<?php

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 *
 * @since 0.1.0
 */

register_block_type(
    GbBlocks_URL . 'build/blocks/eventdetail',
    [
        'render_callback' => 'render_eventdetail',
    ]
);
function render_eventdetail($attrs)
{
    $attrs      = wp_parse_args(
        $attrs,
        [
            'eventListen'      => false,
        ]
    );

    global $post;
    //buffering start here

    ob_start();
    $html = '';
    if($post){
        $post_id = $post->ID; 
        if($post_id){ 
           $attachment_id =  get_post_thumbnail_id(); 
           $post_fullimage = get_the_post_thumbnail_url();
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
        ?>

        <section class="section section--logo event--hero-main" <?php echo $attrs['eventListen']; ?> >
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
                <div class="row row--xs-middle row--gap-2">
                    <div class="col col--xs-12 col--sm-12 col--xl-5">
                        <div class="col__content">
                            <h1 class="headline headline--align-xs-left headline--style-one headline--color-one"><?php echo get_the_title(); ?></h1>
                            <p class="text text--align-xs-left text--color-one text--style-one"><?php echo get_the_excerpt(); ?></p>
                        </div>
                    </div>
                    <div class="col col--xs-12 col--sm-12 col--xl-7">
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
                                            <img decoding="async" src="<?php echo $post_fullimage; ?>" alt="<?php echo $alt; ?>"></picture>
                                        <?php endif; ?>
                                    </div>
                                </div>
                            <?php } ?>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <?php }
    } 

    $html = ob_get_clean();
    //get buffered data

    return $html;
}
