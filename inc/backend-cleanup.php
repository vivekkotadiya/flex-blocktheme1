<?php

/**
 * Removes some menus by page.
 */
function remove_menus()
{
    remove_menu_page('edit.php');                   //Posts
    remove_menu_page('edit-comments.php');          //Comments

}
add_action('admin_menu', 'remove_menus');

function theme_custom_menu_order($menu_ord)
{
    return array(
        'index.php', // Dashboard
        'separator1', // First separator
        'edit.php?post_type=page',
        'edit.php?post_type=blog', // Posts
        'edit.php?post_type=events', // Events
        'edit.php?post_type=reports', // Reports
        'edit.php?post_type=jobs', // Jobs
        'edit.php?post_type=team', // Team
        'edit.php?post_type=partner', // Partner
        'edit.php?post_type=courses', // Course
        'upload.php', // media
        'separator2', // Second separator
        'themes.php', // Appearance
        'plugins.php', // Plugins
        'users.php', // Users
        'tools.php', // Tools
        'options-general.php', // Settings
        'separator-last', // Last separator
    );
}

add_filter('custom_menu_order', 'theme_custom_menu_order', 10, 1);
add_filter('menu_order', 'theme_custom_menu_order', 10, 1);

/**
 * remove theme support
 */
if (!function_exists('SMT_theme_setup')) :

    function SMT_theme_setup()
    {
        remove_theme_support('automatic-feed-links');
        remove_theme_support('editor-styles');
        remove_theme_support('editor-script');
        remove_theme_support('wp-block-styles');
        remove_theme_support('core-block-patterns');
        add_theme_support('menus');
        add_theme_support('post-thumbnails');

        // register new sizes images
        add_image_size('xs', 480);
        add_image_size('md', 1024);
        add_image_size('xl', 1920);
    }

endif;
add_action('after_setup_theme', 'SMT_theme_setup');

/**
 * Add custom image size
 */
add_filter('image_size_names_choose', 'child_custom_sizes');

function child_custom_sizes($sizes)
{
    return array_merge($sizes, array(
        'xl' =>             __('Large'),
        'md' =>             __('Medium'),
        'xs' =>             __('Small'),
    ));
}

/**
 * Allowed custom blocks 
 * Removed default core blocks
 */
add_filter('allowed_block_types_all', 'theme_allowed_block_types');
function theme_allowed_block_types($allowed_blocks)
{
    return array(
        'smt-theme/header',
        'smt-theme/footer',
        'smt-theme/footercolumn',
        'smt-theme/footerlogo',
        'smt-theme/navigation',
        'smt-theme/section',
        'smt-theme/sectionpattern',
        'smt-theme/row',
        'smt-theme/column',
        'smt-theme/headline',
        'smt-theme/headlinespecial',
        'smt-theme/paragraph',
        'smt-theme/button',
        'smt-theme/list',
        'smt-theme/listitem',
        'smt-theme/listarrow',
        'smt-theme/listlink',
        'smt-theme/linkitem',
        'smt-theme/listicon',
        'smt-theme/listiconitem',
        'smt-theme/image',
        'smt-theme/divider',
        'smt-theme/icon',
        'smt-theme/accordion',
        'smt-theme/accordionitem',
        'smt-theme/tabs',
        'smt-theme/tabcontent',
        'smt-theme/bloglisting',
        'smt-theme/teamlisting',
        'smt-theme/joblisting',
        'smt-theme/eventlisting',
        'smt-theme/courselisting',
        'smt-theme/partnerlisting',
        'smt-theme/reportlisting',
        'smt-theme/blogsection',
        'smt-theme/blogcolumn',
        'smt-theme/blogslider',
        'smt-theme/reportslider',
        'smt-theme/reportslides',
        'smt-theme/form',
        'smt-theme/youtubelightbox',
        'smt-theme/youtubesmall',
        'smt-theme/youtubebig',
        'smt-theme/contactperson',
        'smt-theme/blogpreview',
        'smt-theme/partnerpreview',
        'smt-theme/coursepreview',
        'smt-theme/box',
        'smt-theme/boxbutton',
        'smt-theme/teasermain',
        'smt-theme/cardsstudyjobs',
        'smt-theme/studyjobitem',
        'smt-theme/cardteaser',
        'smt-theme/cardicon',
        'smt-theme/counter',
        'smt-theme/timeline',
        'smt-theme/timelineitem',
        'smt-theme/testimonialslider',
        'smt-theme/testimonialslide',
        'smt-theme/dozentenslider',
        'smt-theme/dozentenslide',
        'smt-theme/cardsslider',
        'smt-theme/cardslide',
        'smt-theme/teasersmall',
        'smt-theme/teaserstudy',
        'smt-theme/blogdetail',
        'smt-theme/eventdetail',
        'smt-theme/jobdetail',
        'smt-theme/blogoverview',
    );
}

if (file_exists(get_template_directory() . '/inc/image-handling.php')) {

    /**
     * feed url and other stuff from wordpress Head
     */

    require get_template_directory() . '/inc/image-handling.php';
}

if (file_exists(get_template_directory() . '/inc/smtp-settings.php')) {

    /**
     * feed url and other stuff from wordpress Head
     */

    require get_template_directory() . '/inc/smtp-settings.php';
}
if (file_exists(get_template_directory() . '/inc/popup-settings.php')) {

    /**
     * feed url and other stuff from wordpress Head
     */

    require get_template_directory() . '/inc/popup-settings.php';
}
if (file_exists(get_template_directory() . '/inc/custom-post-types/blog-post.php')) {

    /**
     * feed url and other stuff from wordpress Head
     */

    require get_template_directory() . '/inc/custom-post-types/blog-post.php';
}
if (file_exists(get_template_directory() . '/inc/custom-post-types/event-post.php')) {

    /**
     * feed url and other stuff from wordpress Head
     */

    require get_template_directory() . '/inc/custom-post-types/event-post.php';
}
if (file_exists(get_template_directory() . '/inc/custom-post-types/report-post.php')) {

    /**
     * feed url and other stuff from wordpress Head
     */

    require get_template_directory() . '/inc/custom-post-types/report-post.php';
}
if (file_exists(get_template_directory() . '/inc/custom-post-types/job-post.php')) {

    /**
     * feed url and other stuff from wordpress Head
     */

    require get_template_directory() . '/inc/custom-post-types/job-post.php';
}
if (file_exists(get_template_directory() . '/inc/custom-post-types/team-post.php')) {

    /**
     * feed url and other stuff from wordpress Head
     */

    require get_template_directory() . '/inc/custom-post-types/team-post.php';
}
if (file_exists(get_template_directory() . '/inc/custom-post-types/partner-post.php')) {

    /**
     * feed url and other stuff from wordpress Head
     */

    require get_template_directory() . '/inc/custom-post-types/partner-post.php';
}
if (file_exists(get_template_directory() . '/inc/WP-HTML-Compression.php')) {

    /**
     * feed url and other stuff from wordpress Head
     */

    require get_template_directory() . '/inc/WP-HTML-Compression.php';
}
