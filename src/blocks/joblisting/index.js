/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";

/**
 * Internal dependencies
 */
import edit from "./edit";
import metadata from "./block.json";
import { registerBlock } from "../../utils/helper";

const { name } = metadata;

export { metadata, name };

export const settings = {
  icon: (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      id="a6130df5-c370-4d50-b040-4228a22eb2d2" 
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
        d="M8.36,8.36a1.9,1.9,0,0,0-1.9,1.89v9.5a1.9,1.9,0,0,0,1.9,1.89H21.64a1.9,1.9,0,0,0,1.9-1.89v-9.5a1.9,1.9,0,0,0-1.9-1.89ZM10.73,16h1.9A2.37,2.37,0,0,1,15,18.32a.48.48,0,0,1-.47.48H8.83a.48.48,0,0,1-.47-.48A2.37,2.37,0,0,1,10.73,16Zm2.85-2.85a1.9,1.9,0,1,1-1.9-1.9A1.9,1.9,0,0,1,13.58,13.1Zm3.79-.95h3.8a.48.48,0,0,1,.47.48.47.47,0,0,1-.47.47h-3.8a.47.47,0,0,1-.47-.47A.48.48,0,0,1,17.37,12.15Zm0,1.9h3.8a.48.48,0,0,1,0,.95h-3.8a.48.48,0,0,1,0-.95Zm0,1.9h3.8a.47.47,0,0,1,.47.47.48.48,0,0,1-.47.48h-3.8a.48.48,0,0,1-.47-.48A.47.47,0,0,1,17.37,16Z" 
        fill="#fff"
      />
      <circle 
        cx="6.83" 
        cy="22.61" 
        r="5.76" 
        fill="#037cbb"
      />
      <rect 
        x="3.13" 
        y="18.89" 
        width="2.99" 
        height="2.99" 
        rx="0.71" 
        fill="#fff"
      />
      <rect 
        x="7.51" 
        y="18.89" 
        width="2.99" 
        height="2.99" 
        rx="0.71" 
        fill="#fff"
      />
      <rect 
        x="3.13" 
        y="23.29" 
        width="2.99" 
        height="2.99" 
        rx="0.71" 
        fill="#fff"
      />
      <rect 
        x="7.51" 
        y="23.29" 
        width="2.99" 
        height="2.99" 
        rx="0.71" 
        fill="#fff"
      />
    </svg>
  ),
  edit,
  save: (props) => {
    return null;
  },
};

registerBlock({ metadata, name, settings });
