<?php

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 *
 * @since 0.1.0
 */

register_block_type(
    GbBlocks_URL . 'build/blocks/blogsection/blogslider',
    [
        'render_callback' => 'render_blogslider',
    ]
);


function render_blogslider($attrs)
{
    if (defined('REST_REQUEST') && REST_REQUEST) {
        $is_backend = true;
    } else {
        $is_backend = false;
    };

    $attrs      = wp_parse_args(
        $attrs,
        [
            'listTaxonomy'      => array(),
            'blogsLink'         => array(),
        ]
    );

    $taxonomy = $attrs['listTaxonomy'];

    $post_per_page = -1;
    $query_args = array(
        'post_type'         => 'blog',
        'posts_per_page'    => $post_per_page,
        'post_status'       => 'publish',
        'orderby'           => 'date',
    );
    if (!empty($taxonomy)) {
        $query_args['tax_query'] = array(
            array(
                'taxonomy'     => 'category',
                'terms'        => $taxonomy,
            ),
        );
    }

    $blog_lists = new WP_Query($query_args);
    $html = '';

    $url = '#';
    $target = '';

    if (!empty($attrs['blogsLink'])) {
        $url = ('' != $attrs['blogsLink']['url']) ? $attrs['blogsLink']['url'] : '';
        $target = (isset($attrs['blogsLink']['opensInNewTab']) && $attrs['blogsLink']['opensInNewTab'] == true) ? '_blank' : null;
    }
    if ($blog_lists->have_posts()) :

        if (!$is_backend) {
            $html .= '<div class="col col--xs-11 col--lg-6 col--xl-7 col--xs-os-1 col--lg-os-1 col--xl-os-1 col--pd-0">';
            $html .= '<div class="col__content">';
        }

        $html .= '<div class="blog-slider splide">';
        $html .= '<div class="splide__track">';
        $html .= '<div class="splide__list">';

        $html .= get_blog_item($blog_lists);

        $html .= '</div>';
        $html .= '</div>';
        $html .= '<div class="blog-slider__arrows splide__arrows">';
        $html .= '<button class="splide__arrow splide__arrow--prev" type="button" aria-label="Previous slide"></button>';
        $html .= '<a href="' . $url . '" target="' . $target . '" class="blog-slider__link">' . __("zum SMT Blog", "smt-theme") . '</a>';
        $html .= '<button class="splide__arrow splide__arrow--next" type="button" aria-label="Next slide"></button>';
        $html .= '</div>';
        $html .= '</div>';

        if (!$is_backend) {
            $html .= '</div>';
            $html .= '</div>';
        }

    endif;

    return $html;
}

function get_blog_item($blog_lists)
{
    $html = '';
    $blogTerm = [];
    $post_taxonomy = '';
    while ($blog_lists->have_posts()) : $blog_lists->the_post();
        $id = get_the_ID();

        $attachment_id = get_post_thumbnail_id($id);
        $xs = wp_get_attachment_image_src($attachment_id, 'xs');
        $md = wp_get_attachment_image_src($attachment_id, 'md');
        $default = get_the_post_thumbnail_url($id);
        $image_alt = get_post_meta($attachment_id, '_wp_attachment_image_alt', TRUE);

        clearstatcache();

        $terms = get_the_terms($id, 'category');

        if (!empty($terms)) {
            $termsHtml = '';
            if (count($terms) > 1) {
                for ($i = 0; $i < count($terms); $i++) {
                    $blogTerm[$i] = $terms[$i]->name;
                    $termsHtml .= '<span class="blog-slider__meta-tax-name">' . $blogTerm[$i] . '</span>';
                }
                $post_taxonomy = $termsHtml;
            } else {
                $post_taxonomy =  '<span class="blog-slider__meta-tax-name">' . $terms[0]->name . '</span>';
            }
        }

        $html .= '<div class="blog-slider__item splide__slide">';

        if ($default != '') :

            $html .= '<div class="blog-slider__image">';
            $html .= '<picture>';

            if ($xs) :
                $image_path = wp_get_original_image_path($attachment_id);
                $file_dirname = pathinfo($image_path, PATHINFO_DIRNAME);
                $file_name = pathinfo($xs[0], PATHINFO_FILENAME);
                $xswebp = $file_dirname . '/' . $file_name . '.webp';
                $file_relativepath = pathinfo($xs[0], PATHINFO_DIRNAME);

                if (file_exists($xswebp)) :
                    $html .=  '<source srcset="' . $file_relativepath . '/' . $file_name . '.webp" type="image/webp" />';
                endif;

                $html .= '<source srcset="' . $xs[0] . '" />';

            endif;

            $html .= '<img  src ="' . $default . '" alt = "' . $image_alt . '" loading="lazy" />';
            $html .= '</picture>';
            $html .= '</div>';

        endif;

        $html .= '<div class="blog-slider__detail">';
        $html .= '<span class="headline headline--align-xs-left headline--style-four headline--color-seven">' . get_the_title($id) . '</span>';
        $html .= '<div class="blog-slider__meta">';
        $html .= '<span class="blog-slider__meta-date">' . get_the_date('j M. Y', $id) . '</span>';
        $html .= '<div class="blog-slider__meta-tax">';
        $html .= $post_taxonomy;
        $html .= '</div>';
        $html .= '</div>';
        $html .= '<p class="text text--align-xs-left text--color-eight text--style-two">' . get_the_excerpt($id) . '</p>';
        $html .= '<a href="' . get_the_permalink($id) . '" class="button--cta button--style-two button--width-xs-inline button--color-three button--align-xs-left"><span class="button--text">mehr erfahren</span></a>';
        $html .= '</div>';
        $html .= '</div>';


    endwhile;

    return $html;
}
