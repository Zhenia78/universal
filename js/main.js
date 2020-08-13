$(document).ready(function () {

  $(".burger").on("click", function () {
    $(".burger__button").toggleClass("menu-active");
    $(".dropdown-menu").toggleClass("menu-active");
    $("body").toggleClass("menu-active");
  });

  $(".tabs-item").on("click", function () {
    $(".tabs-item").removeClass("tab-active");
    $(".tabs-block").removeClass("tab-active");
    $(this).addClass("tab-active");
    $("#" + $(this).attr("data-target")).addClass("tab-active");
  });


  $(".label").on("click", function () {
    $(".label__icon").attr("src", "img/icons/bookmark.svg");
    $("#" + $(this).attr("data-target")).attr("src", "img/icons/bookmark-active.svg");
  });


  var hotNewsSwiper = new Swiper('.hot-news__swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    keyboard: {
      enabled: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  });

  var articleSliderSwiper = new Swiper('.article-slider__container', {
    slidesPerView: 1,
    spaceBetween: 15,
    loop: true,
    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: '.article-slider__button_next',
      prevEl: '.article-slider__button_prev',
    },
  });

});