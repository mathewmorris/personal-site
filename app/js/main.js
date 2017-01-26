// var deadline = '2017-01-27';

// function getTimeRemaining(endtime) {
//     var t = Date.parse(endtime) - Date.parse(new Date());
//     var seconds = pad(Math.floor((t / 1000) % 60));
//     var minutes = pad(Math.floor((t / 1000 / 60) % 60));
//     var hours = pad(Math.floor((t / (1000 * 60 * 60)) % 24));
//     var days = pad(Math.floor(t / (1000 * 60 * 60 * 24)));
//     return {
//         'total': t,
//         'days': days,
//         'hours': hours,
//         'minutes': minutes,
//         'seconds': seconds
//     };
// }

// function initializeClock(id, endtime) {
//     var clock = document.getElementById(id);
//     var timeinterval = setInterval(function() {
//         var t = getTimeRemaining(endtime);
//         clock.innerHTML = t.days + ' : ' +
//             t.hours + ' : ' + t.minutes + ' : ' + t.seconds;
//         if (t.total <= 0) {
//             clearInterval(timeinterval);
//         }
//     }, 1000);
// }

// function pad(n) {
//     return (n < 10) ? ("0" + n) : n;
// }


$(document).ready(function() {
    // initializeClock('countdown', deadline);
    $("#mobile-menu-button").click(function() {
        $(this).toggleClass('open');
        $('.menu').slideToggle();
    })



})