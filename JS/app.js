//  Portfolio
$(document).ready(function () {
  $("#project-slider").owlCarousel({
    loop: true,
    margin: 24,
    nav: true,
    dots: false,
    navText: ["Prev", "Next"],
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
        nav: false,
        margin: 0,
      },
      768: {
        items: 2,
      },
      1140: {
        items: 2,
        dots: true,
        center: true,
      },
    },
  });
});
