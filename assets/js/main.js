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

  // testimonial slider

  var swiper = new Swiper(".pf-testimonial-active", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // blog slider

  var swiper = new Swiper(".pf-blog-active", {
    slidesPerView: 4,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });

  // brand slider
  var swiper = new Swiper(".pf-brand-active", {
    slidesPerView: "auto",
    spaceBetween: 30,
    freemode: true,
    centeredSlides: true,
    loop: true,
    speed: 4000,
    allowTouchMove: false,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
  });
})(jQuery);
