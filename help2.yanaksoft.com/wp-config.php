<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'help2_backup');

/** MySQL database username */
define('DB_USER', 'serveradmin');

/** MySQL database password */
define('DB_PASSWORD', 'YanakSoft!2233');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

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
define('AUTH_KEY',         ')=rN_.*oD]$m+9tW75C|f}0y;n@;4sA2 |Br2C;P|G[7N/Zoj;;AX5X/xa(j8lk#');
define('SECURE_AUTH_KEY',  'n[9S~q3=b8XdrD8P%V T0d#>Ke:q`jPIuM[yG[-2WjCCa%m]FzkRAtSY$0$2D<(:');
define('LOGGED_IN_KEY',    'C`h:?~vC>Cwsj@J&0TFwPa6ik3(V9x6x1TIK6M)hMzL#E?2*l%K~eO@JA?^L9UI(');
define('NONCE_KEY',        'G_lpvlK@CB[<xQ^O ai`0M].=ZD] *zH9=t+}$f8L$d}^Z)~rlnVl-_EVep$c&5z');
define('AUTH_SALT',        'eWC6*XJ&DECCc5!; OA}T;d7G^0bOVI+(gM>MwPaDAqi6t3$L4}n8Soa8*m3E-x]');
define('SECURE_AUTH_SALT', 'Pho7N{1F!4yfjS*kF,m^x*(/@<s3(&Bib&E&vJPHu M,sgRR3U]<O{K]yIy~D+1C');
define('LOGGED_IN_SALT',   '(N`ztMlFJ;0AmE306)_eX4~jRr9ZYB)#G]tJ%Tr-vC6@n6a[`H;[42t=E@s5>yl<');
define('NONCE_SALT',       'yUobK S^8B3gq]7el:nzx6k(d^]U2Tg]hq>axzKY6jxcG3iREJ*9cIOC&W$]vgka');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

define('FS_METHOD','direct');
