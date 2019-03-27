<?php

	// load jquery
	function jquery_cdn(){
	  if(!is_admin()){
		wp_deregister_script('jquery');
		wp_register_script('jquery', 'https://code.jquery.com/jquery-3.3.1.min.js', false, null, true);
		wp_enqueue_script('jquery');
	  }
	}
	add_action('wp_enqueue_scripts', 'jquery_cdn');

	// load scripts
	function rcs_scripts(){
		global $wp_query;
		wp_register_script(
			'slick-script', 
			'//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js', 
			array('jquery'), 
			'', 
			true
		);
		wp_register_script(
			'rcs-script', 
			'/wp-content/themes/rcs/js/rcs-script.js', 
			array('jquery'), 
			'', 
			true
		);
		
		wp_enqueue_script( 'slick-script' );
		wp_enqueue_script( 'rcs-script' );
	}
	add_action('wp_enqueue_scripts', 'rcs_scripts', 100);
	
	// load styles
	function rcs_styles(){
		wp_register_style('slick', '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css');
		wp_register_style('rcs', get_template_directory_uri() . '/style.css');

		wp_enqueue_style('slick');
		wp_enqueue_style('rcs');
	}
	add_action('wp_enqueue_scripts', 'rcs_styles');

	// load fonts
	function load_fonts() {
		wp_enqueue_style( 'font-awesome', '//use.fontawesome.com/releases/v5.3.1/css/all.css' );
		wp_enqueue_style( 'open-sans', '//fonts.googleapis.com/css?family=Open+Sans:400,400i,600,700' );
	}
	add_action( 'wp_enqueue_scripts', 'load_fonts' );

	// Register Navigation Menus
	register_nav_menus( array(
		'main_menu' => 'Main Menu'
	) );

	// Custom Blocks Category
	function custom_blocks_category( $categories, $post ){
		return array_merge(
			array(
				array(
					'slug'	=> 'custom-blocks',
					'title'	=> __( 'Custom Blocks', 'custom-blocks' )
				)
			),
			$categories
		);
	}
	add_filter( 'block_categories', 'custom_blocks_category', 10, 2 );

	function custom_editor_styles(){
		wp_enqueue_style( 'editor-styles', get_stylesheet_directory_uri()  .'/css/editor-styles.css' );
	}
	add_action( 'enqueue_block_editor_assets', 'custom_editor_styles' );

	function rcs_color_palette(){
		add_theme_support(
			'editor-color-palette', array(
				array(
					'name'		=> 'Orange',
					'slug'		=> 'orange',
					'color'		=> '#f08f23'
				),
				array(
					'name'		=> 'Dark Orange',
					'slug'		=> 'dark-orange',
					'color'		=> '#b7681f'
				),
				array(
					'name'		=> 'Pink',
					'slug'		=> 'pink',
					'color'		=> '#ed1968'
				),
				array(
					'name'		=> 'Dark Grey',
					'slug'		=> 'dark-grey',
					'color'		=> '#5b5b5d'
				),
				array(
					'name'		=> 'Light Grey',
					'slug'		=> 'light-grey',
					'color'		=> '#d3d3d3'
				),
				array(
					'name'		=> 'Very Light Grey',
					'slug'		=> 'very-light-grey',
					'color'		=> '#e6e6e6'
				),
				array(
					'name'		=> 'Off-White',
					'slug'		=> 'off-white',
					'color'		=> '#f2f2f2'
				),
				array(
					'name'		=> 'Black',
					'slug'		=> 'black',
					'color'		=> '#000000'
				),
				array(
					'name'		=> 'White',
					'slug'		=> 'white',
					'color'		=> '#ffffff'
				),
			)
		);
	}
	add_action( 'after_setup_theme', 'rcs_color_palette' );

	include "functions/options_page.php";
	include "functions/custom-nav-walker.php";
	include "functions/gutenberg-blocks.php";
?>
