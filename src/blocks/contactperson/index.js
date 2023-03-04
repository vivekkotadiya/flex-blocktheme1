/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import edit from './edit';
import metadata from './block.json';
import { registerBlock } from "../../utils/helper";

const { name } = metadata;

export { metadata, name };

export const settings = {
	icon: (
		<svg 
			xmlns="http://www.w3.org/2000/svg" 
			id="a9c1fa0e-69d3-4c25-ac5b-723b5be03284" 
			data-name="Ebene 1" 
			viewBox="0 0 30 30">
			<rect 
				width="30" 
				height="30" rx="3.29" 
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
				d="M15,11.4A2.41,2.41,0,1,1,17.4,9,2.41,2.41,0,0,1,15,11.4Zm-3,5.4a2.36,2.36,0,0,0,.6,1.59V15.21A2.38,2.38,0,0,0,12,16.8Zm5.4-1.59v3.18a2.39,2.39,0,0,0,0-3.17Zm2.4,1.59a4.21,4.21,0,0,1-2.4,3.8v1.61a1.2,1.2,0,0,1-1.2,1.2H13.8a1.2,1.2,0,0,1-1.2-1.2V20.6a4.2,4.2,0,0,1,1.8-8h1.2A4.2,4.2,0,0,1,19.8,16.8Z" 
				fill="#fff"
			/>
			<circle 
				cx="6.83" 
				cy="22.61" 
				r="5.76" 
				fill="#037cbb"
			/>
			<g 
				id="fc87a0fb-518e-4efb-84db-796e2c743d78" 
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
