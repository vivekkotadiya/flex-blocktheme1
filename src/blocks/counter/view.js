document.addEventListener("DOMContentLoaded", function () {
  // You can change this class to specify which elements are going to behave as counters.
  var elements = document.querySelectorAll(".counter");

  elements.forEach(function (item) {
    // Add new attributes to the elements with the '.counter' HTML class
    item.counterAlreadyFired = false;
    item.counterSpeed = item.querySelector(".counter__number").dataset.number;
    item.counterTarget = +item.querySelector(".counter__number-value")
      .innerText;
    item.counterCount = 0;
    item.counterStep = item.counterTarget / item.counterSpeed;

    item.updateCounter = function () {
      item.counterCount = item.counterCount + item.counterStep;
      item.querySelector(".counter__number-value").innerText = Math.ceil(
        item.counterCount
      );

      if (item.counterCount < item.counterTarget) {
        setTimeout(item.updateCounter, 100);
      } else {
        item.querySelector(".counter__number-value").innerText =
          item.counterTarget;
      }
    };
  });

  // Function to determine if an element is visible in the web page
  var isElementVisible = function isElementVisible(el) {
    var scroll = window.scrollY || window.pageYOffset;
    var boundsTop = el.getBoundingClientRect().top + scroll;
    var viewport = {
      top: scroll,
      bottom: scroll + window.innerHeight,
    };
    var bounds = {
      top: boundsTop,
      bottom: boundsTop + el.clientHeight,
    };
    return (
      (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom) ||
      (bounds.top <= viewport.bottom && bounds.top >= viewport.top)
    );
  };

  // Funciton that will get fired uppon scrolling
  var handleScroll = function handleScroll() {
    elements.forEach(function (item, id) {
      if (true === item.counterAlreadyFired) return;
      if (!isElementVisible(item)) return;
      item.updateCounter();
      item.counterAlreadyFired = true;
    });
  };

  // Fire the function on scroll
  window.addEventListener("scroll", handleScroll);
});
