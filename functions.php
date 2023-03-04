<?php

/**
 * SMT Theme functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @subpackage smt-theme
 * @since SMT Theme 1.0
 */

if (!function_exists('smt_styles')) :

    /**
     * Enqueue styles.
     *
     * @since SMT Theme 1.0
     *
     * @return void
     */
    function smt_styles()
    {
        wp_enqueue_script('wp-link');
    }

endif;

add_action('wp_enqueue_scripts', 'smt_styles');

if (file_exists(get_template_directory() . '/inc/preload-handling.php')) {

    /**
     * feed url and other stuff from wordpress Head
     */

    require get_template_directory() . '/inc/preload-handling.php';
}
if (file_exists(get_template_directory() . '/inc/block-settings.php')) {

    /**
     * feed url and other stuff from wordpress Head
     */

    require get_template_directory() . '/inc/block-settings.php';
}
add_filter('big_image_size_threshold', '__return_false');
add_filter('wp_image_editors', function ($editors) {
    return ['WP_Image_Editor_GD', 'WP_Image_Editor_Imagick'];
});
