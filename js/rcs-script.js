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

    /**
     * FOOTER
     */
    $( '.footer__slider' ).slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
    });


    /**
     * SIMPLE SLIDER
     */
    $( '.wp-block-childress-simple-slider' ).slick({
        arrows: true,
        autoplay: false,
        dots: true,
        nextArrow: '<div class="simple-slider__arrow simple-slider__arrow--next"><i class="fas fa-chevron-right"></i></div>',
        prevArrow: '<div class="simple-slider__arrow simple-slider__arrow--prev"><i class="fas fa-chevron-left"></i></div>',
    });


    /**
     * RCS MAP
     */
    /*$( '.rcs-map__country' ).mouseover( function(){
        var name = $( this ).data( 'country-name' );

        $( '#label-country-' + name ).css( 'display', 'block' );
    } );

    $( '.rcs-map__country' ).mouseout( function(){
        $( '.rcs-map__label' ).css( 'display', 'none' );
    } );*/

    if(typeof rcs_featured_countries !== 'undefined'){
      var countries = rcs_featured_countries.rcs_countries;
      for(var $c = 0; $c < countries.length; $c++){
        var featuredCountryId = countries[$c];
        $('#' + featuredCountryId).addClass('featured-country');
      }

      var $infoBox = $('#info-box');
      $('#rcs_reach').on({
        mouseover: function(){
          var countryName = $(this).data('country');
          $infoBox.css('display', 'block');
          $infoBox.text(countryName);
        },
        mouseleave: function(){
          $infoBox.css('display', 'none');
        },
        mousemove: function(e){
          $infoBox.css('top', e.pageY - $infoBox.height() - 10);
          $infoBox.css('left', e.pageX - ($infoBox.width() + 50) / 2);
        }
      }, '.featured-country');
    }
    /*
    //run this to get the list of country names from data-country in this svg
    $('.rcs-map__country').each(function(){
      var countryPrettyName = $(this).data('country');
      $('.rcs-map').append(countryPrettyName + '<br />');
    });*/


    /**
     * CONTACT TABS
     */
    $( '.contact-tabs' ).each( function(){
        $( this ).find( '.contact-tabs__tab-title:first' ).addClass( 'contact-tabs__tab-title--active' );
        $( this ).find( '.contact-tabs__tab-content:first' ).addClass( 'contact-tabs__tab-content--active' );
    } );

    $( '.contact-tabs__tab-title' ).click( function(){
        var parent = $( this ).parent();
        var contents = $( parent ).siblings( '.contact-tabs__contents' );
        var index = $( this ).data( 'index' );

        $( this ).siblings().each( function(){
            $( this ).removeClass( 'contact-tabs__tab-title--active' );
        } );
        $( this ).addClass( 'contact-tabs__tab-title--active' );

        var content = $( contents ).find( '[data-index="' + index + '"]' );
        $( contents ).children().each( function(){
            $( this ).removeClass( 'contact-tabs__tab-content--active' );
        } );
        $( content ).addClass( 'contact-tabs__tab-content--active' );
    } );
} );
