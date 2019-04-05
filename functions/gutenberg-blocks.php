<?php

///////////////////////////////////////////////////////////////////////////////
// DEPENDENCIES                                                              //
///////////////////////////////////////////////////////////////////////////////
function load_dependencies(){
    wp_register_script(
        'dependencies-script',
        get_template_directory_uri() . '/js/block-dependencies.js',
        array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components' )
    );

    wp_enqueue_script( 'dependencies-script' );
}
add_action( 'init', 'load_dependencies', 10, 0 );

///////////////////////////////////////////////////////////////////////////////
// CONTAINER                                                                 //
///////////////////////////////////////////////////////////////////////////////
function container_block(){
    wp_register_script(
        'container-script',
        get_template_directory_uri() . '/js/block-container.js',
        array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components' )
    );

    register_block_type('childress/container', array(
        'editor_script' => 'container-script',
    ) );
}
add_action( 'init', 'container_block', 10, 0 );

///////////////////////////////////////////////////////////////////////////////
// GRADIENT BOX                                                              //
///////////////////////////////////////////////////////////////////////////////
function gradient_box_block(){
    wp_register_script(
        'gradient-box-script',
        get_template_directory_uri() . '/js/block-gradient-box.js',
        array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components' )
    );

    wp_register_style(
        'gradient-box-editor-style',
        get_template_directory_uri() . '/css/block-gradient-box-editor-style.css',
        array( 'wp-edit-blocks' )
    );

    wp_register_style(
        'gradient-box-style',
        get_template_directory_uri() . '/css/block-gradient-box-style.css',
        array( 'wp-edit-blocks' )
    );

    register_block_type('childress/gradient-box', array(
        'editor_script' => 'gradient-box-script',
        'editor_style'  => 'gradient-box-editor-style',
        'style'  => 'gradient-box-style',
    ) );
}
add_action( 'init', 'gradient_box_block', 10, 0 );

///////////////////////////////////////////////////////////////////////////////
// CAPABILITIES                                                              //
///////////////////////////////////////////////////////////////////////////////
function capabilities_block(){
    wp_register_script(
        'capabilities-script',
        get_template_directory_uri() . '/js/block-capabilities.js',
        array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components' )
    );

    wp_register_style(
        'capabilities-editor-style',
        get_template_directory_uri() . '/css/block-capabilities-editor-style.css',
        array( 'wp-edit-blocks' )
    );

    wp_register_style(
        'capabilities-style',
        get_template_directory_uri() . '/css/block-capabilities-style.css',
        array( 'wp-edit-blocks' )
    );

    register_block_type('childress/capabilities', array(
        'editor_script' => 'capabilities-script',
        'editor_style'  => 'capabilities-editor-style',
        'style'  => 'capabilities-style',
    ) );
}
add_action( 'init', 'capabilities_block', 10, 0 );

///////////////////////////////////////////////////////////////////////////////
// FEATURES                                                                  //
///////////////////////////////////////////////////////////////////////////////
function features_block(){
    wp_register_script(
        'features-script',
        get_template_directory_uri() . '/js/block-features.js',
        array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components' )
    );

    wp_register_style(
        'features-editor-style',
        get_template_directory_uri() . '/css/block-features-editor-style.css',
        array( 'wp-edit-blocks' )
    );

    wp_register_style(
        'features-style',
        get_template_directory_uri() . '/css/block-features-style.css',
        array( 'wp-edit-blocks' )
    );

    register_block_type('childress/features', array(
        'editor_script' => 'features-script',
        'editor_style'  => 'features-editor-style',
        'style'  => 'features-style',
    ) );
}
add_action( 'init', 'features_block', 10, 0 );

