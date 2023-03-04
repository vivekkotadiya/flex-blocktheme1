document.addEventListener("DOMContentLoaded", function () {
  if (screen.width >= 769) {
    if (document.querySelector(".preview-blog")) {
      equalBlogs(false);
    }
  }
});
window.onresize = function () {
  if (screen.width >= 769) {
    if (document.querySelector(".preview-blog")) {
      equalBlogs(true);
    }
  } else {
    var elements = document.getElementsByClassName("preview-blog__detail");
    for (i = 0; i < elements.length; i++) {
      elements[i].style.height = "";
    }
  }
};
function equalBlogs(resize) {
  var elements = document.getElementsByClassName("preview-blog__detail"),
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
