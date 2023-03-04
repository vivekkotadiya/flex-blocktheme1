import Splide from "@splidejs/splide";
document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".blog-slider")) {
    var selector = document.getElementsByClassName("blog-slider");

    for (var i = 0; i < selector.length; i++) {
      const slide_ele = selector[i];
      const mainNews = new Splide(slide_ele, {
        type: "slide",
        arrows: true,
        easing: "linear",
        perPage: 2,
        perMove: 1,
        gap: "20px",
        pagination: false,
        width: "100%",
        padding: { right: "8.3333333333%" },
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
      mainNews.mount();
    }
  }
});
