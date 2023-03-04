<?php

// Job Custom Post

function jobs_custom_post_type()
{

    $labels = array(
        'name' => _x('Jobs', 'Post Type General Name', 'smt-theme'),
        'singular_name' => _x('Jobs', 'Post Type Singular Name', 'smt-theme'),
        'menu_name' => __('Jobs', 'smt-theme'),
        'parent_item_colon' => __('Parent Job', 'smt-theme'),
        'all_items' => __('All Jobs', 'smt-theme'),
        'view_item' => __('View Job', 'smt-theme'),
        'add_new_item' => __('Add New Job', 'smt-theme'),
        'add_new' => __('Add New', 'smt-theme'),
        'edit_item' => __('Edit Job', 'smt-theme'),
        'update_item' => __('Update Job', 'smt-theme'),
        'search_items' => __('Search Job', 'smt-theme'),
        'not_found' => __('Not Found', 'smt-theme'),
        'not_found_in_trash' => __('Not found in Trash', 'smt-theme'),
    );

    $args = array(
        'label'                 => __('Job', 'smt-theme'),
        'description'           => __('Job', 'smt-theme'),
        'labels'                => $labels,
        'supports'              => array('title', 'editor', 'excerpt', 'thumbnail', 'custom-fields'),
        'taxonomies'            => array('genres'),
        'hierarchical'          => false,
        'public'                => true,
        'menu_icon'             => 'dashicons-id',
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
            'slug'          => 'jobs',
            'with_front'    => false
        ),
    );
    register_post_type('jobs', $args);
}
add_action('init', 'jobs_custom_post_type', 0);

// Job Location Custom Taxonomy
add_action('init', 'jobs_location_taxonomy', 0);
function jobs_location_taxonomy()
{
    $labels = array(
        'name' => _x('Locations', 'smt-theme'),
        'singular_name' => _x('Location', 'smt-theme'),
        'search_items' => __('Location Search', 'smt-theme'),
        'all_items' => __('All Locations', 'smt-theme'),
        'parent_item' => __('Parent Location', 'smt-theme'),
        'parent_item_colon' => __('Parent Location:', 'smt-theme'),
        'edit_item' => __('Edit Location', 'smt-theme'),
        'update_item' => __('Update Location', 'smt-theme'),
        'add_new_item' => __('Add New Location', 'smt-theme'),
        'new_item_name' => __('New Location Name', 'smt-theme'),
        'menu_name' => __('Locations', 'smt-theme'),
    );

    register_taxonomy('location', array('jobs'), array(
        'hierarchical' => true,
        'labels' => $labels,
        'show_ui' => true,
        'show_in_rest' => true,
        'show_admin_column' => true,
        'query_var' => true,
        'rewrite' => array('slug' => 'location', 'with_front' => false),
    ));
}

// Job Contract Custom Taxonomy
add_action('init', 'jobs_contract_taxonomy', 0);
function jobs_contract_taxonomy()
{
    $labels = array(
        'name' => _x('Contracts', 'smt-theme'),
        'singular_name' => _x('Contract', 'smt-theme'),
        'search_items' => __('Contract Search', 'smt-theme'),
        'all_items' => __('All Contracts', 'smt-theme'),
        'parent_item' => __('Parent Contract', 'smt-theme'),
        'parent_item_colon' => __('Parent Contract:', 'smt-theme'),
        'edit_item' => __('Edit Contract', 'smt-theme'),
        'update_item' => __('Update Contract', 'smt-theme'),
        'add_new_item' => __('Add New Contract', 'smt-theme'),
        'new_item_name' => __('New Contract Name', 'smt-theme'),
        'menu_name' => __('Contracts', 'smt-theme'),
    );

    register_taxonomy('contract', array('jobs'), array(
        'hierarchical' => true,
        'labels' => $labels,
        'show_ui' => true,
        'show_in_rest' => true,
        'show_admin_column' => true,
        'query_var' => true,
        'rewrite' => array('slug' => 'contract', 'with_front' => false),
    ));
}

// Job Subjct Custom Taxonomy
add_action('init', 'jobs_subject_taxonomy', 0);
function jobs_subject_taxonomy()
{
    $labels = array(
        'name' => _x('Subjects', 'smt-theme'),
        'singular_name' => _x('Subject', 'smt-theme'),
        'search_items' => __('Subject Search', 'smt-theme'),
        'all_items' => __('All Subjects', 'smt-theme'),
        'parent_item' => __('Parent Subject', 'smt-theme'),
        'parent_item_colon' => __('Parent Subject:', 'smt-theme'),
        'edit_item' => __('Edit Subject', 'smt-theme'),
        'update_item' => __('Update Subject', 'smt-theme'),
        'add_new_item' => __('Add New Subject', 'smt-theme'),
        'new_item_name' => __('New Subject Name', 'smt-theme'),
        'menu_name' => __('Subjects', 'smt-theme'),
    );

    register_taxonomy('subject', array('jobs'), array(
        'hierarchical' => true,
        'labels' => $labels,
        'show_ui' => true,
        'show_in_rest' => true,
        'show_admin_column' => true,
        'query_var' => true,
        'rewrite' => array('slug' => 'subject', 'with_front' => false),
    ));
}