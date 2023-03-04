<?php

// Partner Custom Post

function partner_custom_post_type()
{

    $labels = array(
        'name' => _x('Partners', 'Post Type General Name', 'smt-theme'),
        'singular_name' => _x('Partners', 'Post Type Singular Name', 'smt-theme'),
        'menu_name' => __('Partners', 'smt-theme'),
        'parent_item_colon' => __('Parent Partner', 'smt-theme'),
        'all_items' => __('All Partners', 'smt-theme'),
        'view_item' => __('View Partner', 'smt-theme'),
        'add_new_item' => __('Add New Partner', 'smt-theme'),
        'add_new' => __('Add New', 'smt-theme'),
        'edit_item' => __('Edit Partner', 'smt-theme'),
        'update_item' => __('Update Partner', 'smt-theme'),
        'search_items' => __('Search Partner', 'smt-theme'),
        'not_found' => __('Not Found', 'smt-theme'),
        'not_found_in_trash' => __('Not found in Trash', 'smt-theme'),
    );

    $args = array(
        'label'                 => __('Partner', 'smt-theme'),
        'description'           => __('Partner', 'smt-theme'),
        'labels'                => $labels,
        'supports'              => array('title', 'thumbnail'),
        'taxonomies'            => array('genres'),
        'hierarchical'          => false,
        'public'                => true,
        'menu_icon'             => 'dashicons-open-folder',
        'show_ui'               => true,
        'show_in_menu'          => true,
        'show_in_nav_menus'     => true,
        'show_in_admin_bar'     => true,
        'menu_position'         => 5,
        'can_export'            => true,
        'has_archive'           => true,
        'exclude_from_search'   => false,
        'publicly_queryable'    => true,
        'capability_type'       => 'post',
        'show_in_rest'          => true,
        'rewrite'               => array(
            'slug'          => 'partner',
            'with_front'    => false
        ),
    );
    register_post_type('partner', $args);
}
add_action('init', 'partner_custom_post_type', 0);

// Partner Custom Taxonomy
add_action('init', 'partner_taxonomy', 0);
function partner_taxonomy()
{
    $labels = array(
        'name' => _x('Categories', 'smt-theme'),
        'singular_name' => _x('Category', 'smt-theme'),
        'search_items' => __('Category Search', 'smt-theme'),
        'all_items' => __('All Categories', 'smt-theme'),
        'parent_item' => __('Parent Category', 'smt-theme'),
        'parent_item_colon' => __('Parent Category:', 'smt-theme'),
        'edit_item' => __('Edit Category', 'smt-theme'),
        'update_item' => __('Update Category', 'smt-theme'),
        'add_new_item' => __('Add New Category', 'smt-theme'),
        'new_item_name' => __('New Category Name', 'smt-theme'),
        'menu_name' => __('Categories', 'smt-theme'),
    );

    register_taxonomy('partner-category', array('partner'), array(
        'hierarchical' => true,
        'labels' => $labels,
        'show_ui' => true,
        'show_in_rest' => true,
        'show_admin_column' => true,
        'query_var' => true,
        'rewrite' => array('slug' => 'partner-category', 'with_front' => false),
    ));
}

// Partner custom fields
function add_custom_meta_partner()
{

    add_meta_box(
        'partner-meta',
        'Partner Information',
        'custom_partner_meta',
        'partner',
    );
}
add_action('add_meta_boxes', 'add_custom_meta_partner');

function custom_partner_meta()
{

    wp_nonce_field(plugin_basename(__FILE__), 'wp_partner_meta_nonce');

    $html = '<style>table{ width: 100%; }table tr th{width: 10%;text-align: left;}table tr td{ width: 90%; } table tr td input{ width: 100%; }</style>';
    $html .= '<table>';
    $html .= '<tbody>';
    $html .= '<tr>';
    $html .= '<th>Link</th>';
    $html .= '<td><input type="url" name="partner_link" value="' . get_post_meta(get_the_ID(), 'partner_link', true) . '" /></td>';
    $html .= '</tr>';
    $html .= '<tr>';
    $html .= '<th>Alt text</th>';
    $html .= '<td><input type="text" name="partner_alt" value="' . get_post_meta(get_the_ID(), 'partner_alt', true) . '" /></td>';
    $html .= '</tr>';
    $html .= '</tbody>';
    $html .= '<table>';
    echo $html;
}

// Save Partner Information
add_action('save_post', function ($post_id) {
    // save Partner Link
    if (isset($_POST['partner_link'])) {
        update_post_meta($post_id, 'partner_link', $_POST['partner_link']);
    }
    // save Partner Alt
    if (isset($_POST['partner_alt'])) {
        update_post_meta($post_id, 'partner_alt', $_POST['partner_alt']);
    }
});
