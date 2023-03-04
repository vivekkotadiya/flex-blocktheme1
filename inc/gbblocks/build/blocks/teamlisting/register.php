<?php

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 *
 * @since 0.1.0
 */

register_block_type(
    GbBlocks_URL . 'build/blocks/teamlisting',
    [
        'render_callback' => 'render_teamlisting',
    ]
);


function render_teamlisting($attrs)
{
    $attrs      = wp_parse_args(
        $attrs,
        [
            'teamTaxonomy'      => '',
        ]
    );
    $teams = array();
    $taxonomy = $attrs['teamTaxonomy'];

    $query_args = array(
        'post_type'         => 'team',
        'posts_per_page'    => -1,
        'post_status'       => 'publish',
        'orderby'           => 'date',
    );
    if (!empty($taxonomy)) {
        $query_args['tax_query'] = array(
            array(
                'taxonomy'     => 'department',
                'terms'        => $taxonomy,
            ),
        );
    }

    $teams = get_posts($query_args);
    $html = '';

    $anchor = ($attrs['anchor'] != '') ? ' id="' . $attrs['anchor'] . '" ' : '';

    if (!empty($teams)) :

        $html .= '<div ' . $anchor . ' class="listing-team">';
        $html .= '<div class="row-wrapper row-wrapper--ct-wd">';
        $html .= '<div class="row row--col-ht row--xs-center row--gap-2">';

        $html .= get_team_list($teams);

        $html .= '</div>';
        $html .= '</div>';
        $html .= '</div>';

    endif;

    return $html;
}

function get_team_list($teams)
{
    $html = '';
    $post_taxonomy = '';
    foreach ($teams as $team) :
        $id = $team->ID;

        $attachment_id = get_post_thumbnail_id($id);
        $xs = wp_get_attachment_image_src($attachment_id, 'xs');
        $default = get_the_post_thumbnail_url($id);
        $image_alt =  ('' != get_post_meta($id, 'team_alt', true)) ? get_post_meta($id, 'team_alt', true) : get_post_meta($attachment_id, '_wp_attachment_image_alt', TRUE);

        clearstatcache();

        $terms = get_the_terms($id, 'department');

        if (!empty($terms)) {
            $termsHtml = '';
            if (count($terms) > 1) {
                for ($i = 0; $i < count($terms); $i++) {
                    $termsHtml .= '<span class="listing-team__tax">' . $terms[$i]->name . '</span>';
                }
                $post_taxonomy = $termsHtml;
            } else {
                $post_taxonomy =  '<span class="listing-team__tax">' . $terms[0]->name . '</span>';
            }
        }

        $html .= '<div class="listing-team__item col col--xs-12 col--md-6 col--xl-6 col--bg-two">';
        $html .= '<div class="col__content">';

        if ($default != '') :

            $html .= '<div class="listing-team__image">';
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

        $html .= '<div class="listing-team__detail">';

        $html .= '<span class="headline headline--align-xs-left headline--style-four headline--color-three">' . $team->post_title . '</span>';

        $html .= '<div class="listing-team__meta">';

        $html .= $post_taxonomy;

        if ('' != get_post_meta($id, 'phone', true)) :
            $html .= '<a href="tel:' . preg_replace('/[^\dxX]/', '', get_post_meta($id, 'phone', true)) . '" class="text text--style-one text--align-xs-left text--color-seven">' . get_post_meta($id, 'phone', true) . '</a>';
        endif;

        if ('' != get_post_meta($id, 'email', true)) :
            $html .= '<a href="mailto:' . get_post_meta($id, 'email', true) . '" class="text text--style-one text--align-xs-left text--color-seven">' . get_post_meta($id, 'email', true) . '</a>';
        endif;

        $html .= '</div>';

        $html .= '</div>';

        $html .= '</div>';
        $html .= '</div>';

    endforeach;

    return $html;
}
