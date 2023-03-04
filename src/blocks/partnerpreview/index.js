/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";

/**
 * Internal dependencies
 */
import edit from "./edit";
import "./styles/editor.scss";
import metadata from "./block.json";
import { registerBlock } from "../../utils/helper";

const { name } = metadata;

export { metadata, name };

export const settings = {
  icon: (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      id="b740f416-75f2-432b-b745-bbc709f0d53b"
      data-name="Ebene 1" 
      viewBox="0 0 30 30">
      <rect width="30" height="30" rx="3.29" fill="#1e1e1e"/>
      <rect 
        x="3.25" 
        y="3.25" 
        width="23.51" 
        height="23.51" 
        rx="3.29" 
        fill="#3c3c3b"
      />
      <path 
        d="M9.3,14.08,6.76,18.43v-8A1.83,1.83,0,0,1,8.59,8.59H12a1.81,1.81,0,0,1,1.3.54l.76.75a1.8,1.8,0,0,0,1.29.54h3.36a1.83,1.83,0,0,1,1.83,1.83v.92H10.88a1.82,1.82,0,0,0-1.58.91Zm.79.46a.91.91,0,0,1,.79-.46H22.33a.91.91,0,0,1,.79.46.94.94,0,0,1,0,.92L19.91,21a.9.9,0,0,1-.79.45H7.67A.92.92,0,0,1,6.88,21a.94.94,0,0,1,0-.92l3.21-5.49Z" 
        fill="#fff"
      />
      <circle cx="6.83" cy="22.61" r="5.76" fill="#037cbb"/>
      <g id="b1d78b56-06b9-4e18-84ea-f60ba1d7c5f1" data-name="Layer 2">
        <path 
          d="M6.84,19.37c-3,0-4.51,2.9-4.57,3l-.11.2.1.21c.07.12,1.56,3,4.58,3s4.5-2.9,4.56-3l.1-.21-.1-.2C11.34,22.27,9.86,19.37,6.84,19.37Zm0,5.54A4.58,4.58,0,0,1,3.21,22.6a4.58,4.58,0,0,1,3.63-2.31,4.57,4.57,0,0,1,3.62,2.31A4.57,4.57,0,0,1,6.84,24.91Z" 
          fill="#fff"
        />
        <path 
          d="M6.84,21.07A1.54,1.54,0,1,0,8.37,22.6,1.53,1.53,0,0,0,6.84,21.07Z" 
          fill="#fff"
        />
      </g>
    </svg>
  ),
  edit,
  save: (props) => {
    return null;
  },
};

registerBlock({ metadata, name, settings });
