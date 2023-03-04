/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { InnerBlocks } from "@wordpress/block-editor";

/**
 * Internal dependencies
 */
import sitelogo from "../../assets/images/steinbeis-smt-logo.svg";
import { ContactOverlay, ScrollToTop } from "../../utils/block-icons";

export default function save({ attributes }) {
  return (
    <>
      <div id="header__sidebar">
        <a id="header__logo" href={attributes.site_url}>
          <img
            src={sitelogo}
            alt="SMT - School of Management and Technology"
          />
        </a>
        <button id="header__toggle">
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
          <InnerBlocks.Content />
        </div>
      </div>
    </>
  );
}
