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
      id="a00f34f9-c340-46b1-966c-680c818b03a9" 
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
        d="M11,7A2,2,0,0,0,9,9V21a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V12H17a1,1,0,0,1-1-1V7Zm6,0v4h4ZM11.49,9h2a.51.51,0,0,1,0,1h-2a.51.51,0,0,1,0-1Zm0,2h2a.5.5,0,0,1,0,1h-2a.5.5,0,0,1,0-1Zm.5,3h6a1,1,0,0,1,1,1v2a1,1,0,0,1-1,1H12a1,1,0,0,1-1-1V15A1,1,0,0,1,12,14Zm0,1v2h6V15Zm4.51,5h2a.51.51,0,0,1,0,1h-2a.51.51,0,0,1,0-1Z" 
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
