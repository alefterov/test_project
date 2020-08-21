$(document).ready(() => {

    $(".menu__button").click(() => {
        if ($(".menu__container").hasClass("active-menu")) {
            $(".menu__container").removeClass("active-menu");
            $('.analitic__submenu').removeClass('active');
            $(".menu__button").removeClass("active-button");
        } else {
            $(".menu__container").addClass("active-menu");
            $('.analitic__submenu').removeClass('active');
            $(".menu__button").addClass("active-button");
        }
    });
    $(".clise-menu__item").click(() => {
        if ($(".menu__container").hasClass("active-menu")) {
            $(".menu__container").removeClass("active-menu");
            $('.analitic__submenu').removeClass('active');
            $(".menu__button").removeClass("active-button");
        } else {
            $(".menu__container").addClass("active-menu");
            $('.analitic__submenu').removeClass('active');
            $(".menu__button").addClass("active-button");
        }
    });
    let isResizeble = false;

    $(document).scroll(() => {
        let windowPosition = $(window).scrollTop() + $(window).height();
        let firstBottomBorder = $(".first__item").offset().top + $(".first__item").height();
        let secondBottomBorder = $(".second__item").offset().top + $(".second__item").height();
        let thirdBottomBorder = $(".third__item").offset().top + $(".third__item").height();
        let fourthBottomBorder = $(".fourth__item").offset().top + $(".fourth__item").height();
        let fifthBottomBorder = $(".fifth__item").offset().top + $(".fifth__item").height();
        let sixthBottomBorder = $(".sixth__item").offset().top + $(".sixth__item").height();

        if (firstBottomBorder < windowPosition) {
            $(".first__item").addClass('active');
        }
        if (secondBottomBorder < windowPosition) {
            $(".second__item").addClass('active');
        }
        if (thirdBottomBorder < windowPosition) {
            $(".third__item").addClass('active');
        }
        if (fourthBottomBorder < windowPosition) {
            $(".fourth__item").addClass('active');
        }
        if (fifthBottomBorder < windowPosition) {
            $(".fifth__item").addClass('active');
        }
        if (sixthBottomBorder < windowPosition) {
            $(".sixth__item").addClass('active');
        }
        let workBottomBorder = $(".work").offset().top + $(".work").height();
        if (workBottomBorder < windowPosition && !isResizeble) {

            let start_1 = 0;
            let start_2 = 0;
            let start_3 = 0;
            let firstTimer = setInterval(() => {
                for (var i = 0; i < 13; i++) {
                    start_1 += 1;

                }
                $('.lines__1').html("<h1>" + start_1 + "</h1>");
                if (start_1 > 2925) {
                    clearInterval(firstTimer);
                };
            }, 1000 / 2712);
            let secondTimer = setInterval(() => {
                for (var i = 0; i < 1000; i++) {
                    start_2 += 10;
                }
                $('.lines__2').html("<h1>" + start_2 + " $</h1>");
                if (start_2 > 2240000) {
                    clearInterval(secondTimer);
                };
            }, 1000 / 6910000);
            let thirdTimer = setInterval(() => {
                start_3 += 1;
                $('.lines__3').html("<h1>" + start_3 + "</h1>");
                if (start_3 > 3) {
                    clearInterval(thirdTimer);
                };
            }, 1000 / 4);


            setTimeout(() => {
                clearInterval(firstTimer);
                clearInterval(secondTimer);
                clearInterval(thirdTimer);
            }, 2000);
            isResizeble = true;
        }

        // var scrolled = $(window).scrollTop();
        // // $('.bg').css('top',-(scrolled*0.1)+'px');
        // $(window).bind('mousewheel', (event) => {
        //     let windowPosition = $(window).scrollTop() + $(window).height();
        //     let suggestionTopBorder = $('.suggestions').offset().top;
        //     if (event.originalEvent.wheelDelta >= 0) {
        //         if (suggestionTopBorder < windowPosition) {
        //             $('.suggestions__background').css('top', -(scrolled * 0.01) + 'px')
        //         }
        //     } else {
        //         if (suggestionTopBorder < windowPosition) {
        //             $('.suggestions__background').css('top', -(scrolled * 0.01) + 'px')
        //         }
        //     }
        // }); // console.log($(".first__item").offset().top);
    });
    let slideMoove = 0;
    $(".slider__right").click(() => {
        if (slideMoove == -200 * 9) {
            slideMoove = slideMoove - 0;
        } else {
            slideMoove = slideMoove - 200;
        }

        $('.slider__area').css('margin-left', slideMoove);
    });
    $(".slider__left").click(() => {
        if (slideMoove == 0) {
            slideMoove = slideMoove + 0;
        } else {
            slideMoove = slideMoove + 200;
        }

        $('.slider__area').css('margin-left', slideMoove);
    });

    $('.sugesrion__button').click(() => {
        $('.consultation-popap').css('display', 'flex');
    });
    $('.know__button').click(() => {
        $('.consultation-popap').css('display', 'flex');
    });
    $('.top-consultetion').click(() => {
        $('.consultation-popap').css('display', 'flex');
    });

    $('.consultation__close').click(() => {
        $('.consultation-popap').css('display', 'none');
    });

    $('.callback-bot__button').click(() => {
        $('.callback-bot__popap').css('bottom', '0');
    });

    $('.callback-bot__close').click(() => {
        $('.callback-bot__popap').css('bottom', '-500px');
    });


    $('#analitic__pagination').click(() => {
        $('.market-review__container').removeClass('active');
        $('.cuorces__container').removeClass('active');
        $('.criptomarket__container').removeClass('active');
        $('.economic-calendar__container').addClass('active');

        $('#market-review').removeClass('active');
        $('#cuorces').removeClass('active');
        $('#criptomarket').removeClass('active');
        $('#economic-calendar').addClass('active');
    });


    $('#economic-calendar').click(() => {
        $('.market-review__container').removeClass('active');
        $('.cuorces__container').removeClass('active');
        $('.criptomarket__container').removeClass('active');
        $('.economic-calendar__container').addClass('active');

        $('#market-review').removeClass('active');
        $('#cuorces').removeClass('active');
        $('#criptomarket').removeClass('active');
        $('#economic-calendar').addClass('active');
    });
    $('#market-review').click(() => {
        $('.economic-calendar__container').removeClass('active');
        $('.cuorces__container').removeClass('active');
        $('.criptomarket__container').removeClass('active');
        $('.market-review__container').addClass('active');

        $('#economic-calendar').removeClass('active');
        $('#cuorces').removeClass('active');
        $('#criptomarket').removeClass('active');
        $('#market-review').addClass('active');
    });
    $('#cuorces').click(() => {
        $('.economic-calendar__container').removeClass('active');
        $('.market-review__container').removeClass('active');
        $('.criptomarket__container').removeClass('active');
        $('.cuorces__container').addClass('active');

        $('#economic-calendar').removeClass('active');
        $('#market-review').removeClass('active');
        $('#criptomarket').removeClass('active');
        $('#cuorces').addClass('active');
    });
    $('#criptomarket').click(() => {
        $('.economic-calendar__container').removeClass('active');
        $('.market-review__container').removeClass('active');
        $('.cuorces__container').removeClass('active');
        $('.criptomarket__container').addClass('active');

        $('#economic-calendar').removeClass('active');
        $('#market-review').removeClass('active');
        $('#cuorces').removeClass('active');
        $('#criptomarket').addClass('active');

    });

    $('#analitic__pagination').mouseover(() => {
        $('.analitic__submenu').addClass('active');
        $('.not-submenu').mouseover(() => {
            $('.analitic__submenu').removeClass('active');
        });
    });
    // $('.menu__container').mouseout(() => {
    //     $('.analitic__submenu').removeClass('active');
    // });

    // $('.lines').counterUp({
    //     delay: 10,
    //     time: 2000
    // });
    // $('.lines').addClass('animated fadeInDownBig');
    // // $('h3').addClass('animated fadeIn');
    // $({ blurRadius: 5 }).animate({ blurRadius: 0 }, {
    //     duration: 1000,
    //     easing: 'swing',
    //     step: function() {
    //         $(".lines").css({
    //             "-webkit-filter": "blur(" + this.blurRadius + "px)",
    //             "filter": "blur(" + this.blurRadius + "px)"
    //         });
    //     }
    // });
    // var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
    // $(".lines").each(function() {
    //     var tcount = $(this).data("count");
    //     $(this).animateNumber({
    //             number: tcount,
    //             easing: 'easeInQuad',
    //             "font-size": "40px",
    //             numberStep: comma_separator_number_step
    //         },
    //         1000);
    // });




});

