window.addEventListener('DOMContentLoaded', function () {
  var $companyNameField = $('.note__company > textarea');
  var $currentSlide = $('.slick-active');
  var printButton = document.querySelector('.sidebar__print');
  var placeholderText;

  var activeSlide = document.querySelector('.slick-slide.slick-current.slick-active div[format]');
  var format = activeSlide.getAttribute('format'); // A4 по умолчанию

  switch (window.locale) {
    case 'ru':
      placeholderText = 'Допишите свой пункт, если нужно';
      break;
    case 'ua':
      placeholderText = 'Допишіть свій пункт, якщо потрібно';
      break;
    default:
      placeholderText = 'Допишите свой пункт, если нужно';
  }

  // var maxHeight = 800;

  // notes slider print logic
  printButton.onclick = function () {
    var itemEditable = document.querySelector('.note__item--editable');

    if (itemEditable) {
      if (itemEditable.classList.contains('note__item--disabled')) {
        itemEditable.classList.add('print-hidden');
      } else {
        itemEditable.classList.remove('print-hidden');
      }
    }

    for (var l = 0; l < $companyNameField.length; l++) {
      if ($companyNameField.length) {
        !$companyNameField[l].value.length && ($companyNameField[l].value = ' ');
      }
    }

    // Statistic send
    var sendStat = window.parent.interactiveStat;
    var data = { interElement: 'memo', type: 'interStat', userAction: 'print', moduleId: window.moduleId, docId: window.id }

    if (typeof sendStat === 'function') {
      sendStat(data);
    }

    var printSlide = document.querySelector('.slick-slide.slick-current.slick-active').cloneNode(true);
    printSlide.style.width = '';
    printSlide.style.display = 'block';

    const containerContentPrint = document.querySelector('.slick-slide.slick-current.slick-active .note--A4')?.cloneNode(true);
    const elementWithLogoClass = document.querySelector('.slick-slide.slick-current.slick-active .container');
    let logoClass = '';

    if (elementWithLogoClass) {
      const logoClasses = elementWithLogoClass.className.match(/note--\w*/gi)
      logoClass = logoClasses && logoClasses[0];
    }

    if (containerContentPrint) {
      containerContentPrint.classList.add('print__A4')
    }

    if (containerContentPrint && logoClass) {
      containerContentPrint.classList.add(logoClass);
    }

    var slider = document.querySelector('.slider');

    slider.after(format === 'A4' ? containerContentPrint : printSlide);
    slider.style.display = 'none';

    setTimeout(function () { // Чтобы успел изображения подгрузить в печать
      window.print();

      slider.style.display = 'flex';
      printSlide.remove();
      containerContentPrint.remove();
      for (var l = 0; l < $companyNameField.length; l++) {
        if ($companyNameField.length) {
          $companyNameField[l].value === ' ' && ($companyNameField[l].value = '');
        }
      }
    }, 400);
  }

  // Company name logic start
  $companyNameField.on('focusout', function () {
    var companyName = $(this).val();

    $companyNameField.each(function (i, item) {
      $(item).val() != companyName && $(item).val(companyName);
    });
  });
  // Company name logic end

  // Download button start
  $('.sidebar__download').on('click', function (e) {
    var button = this;
    button.disabled = true;
    setTimeout(function () {
      button.disabled = false;
    }, 2000);

    var companyInputValue = $('.note__company textarea').first().val();
    var companyName = companyInputValue || '';
    var customInputValue = $('textarea.note__item-content').first().val();
    var note = document.querySelector('.note');
    var sizes = '&width=2.92in&height=4.13in';
    var customValue = customInputValue !== undefined ? '&customValue=' + customInputValue : '';

    if (note.classList.contains('note--A6')) {
      sizes = '&width=4.13in&height=6.25in';
    }

    if (note.classList.contains('note--A4')) {
      sizes = '&width=8.27in&height=11.70in';
    }

    if (note.classList.contains('note--horizontal')) {
      sizes = '&width=4.13in&height=3in';
    }

    // Fix safari blank close
    var link = '/interactive/export/api/v1/document/_get-pdf/?id=' + window.docId + '&filename=' + window.docName + '.pdf&companyName=' + companyName + sizes + customValue;

    var downloadLink = document.createElement('a');
    downloadLink.setAttribute('href', link);
    downloadLink.setAttribute('target', '_blank');
    downloadLink.setAttribute('download', 'download');

    downloadLink.click();

    // Statistic send
    var sendStat = window.parent.interactiveStat;
    var data = { interElement: 'memo', type: 'interStat', userAction: 'download', moduleId: window.moduleId, docId: window.id }

    if (typeof sendStat === 'function') {
      sendStat(data);
    }
  });
  // Download button end

  // Big editable item logic start
  var noteListsArr = document.querySelectorAll('.note__list');
  for (var t = 0; t < noteListsArr.length; t++) {
    if (noteListsArr.length) {
      var listItems = noteListsArr[t].querySelectorAll('li');
      var lastItem = listItems[listItems.length - 1];
      var content = lastItem.querySelector('.note__item-content');

      if (!content.childNodes.length) {
        lastItem.classList.add('note__item--editable', 'note__item--disabled');
        content.remove();
        var textarea = document.createElement('textarea');
        textarea.setAttribute('maxlength', '170');
        textarea.classList.add('note__item-content');
        textarea.placeholder = placeholderText + '\u00A0✎';
        lastItem.appendChild(textarea)
      }
    }
  }

  var textAreas = $('.note__item--editable > textarea');
  for (let i = 0; i < textAreas.length; i++) {
    if (textAreas.length) {
      textAreas[i].addEventListener('focusin', onFocusIn, false);
      textAreas[i].addEventListener('focusout', onFocusOut, false);
    }
  }

  function onFocusOut() {
    var item = this.parentElement;
    var text = this.value;
    var disabledClass = 'note__item--disabled';
    var withTextClass = 'note__item-content--with-text';

    if (text.length) {
      item.classList.remove(disabledClass);
      this.classList.add(withTextClass);
    } else {
      item.classList.add(disabledClass);
      this.classList.remove(withTextClass);
    }
  }

  function onFocusIn() {
    this.classList.remove('note__item-content--with-text');
  }
  // Big editable item logic end

  // Checklist item logic start
  var checkItem = document.querySelectorAll('.checklist > li');

  for (var j = 0; j < checkItem.length; j++) {
    if (checkItem.length) {
      checkItem[j].addEventListener('click', onClickCheck, false);
    }
  }

  function onClickCheck() {
    this.classList.toggle('checked');
  }
  // Checklist item logic end

  // Company name logic start
  $currentSlide.find('.note__company > textarea').on('change', function () {
    var val = $(this).val();

    $('.note__company > textarea').each(function (i, itm) {
      $(itm).val() != val && $(itm).attr('value', val);
    });
  });
  // Company name logic end

  // A7/A6 icon in sidebar start
  var formatHolder = $('.sidebar__format');
  var a7Icon = formatHolder.css('background-image');
  var a6Icon = a7Icon.replace('paper-size', 'paper-size-a6');
  var a4Icon = a7Icon.replace('paper-size', 'paper-size-a4');

  if ($currentSlide.find('.note').hasClass('note--A6')) {
    formatHolder.css('background-image', a6Icon);
  }

  if ($currentSlide.find('.note').hasClass('note--A4')) {
    formatHolder.css('background-image', a4Icon);
  }

  $('.main-slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    if ($(slick.$slides[currentSlide]).find('.note').hasClass('note--A6')) {
      formatHolder.css('background-image', a6Icon);
    } else if ($(slick.$slides[currentSlide]).find('.note').hasClass('note--A4')) {
      formatHolder.css('background-image', a4Icon);
    } else {
      formatHolder.css('background-image', a7Icon);
    }
  });
  // A7/A6 icon in sidebar end

  // CSS counter find double digit start
  $('.note__list').each(function (i, item) {
    var ordinalNumber = +getComputedStyle(item).getPropertyValue('--counter-start') + 1;

    if (item) {
      $(item).find('li').each(function (indx, itm) {
        indx + ordinalNumber > 9 && $(this).addClass('note__double-digit');
      })
    }

  });
  // CSS counter find double digit end

  // Horizontal memos sidebar to bottom start
  if ($('.note').hasClass('note--horizontal')) {
    var $slider = $('.note').closest('.slider');

    $slider.css('flex-direction', 'column');
    $slider.find('.sidebar').addClass('sidebar--horizontal');
  }
  // Horizontal memos sidebar to bottom end
});
