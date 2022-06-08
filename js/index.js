$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    nav: true,
    loop: true,
    dots: false,
    margin: 50,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});

// $(document).ready(function () {
//   $(".mobile-menu-symbol").click(function () {
//     $(".section-list").toggle(300);
//   });
// });

// $(document).ready(function () {
//   if ($(window).width() < 767) {
//     $("#dd-btn-1").click(function () {
//       $("#dd1").toggle(300);
//     });
//   }
// });

$(document).ready(function () {
  $(".mobile-menu-symbol").click(function () {
    $(".section-list").toggle(300);
  });
  if ($(window).width() < 767) {
    $("#dd-btn-1").click(function () {
      $("#dd1").toggle(300);
    });
  }
  if ($(window).width() < 767) {
    $("#dd-btn-2").click(function () {
      $("#dd2").toggle(300);
    });
  }
  $(".scroll-to-section").click(function () {
    $(".section-list").hide(300);
    $(".mobile-menu-symbol").toggleClass("active");
  });
  $(".mobile-menu-symbol").click(function () {
    $(".mobile-menu-symbol").toggleClass("active");
  });
});

// $(document).ready(function () {
//   $(".scroll-to-section").click(function () {
//     $(".section-list").hide(300);
//     $(".mobile-menu-symbol").toggleClass("active");
//   });
// });

// $(document).ready(function () {
//   $(".mobile-menu-symbol").click(function () {
//     $(".mobile-menu-symbol").toggleClass("active");
//   });
// });

// $(window).scroll(function (e) {
//   var $el = $(".header");
//   var isPositionFixed = $el.css("position") == "fixed";
//   if (window.pageYOffset > 1500 && !isPositionFixed) {
//     $el.addClass("position-sticky");
//   }
//   if (window.pageYOffset < 1500  && isPositionFixed) {
//     $el.addClass("position-fixed");
//   }
// });
