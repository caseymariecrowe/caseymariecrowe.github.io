function pixelColors(element, property) {
    var color = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';
    var transform = {};
    transform[property] = color;
    $(element).css(transform);
}

$(document).ready(function() {
    $('body').fadeIn(700);
    var colorLoop;


    $(document).on('vmouseover mouseover', '.js-animate-border', function() {
      var $el = $(this)
      $el.data('originalColor', $el.css('border-color'))
      colorLoop = setInterval(function() {
        pixelColors($el, 'border-color')
      }, 100);
    })
    $(document).on('vmouseout mouseout', '.js-animate-border', function() {
      var $el = $(this)
      clearInterval(colorLoop);
      $el.css( 'border-color', $el.data('originalColor'));
    })


    $(document).on('vmouseover mouseover', '.js-animate-color', function() {
      var $el = $(this)
      $el.data('originalColor', $el.css('color'))
      colorLoop = setInterval(function() {
        pixelColors($el, 'color')
      }, 100);
    })
    $(document).on('vmouseout mouseout', '.js-animate-color', function() {
      var $el = $(this)
      clearInterval(colorLoop);
      $el.css( 'color', $el.data('originalColor'));
    })
    $(document).on('vmouseover mouseover', '.js-animate-bg-color', function() {
      var $el = $(this)
      $el.data('originalColor', $el.css('background-color'))
      colorLoop = setInterval(function() {
        pixelColors($el, 'background-color')
      }, 100);
    })
    $(document).on('vmouseout mouseout', '.js-animate-bg-color', function() {
      var $el = $(this)
      clearInterval(colorLoop);
      $el.css( 'background-color', $el.data('originalColor'));
    })
    function MenuOff() {
      $( '#mobile_nav' ).fadeOut('fast');
      $( 'body' ).css( 'overflow', 'visible' );
      $( '.mobile_nav_item_1' ).fadeOut();
      $( '.mobile_nav_item_2' ).fadeOut();
      $( '.mobile_nav_item_3' ).fadeOut();
      $( '.mobile_nav_item_4' ).fadeOut();
      $( '.mobile_nav_item_5' ).fadeOut();
    };
    function MenuOn() {
      $( '.mobile_nav_item_1' ).delay(100).fadeIn();
      $( '.mobile_nav_item_2' ).delay(120).fadeIn();
      $( '.mobile_nav_item_3' ).delay(140).fadeIn();
      $( '.mobile_nav_item_4' ).delay(160).fadeIn();
      $( '.mobile_nav_item_5' ).delay(180).fadeIn();
      $( '#mobile_nav' ).fadeIn('fast');
      $( 'body' ).css( 'overflow', 'hidden' );
    };
    var homePage;
    homePage = $( '#home_page' ).html();
    $( '#content' ).html(homePage);
    $(document).on('click', '.mobile_nav_item_1, .nav_item_1, .more_digital_products', {}, function() {
      $(this).addClass('active_page');
      $( '.nav_item_2, .nav_item_3, .nav_item_4,nav_item_5' ).removeClass('active_page');
      var page_content;
      $( '#content' ).hide();
      $( 'footer' ).hide();
      page_content = $('#digital_products_page').html();
      $( '#content' ).html(page_content);
      $( '#content' ).fadeIn('slow');
      $( 'footer' ).fadeIn();
      MenuOff();
    })
    $(document).on('click', '.mobile_nav_item_2, .nav_item_2, .more_logos', {}, function() {
      $(this).addClass('active_page');
      $( '.nav_item_1,.nav_item_3,.nav_item_4,.nav_item_5' ).removeClass('active_page');
      var page_content;
      $( '#content' ).hide();
      $( 'footer' ).hide();
      page_content = $('#logos_page').html();
      $( '#content' ).html(page_content);
      $( '#content' ).fadeIn('slow');
      $( 'footer' ).fadeIn();
      MenuOff();
    })
    $(document).on('click', '.mobile_nav_item_3, .nav_item_3, .more_illustrations', {}, function() {
      $(this).addClass('active_page');
      $( '.nav_item_1,.nav_item_2,.nav_item_4,.nav_item_5' ).removeClass('active_page');
      var page_content;
      $( '#content' ).hide();
      $( 'footer' ).hide();
      page_content = $('#illustrations_page').html();
      $('#content').html(page_content);
      $( '#content' ).fadeIn('slow');
      $( 'footer' ).fadeIn();
      MenuOff();
    })

    $(document).on('click', '.mobile_nav_item_4, .nav_item_4, .more_print', {}, function() {
      $(this).addClass('active_page');
      $( '.nav_item_1,.nav_item_2,.nav_item_3,.nav_item_5' ).removeClass('active_page');
      var page_content;
      $( '#content' ).hide();
      $( 'footer' ).hide();
      page_content = $('#print_page').html();
      $(' #content ').html(page_content);
      $( '#content' ).fadeIn('slow');
      $( 'footer' ).fadeIn();
      MenuOff();
    })
    $(document).on('click', '.mobile_nav_item_5, .nav_item_5', {}, function() {
      $(this).addClass('active_page');
      $( '.nav_item_1,.nav_item_2,.nav_item_3,.nav_item_4' ).removeClass('active_page');
      var page_content;
      $( '#content' ).hide();
      $( 'footer' ).hide();
      page_content = $('#about_page').html();
      $(' #content ').html(page_content);
      $( '#content' ).fadeIn('slow');
      $( 'footer' ).fadeIn();
      MenuOff();
    })
    $(document).on('click', '#logo', {}, function() {
      $('html,body').animate({ scrollTop: 0 }, 'slow');
      $( '#content' ).hide();
      $( 'footer' ).hide();
      $( '#content' ).html(homePage);
      $( '#content' ).fadeIn('slow');
      $( 'footer' ).fadeIn();
      $( '.nav_item_1,.nav_item_2,.nav_item_3,.nav_item_4,.nav_item_5' ).removeClass('active_page');
    })
    $( '#nav_icon_on' ).click(
      function() {
        MenuOn();
    });
    $( '#nav_icon_off' ).click(
      function() {
        MenuOff();
    });
    var breakpoint = 768;
    window.onresize = function(event) {
        $( '#content' ).show();
        if (window.innerWidth >= breakpoint) {
          $( '#mobile_nav' ).hide();
        }
    };
});
