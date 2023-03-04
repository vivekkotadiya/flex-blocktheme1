/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";

/**
 * Internal dependencies
 */
import "./styles/editor.scss";
import edit from "./edit";
import save from "./save";
import metadata from "./block.json";
import { registerBlock } from "../../utils/helper";

const { name } = metadata;

export { metadata, name };

export const settings = {
	icon: (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      id="f5545c10-cb02-414e-8c96-adcf44965a23" 
      data-name="Ebene 1" 
      viewBox="0 0 30 30">
      <rect 
        width="30" 
        height="30" 
        rx="3.29" 
        fill="#1e1e1e"
      />
      <circle 
        cx="6.32" 
        cy="7.54" 
        r="2.47" 
        fill="#fff"
      />
      <circle 
        cx="6.32" 
        cy="15" 
        r="2.47" 
        fill="#fff"
      />
      <circle 
        cx="6.32" 
        cy="22.46" 
        r="2.47" 
        fill="#fff"
      />
      <rect 
        x="11.47" 
        y="5.97" 
        width="14.68" 
        height="3.14" 
        fill="#fff"
      />
      <rect 
        x="11.47" 
        y="13.43" 
        width="14.68" 
        height="3.14" 
        fill="#fff"
      />
      <rect 
        x="11.47" 
        y="20.89" 
        width="14.68" 
        height="3.14" 
        fill="#fff"
      />
      <circle 
        cx="6.83" 
        cy="22.61" 
        r="5.76" 
        fill="#037cbb"
      />
      <path 
        d="M10.49,23.06a.65.65,0,0,0,0-.9L7.31,19a.64.64,0,1,0-.9.9L8.5,22H3.61a.64.64,0,0,0,0,1.28H8.5L6.41,25.34a.64.64,0,1,0,.9.9l3.18-3.18Z" 
        fill="#fff"
      />
    </svg>
  ),
  edit,
  save,
};
registerBlock({ metadata, name, settings });
