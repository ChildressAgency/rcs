$(document).ready( function(){

    /**
     * HEADER NAVIGATION
     */
    $header_nav = $( '.header__nav' ).find( '.navbar__nav' );
    $header_nav_height = 0;

    $( '.navbar__toggler' ).click(function(){
        $header_nav_height = 0;
        $header_nav.children().each(function(){
            $header_nav_height += $( this ).outerHeight() + parseInt( $( this ).css('marginTop') ) + parseInt( $( this ).css('marginBottom') );
        });

        if( $header_nav.hasClass( 'is-open' ) ){
            $header_nav.removeClass( 'is-open' );
            $header_nav.css( 'max-height', '0' );

            $drop_menu = $header_nav.find( '.navbar__drop-menu' );
            $drop_menu.css( 'max-height', '0' );
            $drop_menu.removeClass( 'is-open' );
        } else {
            $header_nav.addClass( 'is-open' );
            $header_nav.css( 'max-height', $header_nav_height + 'px' );
        }
    });

    $( '.navbar__item.navbar__drop' ).click(function(){
        $drop_height = 0;
        $drop_menu = $( this ).find( '.navbar__drop-menu' );
        $drop_menu.children().each(function(){
            $drop_height += $( this ).outerHeight() + parseInt( $( this ).css('marginTop') ) + parseInt( $( this ).css('marginBottom') );
        });

        if( $( window ).width() < 768 ){

            if( $drop_menu.hasClass( 'is-open' ) ){
                $drop_menu.css( 'max-height', '0' );
                $drop_menu.removeClass( 'is-open' );
            } else {
                $drop_menu.css( 'max-height', $drop_height + 'px' );
                $drop_menu.addClass( 'is-open' );

                $parent_nav = $drop_menu.parents( '.navbar__nav' );

                $parent_height = parseInt( $parent_nav.css( 'max-height' ) );
                $new_height = $parent_height + $drop_height;
                $parent_nav.css( 'max-height', $new_height + 'px' );
            }

        }
    });
} );