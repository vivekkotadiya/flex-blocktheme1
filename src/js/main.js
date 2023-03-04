var deviceTouch = true;

function isTouchScreendevice() {
  return "ontouchstart" in window || navigator.maxTouchPoints;
}

if (isTouchScreendevice()) {
  deviceTouch = true;
  document.body.classList.add("page--is-touch");
} else {
  document.body.classList.add("page--no-touch");
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("body").classList.add("page--animation-ready");
});

import "./common";
import "../blocks/navigation/view";
import "../blocks/icon/view";
import "../blocks/accordion/view";
import "../blocks/tabs/view";
import "../blocks/bloglisting/view";
import "../blocks/eventlisting/view";
import "../blocks/blogsection/blogslider/view";
import "../blocks/form/view";
import "../blocks/youtubesmall/view";
import "../blocks/youtubebig/view";
import "../blocks/coursepreview/view";
import "../blocks/reportslider/reportslides/view";
import "../blocks/counter/view";
import "../blocks/timeline/view";
import "../blocks/testimonialslider/view";
import "../blocks/dozentenslider/view";
import "../blocks/cardsslider/view";