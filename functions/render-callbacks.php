<?php 

///////////////////////////////////////////////////////////////////////////////
// RCS MAP                                                                   //
///////////////////////////////////////////////////////////////////////////////

function rcs_map_callback( $attributes, $content ){
    $result = '<section class="wp-block-childress-rcs-map rcs-map">';

    $result .= file_get_contents( locate_template( 'rcs-map.php' ) );

    $result .= '</section>';

    return $result;
}