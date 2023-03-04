<?php

/***
 * Register metabox for Job post
 */


register_post_meta('jobs', 'job_subtitle', [
    'show_in_rest' => true,
    'single' => true,
    'type' => 'string',
]);

register_post_meta('jobs', 'job_content', [
    'show_in_rest' => true,
    'single' => true,
    'type' => 'string',
]);

register_post_meta('jobs', 'job_id', [
    'show_in_rest' => true,
    'single' => true,
    'type' => 'string',
]);