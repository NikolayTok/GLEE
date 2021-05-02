$(function () {
    $('.slider__inner').slick({
        arrows: false,
        dots: true
    });

    $('.portfolio__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
            autoplay: true,
            autoplaySpeed: 3000

    });

    var mixer = mixitup('.products__box');
    var mixer = mixitup('.new-design__box');

});