///////////////////////////////////////////////////////////////////////////////
// SIMPLE SLIDER                                                             //
///////////////////////////////////////////////////////////////////////////////
function simple_slider_block(){
    wp_register_script(
        'simple-slider-script',
        get_template_directory_uri() . '/js/block-simple-slider.js',
        array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components' )
    );

    wp_register_style(
        'simple-slider-editor-style',
        get_template_directory_uri() . '/css/block-simple-slider-editor-style.css',
        array( 'wp-edit-blocks' )
    );

    wp_register_style(
        'simple-slider-style',
        get_template_directory_uri() . '/css/block-simple-slider-style.css',
        array( 'wp-edit-blocks' )
    );

    register_block_type('childress/simple-slider', array(
        'editor_script' => 'simple-slider-script',
        'editor_style'  => 'simple-slider-editor-style',
        'style'  => 'simple-slider-style',
    ) );
}
add_action( 'init', 'simple_slider_block', 10, 0 );

///////////////////////////////////////////////////////////////////////////////
// IMAGE & TEXT                                                              //
///////////////////////////////////////////////////////////////////////////////
function image_text_block(){
    wp_register_script(
        'image-text-script',
        get_template_directory_uri() . '/js/block-image-text.js',
        array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components' )
    );

    wp_register_style(
        'image-text-editor-style',
        get_template_directory_uri() . '/css/block-image-text-editor-style.css',
        array( 'wp-edit-blocks' )
    );

    wp_register_style(
        'image-text-style',
        get_template_directory_uri() . '/css/block-image-text-style.css',
        array( 'wp-edit-blocks' )
    );

    register_block_type('childress/image-text', array(
        'editor_script' => 'image-text-script',
        'editor_style'  => 'image-text-editor-style',
        'style'  => 'image-text-style',
    ) );
}
add_action( 'init', 'image_text_block', 10, 0 );

///////////////////////////////////////////////////////////////////////////////
// CLIENTS                                                                   //
///////////////////////////////////////////////////////////////////////////////
function clients_block(){
    wp_register_script(
        'clients-script',
        get_template_directory_uri() . '/js/block-clients.js',
        array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components' )
    );

    wp_register_style(
        'clients-editor-style',
        get_template_directory_uri() . '/css/block-clients-editor-style.css',
        array( 'wp-edit-blocks' )
    );

    wp_register_style(
        'clients-style',
        get_template_directory_uri() . '/css/block-clients-style.css',
        array( 'wp-edit-blocks' )
    );

    register_block_type('childress/clients', array(
        'editor_script' => 'clients-script',
        'editor_style'  => 'clients-editor-style',
        'style'  => 'clients-style',
    ) );
}
add_action( 'init', 'clients_block', 10, 0 );

///////////////////////////////////////////////////////////////////////////////
// SERVICES                                                                  //
///////////////////////////////////////////////////////////////////////////////
function services_block(){
    wp_register_script(
        'services-script',
        get_template_directory_uri() . '/js/block-services.js',
        array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components' )
    );

    wp_register_style(
        'services-editor-style',
        get_template_directory_uri() . '/css/block-services-editor-style.css',
        array( 'wp-edit-blocks' )
    );

    wp_register_style(
        'services-style',
        get_template_directory_uri() . '/css/block-services-style.css',
        array( 'wp-edit-blocks' )
    );

    register_block_type('childress/services', array(
        'editor_script' => 'services-script',
        'editor_style'  => 'services-editor-style',
        'style'  => 'services-style',
    ) );
}
add_action( 'init', 'services_block', 10, 0 );

///////////////////////////////////////////////////////////////////////////////
// RCS MAP                                                                   //
///////////////////////////////////////////////////////////////////////////////
function rcs_map_block(){
    wp_register_script(
        'rcs-map-script',
        get_template_directory_uri() . '/js/block-rcs-map.js',
        array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components' )
    );

    wp_register_style(
        'rcs-map-editor-style',
        get_template_directory_uri() . '/css/block-rcs-map-editor-style.css',
        array( 'wp-edit-blocks' )
    );

    wp_register_style(
        'rcs-map-style',
        get_template_directory_uri() . '/css/block-rcs-map-style.css',
        array( 'wp-edit-blocks' )
    );

    register_block_type('childress/rcs-map', array(
        'editor_script' => 'rcs-map-script',
        'editor_style'  => 'rcs-map-editor-style',
        'style'  => 'rcs-map-style',
        'render_callback'   => 'rcs_map_callback'
    ) );
}
add_action( 'init', 'rcs_map_block', 10, 0 );
