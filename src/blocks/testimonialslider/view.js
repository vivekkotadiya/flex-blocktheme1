import Splide from "@splidejs/splide";

// Testimonial slider
if (document.querySelector('.testimonial_slider')) {
    var sliderselector =
        document.getElementsByClassName('testimonial_slider');

    for (var i = 0; i < sliderselector.length; i++) {
        const slide_ele = sliderselector[i];
        const testimonialSlider = new Splide(slide_ele, {
            type : 'fade',
            perPage: 1,
            perMove: 1,
            pauseOnHover: false,
            arrows: false,
            easing: 'linear',
            pagination: false,
        });
        testimonialSlider.mount();

        if(slide_ele && slide_ele != undefined){
            slide_ele.addEventListener('click', function(e) {
                if(e.target.classList.contains('splide__arrow--prev')){
                    testimonialSlider.go('<');
                }
                if(e.target.classList.contains('splide__arrow--next')){
                    testimonialSlider.go('>');
                }
            });
        }
    }


}