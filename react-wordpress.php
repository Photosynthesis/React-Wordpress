<?php
/**
 * @wordpress-plugin
 * Plugin Name: React Wordpress Playground
 * Plugin URI: https://github.com/Photosynthesis/React-Wordpress
 * Description: A base plugin for experimenting with embedding React in Wordpress
 * Author: Photosynthesis
 *
 * Based on React WP tutorial here: https://www.digitalocean.com/community/tutorials/how-to-embed-a-react-application-in-wordpress-on-ubuntu-18-04
 */

defined( 'ABSPATH' ) or die( 'Direct script access disallowed.' );

define( 'ERW_WIDGET_PATH', plugin_dir_path( __FILE__ ) . 'widget' );
define( 'ERW_ASSET_MANIFEST', ERW_WIDGET_PATH . '/build/asset-manifest.json' );
define( 'ERW_INCLUDES', plugin_dir_path( __FILE__ ) . '/includes' );

require_once( ERW_INCLUDES . '/enqueue.php' );
require_once( ERW_INCLUDES . '/shortcodes.php' );

add_action('wp_head', function (){
  ?>
  <script>

  window.wpReactSettings = window.wpReactSettings || {};
  window.wpReactSettings.apiUrl = "../wp-json/wp/v2/posts";

  </script>

  <?php
});
