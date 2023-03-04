/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { useState } from "@wordpress/element";

/**
 * Internal dependencies
 */

import "./styles/editor.scss";
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
      id="a41d7dcd-5bc3-4573-95f6-56614ea33bab"
      data-name="Ebene 1"
      viewBox="0 0 30 30"
    >
      <rect
        width="30"
        height="30"
        rx="3.29"
        fill="#1e1e1e"
      />
      <polygon
        points="25.78 25.22 18.78 25.22 18.78 23.22 23.78 23.22 23.78 18.22 25.78 18.22 25.78 25.22"
        fill="#fff"
      />
      <polygon
        points="11.23 25.22 4.23 25.22 4.23 18.22 6.23 18.22 6.23 23.22 11.23 23.22 11.23 25.22"
        fill="#fff"
      />
      <polygon
        points="6.23 12.22 4.23 12.22 4.23 5.22 11.23 5.22 11.23 7.22 6.23 7.22 6.23 12.22"
        fill="#fff"
      />
      <polygon
        points="25.78 12.22 23.78 12.22 23.78 7.22 18.78 7.22 18.78 5.22 25.78 5.22 25.78 12.22"
        fill="#fff"
      />
      <circle
        cx="6.83"
        cy="22.61"
        r="5.76"
        fill="#037cbb"
      />
      <polygon
        points="11.1 21.54 7.83 21.54 6.83 18.35 5.83 21.54 2.57 21.54 5.21 23.53 4.17 26.87 6.83 24.74 9.5 26.87 8.45 23.53 11.1 21.54"
        fill="#fff"
      />
    </svg>
  ),
  /**
   * @see ./edit.js
   */
  edit: (props) => {
    const [bgResponsiveMode, setbgResponsiveMode] = useState("xl");
    props.bgResponsiveMode = bgResponsiveMode;
    props.setbgResponsiveMode = setbgResponsiveMode;
    return <div {...useBlockProps()}>{<Edit {...props} />}</div>;
  },
  save: (props) => {
    return <Save {...props} />;
  },
};
registerBlock({ metadata, name, settings });
