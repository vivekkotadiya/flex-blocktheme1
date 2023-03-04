<?php

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 *
 * @since 0.1.0
 */

register_block_type(
    GbBlocks_URL . 'build/blocks/eventlisting',
    [
        'render_callback' => 'render_eventlisting',
    ]
);


function render_eventlisting($attrs)
{
    $attrs      = wp_parse_args(
        $attrs,
        [
            'listTaxonomy'      => array(),
        ]
    );

    $taxonomy = $attrs['listTaxonomy'];

    $query_args = array(
        'post_type'         => 'events',
        'posts_per_page'    => 6,
        'post_status'       => 'publish',
        'orderby'           => 'date',
    );

    if (!empty($taxonomy)) {
        $query_args['tax_query'] = array(
            array(
                'taxonomy'     => 'event-category',
                'terms'        => $taxonomy,
            ),
        );
    }

    $event_lists = new WP_Query($query_args);
    $pages = $event_lists->max_num_pages;
    $html = '';

    $anchor = ($attrs['anchor'] != '') ? ' id="' . $attrs['anchor'] . '" ' : '';

    if ($event_lists->have_posts()) :

        $html .= '<div ' . $anchor . ' class="listing-event">';
            $html .= '<div class="row-wrapper row-wrapper--ct-wd">';
                $html .= '<div class="row row--col-ht row--xs-left row--gap-1">';

                    $html .= get_event_list($event_lists);

                $html .= '</div>';
            $html .= '</div>';
            $html .= '<span class="listing-event__loadMore" data-paged="' . $pages . '" data-tax="'. implode(',', $taxonomy) .'"><i class="fa fa-spinner"></i></span>';
        $html .= '</div>';

    endif;

    return $html;
}

add_action("wp_ajax_geteventList", "geteventList");
add_action("wp_ajax_nopriv_geteventList", "geteventList");

function geteventList()
{
    $paged = isset($_REQUEST['paged']) ? $_REQUEST['paged'] : 1;
    $post_per_page = 6;
    $query_args = array(
        'post_type'         => 'events',
        'posts_per_page'     => $post_per_page,
        'post_status'       => 'publish',
        'orderby'           => 'date',
        'paged'             => $paged
    );
    $taxonomy = isset($_REQUEST['taxonomy']) ? $_REQUEST['taxonomy'] : '';

    if ($taxonomy != '' && $taxonomy != 0) {
        $query_args['tax_query'] = array(
            array(
                'taxonomy'     => 'event-category',
                'field'        => 'id',
                'terms'        => explode(",", $taxonomy),
            ),
        );
    }
    $posts  = new WP_Query($query_args);

    $pages = $posts->max_num_pages;

    $html = '';

    if ($posts->have_posts()) :
        $html .= get_event_list($posts);
    else :
        $html .= '<div class="listing-event__nopost">' . __("There are no Events", "smt-theme") . '</div>';
    endif;

    wp_send_json(array('html' => $html, 'max_page' => $pages));

    die;
}

function get_event_list($event_lists)
{
    $html = '';
    while ($event_lists->have_posts()) : $event_lists->the_post();
        $id = get_the_ID();

        $attachment_id = get_post_thumbnail_id($id);
        $xs = wp_get_attachment_image_src($attachment_id, 'xs');
        $md = wp_get_attachment_image_src($attachment_id, 'md');
        $default = get_the_post_thumbnail_url($id);
        $image_alt = get_post_meta($attachment_id, '_wp_attachment_image_alt', TRUE);

        clearstatcache();

        $html .= '<a href="' . get_the_permalink($id) . '" class="listing-event__item col col--xs-12 col--pd-0 col--bg-one">';
            $html .= '<div class="col__content">';

                if ($default != '') {

                    $html .= '<div class="listing-event__image">';
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

                } else {
                    $html .= '<div class="listing-event__image">';
                        $html .= '<svg xmlns="http://www.w3.org/2000/svg" width="84.092" height="79.888" viewBox="0 0 84.092 79.888"><path id="calendar_icon" data-name="calendar_icon" d="M69.274,14.614V6.2a4.2,4.2,0,0,0-8.409,0v8.409H27.228V6.2a4.2,4.2,0,1,0-8.409,0v8.409H2V81.888H86.092V14.614Zm8.409,58.865H10.409V23.023H77.683ZM61.117,41.607l-5.046-5.046L41.1,51.53l-9.082-9.04-5.046,5.046L41.1,61.663Z" transform="translate(-2 -2)" fill="#fff"/></svg>';
                    $html .= '</div>';
                }

                $html .= '<div class="listing-event__detail">';
            
                    $html .= '<div class="listing-event__info">';
                        
                        $html .= '<span class="headline headline--align-xs-left headline--style-four headline--color-seven">' . get_the_title($id) . '</span>';
                    
                        $html .= '<div class="listing-event__meta">';

                            $html .= '<div class="listing-event__tax-date">';

                                $html .= '<span class="listing-event__tax">Veranstaltung</span>';

                                $html .= '<div class="listing-event__date">';
                                    if ('' != get_post_meta($id, 'start_date', true)) :
                                        $html .= '<span class="listing-event__startdate">' . date('d.m.Y', strtotime(get_post_meta($id, 'start_date', true))) . '</span>';
                                    endif;

                                    if ('' != get_post_meta($id, 'end_date', true)) :
                                        $html .= '<span class="listing-event__arrow"></span>';
                                        $html .= '<span class="listing-event__enddate">' . date('d.m.Y', strtotime(get_post_meta($id, 'end_date', true))) . '</span>';
                                    endif;
                                $html .= '</div>';

                            $html .= '</div>';

                            if ('' != get_post_meta($id, 'event_place', true)) :
                                $html .= '<span class="listing-event__place">Ort: ' . get_post_meta($id, 'event_place', true) . '</span>';
                            endif;

                            if ('' != get_post_meta($id, 'start_time', true) || '' != get_post_meta($id, 'end_time', true)) :
                                $html .= '<span class="listing-event__time">Uhrzeit: ';
                                if ('' != get_post_meta($id, 'start_time', true) && '' != get_post_meta($id, 'end_time', true)) :
                                    $html .= '<span class="listing-event__starttime">' . get_post_meta($id, 'start_time', true) . ' - ' . get_post_meta($id, 'end_time', true) . '</span>';
                                else :
                                    $html .= '<span class="listing-event__endtime">' . ('' != get_post_meta($id, 'start_time', true)) ? get_post_meta($id, 'start_time', true) : get_post_meta($id, 'end_time', true) . '</span>';
                                endif;
                                $html .= ' Uhr</span>';
                            endif;

                        $html .= '</div>';
                    $html .= '</div>';

                    $html .= '<div class="listing-event__button"></div>';
                $html .= '</div>';

            $html .= '</div>';
        $html .= '</a>';

    endwhile;

    return $html;
}
