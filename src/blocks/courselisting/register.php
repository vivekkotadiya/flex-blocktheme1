<?php

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 *
 * @since 0.1.0
 */

register_block_type(
    GbBlocks_URL . 'build/blocks/courselisting',
    [
        'render_callback' => 'render_courselisting',
    ]
);


function render_courselisting($attrs)
{
    $attrs      = wp_parse_args(
        $attrs,
        [
            'url'            => "",
            'linkTarget'     => "",
            'degree'         => "",
        ]
    );
    $degree = $attrs['degree'];

    $args = array(
        'post_type' => 'page',
        'posts_per_page' => -1,
        'meta_query' => array(
            array(
                'key' => '_wp_page_template',
                'value' => 'course'
            )
        )
    );

    if ('' !== $degree) {
        $args['meta_query'] = array(
            "relation" => 'AND',
            array(
                'key'     => 'course_degree',
                'value'   => $degree,
                'compare' => '='
            )
        );
    }

    $courses = get_posts($args);
    $url = $attrs['url'];
    $linkTarget = $attrs['linkTarget'];

    $html = '';

    $anchor = ($attrs['anchor'] != '') ? ' id="' . $attrs['anchor'] . '" ' : '';

    $html .= '<div ' . $anchor . ' class="listing-course">';

    $html .= '<div class="row-wrapper row-wrapper--ct-wd">';
    $html .= '<div class="row row--col-ht row--xs-left row--gap-2">';

    if (isset($courses)) {
        foreach ($courses as $key => $course) {

            $degDesc = '';

            if ('' != get_post_meta($course->ID, 'course_degree', true)) {
                if ('bachelor' == get_post_meta($course->ID, 'course_degree', true)) {
                    $degDesc = ' of Science - B.Sc.';
                } elseif ('master' == get_post_meta($course->ID, 'course_degree', true)) {
                    $degDesc = ' of Science - M.Sc.';
                }
            }

            $html .= '<div class="listing-course__item col col--xs-12 col--md-6 col--xl-4 col--pd-0">';
            $html .= '<div class="col__content">';

            $html .= '<span class="listing-course__degree text text--align-xs-left text--style-two text--color-seven">' . ucfirst(get_post_meta($course->ID, 'course_degree', true)) . $degDesc .  '</span>';
            $html .= '<span class="listing-course__headline headline headline--align-xs-left headline--style-four headline--color-seven">' . get_post_meta($course->ID, 'course_preview_title', true) . '</span>';

            if ('' != get_post_meta($course->ID, 'course_preview_subtitle', true)) :
                $html .= '<span class="listing-course__subheadline text text--align-xs-left text--style-two text--color-three">' . get_post_meta($course->ID, 'course_preview_subtitle', true) . '</span>';
            endif;

            $html .= '<div class="listing-course__details">';

            if ('' != get_post_meta($course->ID, 'course_start', true) || '' != get_post_meta($course->ID, 'course_duration', true)) :
                $html .= '<span class="listing-course__duration text text--align-xs-left text--style-two text--color-seven">';
                $html .= '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><g id="Icon_ionic-ios-timer" data-name="Icon ionic-ios-timer" transform="translate(-3.938 -3.938)"><path id="Path_19" data-name="Path 19" d="M18.941,33.938A15,15,0,0,1,8.529,8.137,1.2,1.2,0,1,1,10.2,9.87a12.592,12.592,0,1,0,9.94-3.465v4.7a1.208,1.208,0,0,1-2.416,0V5.145a1.207,1.207,0,0,1,1.208-1.208,15,15,0,0,1,.007,30Z" fill="#607886"/><path id="Path_20" data-name="Path 20" d="M12.445,11.393l7.479,5.374a2.263,2.263,0,0,1-2.631,3.683,2.185,2.185,0,0,1-.526-.526l-5.374-7.479a.754.754,0,0,1,1.052-1.052Z" transform="translate(0.483 0.48)" fill="#607886"/></g></svg>';
                $html .= get_post_meta($course->ID, 'course_duration', true);
                if ('' != get_post_meta($course->ID, 'course_start', true)) {
                    $html .= ', ' . get_post_meta($course->ID, 'course_start', true);
                }
                $html .= '</span>';
            endif;
            if ('' != get_post_meta($course->ID, 'course_lang', true)) :
                $html .= '<span class="listing-course__lang text text--align-xs-left text--style-two text--color-seven">';
                $html .= '<svg xmlns="http://www.w3.org/2000/svg" width="26.442" height="30.849" viewBox="0 0 26.442 30.849"><path id="Icon_metro-language" data-name="Icon metro-language" d="M16.028,20.761q-.017.052-.215-.009t-.542-.2l-.344-.155a10.314,10.314,0,0,1-1.5-.844q-.121-.086-.706-.542t-.654-.491a29.327,29.327,0,0,1-2.307,3.116,12.8,12.8,0,0,1-1.808,1.894,1.364,1.364,0,0,1-.336.069.663.663,0,0,1-.318,0q.1-.069,1.412-1.584.362-.413,1.472-1.98a24.068,24.068,0,0,0,1.351-2.031q.293-.516.878-1.7a13.418,13.418,0,0,0,.62-1.334,14.146,14.146,0,0,0-1.894.568q-.138.034-.473.129t-.594.164a2.949,2.949,0,0,0-.293.086.293.293,0,0,0-.034.181.382.382,0,0,1-.017.164q-.086.172-.534.258a1.388,1.388,0,0,1-.809,0,.726.726,0,0,1-.482-.362.876.876,0,0,1-.086-.4,3.327,3.327,0,0,1,.422-.086,5.14,5.14,0,0,0,.508-.1q1-.275,1.808-.551,1.721-.6,1.756-.6a3.819,3.819,0,0,0,.74-.336,7.787,7.787,0,0,1,.757-.37q.155-.052.37-.138t.25-.095a.231.231,0,0,1,.1.009,1.959,1.959,0,0,1-.017.568,3.665,3.665,0,0,1-.215.465q-.215.43-.456.921t-.293.577a25.819,25.819,0,0,1-1.326,2.255l1.1.482q.207.1,1.282.551l1.162.482q.069.017.181.439a1.3,1.3,0,0,1,.077.525ZM12.5,12.395a.7.7,0,0,1-.069.482,1.56,1.56,0,0,1-.861.654,2.764,2.764,0,0,1-1.033.207,1.425,1.425,0,0,1-.844-.448,1.3,1.3,0,0,1-.31-.706l.017-.052a.737.737,0,0,0,.336.086,1.5,1.5,0,0,0,.456,0q.172-.034,1-.275a4.915,4.915,0,0,1,.947-.241.34.34,0,0,1,.362.293Zm12.016,2.221L25.6,18.523,23.207,17.8ZM5.441,28.387l11.947-3.994V6.628L5.441,10.639V28.387ZM26.8,22.93l1.756.534-3.116-11.31-1.721-.534L20,20.847l1.756.534.775-1.894,3.632,1.119ZM18.146,6.369,28.01,9.537V3ZM23.5,29.144l2.72.224-.93,2.754L24.6,30.986a12.761,12.761,0,0,1-4.751,1.859,8.25,8.25,0,0,1-1.567.207H16.837a11.635,11.635,0,0,1-3.434-.671,11.431,11.431,0,0,1-3.159-1.463.359.359,0,0,1-.138-.275.333.333,0,0,1,.086-.232.288.288,0,0,1,.224-.095.969.969,0,0,1,.31.129l.525.284q.284.155.353.189a15.252,15.252,0,0,0,2.746,1.059,10.031,10.031,0,0,0,2.711.422,14.69,14.69,0,0,0,2.875-.25,14.188,14.188,0,0,0,2.7-.869q.258-.121.525-.267t.585-.327q.318-.181.491-.284ZM31.211,10.57V29.144L17.887,24.91q-.241.1-6.455,2.195T5.1,29.2a.311.311,0,0,1-.31-.224.132.132,0,0,0-.017-.052V10.363a.768.768,0,0,1,.069-.172A.774.774,0,0,1,5.183,10q1.825-.6,2.565-.861V2.531l9.606,3.408q.034,0,2.763-.947t5.44-1.868q2.711-.921,2.78-.921.344,0,.344.362v7.2Z" transform="translate(-4.77 -2.203)" fill="#607886"/></svg>';
                $html .= get_post_meta($course->ID, 'course_lang', true);
                $html .= '</span>';
            endif;
            if ('' != get_post_meta($course->ID, 'course_location', true)) :
                $html .= '<span class="listing-course__location text text--align-xs-left text--style-two text--color-seven">';
                $html .= '<svg xmlns="http://www.w3.org/2000/svg" width="19.28" height="30.849" viewBox="0 0 19.28 30.849"><path id="Icon_metro-location" data-name="Icon metro-location" d="M17.995,1.928a9.64,9.64,0,0,0-9.64,9.64c0,9.64,9.64,21.208,9.64,21.208s9.64-11.568,9.64-21.208a9.64,9.64,0,0,0-9.64-9.64Zm0,15.545a5.9,5.9,0,1,1,5.9-5.9A5.9,5.9,0,0,1,17.995,17.473Zm-3.736-5.9A3.736,3.736,0,1,1,17.995,15.3,3.736,3.736,0,0,1,14.259,11.568Z" transform="translate(-8.355 -1.928)" fill="#607886"/></svg>';
                $html .= get_post_meta($course->ID, 'course_location', true);
                $html .= '</span>';
            endif;
            if ('' != get_post_meta($course->ID, 'course_aboard', true)) :
                $html .= '<span class="listing-course__aboard text text--align-xs-left text--style-two text--color-seven">';
                $html .= '<svg xmlns="http://www.w3.org/2000/svg" width="24.422" height="25.707" viewBox="0 0 24.422 25.707"><path id="Icon_metro-local-airport" data-name="Icon metro-local-airport" d="M29.563,23.136V20.566L19.28,14.139V7.069a1.928,1.928,0,0,0-3.856,0v7.069L5.141,20.566v2.571l10.283-3.213v7.069l-2.571,1.928v1.928l4.5-1.285,4.5,1.285V28.921L19.28,26.992V19.923Z" transform="translate(-5.141 -5.141)" fill="#607886"/></svg>';
                $html .= get_post_meta($course->ID, 'course_aboard', true);
                $html .= '</span>';
            endif;

            $html .= '</div>';

            $html .= "<div class='listing-course__buttons'>";

            $html .= '<a href="' . get_the_permalink($course->ID) . '" class="button--cta button--style-two button--width-xs-inline button--color-six button--align-xs-left"><span class="button--text">mehr</span></a>';
            $html .= '<a href="https://www.eis-scmt.com/home/" class="button--cta button--style-two button--width-xs-inline button--color-three button--align-xs-left"><span class="button--text">bewerben</span></a>';

            $html .= '</div>';
            $html .= '</div>';
            $html .= '</div>';
        }
    }

    if ('' != $url) {

        $target = '' != $linkTarget ? "_blank" : null;
        $relation = '' != $linkTarget ? "noopener" : null;
        $html .= '<a href="' . $url . '" class="listing-course__item listing-course__item--last col col--xs-12 col--md-6 col--xl-4 col--pd-0" target="' . $target . '" rel="' . $relation . '">';
    } else {

        $html .= '<div class="listing-course__item listing-course__item--last col col--xs-12 col--md-6 col--xl-4 col--pd-0">';
    }

    //$html .= '<div class="listing-course__item listing-course__item--last col col--xs-12 col--md-6 col--xl-4 col--pd-0">';
    $html .= '<div class="col__content">';

    $html .= '<span class="headline headline--align-xs-left headline--style-four headline--color-seven">' . __("Nichts Passendes dabei?", "smt-theme") . '</span>';
    $html .= '<span class="text text--align-xs-left text--color-seven text--style-two">' . __("Spreche uns auf weitere Vertiefungsmöglichkeiten im Rahmen eines Bachelor of Arts an! Nimm jetzt Kontakt mit unserem Talent-Management-Team auf, wir helfen dir gerne weiter.", "smt-theme") . '</span>';
    $html .= '<span class=" listing-course__icon"></span>';

    $html .= '</div>';

    if ('' != $url) {
        $html .= '</a>';
    } else {
        $html .= '</div>';
    }

    $html .= '</div>';
    $html .= '</div>';

    $html .= '</div>';

    return $html;
}
