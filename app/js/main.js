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

function scrollToId(id) {
    $('html, body').animate({
        scrollTop: $(id).offset().top - 72 + 'px'
    }, 2000);
}

$(document).ready(function() {
    $('#mobile-menu-button').click(toggleMenu);

    $('.menu-link').click(function() {
        var href = $(this).attr('href');
        scrollToId(href);
        toggleMenu();
    });

})