<?php

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 *
 * @since 0.1.0
 */

register_block_type(
    GbBlocks_URL . 'build/blocks/bloglisting',
    [
        'render_callback' => 'render_bloglisting',
    ]
);


function render_bloglisting($attrs, $content, $block)
{

    $attrs      = wp_parse_args(
        $attrs,
        [
            'listTaxonomy'      => array(),
        ]
    );

    $taxonomy = $attrs['listTaxonomy'];

    $paged = 1;
    $post_per_page = 6;
    $query_args = array(
        'post_type'         => 'blog',
        'posts_per_page'    => $post_per_page,
        'post_status'       => 'publish',
        'orderby'           => 'date',
        'paged'             => $paged,
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
    $pages = $blog_lists->max_num_pages;
    $html = '';

    $anchor = ($attrs['anchor'] != '') ? ' id="' . $attrs['anchor'] . '" ' : '';

    if ($blog_lists->have_posts()) :

        $html .= '<div ' . $anchor . ' class="listing-blog">';
        $html .= '<div class="listing-blog__filter">';
        $html .= '<div class="listing-blog__filter-tax active-tax" data-id="0">Alle Einträge</div>';
        if (!empty($taxonomy)) {
            if (count($taxonomy) > 0) {
                for ($i = 0; $i < count($taxonomy); $i++) {
                    $term = get_term_by('id', $taxonomy[$i], 'category');
                    $html .= '<div class="listing-blog__filter-tax" data-id="' . $taxonomy[$i] . '">' . $term->name . '</div>';
                }
            }
        }
        $html .= '</div>';
        $html .= '<div class="listing-blog__content">';
        $html .= '<div class="row-wrapper row-wrapper--ct-wd">';
        $html .= '<div class="row row--col-ht row--xs-left row--gap-1">';
        $html .= get_blog_list($blog_lists);
        $html .= '</div>';
        $html .= '</div>';
        $html .= '<span class="listing-blog__loadMore" data-paged="' . $pages . '"><i class="fa fa-spinner"></i></span>';
        $html .= '</div>';
        $html .= '</div>';

    endif;

    return $html;
}

add_action("wp_ajax_getblogList", "getblogList");
add_action("wp_ajax_nopriv_getblogList", "getblogList");
function getblogList()
{
    $paged = isset($_REQUEST['paged']) ? $_REQUEST['paged'] : 1;

    $featuredPostId = isset($_REQUEST['featuredPostId']) ? $_REQUEST['featuredPostId'] : '';

    $post_per_page = 6;
    $query_args = array(
        'post_type'         => 'blog',
        'posts_per_page'     => $post_per_page,
        'post_status'       => 'publish',
        'orderby'           => 'date',
        'paged'             => $paged
    );

    if(!empty($featuredPostId)){
        $query_args['post__not_in'] = array($featuredPostId);
    }

    $taxonomy = isset($_REQUEST['taxonomy']) ? $_REQUEST['taxonomy'] : array();

    if ($taxonomy != '' && $taxonomy != 0) {
        $query_args['tax_query'] = array(
            array(
                'taxonomy'     => 'category',
                'field'        => 'id',
                'terms'        => $taxonomy,
            ),
        );
    }
    $posts  = new WP_Query($query_args);
    $pages = $posts->max_num_pages;

    $html = '';
    if ($posts->have_posts()) :
        $html .= get_blog_list($posts);
    else :
        $html .= '<div class="listing-blog__nopost">' . __("There is no posts", "smt-theme") . '</div>';
    endif;

    wp_send_json(array('html' => $html, 'max_page' => $pages));

    die;
}

function get_blog_list($blog_lists)
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
                    $termsHtml .= '<span class="listing-blog__meta-tax-name">' . $blogTerm[$i] . '</span>';
                }
                $post_taxonomy = $termsHtml;
            } else {
                $post_taxonomy =  '<span class="listing-blog__meta-tax-name">' . $terms[0]->name . '</span>';
            }
        }

        $html .= '<div class="listing-blog__item col col--xs-12 col--md-6 col--xl-4 col--pd-0">';
        $html .= '<div class="col__content">';

        if ($default != '') :

            $html .= '<div class="listing-blog__image">';
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

        $html .= '<div class="listing-blog__detail">';
        //$html .= '<div class="listing-blog__detail-item">';
        $html .= '<span class="headline headline--align-xs-left headline--style-four headline--color-seven">' . get_the_title($id) . '</span>';
        $html .= '<div class="listing-blog__meta">';
        $html .= '<span class="listing-blog__meta-date">' . get_the_date('j M. Y', $id) . '</span>';
        $html .= '<div class="listing-blog__meta-tax">';
        $html .= $post_taxonomy;
        $html .= '</div>';
        $html .= '</div>';
        $html .= '<div class="listing-blog__info">';
        $html .= '<p class="text text--align-xs-left text--color-eight text--style-two">' . get_the_excerpt($id) . '</p>';
        $html .= '<a href="' . get_the_permalink($id) . '" class="button--cta button--style-two button--width-xs-inline button--color-three button--align-xs-left"><span class="button--text">mehr erfahren</span></a>';
        $html .= '</div>';
        $html .= '</div>';
        $html .= '</div>';
        //$html .= '</div>';
        $html .= '</div>';


    endwhile;

    return $html;
}
