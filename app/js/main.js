$(window).scroll(function() {

})

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
        if ($('#mobile-menu-button').hasClass('open')) {
            toggleMenu();
        }
    })

})