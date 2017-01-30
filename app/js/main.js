

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