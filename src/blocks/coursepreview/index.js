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
      id="e74b95ff-d186-44bb-8a32-b0a726578e43"
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
        d="M8.61,11.93a2.05,2.05,0,1,1,2.05-2A2.05,2.05,0,0,1,8.61,11.93ZM6.05,16.54a2,2,0,0,0,.51,1.35V15.18A2,2,0,0,0,6.05,16.54Zm4.61-1.36V17.9a2.07,2.07,0,0,0,.52-1.36,2,2,0,0,0-.52-1.35Zm2.05,1.36a3.59,3.59,0,0,1-2.05,3.24v1.37a1,1,0,0,1-1,1H7.59a1,1,0,0,1-1-1V19.78A3.59,3.59,0,0,1,8.1,13h1A3.58,3.58,0,0,1,12.71,16.54Z"
        fill="#037cbb"
      />
      <rect
        x="14.6"
        y="9.22"
        width="7.93"
        height="2.27"
        fill="#f0f0f0"
      />
      <rect
        x="14.6"
        y="13.17"
        width="10.89"
        height="1.32"
        fill="#f0f0f0"
      />
      <rect
        x="14.6"
        y="15.51"
        width="8.78"
        height="1.32"
        fill="#f0f0f0"
      />
      <rect
        x="14.6"
        y="19.14"
        width="4.39"
        height="2.08"
        fill="#f0f0f0"
      />
    </svg>
  ),
  edit: (props) => {
    return <div {...useBlockProps()}>{<Edit {...props} />}</div>;
  },
  save: (props) => {
    return <Save {...props} />;
  },
};

registerBlock({ metadata, name, settings });
