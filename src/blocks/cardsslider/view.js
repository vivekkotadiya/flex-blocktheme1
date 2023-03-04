import Splide from "@splidejs/splide";

// Card slider
if (document.querySelector('.card__slider')) {
    var sliderselector =
        document.getElementsByClassName('card__slider');

    for (var i = 0; i < sliderselector.length; i++) {
        const slide_ele = sliderselector[i];
        const cardSlider = new Splide(slide_ele, {
            type   : 'loop',
            perPage: 3,
            gap: 20,
            perMove: 1,
            pauseOnHover: false,
            arrows: true,
            easing: 'linear',
            pagination: false,
            autoplay: false,
            padding: { right: "16.666666%" },
            breakpoints: {
                1400: { perPage: 2},
                768: { perPage: 1},
            },
        });
        cardSlider.mount();
    }
}