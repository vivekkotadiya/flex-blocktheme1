document.addEventListener("DOMContentLoaded", function () {
  // Check if Page contains Tabs Blocks
  if (document.querySelector(".tabs")) {
    // Get all Tabs Blocks
    let lists = document.querySelectorAll(".tabs");

    // Loop through each Tab Block
    lists.forEach((list, index) => {
      // Add active Class to the first Tab Link
      let listItem = list.querySelector(".tabs-nav__item");
      listItem.classList.add("tabs-nav__item--active");

      // Add active Class to the first Tab Content
      let listItemContent = listItem.dataset.content;
      document
        .getElementById(listItemContent)
        .classList.add("tabs-content__item--active");

      // Get all Tab Links from Tabs Block
      let listItemAll = list.querySelectorAll(".tabs-nav__item");

      // Loop through all Tab links
      listItemAll.forEach((item, index) => {
        item.addEventListener("click", function (e) {
          e.preventDefault();

          // Check if is not current Tab
          if (
            item.classList.contains("tabs-nav__item--active") == false &&
            item.dataset.content
          ) {
            // Remove current Tab Class "active"
            var currentItem = item.parentElement.querySelector(
              ".tabs-nav__item--active"
            );
            var currentItemContent = currentItem.dataset.content;
            currentItem.classList.remove("tabs-nav__item--active");

            item.parentElement.parentElement
              .querySelector("[id='" + currentItemContent + "']")
              .classList.remove("tabs-content__item--active");

            // Add new Tab Class "active"
            var newItemContent = item.dataset.content;
            item.classList.add("tabs-nav__item--active");
            item.parentElement.parentElement
              .querySelector("[id='" + newItemContent + "']")
              .classList.add("tabs-content__item--active");
          }
        });
      });
    });
  }
});
