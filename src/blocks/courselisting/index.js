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
      id="b385f1bb-b178-429a-967f-b6955e9aa360" 
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
        d="M15,9a1.9,1.9,0,0,0-.63.11l-7.49,2.7a.66.66,0,0,0-.42.61.64.64,0,0,0,.42.6l1.55.56A4.38,4.38,0,0,0,7.74,16v.75a5.14,5.14,0,0,1-.59,2.15,8,8,0,0,1-.61,1,.47.47,0,0,0-.06.4.45.45,0,0,0,.3.27L8.49,21a.43.43,0,0,0,.33-.06A.4.4,0,0,0,9,20.64,6.76,6.76,0,0,0,9,17.73a5.84,5.84,0,0,0-.36-1.12V16a3.57,3.57,0,0,1,.75-2.18,3.22,3.22,0,0,1,1.31-.95l4.19-1.65a.44.44,0,0,1,.56.24.43.43,0,0,1-.24.55L11,13.62a2.3,2.3,0,0,0-.85.58l4.25,1.54a2,2,0,0,0,.64.1,1.93,1.93,0,0,0,.63-.1L23.12,13a.64.64,0,0,0,.42-.6.66.66,0,0,0-.42-.61l-7.49-2.7A1.9,1.9,0,0,0,15,9Zm-5.12,10C9.88,20,12.17,21,15,21s5.12-1,5.12-1.92l-.4-3.89-3.8,1.38a2.92,2.92,0,0,1-.92.16,2.87,2.87,0,0,1-.92-.16l-3.8-1.38Z" 
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
