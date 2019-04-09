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



///////////////////////////////////////////////////////////////////////////////
// CONTACT TABS                                                              //
///////////////////////////////////////////////////////////////////////////////

function contact_tabs_callback( $attributes, $content ){
    $result = '<section class="wp-block-childress-contact-tabs contact-tabs container container--no-padding container--thin">';

    $tempIndex = 0;

    $result .= '<div class="contact-tabs__titles">';
    foreach( $attributes as $key => $value ){
        if( substr( $value, 0, 1 ) != '[' ){
            $result .= '<div class="contact-tabs__tab-title" data-index="' . $tempIndex++ . '">';
            $result .= $value;
            $result .= '</div>';
        }
    }
    $result .= '</div>';

    $tempIndex = 0;

    $result .= '<div class="contact-tabs__contents">';
    foreach( $attributes as $key => $value ){
        if( substr( $value, 0, 1 ) == '[' ){
            $result .= '<div class="contact-tabs__tab-content" data-index="' . $tempIndex++ . '">';

            $result .= do_shortcode( $value );

            $result .= '</div>';
        }
    }
    $result .= '</div>';

    $result .= '</section>';

    return $result;
}
