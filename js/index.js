$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        nav: true,
        loop: true,
        dots: false,
        margin: 50,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
       }
    })          
});

