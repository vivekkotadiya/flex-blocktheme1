<?php

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 *
 * @since 0.1.0
 */

register_block_type(
    GbBlocks_URL . 'build/blocks/partnerlisting',
    [
        'render_callback' => 'render_partnerlisting',
    ]
);
function render_partnerlisting($attrs)
{
    $attrs      = wp_parse_args(
        $attrs,
        [
            'listTaxonomy'      => array(),
        ]
    );

    $taxonomy = $attrs['listTaxonomy'];

    $query_args = array(
        'post_type'         => 'partner',
        'posts_per_page'    => -1,
        'post_status'       => 'publish',
        'orderby'           => 'date',
    );

    if (!empty($taxonomy)) {
        $query_args['tax_query'] = array(
            array(
                'taxonomy'     => 'partner-category',
                'terms'        => $taxonomy,
            ),
        );
    }

    $partners = get_posts($query_args);
    $anchor = ($attrs['anchor'] != '') ? ' id="' . $attrs['anchor'] . '" ' : '';
    $html = '';
    $html .= '<div ' . $anchor . ' class="listing-partner">';
    if (!empty($partners)) :
        $html .= '<div class="row-wrapper row-wrapper--ct-wd">';
        $html .= '<div class="row row--col-ht row--xs-center row--gap-1">';
        foreach ($partners as $partner) :
            $id = $partner->ID;
            $attachment_id = get_post_thumbnail_id($id);
            $xs = wp_get_attachment_image_src($attachment_id, 'xs');
            $default = get_the_post_thumbnail_url($id);
            $image_alt = ('' != get_post_meta($id, 'partner_alt', true)) ? get_post_meta($id, 'partner_alt', true) : get_post_meta($attachment_id, '_wp_attachment_image_alt', TRUE);
            $html .= '<div class="col col--xs-6 col--md-3 col--xl-2 col--pd-0">';
            $html .= '<div class="col__content">';

            $html .= '<div class="listing-partner__item">';
            if ('' != get_post_meta($id, 'partner_link', true)) :
                $html .= '<a href="' . get_post_meta($id, 'partner_link', true) . '" target="_blank">';
            endif;

            if ($default != '') :

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


            endif;

            if ('' != get_post_meta($id, 'partner_link', true)) :
                $html .= '</a>';
            endif;

            $html .= '</div>';

            $html .= '</div>';
            $html .= '</div>';
        endforeach;
        $html .= '</div>';
        $html .= '</div>';
    else :
        $html .= '<h5 class="headline headline--style-five headline--color-eight headline--align-xs-center">There are no Partners.</h5>';
    endif;
    $html .= '</div>';
    return $html;
}
