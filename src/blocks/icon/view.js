// Icon JS
function customResizeIcons() {
  var elements = document.getElementsByClassName("icon__visual");
  if (elements.length < 0) {
    return;
  }
  var _len = elements.length;
  for (var _i = 0; _i < _len; _i++) {
    var el = elements[_i];
    var elWidth = el.offsetWidth;
    var iconSize = elWidth * 0.9;
    var iconSizeRounded = Math.round(iconSize / 2) * 2;
    el.style.fontSize = iconSizeRounded + "px";
  }
}
customResizeIcons();
window.addEventListener("resize", customResizeIcons);
