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
      id="e16d2baf-0bb1-4918-90ed-432362c3fbe6" 
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
        d="M12,7a1,1,0,0,1,1,1V9h4V8a1,1,0,0,1,2,0V9h1.5A1.51,1.51,0,0,1,22,10.49V12H8v-1.5A1.51,1.51,0,0,1,9.49,9H11V8A1,1,0,0,1,12,7ZM8,13H22v8.53A1.5,1.5,0,0,1,20.51,23h-11A1.5,1.5,0,0,1,8,21.52Zm2,2.51v1a.5.5,0,0,0,.5.51h1a.5.5,0,0,0,.5-.51v-1a.5.5,0,0,0-.5-.5h-1A.5.5,0,0,0,10,15.5Zm4,0v1a.5.5,0,0,0,.5.51h1a.5.5,0,0,0,.5-.51v-1a.5.5,0,0,0-.5-.5h-1A.5.5,0,0,0,14,15.5Zm4.51-.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.51h1a.5.5,0,0,0,.5-.51v-1a.5.5,0,0,0-.5-.5ZM10,19.51v1a.5.5,0,0,0,.5.51h1a.5.5,0,0,0,.5-.51v-1a.5.5,0,0,0-.5-.5h-1A.5.5,0,0,0,10,19.51ZM14.5,19a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.51h1a.5.5,0,0,0,.5-.51v-1a.5.5,0,0,0-.5-.5Zm3.51.5v1a.5.5,0,0,0,.5.51h1a.5.5,0,0,0,.5-.51v-1a.5.5,0,0,0-.5-.5h-1A.5.5,0,0,0,18,19.51Z" 
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
