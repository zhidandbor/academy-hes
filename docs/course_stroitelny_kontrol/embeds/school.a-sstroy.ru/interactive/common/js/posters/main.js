window.addEventListener('DOMContentLoaded', function() {
  // input logic
  var nameField = document.getElementById('nameField');
  var nameInput = document.getElementById('nameInput');
  var memoField = document.getElementById('memoField');
  var memoInput = document.getElementById('memoInput');
  var downloadButton = document.querySelector('.sidebar__download');
  var printButton = document.querySelector('.sidebar__print');

  switch (window.locale) {
    case 'ru':
      var MEMO_PLACEHOLDER = 'Памятка сотруднику';
      var NAME_PLACEHOLDER = 'Название организации';
        break;
    case 'ua':
      var MEMO_PLACEHOLDER = 'Пам’ятка працівникові';
      var NAME_PLACEHOLDER = 'Назва організації';
        break;
    default:
      var MEMO_PLACEHOLDER = 'Памятка сотруднику';
      var NAME_PLACEHOLDER = 'Название организации';
  }

  nameInput.setAttribute('placeholder', NAME_PLACEHOLDER + '\u00A0✎');
  memoInput.setAttribute('placeholder', MEMO_PLACEHOLDER + '\u00A0✎');

  nameInput.setAttribute('maxlength', '30');
  memoInput.setAttribute('maxlength', '30');

  nameField.style.wordBreak = "break-all";
  memoField.style.wordBreak = "break-all";

  function inputText(input, field) {
    if (input.value) {
      field.style.display = 'block';
      input.style.display = 'none';
      field.textContent = input.value;
    }
  }

  function onClickName() {
    nameField.style.display = 'none';
    nameInput.style.display = 'block';
    nameInput.focus();
  }

  function onClickMemo() {
    memoField.style.display = 'none';
    memoInput.style.display = 'block';
    memoInput.focus();
  }

  nameField.onclick = function () {
    return onClickName();
  };

  nameInput.onfocus = function () {
    nameInput.setAttribute('placeholder', NAME_PLACEHOLDER)
  };

  nameInput.onchange = function () {
    return inputText(nameInput, nameField);
  };

  nameInput.onblur = function() {
    inputText(nameInput, nameField);
    this.setAttribute('placeholder', NAME_PLACEHOLDER + '\u00A0✎');
  }

  memoField.onclick = function () {
    return onClickMemo();
  };

  memoInput.onfocus = function () {
    memoInput.setAttribute('placeholder', MEMO_PLACEHOLDER)
  };

  memoInput.onchange = function () {
    return inputText(memoInput, memoField);
  };

  memoInput.onblur = function () {
    inputText(memoInput, memoField);
    this.setAttribute('placeholder', MEMO_PLACEHOLDER + '\u00A0✎');
  };

  // checkbox logic
  var items = document.querySelectorAll('.checklist__item');

  if (items && items.length) {
    for (var i = 0; i < items.length; i++) {
      (function (item) {
        item.onclick = function() {
		  var box = item.querySelector('.checklist__box');
		  var checkedBox = item.querySelector('.checklist__checked-box');
          box.style.display = box.style.display === 'none' ? '' : 'none';
          checkedBox.style.display = checkedBox.style.display === 'block' ? 'none' : 'block';
        }

      })(items[i]);
    }
  }

  downloadButton.onclick = function () {
    downloadButton.disabled = true;
    setTimeout(function () {
      downloadButton.disabled = false;
    }, 2000);

    var nameInputValue = nameInput.value;
    var memoInputValue = memoInput.value;
    var sizes = 'width=210.14058mm&height=297.18mm';
    var mainConteiner = document.querySelector('.poster-content>div>div');

    if (mainConteiner.classList.contains('can-not-2') || mainConteiner.classList.contains('can-not-3') || mainConteiner.classList.contains('can-not-focus')) {
      sizes = 'width=297.18mm&height=210.5mm';
    }

    function openDownloadWindow() {
      // Fix safari blank close
      var link = '/interactive/export/api/v1/document/_get-pdf/?id=' + window.docId + '&filename=' + window.docName + '.pdf&companyName=' + nameInputValue + '&companySite=' + memoInputValue + '&' + sizes;
    
      var downloadLink = document.createElement('a');
      downloadLink.setAttribute('href', link);
      downloadLink.setAttribute('target', '_blank');
      downloadLink.setAttribute('download', 'download');

      downloadLink.click();
    }

    // var imageSrc = mainConteiner
    //   .style
    //   .backgroundImage
    //   .replace(/url\((['"])?(.*?)\1\)/gi, '$2')
    //   .split(',')[0];
    //
    // if (imageSrc) {
    //   var image = new Image();
    //   image.src = imageSrc;
    //
    //   image.onload = function() {
    //     sizes = `width=${image.width}px&height=${image.height}px`;
    //     openDownloadWindow();
    //   };
    // } else {
    //   openDownloadWindow();
    // }

    openDownloadWindow();

    // Statistic send
    var sendStat = window.parent.interactiveStat;
    var data = { interElement: 'poster', type: 'interStat', userAction: 'download', moduleId: window.moduleId, docId: window.id }

    if (typeof sendStat === 'function') {
      sendStat(data);
    }
  };

	// Logo cache
	var logo = document.querySelector('[class*="__logo"]');
	var style = window.getComputedStyle(logo);
	var logoSrc = style.getPropertyValue('background-image');
	var svgPath = logoSrc.replace(/url\(\"|black\/|white\/|\"\)/gi, '');
	var img = new Image();
	img.src = svgPath;
	img.setAttribute('style', 'display: block; max-width: 100%; height: 16px;');

	window.onbeforeprint = function() {
		logo.innerHTML = '';
		logo.appendChild(img);
		logo.style.setProperty('background-image', 'none', 'important');
	};

	window.onafterprint = function() {
		logo.style.backgroundImage = logoSrc;
		img.remove();
	};

  printButton.onclick = function () {
    window.print();

    // Statistic send
    var sendStat = window.parent.interactiveStat;
    var data = { interElement: 'poster', type: 'interStat', userAction: 'print', moduleId: window.moduleId, docId: window.id }

    if (typeof sendStat === 'function') {
      sendStat(data);
    }
  };

  // add styles for landscape posters
  var landscapeClasses = ['can-not-2', 'can-not-3', 'can-not-focus'];
  var newLink = document.createElement("link");
  newLink.rel = "stylesheet";
  newLink.href = "../../common/css/posters/print-landscape.css";

  landscapeClasses.forEach(function(item) {
	return document.getElementsByClassName(item).length && document.head.appendChild(newLink);
  });

	// sidebar sticky
	/* function computeFrameOffset(win, dims) {
		// initialize our result variable
		if (typeof dims === 'undefined') {
			var dims = { top: 0, height: 0 };
		}

		// find our <iframe> tag within our parent window
		var frames = win.parent.document.getElementsByTagName('iframe');
		var frame;
		var found = false;

		for (var i=0, len=frames.length; i<len; i++) {
			frame = frames[i];
			if (frame.contentWindow == win) {
				found = true;
				break;
			}
		}

		// add the offset & recur up the frame chain
		if (found) {
			var rect = frame.getBoundingClientRect();
			dims.height += rect.height;
			dims.top += rect.top;
			if (win !== top) {
				computeFrameOffset(win.parent, dims);
			}
		}
		return dims;
	};

	var sidebar = document.querySelector('.sidebar');

	window.parent.addEventListener('scroll', function() {
		var iframePos = computeFrameOffset(window);
		if (iframePos.top >= 0) {
			sidebar.style.top = 0;
		} else if (iframePos.top < 0 && (iframePos.top + iframePos.height) - sidebar.offsetHeight >= 0) {
			sidebar.style.top = Math.abs(iframePos.top) + 'px';
		} else if ((iframePos.top + iframePos.height) - sidebar.offsetHeight < 0) {
			sidebar.style.top = (iframePos.height - sidebar.offsetHeight) + 'px';
		}
	}); */

});

// iframe wrapper size logic
// TODO rewrite to postMessage()
function resizeIframeWrapper() {
	var wrappers = window.parent.document.querySelectorAll('.article-detached-iframe-wrapper-wide');

	if (wrappers && wrappers.length && window.parent.innerWidth > 991) {
		for (var i = 0; i < wrappers.length; i++) {
			(function (wrapper) {
				wrapper.parentElement.hasAttribute('blockid') && wrapper.parentElement.setAttribute('style', 'margin-right: -267px; max-width: unset;');
			})(wrappers[i]);
		}
	}
}

// listener for direct link
window.parent.addEventListener('load', resizeIframeWrapper);

// listener for article feed
window.addEventListener('load', function() {
	resizeIframeWrapper();
});
