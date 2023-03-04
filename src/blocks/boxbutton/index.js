/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";

/**
 * Internal dependencies
 */
import edit from "./edit";
import save from "./save";
import metadata from "./block.json";
import { registerBlock } from "../../utils/helper";

const { name } = metadata;

export { metadata, name };

export const settings = {
  icon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="eb7114c7-27d3-4ef9-a2f9-d373de21d9f4"
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
      <path
        d="M17.6,8.71a.21.21,0,0,1,.24.24V21.14a.21.21,0,0,1-.24.24h-1a.21.21,0,0,1-.24-.24V10.2a.08.08,0,0,0-.09-.09H15c-.05,0-.08,0-.08.09V21.14a.21.21,0,0,1-.24.24h-1a.21.21,0,0,1-.23-.24v-6s0-.08-.09-.08a3.57,3.57,0,0,1-2.29-1,2.92,2.92,0,0,1-.88-2.19,3.08,3.08,0,0,1,.43-1.63A2.94,2.94,0,0,1,11.8,9.11a4,4,0,0,1,1.85-.4Z"
        fill="#fff"
      />
      <circle
        cx="6.83"
        cy="22.61"
        r="5.76"
        fill="#037cbb"
      />
      <path
        d="M10,22.61a1.87,1.87,0,0,0-2.4-2.84l0,0a.41.41,0,0,0-.1.57.42.42,0,0,0,.58.1h0A1,1,0,0,1,9.39,22L7.94,23.48a1,1,0,0,1-1.58-1.34v0a.42.42,0,0,0-.09-.58.42.42,0,0,0-.58.1v0a1.86,1.86,0,0,0,2.83,2.4Zm-6.7-.3a1.87,1.87,0,0,0,2.4,2.84h0a.42.42,0,0,0,.1-.58.43.43,0,0,0-.58-.1l0,0a1,1,0,0,1-1.34-1.59L5.3,21.45a1,1,0,0,1,1.58,1.34v0a.4.4,0,0,0,.09.57.42.42,0,0,0,.58-.09v0a1.86,1.86,0,0,0-2.83-2.41Z"
        fill="#fff"
      />
    </svg>
  ),
  /**
   * @see ./edit.js
   */
  edit: edit,
  save: save,
};
registerBlock({ metadata, name, settings });
