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



    // 배너

    var swiper = new Swiper(".banner", {
        pagination: {
            el: ".swiper-pagination",
        },

        loop: true,

        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });


    $(".tag_position").click(function () {
        $(".tag_position").toggleClass("on");
        if ($(".tag_position").hasClass("on")) {
            $(".tag_position").attr("src", "images/goods_tagh.png");
        } else {
            $(".tag_position").attr("src", "images/goods_tag.png");
        }
    });

});