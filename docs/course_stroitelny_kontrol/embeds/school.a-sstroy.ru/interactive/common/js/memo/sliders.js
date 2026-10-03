(function ($) {
  $(document).ready(function () {
    // Slider
    var visiblePreviewSlides = 10;
    var previewSlider$ = $('.preview-slider');
    var mainSlider$ = $('.main-slider');
    var borderCoef = 0;
    var previewSliderChildLength = previewSlider$.children().length;
    var previewSliderConfig = {
      slidesToShow: visiblePreviewSlides,
      slidesToScroll: 2,
      asNavFor: '.main-slider',
      dots: false,
      centerMode: true,
      centerPadding: '-50%',
      focusOnSelect: true,
      variableWidth: true,
      infinite: false,
      arrows: false,
      swipeToSlide: true,
    };
    var mainSliderConfig = {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: $('#arrow-left'),
      nextArrow: $('#arrow-right'),
      fade: false,
      asNavFor: '.preview-slider',
      infinite: false,
    };
    var isNote = $('.note').length ? true : false;

    function setPreviewOffset(activeSlideNum, slideWidth) {
      var container = $('.preview-slider .slick-list');
      var leftValue;

      if (activeSlideNum < 5) {
        leftValue = 0
      } else if (!(activeSlideNum >= previewSliderChildLength - Math.ceil(visiblePreviewSlides / 2))) {
        leftValue = -((slideWidth + borderCoef) * (activeSlideNum - 4))
      } else {
        leftValue = -((slideWidth + borderCoef) * (previewSliderChildLength - visiblePreviewSlides))
      }

      container.css('left', leftValue);
    }

    function recalculatePreviewSlider(isNewInst) {
      var container = $('.preview-slider .container');
      var heigthDif = isNote ? 0 : 10;
      var slideHeight = container.get(0).getBoundingClientRect().height + heigthDif;
      var slideWidth = (window.innerWidth / visiblePreviewSlides) - borderCoef;
      container.each(function () {
        var sliderEl$ = $(this).closest('.slick-slide');
        sliderEl$.width(slideWidth);
        sliderEl$.height(slideHeight);
      });
    }

    previewSlider$.on('init', function (slick) {
      borderCoef = parseInt($(previewSlider$.children()[0]).find('.slick-slide').css('border-width')) * 2 || 2;
      recalculatePreviewSlider(true);
    });

    if (previewSliderChildLength <= visiblePreviewSlides) {
      previewSliderConfig.slidesToShow = previewSliderChildLength;
      previewSliderConfig.centerMode = false;
      previewSlider$.addClass('centered-preview');
    }
    mainSlider$.slick(mainSliderConfig);

    if (previewSliderChildLength > 1) {
      previewSlider$.slick(previewSliderConfig);
    } else {
      previewSlider$.hide();
    }

    $(window).resize(function () {
      recalculatePreviewSlider();
    });

    // Inputs
    var classNames = {
      nameField: 'jsNameField',
      nameInput: 'slide__name-input',
      siteField: 'jsSiteField',
      siteInput: 'slide__site-input'
    };
  })
})($);
