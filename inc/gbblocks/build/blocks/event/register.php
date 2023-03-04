<?php

/***
 * Register metabox for Event post
 */


register_post_meta('events', 'start_date', [
    'show_in_rest' => true,
    'single' => true,
    'type' => 'string',
]);

register_post_meta('events', 'end_date', [
    'show_in_rest' => true,
    'single' => true,
    'type' => 'string',
]);

register_post_meta('events', 'start_time', [
    'show_in_rest' => true,
    'single' => true,
    'type' => 'string',
]);

register_post_meta('events', 'end_time', [
    'show_in_rest' => true,
    'single' => true,
    'type' => 'string',
]);

register_post_meta('events', 'event_place', [
    'show_in_rest' => true,
    'single' => true,
    'type' => 'string',
]);
