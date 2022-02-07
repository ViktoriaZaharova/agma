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


// $('.sales-slider').slick({
//     slidesToShow: 3,
//     arrows: false,
//
// });


