<?php

/**
 * Registers the `smt-theme/header` block on the server.
 */

register_block_type(
	GbBlocks_URL . 'build/blocks/header',
	array(
		'style'         => 'gbblocks-frontend',
	)
);
