$(function () {


    $(".sub_menu").hide();

    $(".gnb li").mouseenter(function () {
        $(".sub_menu").stop().slideDown();
    });

    $("#header").mouseleave(function () {
        $(".sub_menu").stop().slideUp();
    });

    $(".gnb li:nth-child(7)").click(function () {
        $(".search").fadeIn();
    });



    var jbOffset = $('#header').offset();
    $(window).scroll(function () {
        if ($(document).scrollTop() > 965) {
            $('#header').addClass("on");
        }
        else {
            $('#header').removeClass("on"); s
        }
    });



    $(".x2").click(function () {
        $(".search").fadeOut();
    });

    $(".x").click(function () {
        $("#popup").fadeOut();
    });



    $(".tab_content").hide();
    $("ul.tabs li:first").addClass("active").show();
    $(".tab_content:first").show();
    //On Click Event
    $("ul.tabs li").click(function () {

        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");
        $(".tab_content").hide();
        var activeTab = $(this).find("a").attr("href");
        $(activeTab).show();
        return false;
    });




    const gradients = document.querySelectorAll('.gradient')
    const visibleGradients = new Set()

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                visibleGradients.add(entry.target)
            } else {
                visibleGradients.delete(entry.target)
            }
        })
    })

    const throttle = fn => {
        let scheduled = null
        let context = null

        return function () {
            context = [this, arguments]

            if (scheduled !== null) {
                return
            }

            scheduled = window.requestAnimationFrame(() => {
                fn.apply(...context)
                scheduled = context = null
            })
        }
    }

    const updateGradient = gradient => {
        const { top, height } = gradient.getBoundingClientRect()

        gradient.style.setProperty(
            '--scroll-percentage',
            `${(top + height) / window.innerHeight * 100}%`
        )
    }

    gradients.forEach(gradient => {
        updateGradient(gradient)
        observer.observe(gradient)
    })

    window.addEventListener('scroll', throttle(() => {
        visibleGradients.forEach(updateGradient)
    }))



    // cafe tab



    $(".tab_content1").hide();
    $("ul.tabs1 li:first").addClass("active").show();
    $(".tab_content1:first").show();
    //On Click Event
    $("ul.tabs1 li").click(function () {

        $("ul.tabs1 li").removeClass("active");
        $(this).addClass("active");
        $(".tab_content1").hide();
        var activeTab = $(this).find("a").attr("href");
        $(activeTab).show();
        return false;
    });




    $("#toggle").click(function () {
        $(".t1").slideToggle(0);
    });

    $(".s_btn").click(function () {
        $(".e_box img").fadeIn();
    });







    let root = document.documentElement;
    const section1 = document.querySelector('.header')

    window.addEventListener('scroll', () => {
        const y = 1 + (window.scrollY || window.pageYOffset);
        root.style.setProperty('--gradient-percent', y * 4 + "px");
        console.log(y)
    })






    // swiper

    var swiper = new Swiper(".main_banner", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 3000,
            disableOninteraction: false,
        },
        loop: true,
    });


    var swiper = new Swiper(".cafe_tab", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },

        autoplay: {
            delay: 2000,
            disableOninteraction: false,
        },

        // 선생님 이상하게 얘 들어가고 나서 클릭이 안되어요ㅜㅜ

        slidesPerView: 4,
        loop: true,

    });











});

