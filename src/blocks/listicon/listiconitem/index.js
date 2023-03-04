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
import { registerBlock } from "../../../utils/helper";

const { name } = metadata;

export { metadata, name };

export const settings = {
  icon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="be1f83ad-7e2d-4c87-95b8-24c21ac4815f"
      data-name="Ebene 1"
      viewBox="0 0 30 30">
      <rect width="30" height="30" rx="3.29" fill="#1e1e1e" />
      <circle cx="6.32" cy="7.54" r="2.47" fill="#fff" />
      <rect x="11.47" y="5.97" width="14.68" height="3.14" fill="#fff" />
    </svg>
  ),
  getEditWrapperProps(attributes) {
    const currentId =
      typeof attributes.itemId != "undefined"
        ? attributes.itemId
        : attributes.id;
    return { "data-item": currentId };
  },
  /**
   * @see ./edit.js
   */
  edit: (props) => {
    return <div {...useBlockProps()}>{<Edit {...props} />}</div>;
  },
  save: (props) => {
    return <Save {...props} />;
  },
};
registerBlock({ metadata, name, settings });
