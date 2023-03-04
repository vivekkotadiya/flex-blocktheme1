<?php

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 *
 * @since 0.1.0
 */

register_block_type(
    GbBlocks_URL . 'build/blocks/reportslider/reportslides',
    [
        'render_callback' => 'render_reportslides',
    ]
);


function render_reportslides($attrs)
{
    $attrs      = wp_parse_args(
        $attrs,
        [
            'degreeTax'      => "",
            'detailTax'      => "",
            'url'            => "",
            'linkTarget'     => "",
            "reportButtonText"  => "",
        ]
    );

    $degreeTax = $attrs['degreeTax'];
    $detailTax = $attrs['detailTax'];
    $url = $attrs['url'];
    $linkTarget = $attrs['linkTarget'];
    $reportButtonText = $attrs['reportButtonText'];

    $post_per_page = -1;
    $query_args = array(
        'post_type'         => 'reports',
        'posts_per_page'    => $post_per_page,
        'post_status'       => 'publish',
        'orderby'           => 'date',
    );
    if ($degreeTax !== '' && $detailTax !== '') {
        $query_args['tax_query'] = array(
            'relation' => 'OR',
            array(
                'taxonomy'     => 'degree',
                'field'        => 'term_id',
                'terms'        => $degreeTax,
            ),
            array(
                'taxonomy'     => 'detail',
                'field'        => 'term_id',
                'terms'        => $detailTax,
            ),
        );
    }
    if ($degreeTax !== '' && $detailTax == '') {
        $query_args['tax_query'] = array(
            array(
                'taxonomy'     => 'degree',
                'field'        => 'term_id',
                'terms'        => $degreeTax,
            ),
        );
    }
    if ($detailTax !== '' && $degreeTax == '') {
        $query_args['tax_query'] = array(
            array(
                'taxonomy'     => 'detail',
                'field'        => 'term_id',
                'terms'        => $detailTax,
            ),
        );
    }

    $report_lists = get_posts($query_args);

    $html = '';

    if (!empty($report_lists)) :

        $html .= '<div class="report-slider__lists splide">';
        $html .= '<div class="splide__track">';
        $html .= '<div class="splide__list">';

        $html .= get_report_item($report_lists);

        $html .= '</div>';
        $html .= '</div>';
        $html .= '<div class="report-slider__arrows splide__arrows">';
        $html .= '<button class="splide__arrow splide__arrow--prev" type="button" aria-label="Previous slide"></button>';
        if ('' != $url) {
            $target = '' != $linkTarget ? "_blank" : null;
            $relation = '' != $linkTarget ? "noopener" : null;
            $html .= '<a href="' . $url . '" class="report-slider__link" target="' . $target . '" rel="' . $relation . '">Erhalte weitere Insights</a>';
        }
        $html .= '<button class="splide__arrow splide__arrow--next" type="button" aria-label="Next slide"></button>';
        $html .= '</div>';
        $html .= '</div>';
    endif;

    return $html;
}

function get_report_item($report_lists)
{
    $html = '';
    foreach ($report_lists as $report) :
        $id = $report->ID;

        clearstatcache();

        $detail = get_the_terms($id, 'detail');
        $degree = get_the_terms($id, 'degree');

        $html .= '<div class="report-slider__item splide__slide">';
        $html .= '<div class="report-slider__info">';
        $html .= '<h4 class="report-slider__name">' . get_post_meta($id, 'report_name', true) . '</h4>';
        if (!empty($degree)) :
            $html .= '<h3 class="report-slider__degree headline headline--align-xs-left headline--style-four headline--color-seven">' . $degree[0]->name . '</h3>';
        else :
            $html .= '<h3 class="report-slider__degree headline headline--align-xs-left headline--style-four headline--color-seven">' . $report->post_title . '</h3>';
        endif;
        if (!empty($detail)) :
            $html .= '<span class="report-slider__detail">' . $detail[0]->name . '</span>';
        endif;
        $html .= '<p class="text text--align-xs-left text--color-eight text--style-two">' . $report->post_excerpt . '</p>';
        $html .= '<a href="' . get_the_permalink($id) . '" class="report-slider__read-more button--cta button--style-two button--width-xs-inline button--color-three button--align-xs-left"><span class="button--text">Erfahrungsbericht lesen</span></a>';
        $html .= '</div>';
        $html .= '</div>';

    endforeach;

    return $html;
}
