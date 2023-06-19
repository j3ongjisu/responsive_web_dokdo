$(function () {

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0
            ? $('.header').addClass('on')
            : $('.header').removeClass('on');
    });


    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        $('._se_').each(function () {
            if (sct + $(window).innerHeight() - 200 > $(this).offset().top) {
                $(this).addClass('on')
            } else {
                $(this).removeClass('on')
            }
        })
    })

    const mainSlide = new Swiper('.main_slide', {
        loop: true,
        parallax: true,
        speed: 1000,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        slideActiveClass: 'on',

    });

    $('.main_visual .arrows .left').on('click', function () {
        mainSlide.slidePrev();
    });

    $('.main_visual .arrows .right').on('click', function () {
        mainSlide.slideNext();
    });

    const noticeSlide = new Swiper('.notice_slide', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,

        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            }
        }
    });

    $('.main_notice .arrows .left').on('click', function () {
        noticeSlide.slidePrev();
    });

    $('.main_notice .arrows .right').on('click', function () {
        noticeSlide.slideNext();
    });

    //to_top
    //to_top 스크롤 위로 올리기
    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 600)
    });

    // to_top 스크롤 숨겼다가 나타내기
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 400 ? $('.to_top').addClass('on') : $('.to_top').removeClass('on');
    });

    // 모바일 버튼 .on
    $('.mobile_btn').on('click', function () {
        $('.gnb').toggleClass('on');
        $('.header').toggleClass('on');
    });

    // 모바일 메뉴 sub menu 나오게 하기
    $('.gnb .main_menu>li>a').on('click', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
            $(this).next().stop().slideToggle();
            // 메뉴 밀어서 닫히게 하는 거
            $(this)
                .parent()
                .siblings()
                .find('.sub_menu')
                .stop()
                .slideUp();
        }
    });

    $(window).on('resize', function () {
        $('.gnb').removeClass('on')
    });

    $('.gnb').on('wheel', function (e) {
        if ($('.gnb').removeClass('on')) {
            e.preventDefault();
        }

    })
})