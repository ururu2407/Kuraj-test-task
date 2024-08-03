$(function () {
  // Owl Carousel
  var owl = $("#header-slider");
  owl.owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    autoplay: true,
    smartSpeed: 800,
    autoplayTimeout: 5000,
  });
});
$(".nav-btn").on("click", function (e) {
  $(this).toggleClass("on");
  e.preventDefault();
  $(".nav").toggleClass("overlay");
  $("body").toggleClass("locked");
  $(".offer").toggleClass("block");
  $(".nav").toggleClass("enable");
});

document.addEventListener("DOMContentLoaded", function () {
  var dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach(function (dropdown) {
    var toggle = dropdown.querySelector(".dropdown-toggle");
    toggle.addEventListener("click", function (event) {
      event.preventDefault();
      dropdown.classList.toggle("open");
    });
  });

  // Close dropdown if clicked outside
  document.addEventListener("click", function (event) {
    dropdowns.forEach(function (dropdown) {
      if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("open");
      }
    });
  });
});
