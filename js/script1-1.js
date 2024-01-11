$(function () {

    $(".sub_menu").hide();

    $(".gnb li").mouseenter(function () {
        $(".sub_menu").stop().slideDown();
    });

    $("#header").mouseleave(function () {
        $(".sub_menu").stop().slideUp();
    });

    $(".gnb li:nth-child(7)").click(function () {
        $(".search2").fadeIn();
    });


    $(".x2").click(function () {
        $(".search2").fadeOut();
    });

    $(".x").click(function () {
        $("#popup").fadeOut();
    });


    // 풀페이지

    AOS.init();

    $('[data-aos]').each(function () { $(this).addClass("aos-init"); });

    $(document).ready(function () {
        $("#fullpage").fullpage({
            anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage'],
            navigation: true,
            navigationPosition: 'right',
            navigationTooltips: ['First page', 'Second page', 'Third and last page'],
            onLeave: function () {
                $('.section [data-aos]').each(function () {
                    $(this).removeClass("aos-animate")
                });
            },
            onSlideLeave: function () {
                $('.slide [data-aos]').each(function () {
                    $(this).removeClass("aos-animate")
                });
            },
            afterSlideLoad: function () {
                $('.slide.active [data-aos]').each(function () {
                    $(this).addClass("aos-animate")
                });
            },
            afterLoad: function () {
                $('.section.active [data-aos]').each(function () {
                    $(this).addClass("aos-animate")
                });
            }
        });
    });


    // swiper

    var swiper = new Swiper(".identity", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

});