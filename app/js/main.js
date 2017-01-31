$(window).scroll(function() {
    if ($(window).scrollTop() > 50) {
        $(".navbar").animate({
            backgroundColor: 'rgba(0,0,0,.8)',
            paddingBottom: '.5em'
        }, 200)
    } else {
        $(".navbar").animate({
            backgroundColor: 'rgba(0,0,0,0)',
            paddingBottom: '0'
        }, 200)
    }

})

function toggleMenu() {
    var button = $('#mobile-menu-button');
    var menu = $('.menu');
    button.toggleClass('open');
    menu.slideToggle().toggleClass('hidden');
}

function scrollToEl(el) {
    $('html, body').animate({
        scrollTop: $(el).offset().top - 72 + 'px'
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
        scrollToEl('.header');
    })

})