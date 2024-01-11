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




    // 부드럽게 화면전환

    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });


    // 부드러운 스크롤



});



