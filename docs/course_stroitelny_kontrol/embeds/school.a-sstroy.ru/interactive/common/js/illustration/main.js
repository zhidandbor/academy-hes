$(window).on('load', function() {
    var $illustration = $('.illustration__wrapper');
    var illWidth = $illustration.outerWidth();
    var illHeight = $illustration.outerHeight();
    var $dots = $illustration.find('.illustration__dot');

    $dots.each(function(i, item) {
        var offset = $(this).offset();

        $(item).on('mouseenter', function() {
            $(this).next().slideToggle({
                duration: 300,
                start: function() {
                    // заворачиваем вовнутрь выпадашку, если справа нет места
                    if (illWidth - offset.left < 361) {
                        $(this).addClass('illustration__dropdown--opposite-left');
                        $(this).css('max-height', $(this).outerHeight()); // fix высоты выпадашки при первом клике
                    }

                    // заворачиваем вовнутрь выпадашку, если снизу нет места
                    if (illHeight - offset.top < $(this).outerHeight() + 32) {
                        $(this).addClass('illustration__dropdown--opposite-top');
                        $(this).css('max-height', $(this).outerHeight()); // fix высоты выпадашки при первом клике
                    }
                },
            });
        });

        $(item).parent().on('mouseleave', function() {
            $dropdown.slideUp(300);
        });

        var $dropdown = $(item).next();
        var $close =  $dropdown.find('.illustration__dropdown-close');

        $dropdown[0].addEventListener('touchstart', handleTouchStart, false);
        $dropdown[0].addEventListener('touchmove', handleTouchMove, false);

        $(document).mouseup(function(e) {
            if (!$(item).is(e.target) && !$dropdown.is(e.target) && !$close.is(e.target)) {
                $dropdown.slideUp(300);
            }
        });

        $close.on('click', function(e) {
            $dropdown.slideUp(300);
        });
    });

    var xDown = null;
    var yDown = null;

    function getTouches(evt) {
        return evt.touches ||             // browser API
                evt.originalEvent.touches; // jQuery
    }

    function handleTouchStart(evt) {
        const firstTouch = getTouches(evt)[0];
        xDown = firstTouch.clientX;
        yDown = firstTouch.clientY;
    };

    function handleTouchMove(evt) {
        if ( ! xDown || ! yDown ) {
            return;
        }

        var xUp = evt.touches[0].clientX;
        var yUp = evt.touches[0].clientY;

        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;

        if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
            if ( xDiff > 0 ) {
                /* left swipe */
            } else {
                /* right swipe */
            }
        } else {
            if ( yDiff > 0 ) {
                /* up swipe */
            } else {
                $(this).slideUp(300);
            }
        }
        /* reset values */
        xDown = null;
        yDown = null;
    };

    // Скрипт для автоподстройки высоты iframe'а
    var script = document.createElement('script');
    script.src = '/interactive/common/js/iframeResizer.contentWindow.min.js';
    script.async = true;
    document.body.appendChild(script);
});
