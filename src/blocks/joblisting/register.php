<?php

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 *
 * @since 0.1.0
 */

register_block_type(
    GbBlocks_URL . 'build/blocks/joblisting',
    [
        'render_callback' => 'render_joblisting',
    ]
);


function render_joblisting($attrs)
{
    $jobs = array();

    $query_args = array(
        'post_type'         => 'jobs',
        'posts_per_page'    => -1,
        'post_status'       => 'publish',
        'orderby'           => 'date',
    );

    $jobs = get_posts($query_args);
    $html = '';

    $anchor = ($attrs['anchor'] != '') ? ' id="' . $attrs['anchor'] . '" ' : '';

    if (!empty($jobs)) :

        $html .= '<div ' . $anchor . ' class="listing-job">';
        $html .= '<div class="row-wrapper row-wrapper--ct-wd">';
        $html .= '<div class="row row--col-ht row--xs-center row--gap-2">';

        $html .= get_job_list($jobs);

        $html .= '</div>';
        $html .= '</div>';
        $html .= '</div>';

    endif;

    return $html;
}

function get_job_list($jobs)
{
    $html = '';
    $post_taxonomy = '';
    foreach ($jobs as $job) :
        $id = $job->ID;

        $attachment_id = get_post_thumbnail_id($id);
        $xs = wp_get_attachment_image_src($attachment_id, 'xs');
        $default = get_the_post_thumbnail_url($id);
        $image_alt = get_post_meta($attachment_id, '_wp_attachment_image_alt', TRUE);

        clearstatcache();

        $terms = get_the_terms($id, 'location');

        if (!empty($terms)) {
            $termsHtml = '';
            if (count($terms) > 1) {
                $termsHtml .= '<span class="listing-job__meta-tax">Ort: ';
                for ($i = 0; $i < count($terms); $i++) {
                    $termsHtml .= $terms[$i]->name;
                    if ($i != count($terms) - 1) {
                        $termsHtml .= ' | ';
                    }
                }
                $termsHtml .= '</span>';
                $post_taxonomy = $termsHtml;
            } else {
                $post_taxonomy = '<span class="listing-job__meta-tax">Ort: ' . $terms[0]->name . '</span>';
            }
        }

        $html .= '<div class="listing-job__item col col--xs-12 col--md-6 col--xl-4 col--pd-0 col--bg-one">';
        $html .= '<div class="col__content">';

        if ($default != '') :

            $html .= '<div class="listing-job__image">';
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

        $html .= '<div class="listing-job__detail">';
        $html .= '<h3 class="headline headline--align-xs-left headline--style-four headline--color-seven">' . $job->post_title . '</h3>';
        $html .= '<div class="listing-job__meta">';
        if ('' != get_post_meta($id, 'job_id', true)) :
            $html .= '<span class="listing-job__meta-item">JOB-ID: ' . get_post_meta($id, 'job_id', true) . '</span>';
        endif;
        $html .= $post_taxonomy;
        $html .= '</div>';
        $html .= '<p class="text text--style-two text--align-xs-left text--color-eight">' . $job->post_excerpt . '</p>';
        $html .= '<a href="' . get_the_permalink($id) . '" class="button--cta button--style-two button--width-xs-inline button--color-five button--align-xs-left"><span class="button--text">mehr erfahren</span></a>';

        $html .= '</div>';
        $html .= '</div>';
        $html .= '</div>';

    endforeach;

    return $html;
}
