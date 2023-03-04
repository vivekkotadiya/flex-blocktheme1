/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";

/**
 * Internal dependencies
 */
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
      id="ab622908-98e5-420a-a25e-d35814fb83fa"
      data-name="Ebene 1"
      viewBox="0 0 30 30"
    >
      <rect
        y="-0.04"
        width="30"
        height="30"
        rx="3.29"
        fill="#1e1e1e"
      />
      <path 
        d="M8.28,8.36a1.9,1.9,0,0,0-1.9,1.89v9.5a1.9,1.9,0,0,0,1.9,1.89H21.57a1.89,1.89,0,0,0,1.89-1.89v-9.5a1.89,1.89,0,0,0-1.89-1.89ZM10.65,16h1.9a2.37,2.37,0,0,1,2.37,2.37.48.48,0,0,1-.47.48H8.75a.48.48,0,0,1-.47-.48A2.37,2.37,0,0,1,10.65,16ZM13.5,13.1a1.9,1.9,0,1,1-1.9-1.9A1.9,1.9,0,0,1,13.5,13.1Zm3.79-.95h3.8a.49.49,0,0,1,.48.48.48.48,0,0,1-.48.47h-3.8a.47.47,0,0,1-.47-.47A.48.48,0,0,1,17.29,12.15Zm0,1.9h3.8a.48.48,0,1,1,0,.95h-3.8a.48.48,0,0,1,0-.95Zm0,1.9h3.8a.48.48,0,0,1,.48.47.49.49,0,0,1-.48.48h-3.8a.48.48,0,0,1-.47-.48A.47.47,0,0,1,17.29,16Z" 
        fill="#fff"
      />
      <path
        d="M20.44,4.67V7.36h1.13a2.9,2.9,0,0,1,2.89,2.89v9.49a2.9,2.9,0,0,1-2.89,2.9H20.44v2.6h6V4.67Z"
        fill="#037cbb"
      />
      <rect
        x="11.94"
        y="4.67"
        width="5.97"
        height="2.68"
        fill="#037cbb"
      />
      <rect
        x="11.94"
        y="22.64"
        width="5.97"
        height="2.6"
        fill="#037cbb"
      />
      <path
        d="M8.28,22.64a2.9,2.9,0,0,1-2.9-2.9V10.25a2.9,2.9,0,0,1,2.9-2.89H9.56V4.67h-6V25.24h6v-2.6Z"
        fill="#037cbb"
      />
    </svg>
  ),
  edit,
  save,
};

registerBlock({ metadata, name, settings });
