<?php

// Team Custom Post

function team_custom_post_type()
{

    $labels = array(
        'name' => _x('Teams', 'Post Type General Name', 'smt-theme'),
        'singular_name' => _x('Teams', 'Post Type Singular Name', 'smt-theme'),
        'menu_name' => __('Teams', 'smt-theme'),
        'parent_item_colon' => __('Parent Team', 'smt-theme'),
        'all_items' => __('All Teams', 'smt-theme'),
        'view_item' => __('View Team', 'smt-theme'),
        'add_new_item' => __('Add New Team', 'smt-theme'),
        'add_new' => __('Add New', 'smt-theme'),
        'edit_item' => __('Edit Team', 'smt-theme'),
        'update_item' => __('Update Team', 'smt-theme'),
        'search_items' => __('Search Team', 'smt-theme'),
        'not_found' => __('Not Found', 'smt-theme'),
        'not_found_in_trash' => __('Not found in Trash', 'smt-theme'),
    );

    $args = array(
        'label'                 => __('Team', 'smt-theme'),
        'description'           => __('Team', 'smt-theme'),
        'labels'                => $labels,
        'supports'              => array('title', 'thumbnail'),
        'taxonomies'            => array('genres'),
        'hierarchical'          => false,
        'public'                => true,
        'menu_icon'             => 'dashicons-groups',
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
            'slug'          => 'team',
            'with_front'    => false
        ),
    );
    register_post_type('team', $args);
}
add_action('init', 'team_custom_post_type', 0);

// Blog Custom Taxonomy
add_action('init', 'team_department_taxonomy', 0);
function team_department_taxonomy()
{
    $labels = array(
        'name' => _x('Departments', 'smt-theme'),
        'singular_name' => _x('Department', 'smt-theme'),
        'search_items' => __('Department Search', 'smt-theme'),
        'all_items' => __('All Departments', 'smt-theme'),
        'parent_item' => __('Parent Department', 'smt-theme'),
        'parent_item_colon' => __('Parent Department:', 'smt-theme'),
        'edit_item' => __('Edit Department', 'smt-theme'),
        'update_item' => __('Update Department', 'smt-theme'),
        'add_new_item' => __('Add New Department', 'smt-theme'),
        'new_item_name' => __('New Department Name', 'smt-theme'),
        'menu_name' => __('Departments', 'smt-theme'),
    );

    register_taxonomy('department', array('team'), array(
        'hierarchical' => true,
        'labels' => $labels,
        'show_ui' => true,
        'show_in_rest' => true,
        'show_admin_column' => true,
        'query_var' => true,
        'rewrite' => array('slug' => 'department', 'with_front' => false),
    ));
}

// Team custom fields
function add_custom_meta_team()
{

    add_meta_box(
        'team-meta',
        'Team Information',
        'custom_team_meta',
        'team',
    );
}
add_action('add_meta_boxes', 'add_custom_meta_team');

function custom_team_meta()
{

    wp_nonce_field(plugin_basename(__FILE__), 'wp_team_meta_nonce');

    $html = '<style>table{ width: 100%; }table tr th{width: 10%;text-align: left;}table tr td{ width: 90%; } table tr td input{ width: 100%; }</style>';
    $html .= '<table>';
    $html .= '<tbody>';
    $html .= '<tr>';
    $html .= '<th>Phone</th>';
    $html .= '<td><input type="text" name="phone" value="' . get_post_meta(get_the_ID(), 'phone', true) . '" /></td>';
    $html .= '</tr>';
    $html .= '<tr>';
    $html .= '<th>Email</th>';
    $html .= '<td><input type="text" name="email" value="' . get_post_meta(get_the_ID(), 'email', true) . '" /></td>';
    $html .= '</tr>';
    $html .= '<tr>';
    $html .= '<th>Image Alt Text</th>';
    $html .= '<td><input type="text" name="team_alt" value="' . get_post_meta(get_the_ID(), 'team_alt', true) . '" /></td>';
    $html .= '</tr>';
    $html .= '</tbody>';
    $html .= '<table>';


    echo $html;
}
// Save Event Information
add_action('save_post', function ($post_id) {
    // save phone
    if (isset($_POST['phone'])) {
        update_post_meta($post_id, 'phone', $_POST['phone']);
    }

    // save email
    if (isset($_POST['email'])) {
        update_post_meta($post_id, 'email', $_POST['email']);
    }

    // save alt of image
    if (isset($_POST['team_alt'])) {
        update_post_meta($post_id, 'team_alt', $_POST['team_alt']);
    }
});


add_action('init', 'teamrestapisetup');

function teamrestapisetup()
{
    register_rest_field('team', 'metadata', array(
        'get_callback' => function ($data) {
            return get_post_meta($data['id'], '', '');
        },
    ));
}
