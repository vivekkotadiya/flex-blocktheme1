<?php

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 *
 * @since 0.1.0
 */

register_block_type(
    GbBlocks_URL . 'build/blocks/jobdetail',
    [
        'render_callback' => 'render_jobdetail',
    ]
);
function render_jobdetail($attrs)
{
    $attrs      = wp_parse_args(
        $attrs,
        [
            'showLogo'      => true,
            'LogoColor'      => 'dark',
        ]
    );

   // print_r($attrs);
    $showlogo = $attrs['showLogo'];
    $LogoColor = $attrs['LogoColor'];
    $logoClass = $showlogo === true ? 'section--logo' : '';

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
           $posttitle = get_the_title();  
           $job_subtitle = get_post_meta($post_id, 'job_subtitle', true);    
           $job_id = get_post_meta($post_id, 'job_id', true); 
           $job_content = get_post_meta($post_id, 'job_content', true); 
           
           $locationterms = get_the_terms( $post,'location' );
           $contractterms = get_the_terms( $post,'contract' );
           $subjectterms = get_the_terms( $post,'subject' );

           $locationtermsitems = $contracttermsitems = $subjecttermitems = array();

            if(!empty($locationterms) && is_array($locationterms)){
                foreach ( $locationterms as $term ) { 
                    $locationtermsitems[] =  $term->name;  
                }
            }
            if(!empty($contractterms) && is_array($contractterms)){
                foreach ( $contractterms as $term ) { 
                    $contracttermsitems[] =  $term->name;  
                }
            }
            if(!empty($subjectterms) && is_array($subjectterms)){
                foreach ( $subjectterms as $term ) { 
                    $subjecttermitems[] =  $term->name;  
                }
            }
        ?>

        <section class="section section--hero-job <?php echo $logoClass; ?>">
            <div class="section__background">
                <picture>
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
                    <?php endif; ?>
                </picture>
            </div>
            <?php if($showlogo == true): ?>
                <a href="/" class="section__logo section__logo--<?php echo $LogoColor; ?>">
                     <?php if($LogoColor == "light"): ?>
                        <img decoding="async" src="<?php echo get_stylesheet_directory_uri(). '/assets/images/smtLogo.svg'; ?>" alt="SMT - School of Management and Technology">
                    <?php endif; 
                    if($LogoColor == "dark"): ?>
                        <img decoding="async" src="<?php echo get_stylesheet_directory_uri(). '/assets/images/smtLogo-dark.svg'; ?>" alt="SMT - School of Management and Technology">
                    <?php endif; ?>
                </a>
            <?php endif; ?>
            <div class="section__content">
				<div class="row-wrapper">
					<div class="row row-wrapper--ct-wd row--heading">
						<div class="col col--xs-12 col--lg-6">
							<div class="col-content">
                                <?php 
                                     if(!empty($posttitle)): ?>
								        <h1 class="headline headline--style-six headline--color-one"><?php echo $posttitle; ?></h1> 
                                    <?php endif;
                                     if(!empty($job_subtitle)): ?>
								        <h2 class="headline headline--style-three headline--color-one"><?php echo $job_subtitle; ?></h2>    
                                    <?php endif; ?>
							</div>
						</div>
					</div>
					<div class="row row-wrapper--ct-wd">
						<div class="col col--xs-12">
							<div class="col-content">
								<div class="job__inner">
									<p class="headline  headline--align-xs-left headline--style-four headline--color-one">kurzinfos</p>
									<div class="job--info">
										<ul>
                                            <?php  if(!empty($locationtermsitems)) : ?>
												<li>
													<span>Standort</span>
													<span>
														<?php echo implode(", ", $locationtermsitems); ?>
													</span>
												</li>
                                            <?php endif; ?>
                                            <?php if(!empty($contracttermsitems)) : ?>
												<li>
													<span>Vertragsart</span>
													<span>
														<?php echo implode(", ", $contracttermsitems); ?>
													</span>
												</li>
                                            <?php endif; ?>
                                            <?php if(!empty($job_content)) : ?>
												<li>
													<span>Inhalt</span>
													<span><?php echo $job_content; ?></span>
												</li>
                                            <?php endif; ?>
										</ul>
										<ul>
                                            <?php if(!empty($subjecttermitems)) : ?>
                                                <li>
                                                    <span>Fachbereich</span>
                                                    <span>
                                                    <?php echo implode(", ", $subjecttermitems); ?>
                                                </span>
                                                </li>
                                            <?php endif; ?>
                                            <?php if(!empty($job_id)) : ?>
                                                <li>
                                                    <span>Job-ID</span>
                                                    <span><?php echo $job_id; ?></span>
                                                </li>
                                            <?php endif; ?>
										</ul>
									</div>
								</div>
							</div>
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
