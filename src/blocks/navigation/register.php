<?php

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 *
 * @since 0.1.0
 */

register_block_type(
	GbBlocks_URL . 'build/blocks/navigation',
	[
		'render_callback' => 'render_navigation',
	]
);


function myprefix_edit_classes( $classes, $item ) {
	if ( ( $key = array_search( 'menu-item-type-custom', $classes ) ) !== false ) {
		unset( $classes[$key] );
	}
	if ( ( $key = array_search( 'menu-item-object-custom', $classes ) ) !== false ) {
		unset( $classes[$key] );
	}
	if ( ( $key = array_search( 'menu-item', $classes ) ) !== false ) {

		$classes[$key] = 'menu__item';
	}
	if ( ( $key = array_search( 'menu-item-has-children', $classes ) ) !== false ) {

		$classes[$key] = 'menu__item--child';
	}
	return $classes;
}
add_filter( 'nav_menu_css_class', 'myprefix_edit_classes', 10, 2 );
add_filter( 'nav_menu_item_id', '__return_null', 10, 3 );


/**
 * Block render callback.
 *
 * @since 0.1.0
 * @param array $attrs Block attributes.
 *
 * @return string
 */
function render_navigation($attrs)
{

	$attrs      = wp_parse_args(
		$attrs,
		[
			'className' => '',
			'anchor'    => '',
			'menu'      => 0,
		]
	);

	$menu_wrap = '<ul class="%2$s">%3$s</ul>';

	$menu_attrs = [
		'echo'            => false,
		'container_class' => 'menu-helper',
		'container_id'    => $attrs['anchor'],
		'menu'            => $attrs['menu'],
		'items_wrap' 	  => $menu_wrap,
		'walker' 		  => new Custom_Walker_Nav_Menu()
	];

	/**
	 * Filters menu attributes.
	 *
	 * @since 0.1.0
	 *
	 * @param array $menu_attrs Menu attributes.
	 * @param array $attrs Block attributes.
	 */
	$menu_attrs = apply_filters('classic_menu_block_attributes', $menu_attrs, $attrs);

	if ($attrs['menu'] != 0) {
		return (string) wp_nav_menu($menu_attrs);
	}

	return '<div>Select a Menu to render.</div>';
}
class Custom_Walker_Nav_Menu extends Walker_Nav_Menu
{

	function start_lvl(&$output, $depth = 0, $args = array())
	{
		$indent = str_repeat("\t", $depth);

		// Change sub-menu to dropdown menu
		$output .= "\n$indent<ul class=\"menu menu--sub\">\n<li class=\"menu__item\"><a class=\"menu__back\">Zur&uuml;ck</a>\n</li>";
	}

}
