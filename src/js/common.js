$(function () {

  var $customSelect = $('.js-select');
  $customSelect.selectric();

  var $testimonialsSlider = $('.js-testimonials-slider');
  var $choiceSlider = $('.js-choice-slider');

  $testimonialsSlider.on('afterChange init', function (event, slick, direction) {
      console.log('afterChange/init', event, slick, slick.$slides);
      // remove all prev/next
      slick.$slides.removeClass('prevdiv').removeClass('nextdiv');

      // find current slide
      for (var i = 0; i < slick.$slides.length; i++) {
        var $slide = $(slick.$slides[i]);
        if ($slide.hasClass('slick-current')) {
          // update DOM siblings
          $slide.prev().addClass('slick-prev');
          $slide.next().addClass('slick-next');
          break;
        }
      }
    }
  ).on('beforeChange', function (event, slick) {
    // optional, but cleaner maybe
    // remove all prev/next
    slick.$slides.removeClass('slick-prev').removeClass('slick-next');
  }).slick({
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
    // responsive: [{
    //   breakpoint: 767,
    //   settings: {
    //     centerMode: false,
    //     centerPadding: 0
    //   }
    // }]
  });
});