// header fixed
$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('header').addClass('fixed');
    } else {
        $('header').removeClass('fixed');
    }
});

// slick

$(document).ready(function () {
    $('.production-slider').each(function () {
        $(this).slick({
            slidesToShow: 1,
            fade: true,
            appendArrows: $(this).parents('.slider').find('.slider-arrows'),
            prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>'
        });
    });

    //auto counter total//
    let homeSlider = $('.production-slider');

    $('.counter-slide__default').text("/ " + homeSlider.slick("getSlick").slideCount);

    homeSlider.on('afterChange', function (event, slick, currentSlide) {
        $(".counter-slide__cp").text(currentSlide < 10 ? `${currentSlide + 1}` : currentSlide + 1);
    });

});

// slick active
$(window).on('load resize', function () {
    if ($(window).width() < 576) {
        $('.slider-mobile:not(.slick-initialized)').slick({
            speed: 100,
            slidesToShow: 1,
            arrows: false,
            variableWidth: true,

        });
    } else {
        $(".slider-mobile.slick-initialized").slick("unslick");
    }
});
// slick active


$('.btn-catalog, .btn-menu').on('click', function (e) {
    e.preventDefault();
    $('.overlay').fadeToggle();
    $('.dropdown-wrapper').fadeToggle();
});

$('.dropdown-wrapper__close, .overlay').on('click', function (e) {
    e.preventDefault();
    $('.dropdown-wrapper').fadeOut();
    $('.overlay').fadeOut();
});

$('.catalog-links').on('click', function (e) {
    e.preventDefault();
    $('.dropdown-catalog').fadeIn();
    $('.dropdown-menu-list').fadeOut();
});

$(".js-tab-trigger").on('click', function (e) {
    e.preventDefault();
    var id = $(this).attr('data-tab'),
        content = $('.js-tab-content[data-tab="' + id + '"]');
    $('.overlay').fadeIn();

    $('.js-tab-content.active').removeClass('active'); // 3
    content.addClass('active'); // 4
});

$('.mobile-dropdown-close, .overlay').on('click', function () {
    $('.js-tab-content').removeClass('active');
    $('.overlay').fadeOut();
});

$('.gallery-product').slick({
    slidesToShow: 1,
    fade: true,
    arrows: false,
    asNavFor: '.gallery-preview',
    responsive: [
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                dots: true,
                arrows: false

            }
        }
    ]
});

$('.gallery-preview').slick({
    slidesToShow: 4,
    asNavFor: '.gallery-product',
    focusOnSelect: true,
    prevArrow: '<button type="button" class="slick-prev slick-arrow-my"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next slick-arrow-my"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
    responsive: [
        {
            breakpoint: 1010,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                vertical: true,
                slidesToShow: 3,

            }
        }
    ]
});

$('.more-category-slider').slick({
    slidesToShow: 5,
    prevArrow: '<button type="button" class="slick-prev slick-arrow-my"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next slick-arrow-my"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
    responsive: [
        {
            breakpoint: 1010,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 650,
            settings: {
                slidesToShow: 2,
                arrows: false,
                dots: true
            }
        }
    ]
});