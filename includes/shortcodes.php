<?php
defined( 'ABSPATH' ) or die( 'Direct script access disallowed.' );

add_shortcode( 'react_post_list_widget', function( $atts ) {
  $default_atts = array();
  $args = shortcode_atts( $default_atts, $atts );

  return "<div id='post-list'></div>";
});
