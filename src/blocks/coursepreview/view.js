document.addEventListener("DOMContentLoaded", function () {

  if (document.querySelector(".course-overlay") !== undefined) {

    var allOverlay = document.querySelectorAll(".course-overlay");

    allOverlay.forEach((overlay, index) => {

      overlay
        .querySelector(".course-overlay__icon")
        .addEventListener("click", function (event) {

          if (this.parentElement.classList.contains("course-overlay--active")) {
            
            this.parentElement.classList.remove("course-overlay--active");
          
          } else {

            allOverlay.forEach((cleanOverlay, index) => {
              cleanOverlay.classList.remove("course-overlay--active");
            });
            
            this.parentElement.classList.add("course-overlay--active");
          }
        });

      overlay
        .querySelector(".course-overlay__text")
        .addEventListener("click", function (event) {

          this.parentElement.classList.remove("course-overlay--active");

        });

    });
  }
});
