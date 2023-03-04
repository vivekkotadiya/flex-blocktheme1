/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

/**
 * Internal dependencies
 */
import Edit from "./edit";
import save from "./save";
import metadata from "./block.json";
import { registerBlock } from "../../../utils/helper";

const { name } = metadata;

export { metadata, name };
export const settings = {
  icon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="af41218e-72f1-4103-9e3f-ef6d5ff3b9ed"
      data-name="Ebene 1"
      viewBox="0 0 30 30">
      <rect width="30" height="30" rx="3.29" fill="#1e1e1e" />
      <path
        d="M11.67,22.5l.09-.08,7.33-6.37a1.17,1.17,0,0,0,.4-.9,1.22,1.22,0,0,0-.4-.9L11.78,7.89l-.12-.1a.74.74,0,0,0-.41-.13.76.76,0,0,0-.74.78h0V21.86h0a.76.76,0,0,0,.74.78A.71.71,0,0,0,11.67,22.5Z"
        fill="#fff"
      />
    </svg>
  ),
  edit: (props) => {
    return (
      <div {...useBlockProps()}>
        <Edit {...props} />
      </div>
    );
  },
  save
};
registerBlock({ metadata, name, settings });
