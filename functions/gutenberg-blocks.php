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
