document.addEventListener("DOMContentLoaded", function () {
  // --------------------------------------------------------------------------
  // START: Handler scroll top ------------------------------------------------

  // Check if scroll icon exist
  if ( document.getElementById("header__scroll") !== null) {
    // Add event listener to hamburger icon
    document
      .getElementById("header__scroll")
      .addEventListener("click", function (e) {
        // Check if navigation is open
        if (
          !document.querySelector("body").classList.contains("page--nav-open")
        ) {
          // Scroll to top
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      });
  }

  // END: Handler scroll top --------------------------------------------------
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // START: Handler PopUp Overlay ---------------------------------------------

  // Check if popup button and overlay exist
  if (
    document.getElementById("header__contact") !== null &&
    document.getElementById("popup__contact") !== null
  ) {
    // Get contact overlay
    var contactOverlay = document.getElementById("popup__contact");

    // Add event listener to contact icon
    document
      .getElementById("header__contact")
      .addEventListener("click", function (e) {
        // Add or remove open class
        contactOverlay.classList.toggle("popup--open");
      });

    // Check if popup close button exist
    if (contactOverlay.querySelector(".popup__close") !== null) {
      // Add event listener to close icon
      contactOverlay
        .querySelector(".popup__close")
        .addEventListener("click", function (e) {
          // Add or remove open class
          contactOverlay.classList.toggle("popup--open");
        });
    }
  }

  // END: Handler PopUp Overlay -----------------------------------------------
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // START: Handler for navigation toggle -------------------------------------

  // Define action
  function toggleHeaderNavOpen() {
    // Get header navigation
    var nav = document.getElementById("header__nav");

    // Add or remove status class open
    nav.classList.toggle("header__nav--open");

    // Wait till navigation overlay is closed
    setTimeout(function () {
      // Get all navigation list holder
      document
        .querySelectorAll("#header__nav-wrapper > .menu-helper ul")
        .forEach(function (elem, i) {
          // NEEDED?        // Remove status open for all navigation and sub
          elem.classList.remove("menu--open");
        });

      // Get all navigation list elements
      document
        .querySelectorAll("#header__nav-wrapper > .menu-helper ul li")
        .forEach(function (elem, i) {
          // Remove status open for all navigation and sub
          elem.classList.remove("menu__item--open");
        });
    }, 800);

    // Remove ord add navigation indicator for page body
    document.querySelector("body").classList.toggle("page--nav-open");
  }

  // Check if hamburger and close icon exist
  if (
    document.getElementById("header__toggle") !== null &&
    document.getElementById("header__nav-close") !== null
  ) {
    // Add event listener to hamburger icon
    document
      .getElementById("header__toggle")
      .addEventListener("click", function (e) {
        // Execute action
        toggleHeaderNavOpen();
      });

    // Add event listener to close icon
    document
      .getElementById("header__nav-close")
      .addEventListener("click", function (e) {
        // Execute action
        toggleHeaderNavOpen();
      });
  }

  // END: Handler for navigation toggle ---------------------------------------
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // START: Handler for navigation resize -------------------------------------

  // Close nav and reset on window resize
  window.addEventListener("resize", function (event) {
      // Get header navigation
      var nav = document.getElementById("header__nav");

      // Remove status class open
      nav.classList.remove("header__nav--open");

      // Wait till navigation overlay is closed
      setTimeout(function () {
        // Get all navigation list holder
        document
          .querySelectorAll("#header__nav-wrapper > .menu-helper ul")
          .forEach(function (elem, i) {
            // NEEDED?        // Remove status open for all navigation and sub
            elem.classList.remove("menu--open");
          });

        // Get all navigation list elements
        document
          .querySelectorAll("#header__nav-wrapper > .menu-helper ul li")
          .forEach(function (elem, i) {
            // Remove status open for all navigation and sub
            elem.classList.remove("menu__item--open");
          });
      }, 800);

      // Remove ord add navigation indicator for page body
      document.querySelector("body").classList.remove("page--nav-open");
  });

  // END: Handler for navigation resize ---------------------------------------
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // START: Handler for navigation back ---------------------------------------

  // Define action
  function linkHeaderNavBack() {
    // Get all back buttons
    var linkHeaderNavBackItems = document.querySelectorAll(
      "#header__nav-wrapper > .menu-helper li .menu__back"
    );

    // Check if back buttons exist
    if (linkHeaderNavBackItems !== undefined) {
      // Loop through back buttons
      linkHeaderNavBackItems.forEach(function (item, i) {
        // Add event listener for each button
        item.addEventListener("click", function (e) {
          // Block link action
          e.preventDefault();

          // Get height of the previous navigation slide
          // DELETE         var navSlideHeight = item.parentElement.parentElement.parentElement.parentElement.offsetHeight;

          // Update Height of the navigation for correct scroll height
          // DELETE          this.closest(".menu-helper").style.height = navSlideHeight + "px";

          // Scroll to top of the navigation item list on back
          document
            .getElementById("header__nav-wrapper")
            .scroll({ top: 0, behavior: "smooth" });

          // Close navigation slide
          this.parentElement.parentElement.parentElement.classList.remove(
            "menu__item--open"
          );

          // NEEDED?          // Close navigation slide
          this.parentElement.parentElement.parentElement.parentElement.classList.remove(
            "menu--open"
          );
        });
      });
    }
  }

  // Execute action
  linkHeaderNavBack();

  // END: Handler for navigation back -----------------------------------------
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // START: Handler for navigation links --------------------------------------

  // Define action
  function linkHeaderNavItem() {
    // Get all links beside back buttons
    var linkHeaderNavItems = document.querySelectorAll(
      "#header__nav-wrapper > .menu-helper li a:not(.menu__back)"
    );

    // Check if links exist
    if (linkHeaderNavItems !== undefined) {
      // Get Screen Width
      let width = screen.width;

      // Loop through links
      linkHeaderNavItems.forEach(function (item, i) {
        // Get parent li of the link
        var parent = item.parentElement;

        // Check if link has sub navigation
        if (parent.classList.contains("menu__item--child")) {
          // Add event listener to link
          item.addEventListener("click", function (e) {
            // Block link action
            e.preventDefault();

            // Get height of the sub navigation
            // DELETE            var slideChildHeight = item.nextElementSibling.offsetHeight;

            // Get height of the parent navigation
            // DELETE            var slideParentHeight = item.parentElement.parentElement.parentElement.parentElement.offsetHeight;

            // Check screen width
            if (width <= 1400) {
              // Check if sub navigation is open
              if (parent.classList.contains("menu__item--open")) {
                // Remove navigation open indicator class
                parent.classList.remove("menu__item--open");

                // Update Height of the navigation for correct scroll height
                // DELETE              parent.closest(".menu-helper").style.height = slideParentHeight + "px";

                // Scroll to top of the navigation item list on back
                document
                  .getElementById("header__nav-wrapper")
                  .scroll({ top: 0, behavior: "smooth" });

                // If subnavigation is closed
              } else {
                // Loop through links
                linkHeaderNavItems.forEach(function (cleanupItem, i) {
                  // Remove navigation open indicator class
                  cleanupItem.classList.remove("menu__item--open");
                });

                // Update Height of the navigation for correct scroll height
                // DELETE              parent.closest(".menu-helper").style.height = slideChildHeight + "px";

                // Scroll to top of the navigation item list on back
                document
                  .getElementById("header__nav-wrapper")
                  .scroll({ top: 0, behavior: "smooth" });

                // Set current navigation slide to active
                parent.classList.add("menu__item--open");

                // NEEDED?              // Set current navigation slide to active
                parent.parentElement.classList.add("menu--open");
              }
            } else {
              // If nav first level
              if (!parent.parentElement.classList.contains("menu--sub")) {
                // If nav is open
                if (!parent.classList.contains("menu__item--open")) {
                  // Loop through links
                  linkHeaderNavItems.forEach(function (cleanupItem, i) {
                    // Remove navigation open indicator class
                    cleanupItem.parentElement.classList.remove(
                      "menu__item--open"
                    );

                    // Set current navigation slide to active
                    parent.classList.add("menu__item--open");

                    // NEEDED?              // Set current navigation slide to active
                    parent.parentElement.classList.add("menu--open");
                  });
                }
              } else {
                if (
                  !parent.parentElement.parentElement.parentElement.classList.contains(
                    "menu--sub"
                  )
                ) {
                  parent.parentElement
                    .querySelectorAll(".menu__item--open")
                    .forEach(function (navSiblings, i) {
                      navSiblings.classList.remove("menu__item--open");
                    });

                  // Set current navigation slide to active
                  parent.classList.add("menu__item--open");

                  // NEEDED?              // Set current navigation slide to active
                  parent.parentElement.classList.add("menu--open");
                }
              }
            }
          });
        }
      });
    }
  }

  // Execute action
  linkHeaderNavItem();

  // END: Handler for navigation links ----------------------------------------
  // --------------------------------------------------------------------------
});
