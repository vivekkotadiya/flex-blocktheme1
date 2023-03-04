/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import "./styles/editor.scss";
import Edit from './edit';
import save from './save';
import metadata from './block.json';
import { stack } from '../../utils/block-icons';
import { registerBlock } from "../../utils/helper";

const { name } = metadata;

export { metadata, name };

export const settings = {
	icon: stack,
	edit: (props) => {
		return <div {...useBlockProps()}>{<Edit {...props} />}</div>;
	},
	save,
};

registerBlock({ metadata, name, settings });