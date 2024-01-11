$(function () {

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


    // 배너

    $(".tab_content").hide();
    $("ul.tabs li:first").addClass("active").show();
    $(".tab_content:first").show();

    //On Click Event
    $("ul.tabs li").click(function () {

        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");
        if ($(".tabs li:nth-child(1)").hasClass("active") === true) {
            $(".tabs li a").css({ "color": "#43dcb6" });
        } else if ($(".tabs li:nth-child(2)").hasClass("active") === true) {
            $(".tabs li a").css({ "color": "#15a1ff" });
        }
        else if ($(".tabs li:nth-child(3)").hasClass("active") === true) {
            $(".tabs li a").css({ "color": "#000" });
        }
        else {
            $(".tabs li a").css({ "color": "#b38bfe" });
        }



        $(".tab_content").hide();

        var activeTab = $(this).find("a").attr("href");
        $(activeTab).show();
        return false;
    });

    // 뉴스레터

    var swiper = new Swiper(".letter_contents", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        slidesPerView: 3,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },

    });

    $(".h_1").mouseenter(function () {
        $(".c_bg").hide();
        $(".c1").show();
    });

    $(".h_2").mouseenter(function () {
        $(".c_bg").hide();
        $(".c2").show();
    });

    $(".h_3").mouseenter(function () {
        $(".c_bg").hide();
        $(".c3").show();
    });

    $(".h_4").mouseenter(function () {
        $(".c_bg").hide();
        $(".c4").show();
    });
    $(".h_box").mouseleave(function () {
        $(".c_bg").hide();
    });

    if ($(".tabs li:nth-child(2)").hasClass("active") === true) {

        $(".tabs").addClass("on1");

    } else {

        // class가 존재하지 않음	

    }

});




