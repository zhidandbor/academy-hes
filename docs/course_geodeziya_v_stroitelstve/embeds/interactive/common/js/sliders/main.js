(function ($) {
  $(document).ready(function() {
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
      var slideHeight = container.get(0).getBoundingClientRect().height + 10;
      var slideWidth = (window.innerWidth / visiblePreviewSlides) - borderCoef;
      container.each(function () {
        var sliderEl$ = $(this).closest('.slick-slide');
        sliderEl$.width(slideWidth);
        sliderEl$.height(slideHeight);
      });
      // if (!isNewInst) {
      //   var currentSlide = previewSlider$.slick('slickCurrentSlide');
      //   setPreviewOffset(currentSlide, slideWidth);
      // }
    }

    previewSlider$.on('init', function (slick) {
      borderCoef = parseInt($(previewSlider$.children()[0]).find('.slick-slide').css('border-width')) * 2 || 2;
      recalculatePreviewSlider(true);
      // if (previewSliderChildLength > visiblePreviewSlides) {
      //   previewSlider$.find('.slick-list').css('width', 20000)
      // }
    });

    if (previewSliderChildLength <= visiblePreviewSlides) {
      previewSliderConfig.slidesToShow = previewSliderChildLength;
      previewSliderConfig.centerMode = false;
      previewSlider$.addClass('centered-preview');
    }
    // else {
    //   previewSlider$.on('beforeChange', function (slick, slider, currentSlideNum, nextSlideNum) {
    //     setPreviewOffset(nextSlideNum, slider.$slides[0].getBoundingClientRect().width - borderCoef);
    //   })
    // }

    mainSlider$.slick(mainSliderConfig);
    if (previewSliderChildLength > 1) {
      previewSlider$.slick(previewSliderConfig);
    } else {
      previewSlider$.hide();
    }

    mainSlider$.on('afterChange', function() {
      // Statistic send
      var sendStat = window.parent.interactiveStat;
      var data = { interElement: 'slider', type: 'interStat', userAction: 'slide', moduleId: window.moduleId, docId: window.id }

      if (typeof sendStat === 'function') {
        sendStat(data);
      }
    });

    $(window).resize(function() {
      recalculatePreviewSlider();
    });


    // Inputs
    var classNames = {
      nameField: 'jsNameField',
      nameInput: 'slide__name-input',
      siteField: 'jsSiteField',
      siteInput: 'slide__site-input'
    };
    /* var wrapper$ = $('.slider-wrapper'); */

    /* wrapper$.on('click', function (e) {
      e.stopPropagation();
      var target$ = $(e.target);
      if (target$.hasClass(classNames.nameField)) {
        target$.hide();
        target$.parent().find(`.${classNames.nameInput}`).show().focus();
      } else if (target$.hasClass(classNames.siteField)) {
        target$.hide();
        target$.parent().find(`.${classNames.siteInput}`).show().focus();
      }
    }); */
    /* wrapper$.on('change', function (e) {
      e.stopPropagation();
      var
        target$ = $(e.target),
        targetValue = target$.val(),
        field$,
        inputClass,
        fieldClass;
      if (target$.hasClass(classNames.nameInput)) {
        inputClass = classNames.nameInput;
        fieldClass = classNames.nameField;
        field$ = target$.parent().find(`.${fieldClass}`);
      } else if (target$.hasClass(classNames.siteInput)) {
        inputClass = classNames.siteInput;
        fieldClass = classNames.siteField;
        field$ = target$.parent().find(`.${fieldClass}`);
      }
      if (field$) {
        target$.hide();
        field$.show();
        field$.text(targetValue);
        $(`.${inputClass}`).each(function () {
          var el = $(this);
          el.val(targetValue);
          if (targetValue) {
            el.hide()
          } else {
            el.show()
          }
        });
        $(`.${fieldClass}`).each(function () {
          var el = $(this);
          el.text(targetValue);
          if (targetValue) {
            el.show()
          } else {
            el.hide()
          }
        });
      }
    }); */

	// resize logic
    function debounce(func, wait, immediate) {
        var timeout;
        return function() {
			var context = this, args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
        };
    };

    var resizeFn = debounce(function() {
		var container = document.querySelector('.container');
        var slide = container.getElementsByTagName('div')[0];
        var slideBody = slide.getElementsByTagName('div')[0];
        var slideFooter = slide.getElementsByTagName('div')[1];
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        var slideStyles = window.getComputedStyle(slide, null);
/*
        if (windowWidth / windowHeight > 1.77777778) {
			slide.style.maxWidth = (windowHeight * 1.77777778) + 'px';
			slide.style.height = '100%';
        } else {
			slide.style.maxWidth = '100vw';
			slide.style.height = (windowWidth / 1.77777778) + 'px';
        }
*/
        if (windowWidth / windowHeight > 1.2) {
			slide.classList.remove('verticalScreen');
        } else {
			slide.classList.add('verticalScreen');
        }

        /* slideBody.style.height = 'calc(100% - ' + slideFooter.offsetHeight + 'px - ' + slideStyles.getPropertyValue('padding-bottom') + ')'; */
    }, 100);

    $(window).load(resizeFn);
    $(window).resize(resizeFn);


    // fullscreen
    document.querySelector('.fullscreen-toggler').onclick = function () {
		//Toggle fullscreen off, activate it
		if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {
			if (document.querySelector('.slider-wrapper').requestFullscreen) {
				document.querySelector('.slider-wrapper').requestFullscreen();
			} else if (document.querySelector('.slider-wrapper').mozRequestFullScreen) {
			document.querySelector('.slider-wrapper').mozRequestFullScreen(); // Firefox
			} else if (document.querySelector('.slider-wrapper').webkitRequestFullscreen) {
				document.querySelector('.slider-wrapper').webkitRequestFullscreen(); // Chrome and Safari
			} else if (document.querySelector('.slider-wrapper').msRequestFullscreen) {
				document.querySelector('.slider-wrapper').msRequestFullscreen(); // IE
			}

		//Toggle fullscreen on, exit fullscreen
		} else {

			if (document.exitFullscreen) {
				document.exitFullscreen();
			} else if (document.msExitFullscreen) {
				document.msExitFullscreen();
			} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			} else if (document.webkitExitFullscreen) {
				document.webkitExitFullscreen();
			}
		}
    };

	/* $(document).on('fullscreenchange', function() {
		autosize($('textarea'));
  }); */

  // Переменные для вставки текста на разных языках
  switch (window.locale) {
    case 'ru':
      var SITE_PLACEHOLDER = 'Адрес сайта';
      var NAME_PLACEHOLDER = 'Название организации';
        break;
    case 'ua':
      var SITE_PLACEHOLDER = 'Адреса сайту';
      var NAME_PLACEHOLDER = 'Назва організації';
        break;
    default:
      var SITE_PLACEHOLDER = 'Адреса сайта';
      var NAME_PLACEHOLDER = 'Название организации';
  }

    $('.slide__name-input').attr('placeholder', NAME_PLACEHOLDER + '\u00A0✎')

    $('textarea').on('focus', function (e) {
      e.stopPropagation();
      var target = $(this);
      if (target.hasClass(classNames.nameInput)) {
        target.attr('placeholder', NAME_PLACEHOLDER)
      } else if (target.hasClass(classNames.siteInput)) {
        target.attr('placeholder', SITE_PLACEHOLDER)
      }
    });

    $('textarea').on('blur', function (e) {
      e.stopPropagation();
      var target = $(this);
      if (target.hasClass(classNames.nameInput)) {
        target.attr('placeholder', NAME_PLACEHOLDER + '\u00A0✎')
      } else if (target.hasClass(classNames.siteInput)) {
        target.attr('placeholder', SITE_PLACEHOLDER + '\u00A0✎')
      }
    });

    $('textarea').on('change', function (e) {
      var target = $(this);
      $('.' + target.attr('class')).val(target.val()).height(target.height());
    });

    $('.additional__download').on('click', function (e) {
      var button = this;
      button.disabled = true;
      setTimeout(function () {
        button.disabled = false;
      }, 2000);

      var nameInputValue = $('.' + classNames.nameInput).first().val();
      var siteInputValue = $('.' + classNames.siteInput).first().val();

      // Fix safari blank close
      var link = '/interactive/export/api/v1/document/_get-pdf/?id=' + window.docId + '&filename=' + window.docName + '.pdf&companyName=' + nameInputValue + '&companySite=' + siteInputValue + '&width=1280px&height=720px';

      var downloadLink = document.createElement('a');
      downloadLink.setAttribute('href', link);
      downloadLink.setAttribute('target', '_blank');
      downloadLink.setAttribute('download', 'download');

      downloadLink.click();

      // Statistic send
      var sendStat = window.parent.interactiveStat;
      var data = { interElement: 'slider', type: 'interStat', userAction: 'download', moduleId: window.moduleId, docId: window.id }

      if (typeof sendStat === 'function') {
        sendStat(data);
      }
    });

    // autosize input
	var tx = document.getElementsByTagName("textarea");
	for (var i = 0; i < tx.length; i++) {
	  tx[i].setAttribute(
		"style",
		"height:100%;overflow:hidden;"
	  );
	  tx[i].addEventListener("input", onInput, false);
	}

	function onInput() {
	  this.style.height = "auto";
	  this.style.height = this.scrollHeight + "px";
	}

	document.addEventListener("fullscreenchange", function() {
		function onFullscreen() {
		  for (var idx = 0; idx < tx.length; idx++) {
			tx[idx].style.height = "auto";
			tx[idx].style.height = tx[idx].scrollHeight + "px";
			tx[idx].scrollTop = tx[idx].scrollHeight;
		  }
		}
		setTimeout(onFullscreen, 300);
	}, false);

  })
})($);
