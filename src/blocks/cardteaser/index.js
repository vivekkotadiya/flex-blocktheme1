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
      id="a83c182d-32d6-4a59-8d6a-c6e866c82f66"
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
      <rect
        x="3.12"
        y="10.45"
        width="23.63"
        height="9.55"
        fill="#fff"
      />
      <rect
        x="4.12"
        y="11.41"
        width="8.23"
        height="7.61"
        fill="#037cbb"
      />
      <rect
        x="13.46"
        y="11.74"
        width="8.65"
        height="2.27"
        fill="#3c3c3b"
      />
      <rect
        x="13.46"
        y="15.03"
        width="12.19"
        height="1.32"
        fill="#3c3c3b"
      />
      <rect
        x="13.46"
        y="17.37"
        width="8.78"
        height="1.32"
        fill="#3c3c3b"
      />
    </svg>
  ),
  edit: (props) => {
    return (
      <div
        {...useBlockProps({
          className: "card-teaser",
        })}>
        {<Edit {...props} />}
      </div>
    );
  },
  save: (props) => {
    return <Save {...props} />;
  },
};

registerBlock({ metadata, name, settings });
