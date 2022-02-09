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
$(window).on('load resize', function() {
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
        content = $('.js-tab-content[data-tab="'+ id +'"]');
    $('.overlay').fadeIn();
    // $('.js-tab-trigger.active').removeClass('active'); // 1
    // $(this).addClass('active'); // 2

    $('.js-tab-content.active').removeClass('active'); // 3
    content.addClass('active'); // 4
});

$('.mobile-dropdown-close, .overlay').on('click', function () {
    $('.js-tab-content').removeClass('active');
    $('.overlay').fadeOut();
});