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
      id="b1b06e6c-73b2-488c-9c99-e6c5b821e4e6" 
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
        d="M11.37,10.52A1.5,1.5,0,1,1,9.88,9,1.49,1.49,0,0,1,11.37,10.52Zm-3.2,4.21a1.64,1.64,0,0,0-.43,1.12A1.67,1.67,0,0,0,8.17,17ZM12,13.41a3.85,3.85,0,0,0-.44,5.29v.57a.85.85,0,0,1-.85.85H9a.85.85,0,0,1-.85-.85v-.71a3,3,0,0,1,1.28-5.7h.85a2.92,2.92,0,0,1,1.72.55Zm6.4,5.86V18.7A3.85,3.85,0,0,0,18,13.41a2.92,2.92,0,0,1,1.72-.55h.85a3,3,0,0,1,1.28,5.7v.71a.85.85,0,0,1-.85.85H19.27A.85.85,0,0,1,18.42,19.27Zm3.2-8.75A1.5,1.5,0,1,1,20.12,9,1.5,1.5,0,0,1,21.62,10.52Zm.21,4.21V17a1.71,1.71,0,0,0,.43-1.13,1.67,1.67,0,0,0-.43-1.13ZM15,12.44a1.71,1.71,0,1,1,1.71-1.71A1.72,1.72,0,0,1,15,12.44Zm-2.14,3.84a1.69,1.69,0,0,0,.43,1.13V15.15A1.69,1.69,0,0,0,12.86,16.28Zm3.85-1.13v2.26a1.67,1.67,0,0,0,.43-1.13,1.69,1.69,0,0,0-.43-1.13Zm1.71,1.13A3,3,0,0,1,16.71,19v1.14a.85.85,0,0,1-.86.86h-1.7a.85.85,0,0,1-.86-.86V19a3,3,0,0,1,1.28-5.69h.86A3,3,0,0,1,18.42,16.28Z" 
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
