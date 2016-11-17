$('.search, .dock, .nav, .time, .f-message, .noti-wrapper, .recents, .icon-4').hide();

$(function() {

    function appSearchActive() {
        $('.full-search-logo, .mini-search-logo, .mic').hide();
        $('.search input').attr('placeholder', 'Search Apps...').addClass('input-c');
    }

    function googleSearchActive() {
        $('.full-search-logo, .mini-search-logo, .mic').show(100);
        $('.search input').removeClass('input-c').attr('placeholder', 'Say Ok Google...');
    }

    // ----------------------nav-butoons------------------
    function appDrawerOpen() {
        $(".app-drawer").addClass('open');
        $(".app").addClass('app-open');
        appSearchActive();
    }

    function appDrawerClose() {
        $(".app-drawer").removeClass('open');
        $(".app").removeClass('app-open');
        googleSearchActive();
    }

    // ---------------------f-print------------------
    $(".f-print").dblclick(function() {
        $('.lock-screen, .search, .dock, .nav, .lock-icons').fadeToggle(400);
        $('.time, .user').toggle();
        $('.date-time-wrapper').toggleClass('d-t-w-ani');
        appDrawerClose();
        // $(".app-drawer").removeClass('open');
        // $(".app").removeClass('app-open');
    });

    //-----------------------status---------------------
    $('.status').dblclick(function() {
        $('.noti-wrapper').slideDown(20).addClass('height-small');
        $('.status').css('visibility', 'hidden');
    });

    $('.noti').on('click', function() {
        $('.full-noti').toggleClass('full-noti-open');
        $('.noti').toggleClass('noti-open');
        $('.time-noti').toggleClass('noti-time-grow');
        $('.noti-wrapper').toggleClass('height-large');
        $('.icon-1, .icon-2').fadeToggle(300);
        $('.icon-4').slideToggle(0);
        $('.ml').toggleClass('f-noti-open-icons');
        $('.icon-3').toggleClass('b-ml');
    });

    $('.lock-screen, .home-page, .ripple, .f-print').on('click', function() {
        $('.noti-wrapper').slideUp(300).removeClass('height-large height-small');
        $('.full-noti').removeClass('full-noti-open');
        $('.noti').removeClass('noti-open');
        $('.time-noti').removeClass('noti-time-grow');
        $('.icon-1, .icon-2').fadeIn(300);
        $('.ml').removeClass('f-noti-open-icons');
        $('.icon-4').hide();
        $('.status').css('visibility', 'visible');
        $('.icon-3').removeClass('b-ml');
    });

    $(".search").on("click", function() {
        $('.full-search-logo').hide(100);
    });

    $('.middle').on('click', function() {
        $('.f-message').fadeIn(150);
        setTimeout("$('.f-message').fadeOut(150);", 1500);
    });

    $('.home-page').on('click', appDrawerClose);

    // ----------------------app-drawer--------------
    $(".app-drawer").on("click", appDrawerOpen);


    $(".third").on('click', function() {
        $('.search, .dock, .recents').fadeToggle(200);
    });

    $(".ripple").on("click", appDrawerClose);

});
