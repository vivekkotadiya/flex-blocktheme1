<?php

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 *
 * @since 0.1.0
 */

register_block_type(
    GbBlocks_URL . 'build/blocks/contactperson',
    [
        'render_callback' => 'render_contactperson',
    ]
);


function render_contactperson($attrs)
{
    $attrs      = wp_parse_args(
        $attrs,
        [
            'style'      => '',
            'personId'   => 0,
        ]
    );
    $html = '';
    $member = array();
    $post_taxonomy = '';
    if (0 !== $attrs['personId']) {
        $member = get_posts(array(
            'post_type' => 'team',
            'post__in'  => array($attrs['personId']),
        ));
    } else {
        $html .= '<span>Select Contact Person..</span>';
    }

    if (!empty($member)) {
        foreach ($member as $mem) {
            $id = $mem->ID;

            $attachment_id = get_post_thumbnail_id($id);
            $xs = wp_get_attachment_image_src($attachment_id, 'xs');
            $default = get_the_post_thumbnail_url($id);
            $image_alt =  ('' != get_post_meta($id, 'team_alt', true)) ? get_post_meta($id, 'team_alt', true) : get_post_meta($attachment_id, '_wp_attachment_image_alt', TRUE);
            $terms = get_the_terms($id, 'department');

            if (!empty($terms)) {
                $termsHtml = '';
                if (count($terms) > 1) {
                    for ($i = 0; $i < count($terms); $i++) {
                        $termsHtml .= '<p class="contact-person__department">' . $terms[$i]->name . '</p>';
                    }
                    $post_taxonomy = $termsHtml;
                } else {
                    $post_taxonomy =  '<p class="contact-person__department">' . $terms[0]->name . '</p>';
                }
            }

            $html .= '<div class="contact-person contact-person--style-' . $attrs['style'] . '">';
            $html .= '<div class="contact-person__image">';

            $html .= '<picture>';

            if ($xs) :
                $xswebp = wp_get_attachment_image_src($attachment_id, 'xs_webp');
                if ($xswebp) :
                    $html .=  '<source srcset="' . $xswebp[0] . '" type="image/webp" />';
                endif;

                $html .= '<source srcset="' . $xs[0] . '" />';

            endif;

            $html .= '<img  src ="' . $default . '" alt = "' . $image_alt . '" loading="lazy" />';

            $html .= '</picture>';

            $html .= '</div>';

            $html .= '<div class="contact-person__details">';

            $html .= '<span class="contact-person__name headline headline--align-xs-left headline--style-four headline--color-three">' . $mem->post_title . '</span>';

            $html .=  $post_taxonomy;

            if ('' != get_post_meta($id, 'email', true)) :
                $html .= '<a class="contact-person__email text text--style-one text--align-xs-left text--color-seven" href="mailto:' . get_post_meta($id, 'email', true) . '">' . get_post_meta($id, 'email', true) . '</a>';
            endif;

            if ('' != get_post_meta($id, 'phone', true)) :
                $html .= '<a class="contact-person__phone text text--style-one text--align-xs-left text--color-seven" href="tel:' . preg_replace('/[^\dxX]/', '', get_post_meta($id, 'phone', true)) . '">' . get_post_meta($id, 'phone', true) . '</a>';
            endif;

            $html .= '</div>';
            $html .= '</div>';
        }
    }


    return $html;
}
