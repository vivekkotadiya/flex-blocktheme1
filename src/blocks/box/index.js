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
      id="b7652869-7668-40c7-9853-907565d167c6"
      data-name="Ebene 1"
      viewBox="0 0 30 30"
    >
      <rect
        y="-0.04"
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
        d="M17.6,8.66a.21.21,0,0,1,.24.24V21.1a.21.21,0,0,1-.24.24h-1a.21.21,0,0,1-.24-.24V10.16a.08.08,0,0,0-.09-.09H15c-.05,0-.08,0-.08.09V21.1a.21.21,0,0,1-.24.24h-1a.21.21,0,0,1-.23-.24v-6c0-.06,0-.08-.09-.08A3.52,3.52,0,0,1,11,14a2.9,2.9,0,0,1-.88-2.18,3.08,3.08,0,0,1,.43-1.63A2.88,2.88,0,0,1,11.8,9.07a4,4,0,0,1,1.85-.41Z"
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
