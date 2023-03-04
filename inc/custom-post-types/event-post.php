<?php

// Event Custom Post

function events_custom_post_type()
{

    $labels = array(
        'name' => _x('Events', 'Post Type General Name', 'smt-theme'),
        'singular_name' => _x('Events', 'Post Type Singular Name', 'smt-theme'),
        'menu_name' => __('Events', 'smt-theme'),
        'parent_item_colon' => __('Parent Event', 'smt-theme'),
        'all_items' => __('All Events', 'smt-theme'),
        'view_item' => __('View Event', 'smt-theme'),
        'add_new_item' => __('Add New Event', 'smt-theme'),
        'add_new' => __('Add New', 'smt-theme'),
        'edit_item' => __('Edit Event', 'smt-theme'),
        'update_item' => __('Update Event', 'smt-theme'),
        'search_items' => __('Search Event', 'smt-theme'),
        'not_found' => __('Not Found', 'smt-theme'),
        'not_found_in_trash' => __('Not found in Trash', 'smt-theme'),
    );

    $args = array(
        'label'                 => __('Event', 'smt-theme'),
        'description'           => __('Event', 'smt-theme'),
        'labels'                => $labels,
        'supports'              => array('title', 'editor', 'excerpt', 'thumbnail', 'custom-fields'),
        'taxonomies'            => array('genres'),
        'hierarchical'          => false,
        'public'                => true,
        'menu_icon'             => 'dashicons-calendar',
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
            'slug'          => 'events',
            'with_front'    => false
        ),
    );
    register_post_type('events', $args);
}
add_action('init', 'events_custom_post_type', 0);

// Blog Custom Taxonomy
add_action('init', 'events_taxonomy', 0);
function events_taxonomy()
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

    register_taxonomy('event-category', array('events'), array(
        'hierarchical' => true,
        'labels' => $labels,
        'show_ui' => true,
        'show_in_rest' => true,
        'show_admin_column' => true,
        'query_var' => true,
        'rewrite' => array('slug' => 'event-category', 'with_front' => false),
    ));
}
