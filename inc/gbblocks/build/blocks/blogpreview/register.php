<?php

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 *
 * @since 0.1.0
 */

register_block_type(
    GbBlocks_URL . 'build/blocks/blogpreview',
    [
        'render_callback' => 'render_blogpreview',
    ]
);
function render_blogpreview($attrs)
{
    $attrs      = wp_parse_args(
        $attrs,
        [
            'listTaxonomy'      => array(),
        ]
    );

    $taxonomy = $attrs['listTaxonomy'];

    $query_args = array(
        'post_type'         => 'blog',
        'posts_per_page'    => 3,
        'post_status'       => 'publish',
        'orderby'           => 'date',
    );
    if ('blog' == get_post_type(get_the_ID())) {
        $query_args['post__not_in'] = array(get_the_ID());
    }
    if (!empty($taxonomy)) {
        $query_args['tax_query'] = array(
            array(
                'taxonomy'     => 'category',
                'terms'        => $taxonomy,
            ),
        );
    }

    $blogs = get_posts($query_args);

    $anchor = ($attrs['anchor'] != '') ? ' id="' . $attrs['anchor'] . '" ' : '';
    $html = '';
    $post_taxonomy = '';
    if (!empty($blogs)) :
        $html .= '<div ' . $anchor . ' class="preview-blog">';

        $html .= '<div class="row-wrapper row-wrapper--ct-wd">';
        $html .= '<div class="row row--col-ht row--xs-center row--gap-1">';

        foreach ($blogs as $blog) :
            $id = $blog->ID;
            $attachment_id = get_post_thumbnail_id($id);
            $xs = wp_get_attachment_image_src($attachment_id, 'xs');
            $default = get_the_post_thumbnail_url($id);
            $image_alt = get_post_meta($attachment_id, '_wp_attachment_image_alt', TRUE);

            $terms = get_the_terms($id, 'category');

            if (!empty($terms)) {
                $termsHtml = '';
                if (count($terms) > 1) {
                    for ($i = 0; $i < count($terms); $i++) {
                        $termsHtml .= '<span class="preview-blog__meta-tax-name">' . $terms[$i]->name . '</span>';
                    }
                    $post_taxonomy = $termsHtml;
                } else {
                    $post_taxonomy =  '<span class="preview-blog__meta-tax-name">' . $terms[0]->name . '</span>';
                }
            }
            $html .= '<div class="preview-blog__item col col--xs-12 col--md-6 col--xl-4 col--pd-0">';
            $html .= '<div class="col__content">';

            if ($default != '') :

                $html .= '<div class="preview-blog__image">';
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

                $html .= '<img src ="' . $default . '" alt = "' . $image_alt . '" loading="lazy" />';
                $html .= '</picture>';
                $html .= '</div>';

            endif;

            $html .= '<div class="preview-blog__detail">';
            $html .= '<span class="headline headline--align-xs-left headline--style-four headline--color-seven">' . $blog->post_title . '</span>';
            $html .= '<div class="preview-blog__meta">';
            $html .= '<span class="preview-blog__meta-date">' . date('j M. Y', strtotime($blog->post_date)) . '</span>';
            $html .= '<div class="preview-blog__meta-tax">';
            $html .= $post_taxonomy;
            $html .= '</div>';
            $html .= '</div>';
            $html .= '<span class="text text--align-xs-left text--color-eight text--style-two">' . $blog->post_excerpt . '</span>';
            $html .= '<a href="' . get_the_permalink($id) . '" class="button--cta button--style-two button--width-xs-inline button--color-three button--align-xs-left"><span class="button--text">mehr erfahren</span></a>';
            $html .= '</div>';
            $html .= '</div>';
            $html .= '</div>';
        endforeach;

        $html .= '</div>';
        $html .= '</div>';

        $html .= '</div>';
    else :
        $html .= '<span class="headline headline--style-five headline--color-eight headline--align-xs-left">There are no Blogarticle.</span>';
    endif;

    return $html;
}
