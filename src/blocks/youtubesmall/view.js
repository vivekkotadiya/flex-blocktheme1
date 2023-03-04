document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".youtube.youtube--small") != null) {
    let links = document.querySelectorAll(".youtube__link");
    links.forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        var youtubeId = this.dataset.youtubeid;
        if (document.querySelector(".lightbox-youtube") != null) {
          var parent = document.querySelector(".lightbox-youtube");
          var iframe = parent.querySelector(".lightbox-youtube__video");
          if (iframe.src.indexOf("/" + youtubeId + "/?showinfo=0") < 0) {
            iframe.src =
              "https://www.youtube.com/embed/" + youtubeId + "/?showinfo=0";
          }
          parent.classList.add("lightbox-youtube--opened");
        }
      });
    });
    if (document.querySelector(".lightbox-youtube__close") != null) {
      let button = document.querySelector(".lightbox-youtube__close");
      button.addEventListener("click", function () {
        var close_btn_parent = this.parentElement.parentElement.parentElement;
        close_btn_parent.getElementsByTagName("iframe")[0].src = "";
        close_btn_parent.classList.remove("lightbox-youtube--opened");
      });
    }
  }
});
