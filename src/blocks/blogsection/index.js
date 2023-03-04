/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";

/**
 * Internal dependencies
 */
import edit from "./edit";
import save from "./save";
import "./styles/editor.scss";
import metadata from "./block.json";
import { registerBlock } from "../../utils/helper";

const { name } = metadata;

export { metadata, name };

export const settings = {
  icon: (
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      id="b9d31ccf-0d2b-46b1-970d-dd3a0b67a0a1"
      data-name="Ebene 1"
      viewBox="0 0 30 30">
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
        d="M20.46,7.72l-9.15,4.75L12,17.78l.6.13L12,19.73a1.53,1.53,0,0,0,1,1.95l.21.05,3.24.61a1.54,1.54,0,0,0,1.74-1l.72-2.12,3.24.69a.77.77,0,0,0,.91-.6A.75.75,0,0,0,23,19L21.57,8.3a.78.78,0,0,0-.87-.66A.68.68,0,0,0,20.46,7.72ZM16.71,20.84l-3.24-.61.68-2,3.21.68ZM9,18.2,10.52,18,9.8,12.68l-1.52.2A1.53,1.53,0,0,0,7,14.61l.31,2.28A1.54,1.54,0,0,0,9,18.2Z" 
        fill="#fff"
      />
      <circle
        cx="6.83"
        cy="22.61"
        r="5.76"
        fill="#037cbb"
      />
      <polygon
        points="10.13 25.69 7.99 25.69 7.99 25.08 9.51 25.08 9.51 23.55 10.13 23.55 10.13 25.69"
        fill="#fff"
      />
      <polygon
        points="5.68 25.69 3.54 25.69 3.54 23.55 4.15 23.55 4.15 25.08 5.68 25.08 5.68 25.69"
        fill="#fff"
      />
      <polygon
        points="4.15 21.72 3.54 21.72 3.54 19.58 5.68 19.58 5.68 20.19 4.15 20.19 4.15 21.72"
        fill="#fff"
      />
      <polygon
        points="10.13 21.72 9.51 21.72 9.51 20.19 7.99 20.19 7.99 19.58 10.13 19.58 10.13 21.72"
        fill="#fff"
      />
    </svg>
  ),
  edit,
  save,
};

registerBlock({ metadata, name, settings });
