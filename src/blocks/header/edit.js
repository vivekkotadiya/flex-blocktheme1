/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";
import { useEffect, useRef } from "@wordpress/element";

/**
 * Internal dependencies
 */
import sitelogo from "../../assets/images/steinbeis-smt-logo.svg";
import { ContactOverlay, ScrollToTop } from "../../utils/block-icons";

export default function edit({ attributes }) {
  const hamburger = useRef();
  const TEMPLATE = [["smt-theme/navigation"]];
  useEffect(() => {
    const { ownerDocument } = hamburger.current;
    var element = ownerDocument.getElementById("header__toggle");
    var headerSide = ownerDocument.querySelector("#header__nav");
    //var menu = ownerDocument.querySelector(".header--nav");
    element.addEventListener("click", (event) => {
      //menu.classList.toggle("is--active");
      element.classList.toggle("is--active");
      headerSide.classList.toggle("header__nav--open");
    });
  }, []);

  return (
    <div {...useBlockProps()}>
      <div id="header__sidebar">
        <a id="header__logo" href={attributes.site_url}>
          <img src={sitelogo} alt="SMT - School of Management and Technology" />
        </a>
        <button id="header__toggle" ref={hamburger}>
          <div className="header__toggle-helper">
            <span>Toggle menu</span>
          </div>
        </button>
        <button id="header__contact">
          <ContactOverlay />
        </button>
        <button id="header__scroll">
          <ScrollToTop />
        </button>
      </div>
      <div id="header__nav">
        <div id="header__nav-wrapper">
          <button id="header__nav-close"></button>
          <InnerBlocks template={TEMPLATE} />
        </div>
      </div>
    </div>
  );
}
