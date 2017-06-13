$(function () {

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
              slidesToScroll: 1,
            }
          }]
        });
      }
    }
    initSlider($teamSLider);
  })();
});