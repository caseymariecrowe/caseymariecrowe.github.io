function MenuOff() {
  $( '#content' ).fadeIn( 'fast' );
  $( '#navigation_menu' ).fadeOut('fast');
  $( '.nav_item_1' ).fadeOut();
  $( '.nav_item_2' ).fadeOut();
  $( '.nav_item_3' ).fadeOut();
  $( '.nav_item_4' ).fadeOut();
  $( '.nav_item_5' ).fadeOut();
};

function MenuOn() {
  $( '.nav_item_1' ).delay(100).fadeIn();
  $( '.nav_item_2' ).delay(120).fadeIn();
  $( '.nav_item_3' ).delay(140).fadeIn();
  $( '.nav_item_4' ).delay(160).fadeIn();
  $( '.nav_item_5' ).delay(180).fadeIn();
  $( '#content' ).fadeOut('fast');
  $( '#navigation_menu' ).fadeIn('fast');
};



$(document).ready(function() {

    $('body').fadeIn(700);


    var homePage;
    homePage = $( '#home_page' ).html();
    $( '#content' ).html(homePage);

    $(document).on('click', '.nav_item_1, .more_digital_products', {}, function() {
      $(this).addClass('active_page');
      $( '.nav_item_2, .nav_item_3, .nav_item_4, .nav_item_5' ).removeClass('active_page');
      var page_content;
      $( '#content' ).hide();
      $( 'footer' ).hide();
      page_content = $('#digital_products_page').html();
      $( '#content' ).html(page_content);
      $( '#content' ).fadeIn('slow');
      $( 'footer' ).fadeIn();
      if (window.innerWidth <= breakpoint) {
        MenuOff();
      }
    })
    $(document).on('click', '.nav_item_2, .more_logos', {}, function() {
      $(this).addClass('active_page');
      $( '.nav_item_1,.nav_item_3,.nav_item_4,.nav_item_5' ).removeClass('active_page');
      var page_content;
      $( '#content' ).hide();
      $( 'footer' ).hide();
      page_content = $('#logos_page').html();
      $( '#content' ).html(page_content);
      $( '#content' ).fadeIn('slow');
      $( 'footer' ).fadeIn();
      if (window.innerWidth <= breakpoint) {
        MenuOff();
      }
    })
    $(document).on('click', '.nav_item_3, .more_illustrations', {}, function() {
      $(this).addClass('active_page');
      $( '.nav_item_1,.nav_item_2,.nav_item_4,.nav_item_5' ).removeClass('active_page');
      var page_content;
      $( '#content' ).hide();
      $( 'footer' ).hide();
      page_content = $('#illustrations_page').html();
      $('#content').html(page_content);
      $( '#content' ).fadeIn('slow');
      $( 'footer' ).fadeIn();
      if (window.innerWidth <= breakpoint) {
        MenuOff();
      }
    })

    $(document).on('click', '.nav_item_4, .more_print', {}, function() {
      $(this).addClass('active_page');
      $( '.nav_item_1,.nav_item_2,.nav_item_3,.nav_item_5' ).removeClass('active_page');
      var page_content;
      $( '#content' ).hide();
      $( 'footer' ).hide();
      page_content = $('#print_page').html();
      $(' #content ').html(page_content);
      $( '#content' ).fadeIn('slow');
      $( 'footer' ).fadeIn();
      if (window.innerWidth <= breakpoint) {
        MenuOff();
      }
    })
    $(document).on('click', '.nav_item_5', {}, function() {
      $(this).addClass('active_page');
      $( '.nav_item_1,.nav_item_2,.nav_item_3,.nav_item_4' ).removeClass('active_page');
      var page_content;
      $( '#content' ).hide();
      $( 'footer' ).hide();
      page_content = $('#about_page').html();
      $(' #content ').html(page_content);
      $( '#content' ).fadeIn('slow');
      $( 'footer' ).fadeIn();
      if (window.innerWidth <= breakpoint) {
        MenuOff();
      }
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
          $( 'li' ).css( 'display', 'inline-block' );
          $( '#navigation_menu' ).css( 'display', 'inline-block' );
        } else {
          $( 'li' ).css( 'display', 'block' );
          $( '#navigation_menu' ).hide();
        }
    };
});
