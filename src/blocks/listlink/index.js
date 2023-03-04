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
import "./styles/editor.scss";
import metadata from "./block.json";
import { registerBlock } from "../../utils/helper";

const { name } = metadata;

export { metadata, name };

export const settings = {
  icon: (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      id="aafb78e2-416f-4822-a617-1d54b5e4ba23" 
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
        d="M10,22.61a1.87,1.87,0,0,0-2.4-2.84l0,0a.41.41,0,0,0-.1.57.42.42,0,0,0,.58.1h0A1,1,0,0,1,9.39,22L7.94,23.48a1,1,0,0,1-1.58-1.34v0a.42.42,0,0,0-.09-.58.42.42,0,0,0-.58.1v0a1.86,1.86,0,0,0,2.83,2.4Zm-6.7-.3a1.87,1.87,0,0,0,2.4,2.84h0a.42.42,0,0,0,.1-.58.43.43,0,0,0-.58-.1l0,0a1,1,0,0,1-1.34-1.59L5.3,21.45a1,1,0,0,1,1.58,1.34v0a.4.4,0,0,0,.09.57.42.42,0,0,0,.58-.09v0a1.86,1.86,0,0,0-2.83-2.41Z" 
        fill="#fff"
      />
    </svg>
  ),
  edit,
  save,
};

registerBlock({ metadata, name, settings });
