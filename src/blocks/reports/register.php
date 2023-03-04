<?php

/***
 * Register metabox for Event post
 */


register_post_meta('reports', 'report_name', [
    'show_in_rest' => true,
    'single' => true,
    'type' => 'string',
]);
