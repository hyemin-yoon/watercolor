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



    // 메인배너
    var swiper = new Swiper(".main_banner", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
    });


    // 탭
    $(".tab_content").hide();
    $("ul.tabs li:first").addClass("active").show();
    $(".tab_content:first").show();

    //On Click Event
    $("ul.tabs li").click(function () {

        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");
        $(".tab_content").hide();

        var activeTab = $(this).find("a").attr("href");
        $(activeTab).fadeIn();
        return false;
    });


    // 커피 리포트 bean

    var swiper = new Swiper(".bean", {
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
    });

    // 커피 리포트 sms
    $(".btn1").click(function () {
        $(".mini_pop1").hide();
        $(".sms_pop1").css({ "opacity": "1", "transition": "1.7s" });
    });

    $(".btn2").click(function () {
        $(".mini_pop2").hide();
        $(".sms_pop2").css({ "opacity": "1", "transition": "1.7s" });
    });

    $(".btn3").click(function () {
        $(".mini_pop3").hide();
        $(".sms_pop3").css({ "opacity": "1", "transition": "1.7s" });
    });

    $(".ad_inner").click(function () {
        $(".close").toggle();
        $("#ad").toggleClass("ad_off");



    });




});