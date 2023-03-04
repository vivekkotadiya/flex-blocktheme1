<?php

/***
 * Register metabox for page and post 
 */


register_post_meta('page', 'course_degree', [
    'show_in_rest' => true,
    'single' => true,
    'type' => 'string',
]);

register_post_meta('page', 'course_preview_title', [
    'show_in_rest' => true,
    'single' => true,
    'type' => 'string',
]);

register_post_meta('page', 'course_preview_subtitle', [
    'show_in_rest' => true,
    'single' => true,
    'type' => 'string',
]);

register_post_meta('page', 'course_lang', [
    'show_in_rest' => true,
    'single' => true,
    'type' => 'string',
]);

register_post_meta('page', 'course_start', [
    'show_in_rest' => true,
    'single' => true,
    'type' => 'string',
]);

register_post_meta('page', 'course_duration', [
    'show_in_rest' => true,
    'single' => true,
    'type' => 'string',
]);

register_post_meta('page', 'course_location', [
    'show_in_rest' => true,
    'single' => true,
    'type' => 'string',
]);

register_post_meta('page', 'course_aboard', [
    'show_in_rest' => true,
    'single' => true,
    'type' => 'string',
]);
