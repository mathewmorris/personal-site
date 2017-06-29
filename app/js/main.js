function toggleMenu() {
    var button = $('#mobile-menu-button');
    var menu = $('.menu');


    if ($(window).width() < 768) {
        button.toggleClass('open');
        menu.slideToggle().toggleClass('hide-mobile-menu');
    }

}

function scrollToEl(el) {
    $('html, body').animate({
        scrollTop: $(el).offset().top + 'px'
    }, 1500);
}

$(document).ready(function() {
    $('#mobile-menu-button').click(toggleMenu);

    $('.menu-link').click(function() {
        var href = $(this).attr('href');
        scrollToEl(href);
        toggleMenu();
    });

    $('#logo').click(function() {
        var windowTop = $(window).scrollTop();
        if (windowTop != 0) {
            $('html, body').animate({
                scrollTop: 0
            }, 1500)

        }
        if ($('#mobile-menu-button').hasClass('open')) {
            toggleMenu();
        }

    })

    $(window).scroll(function() {
        var headerImage = $('.header-image');
        console.log($(window).scrollTop());

        if ($(window).scrollTop() > window.innerHeight + 200) {
            headerImage.css("opacity", 0);
        } else {
            headerImage.css("opacity", 1);
        }

    })

})