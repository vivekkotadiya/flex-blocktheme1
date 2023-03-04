function setTimelineItems() {
  document.querySelectorAll(".timeline").forEach(function (timeline) {
    let itemIdentifier = ".timeline .timeline-item";

    // Programmatically get the column width
    let item = timeline.querySelector(itemIdentifier);
    let parentWidth = item.parentNode.getBoundingClientRect().width;
    let itemWidth =
      item.getBoundingClientRect().width +
      parseFloat(getComputedStyle(item).marginLeft) +
      parseFloat(getComputedStyle(item).marginRight);
    let columnWidth = Math.round(1 / (itemWidth / parentWidth));

    // We need this line since JS nodes are dumb
    let arrayOfItems = Array.prototype.slice.call(
      document.querySelectorAll(itemIdentifier)
    );
    let trackHeights = {};
    arrayOfItems.forEach(function (item) {
      // Get index of item
      let thisIndex = arrayOfItems.indexOf(item);
      // Get column this and set width
      let thisColumn = thisIndex % columnWidth;
      if (typeof trackHeights[thisColumn] == "undefined") {
        trackHeights[thisColumn] = 0;
      }
      item.style.height =
        item.querySelector(".timeline-item__content").getBoundingClientRect()
          .height + "px";
      trackHeights[thisColumn] +=
        item.getBoundingClientRect().height +
        parseFloat(getComputedStyle(item).marginBottom);
      // If the item has an item above it, then move it to fill the gap
      if (thisIndex - columnWidth >= 0) {
        let getItemAbove = document.querySelector(
          `${itemIdentifier}:nth-of-type(${thisIndex - columnWidth + 1})`
        );
        let previousBottom = getItemAbove.getBoundingClientRect().bottom;
        let currentTop =
          item.getBoundingClientRect().top -
          parseFloat(getComputedStyle(item).marginBottom);
        item.style.top = `-${currentTop - previousBottom}px`;
      }
    });
  });
}
window.onload = setTimelineItems();
window.onresize = function () {
  if (screen.width >= 1025) {
    if (document.querySelector(".timeline")) {
      document.querySelectorAll(".timeline").forEach(function (timeline) {
        let itemIdentifier = ".timeline .timeline-item";
        let arrayOfItems = Array.prototype.slice.call(
          document.querySelectorAll(itemIdentifier)
        );
        arrayOfItems.forEach(function (item) {
          item.style.height = "";
          item.style.top = "";
        });
      });
      setTimelineItems();
    }
  } else {
    var elements = document.getElementsByClassName("timeline-item");
    for (i = 0; i < elements.length; i++) {
      elements[i].style.height = "";
      elements[i].style.top = "";
    }
  }
};
