'use strict';

$(function () {

  $('[data-fancybox]').fancybox();

  $('.js-reserv-more').on('click', function () {
    $('.reserv__more-in').fadeToggle();
  });

  var $customSelect = $('.js-select');
  $customSelect.selectric({
    disableOnMobile: false,
    nativeOnMobile: false
  });

  var $testimonialsSlider = $('.js-testimonials-slider');
  var $choiceSlider = $('.js-choice-slider');

  $testimonialsSlider.slick({
    centerMode: true,
    focusOnSelect: true,
    useTransform: true,
    centerPadding: '25%',
    cssEase: 'ease-in-out',
    variableHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    arrows: true,
    prevArrow: '<button type="button" class="testimonials__slider-arr testimonials__slider-arr_prev"><svg class="testimonials__slider-icon icon-arr-sld_l"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arr-sld_l"></use></svg></button>',
    nextArrow: '<button type="button" class="testimonials__slider-arr testimonials__slider-arr_next"><svg class="testimonials__slider-icon icon-arr-sld_r"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arr-sld_r"></use></svg></button>',
    responsive: [{
      breakpoint: 767,
      settings: {
        centerMode: false,
        centerPadding: 0
      }
    }]
  });

  $choiceSlider.slick({
    useTransform: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    arrows: true,
    prevArrow: '<button type="button" class="choice-slider__btn choice-slider__btn_prev"><svg class="choice-slider__btn-icon icon-arr-sld_l"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arr-sld_l"></use></svg></button>',
    nextArrow: '<button type="button" class="choice-slider__btn choice-slider__btn_next"><svg class="choice-slider__btn-icon icon-arr-sld_r"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arr-sld_r"></use></svg></button>'
  });

  (function () {
    var $teamSLider = $('.js-team-slider');
    var $awardsSlider = $('.js-awards-gallery');

    function initSlider(slider) {
      initSlickSlider(slider);
      toggleSlider(1023, slider);
      $(window).resize(function () {
        toggleSlider(1023, slider);
      });

      function toggleSlider(breakpoint, slider) {
        if ($(window).width() < breakpoint) {
          if (!slider.hasClass('slick-initialized')) {
            initSlickSlider(slider);
          }
        } else {
          slider.slick('unslick');
        }
      }

      function initSlickSlider(slider) {
        slider.slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          prevArrow: '<button type="button" class="team__slider-btn team__slider-btn_prev"><svg class="team__slider-btn-icon icon-arr-sld_l"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arr-sld_l"></use></svg></button>',
          nextArrow: '<button type="button" class="team__slider-btn team__slider-btn_next"><svg class="team__slider-btn-icon icon-arr-sld_r"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arr-sld_r"></use></svg></button>',
          responsive: [{
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }]
        });
      }
    }
    initSlider($teamSLider);
    initSlider($awardsSlider);
  })();

  $(function () {
    (function () {
      ymaps.ready(init);
      var aboutMap;

      function init() {
        aboutMap = new ymaps.Map('js-about-map', {
          center: [53.17558202121662, 50.06785157719889],
          zoom: 12
        });

        aboutMap.behaviors.disable('scrollZoom');
        aboutMap.controls.remove('zoomControl');
        aboutMap.controls.remove('geolocationControl');
        aboutMap.controls.remove('searchControl');
        aboutMap.controls.remove('trafficControl');
        aboutMap.controls.remove('typeSelector');
        aboutMap.controls.remove('fullscreenControl');
      }
    })();
  });

  (function () {
    ymaps.ready(init);
    var realTimeMap, currentLoc;

    function init() {
      realTimeMap = new ymaps.Map('js-real-time-map', {
        center: [53.27351976207731, 50.140731378906196],
        zoom: 5
      }), currentLoc = new ymaps.Placemark([53.27351976207731, 50.140731378906196], {
        // iconLayout: 'default#image',
        // iconImageHref: '../img/sprite.png',
        // iconImageSize: [33, 27],
        // iconImageOffset: [-15, -27],
      });

      realTimeMap.geoObjects.add(currentLoc);
      realTimeMap.behaviors.disable('scrollZoom');
      realTimeMap.controls.remove('zoomControl');
      realTimeMap.controls.remove('geolocationControl');
      realTimeMap.controls.remove('searchControl');
      realTimeMap.controls.remove('trafficControl');
      realTimeMap.controls.remove('typeSelector');
      realTimeMap.controls.remove('fullscreenControl');
    }
  })();
});