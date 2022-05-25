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

function dropdown1() {
  var x = document.getElementById("dd1");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function dropdown2() {
  var x = document.getElementById("dd2");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
