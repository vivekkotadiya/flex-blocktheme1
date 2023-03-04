<?php

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 *
 * @since 0.1.0
 */

register_block_type(
    GbBlocks_URL . 'build/blocks/reportlisting',
    [
        'render_callback' => 'render_reportlisting',
    ]
);


function render_reportlisting($attrs)
{
    $attrs      = wp_parse_args(
        $attrs,
        [
            'listTaxonomy'      => array(),
        ]
    );

    $taxonomy = $attrs['listTaxonomy'];

    $query_args = array(
        'post_type'         => 'reports',
        'posts_per_page'    => -1,
        'post_status'       => 'publish',
        'orderby'           => 'date',
    );

    if (!empty($taxonomy)) {
        $query_args['tax_query'] = array(
            array(
                'taxonomy'     => 'degree',
                'terms'        => $taxonomy,
            ),
        );
    }

    $reports = get_posts($query_args);
    $html = '';
    $post_taxonomy = '';
    $post_details = '';

    $anchor = ($attrs['anchor'] != '') ? ' id="' . $attrs['anchor'] . '" ' : '';

    if (isset($reports)) :

        $html .= '<div ' . $anchor . ' class="listing-report">';
        $html .= '<div class="row-wrapper row-wrapper--ct-wd">';
        $html .= '<div class="row row--col-ht row--xs-center row--gap-2">';
        foreach ($reports as $report) :

            $id = $report->ID;

            $attachment_id = get_post_thumbnail_id($id);
            $xs = wp_get_attachment_image_src($attachment_id, 'xs');
            $default = get_the_post_thumbnail_url($id);
            $image_alt = get_post_meta($attachment_id, '_wp_attachment_image_alt', TRUE);

            clearstatcache();

            $terms = get_the_terms($id, 'degree');

            if (!empty($terms)) {
                $post_taxonomy =  $terms[0]->name;
            }

            $terms_detail = get_the_terms($id, 'detail');

            if (!empty($terms_detail)) {
                $post_details =  ' - ' . $terms_detail[0]->name;
            }

            $html .= '<div class="listing-report__item col col--xs-12 col--md-6 col--lg-12 col--xl-6 col--pd-0">';
            $html .= '<div class="col__content">';

            if ($default != '') :

                $html .= '<div class="listing-report__image">';
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

            $html .= '<div class="listing-report__detail">';
            $html .= '<span class="headline headline--align-xs-left headline--style-four headline--color-eight">' . get_post_meta($id, 'report_name', true) . '</span>';
            $html .= '<div class="listing-report__meta"><span class="listing-report__meta-tax">';
            $html .= $post_taxonomy;
            $html .= $post_details;
            $html .= '</span></div>';
            $html .= '<p class="text text--align-xs-left text--color-eight text--style-two">' . $report->post_excerpt . '</p>';
            $html .= '<a href="' . get_the_permalink($id) . '" class="listing-report__more">' . __('Erfahrungsbericht lesen', 'smt-theme') . '<span class="listing-report__more-icon"></span></a>';
            $html .= '</div>';
            $html .= '</div>';
            $html .= '</div>';


        endforeach;
        $html .= '</div>';
        $html .= '</div>';
        $html .= '</div>';

    endif;

    return $html;
}
