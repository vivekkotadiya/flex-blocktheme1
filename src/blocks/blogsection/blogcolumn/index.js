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
import { registerBlock } from "../../../utils/helper";

const { name } = metadata;

export { metadata, name };

export const settings = {
  icon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="e5594fba-959c-4e5d-8699-2c8819162145"
      data-name="Ebene 1"
      viewBox="0 0 30 30">
      <rect width="30" height="30" rx="3.29" fill="#1e1e1e" />
      <rect x="8.03" y="8.79" width="5.81" height="12.43" fill="#037cbb" />
      <rect x="16.16" y="8.79" width="5.81" height="12.43" fill="#fff" />
      <path
        d="M26.41,25.28H3.59V4.72H26.41Zm-20.82-2H24.41V6.72H5.59Z"
        fill="#fff"
      />
    </svg>
  ),
  edit,
  save,
};
registerBlock({ metadata, name, settings });
