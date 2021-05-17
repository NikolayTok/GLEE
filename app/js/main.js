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
        autoplaySpeed: 3000,
            responsive: [{
                breakpoint: 540,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }]

        });

        $('.menu-btn').on('click', function () {
            $('.menu__list').toggleClass('menu__list--active')
        });

        $('.filters-btn').on('click', function () {
            $('.filters__inner').toggleClass('filters__inner--active')
        });

        $(".price__input").ionRangeSlider({
            type: "double",
            prefix: "$",
            onStart: function (data) {
                $('price__from').text(data.from);
                $('price__to').text(data.to);
            },
            onChange: function (data) {
                $('price__from').text(data.from);
                $('price__to').text(data.to);
            },
        });

        $(".star").starRating({
                    starSize: 25,
                    readOnly: true,
                    initialRating: 4.5,
                    callback: function (currentRating, $el) {
                        // make a server call here
                    }
        });

        var containerEl1 = document.querySelector('[data-ref="container-1"]');
        var containerEl2 = document.querySelector('[data-ref="container-2"]');

        var config = {
            controls: {
                scope: 'local'
            }
        };
       
        var mixer1 = mixitup(containerEl1, config);
        var mixer2 = mixitup(containerEl2, config);
});