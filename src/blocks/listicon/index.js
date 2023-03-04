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
      id="e266fb1c-fdfa-4783-9308-b23e80b34592" 
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
      <polygon 
        points="6.83 18.32 8.18 21.04 11.18 21.48 9.01 23.6 9.52 26.6 6.83 25.18 4.14 26.6 4.66 23.6 2.48 21.48 5.49 21.04 6.83 18.32" 
        fill="#fff"
      />
    </svg>
  ),
  edit,
  save,
};

registerBlock({ metadata, name, settings });
