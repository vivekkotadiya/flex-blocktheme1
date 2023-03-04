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
      id="b73eadb0-3a92-4374-81a9-48c2144a7d08" 
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
      <g 
        id="a659587c-251e-4618-b767-88d02b6acd07" 
        data-name="Layer 2"
      >
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