// /*!
//  * jquery.counterup.js 1.0
//  *
//  * Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
//  * Released under the GPL v2 License
//  *
//  * Date: Nov 26, 2013
//  */
// (function(e) {
//     "use strict";
//     e.fn.counterUp = function(t) {
//         var n = e.extend({ time: 400, delay: 10 }, t);
//         return this.each(function() {
//             var t = e(this),
//                 r = n,
//                 i = function() {
//                     var e = [],
//                         n = r.time / r.delay,
//                         i = t.text(),
//                         s = /[0-9]+,[0-9]+/.test(i);
//                     i = i.replace(/,/g, "");
//                     var o = /^[0-9]+$/.test(i),
//                         u = /^[0-9]+\.[0-9]+$/.test(i),
//                         a = u ? (i.split(".")[1] || []).length : 0;
//                     for (var f = n; f >= 1; f--) {
//                         var l = parseInt(i / n * f);
//                         u && (l = parseFloat(i / n * f).toFixed(a));
//                         if (s)
//                             while (/(\d+)(\d{3})/.test(l.toString())) l = l.toString().replace(/(\d+)(\d{3})/, "$1,$2");
//                         e.unshift(l)
//                     }
//                     t.data("counterup-nums", e);
//                     t.text("0");
//                     var c = function() {
//                         t.text(t.data("counterup-nums").shift());
//                         if (t.data("counterup-nums").length) setTimeout(t.data("counterup-func"), r.delay);
//                         else {
//                             delete t.data("counterup-nums");
//                             t.data("counterup-nums", null);
//                             t.data("counterup-func", null)
//                         }
//                     };
//                     t.data("counterup-func", c);
//                     setTimeout(t.data("counterup-func"), r.delay)
//                 };
//             t.waypoint(i, { offset: "100%", triggerOnce: !0 });
//         })
//     }
// })(jQuery);