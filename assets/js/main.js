(function ($) {
  "use strict";

  // sticky header js
  var windowOn = $(window);
  windowOn.on("scroll", function () {
    var scroll = windowOn.scrollTop();
    if (scroll < 100) {
      $("#pf-header-sticky").removeClass("header-sticky");
    } else {
      $("#pf-header-sticky").addClass("header-sticky");
    }
  });

  // MobileMenu
  var pfMenuWrap = $(".pf-mobile-menu-active > ul").clone();
  var pfSideMenu = $(".pf-offcanvas-menu nav");
  pfSideMenu.append(pfMenuWrap);

  // Offcanvas
  $(".pf-offcanvas-toggle").on("click", function () {
    $(".pf-offcanvas").addClass("pf-offcanvas-open");
    $(".pf-offcanvas-overlay").addClass("pf-offcanvas-overlay-open");
  });

  $(".pf-offcanvas-close, .pf-offcanvas-overlay").on("click", function () {
    $(".pf-offcanvas").removeClass("pf-offcanvas-open");
    $(".pf-offcanvas-overlay").removeClass("pf-offcanvas-overlay-open");
  });

  // data bg img
  $("[data-background]").each(function () {
    $(this).css(
      "background-image",
      "url( " + $(this).attr("data-background") + ")",
    );
  });

  // data bg color
  $("[data-bg-color]").each(function () {
    $(this).css("background-color", $(this).attr("data-bg-color"));
  });

  // data color
  $("[data-color]").each(function () {
    $(this).css("color", $(this).attr("data-color"));
  });

  $(".popup-img").magnificPopup({
    type: "image",
  });

  $(".popup-video").magnificPopup({
    type: "iframe",
  });

  // testimonial slider

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,

    loop: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    autoplay: {
      delay: 3000,
    },
  });
})(jQuery);
