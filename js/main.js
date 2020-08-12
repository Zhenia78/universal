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


  var swiper = new Swiper('.hot-news__swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.hot-news__button-next',
      prevEl: '.hot-news__button-prev',
    },
  });

  var swiper = new Swiper('.article-slider__container', {
    slidesPerView: 1,
    spaceBetween: 30,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.article-slider__button-next',
      prevEl: '.article-slider__button-prev',
    },
  });

});