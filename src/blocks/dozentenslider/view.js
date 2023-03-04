import Splide from "@splidejs/splide";

// dozenten slider
if (document.querySelector('.dozenten_slider')) {
    var sliderselector =
        document.getElementsByClassName('dozenten_slider');

    for (var i = 0; i < sliderselector.length; i++) {
        const slide_ele = sliderselector[i];
        const dozentenSlider = new Splide(slide_ele, {
            type : 'fade',
            perPage: 1,
            perMove: 1,
            pauseOnHover: false,
            arrows: false,
            easing: 'linear',
            pagination: false,
        });

        dozentenSlider.mount();

        if(slide_ele && slide_ele != undefined){
            slide_ele.addEventListener('click', function(e) {
                if(e.target.classList.contains('splide__arrow--prev')){
                    dozentenSlider.go('<');
                }
                if(e.target.classList.contains('splide__arrow--next')){
                    dozentenSlider.go('>');
                }
            });
        }
    }

   
}