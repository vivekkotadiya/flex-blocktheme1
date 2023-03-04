/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

/**
 * Internal dependencies
 */
import Edit from "./edit";
import Save from "./save";
import metadata from "./block.json";
import { registerBlock } from "../../utils/helper";

const { name } = metadata;

export { metadata, name };

export const settings = {
  icon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="bb7891b9-b3fa-4fd9-8b43-b15a03af0fbc"
      data-name="Ebene 1"
      viewBox="0 0 30 30"
    >
      <rect
        width="30"
        height="30"
        rx="3.29"
        fill="#1e1e1e"
      />
      <rect
        x="3.25"
        y="3.25"
        width="23.51"
        height="23.51"
        rx="3.29"
        fill="#3c3c3b"
      />
      <circle
        cx="15"
        cy="11.84"
        r="6.23"
        fill="#037cbb"
      />
      <polygon
        points="15 7.18 16.51 10.25 19.89 10.74 17.45 13.12 18.02 16.49 15 14.9 11.97 16.49 12.55 13.12 10.11 10.74 13.49 10.25 15 7.18"
        fill="#3c3c3b"
      />
      <rect
        x="7.66"
        y="21.25"
        width="14.68"
        height="3.14"
        fill="#fff"
      />
    </svg>
  ),
  /**
   * @see ./edit.js
   */
  edit: (props) => {
    return (
      <div {...useBlockProps({ className: "card-icon" })}>
        {<Edit {...props} />}
      </div>
    );
  },
  save: (props) => {
    return <Save {...props} />;
  },
};

registerBlock({ metadata, name, settings });
