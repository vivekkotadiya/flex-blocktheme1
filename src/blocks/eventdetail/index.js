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
      id="ef9c65ca-9b9d-4061-840f-56fd3f8b16c1"
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
