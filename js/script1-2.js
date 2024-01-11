$(function () {

    // 헤더
    var jbOffset = $('#header').offset();
    $(window).scroll(function () {
        if ($(document).scrollTop() > 85) {
            $('#header').addClass("on");
        }
        else {
            $('#header').removeClass("on");
        }
    });



    // 서브메뉴

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









});