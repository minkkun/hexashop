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

// function dropdown1() {
//   var x = document.getElementById("dd1");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }

// function dropdown2() {
//   var x = document.getElementById("dd2");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }

$(document).ready(function(){
  $(".mobile-menu-symbol").click(function(){
    $(".section-list").toggle(300);
  });
});

$(document).ready(function(){
  $("#dd-btn-1").click(function(){
    $("#dd1").toggle(300);
  });
});

$(document).ready(function(){
  $("#dd-btn-2").click(function(){
    $("#dd2").toggle(300);
  });
});

$(document).ready(function() {
  $(".mobile-menu-symbol").click(function () {
      $(".mobile-menu-symbol").toggleClass("active");
  });
  });