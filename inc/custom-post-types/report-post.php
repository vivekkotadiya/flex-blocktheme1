<?php

// Report Custom Post

function reports_custom_post_type()
{

    $labels = array(
        'name' => _x('Reports', 'Post Type General Name', 'smt-theme'),
        'singular_name' => _x('Reports', 'Post Type Singular Name', 'smt-theme'),
        'menu_name' => __('Reports', 'smt-theme'),
        'parent_item_colon' => __('Parent Report', 'smt-theme'),
        'all_items' => __('All Reports', 'smt-theme'),
        'view_item' => __('View Report', 'smt-theme'),
        'add_new_item' => __('Add New Report', 'smt-theme'),
        'add_new' => __('Add New', 'smt-theme'),
        'edit_item' => __('Edit Report', 'smt-theme'),
        'update_item' => __('Update Report', 'smt-theme'),
        'search_items' => __('Search Report', 'smt-theme'),
        'not_found' => __('Not Found', 'smt-theme'),
        'not_found_in_trash' => __('Not found in Trash', 'smt-theme'),
    );

    $args = array(
        'label'                 => __('Report', 'smt-theme'),
        'description'           => __('Report', 'smt-theme'),
        'labels'                => $labels,
        'supports'              => array('title', 'editor', 'excerpt', 'custom-fields', 'thumbnail'),
        'taxonomies'            => array('genres'),
        'hierarchical'          => false,
        'public'                => true,
        'menu_icon'             => 'dashicons-media-document',
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
            'slug'          => 'reports',
            'with_front'    => false
        ),
    );
    register_post_type('reports', $args);
}
add_action('init', 'reports_custom_post_type', 0);

// Report Degree Custom Taxonomy
add_action('init', 'reports_degree_taxonomy', 0);
function reports_degree_taxonomy()
{
    $labels = array(
        'name' => _x('Degrees', 'smt-theme'),
        'singular_name' => _x('Degree', 'smt-theme'),
        'search_items' => __('Degree Search', 'smt-theme'),
        'all_items' => __('All Degrees', 'smt-theme'),
        'parent_item' => __('Parent Degree', 'smt-theme'),
        'parent_item_colon' => __('Parent Degree:', 'smt-theme'),
        'edit_item' => __('Edit Degree', 'smt-theme'),
        'update_item' => __('Update Degree', 'smt-theme'),
        'add_new_item' => __('Add New Degree', 'smt-theme'),
        'new_item_name' => __('New Degree Name', 'smt-theme'),
        'menu_name' => __('Degrees', 'smt-theme'),
    );

    register_taxonomy('degree', array('reports'), array(
        'hierarchical' => true,
        'labels' => $labels,
        'show_ui' => true,
        'show_in_rest' => true,
        'show_admin_column' => true,
        'query_var' => true,
        'rewrite' => array('slug' => 'degree', 'with_front' => false),
    ));
}

// Report Detail Custom Taxonomy
add_action('init', 'reports_detail_taxonomy', 0);
function reports_detail_taxonomy()
{
    $labels = array(
        'name' => _x('Details', 'smt-theme'),
        'singular_name' => _x('Detail', 'smt-theme'),
        'search_items' => __('Detail Search', 'smt-theme'),
        'all_items' => __('All Details', 'smt-theme'),
        'parent_item' => __('Parent Detail', 'smt-theme'),
        'parent_item_colon' => __('Parent Detail:', 'smt-theme'),
        'edit_item' => __('Edit Detail', 'smt-theme'),
        'update_item' => __('Update Detail', 'smt-theme'),
        'add_new_item' => __('Add New Detail', 'smt-theme'),
        'new_item_name' => __('New Detail Name', 'smt-theme'),
        'menu_name' => __('Details', 'smt-theme'),
    );

    register_taxonomy('detail', array('reports'), array(
        'hierarchical' => true,
        'labels' => $labels,
        'show_ui' => true,
        'show_in_rest' => true,
        'show_admin_column' => true,
        'query_var' => true,
        'rewrite' => array('slug' => 'detail', 'with_front' => false),
    ));
}
