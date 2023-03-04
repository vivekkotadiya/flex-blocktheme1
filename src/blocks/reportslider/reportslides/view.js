import Splide from "@splidejs/splide";
document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".report-slider__lists")) {
    var selector = document.getElementsByClassName("report-slider__lists");

    for (var i = 0; i < selector.length; i++) {
      const slide_ele = selector[i];
      const mainReport = new Splide(slide_ele, {
        type: "slide",
        easing: "linear",
        perPage: 2,
        perMove: 1,
        gap: "20px",
        pagination: false,
        width: "100%",
        padding: { right: "8.3333333333%" },
        classes: {
          arrows: "splide__arrows report-slider__arrows",
          arrow: "splide__arrow report__arrow ",
          prev: "splide__arrow--prev report__arrow--prev",
          next: "splide__arrow--next report__arrow--next",
        },
        breakpoints: {
          1400: {
            perPage: 1,
            width: "100%",
            padding: { right: "16%" },
          },
          1024: {
            perPage: 2,
            width: "100%",
            padding: { right: "8.3333333333%" },
          },
          768: {
            perPage: 1,
            width: "100%",
          },
        },
      });
      mainReport.mount();
      mainReport.on("resized", function () {
        equalHeight(true);
      });
    }
    equalHeight(false);
  }
});
window.onresize = function () {
  if (document.querySelector(".report-slider__lists")) {
    equalHeight(true);
  }
};
function equalHeight(resize) {
  var elements = document.getElementsByClassName("report-slider__info"),
    allHeights = [],
    i = 0;
  if (resize === true) {
    for (i = 0; i < elements.length; i++) {
      elements[i].style.height = "auto";
    }
  }
  for (i = 0; i < elements.length; i++) {
    var elementHeight = elements[i].clientHeight;
    allHeights.push(elementHeight);
  }

  for (i = 0; i < elements.length; i++) {
    elements[i].style.height = Math.max.apply(Math, allHeights) + "px";
  }
}
