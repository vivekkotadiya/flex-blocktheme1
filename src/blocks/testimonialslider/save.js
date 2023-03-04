/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { Component } from "@wordpress/element";
import { InnerBlocks } from "@wordpress/block-editor";


export default class Save extends Component {
	render() {
		const { anchor } = this.props.attributes;
		return (
			<div id={anchor ? anchor : null} className="row--wrapper row-wrapper--ct-wd">
				<div className="splide testimonial_slider">
					<div class="splide__track">
						<div className="splide__list">
							<InnerBlocks.Content />		
						</div>
					</div>
				</div>
			</div>
		);
	}
}
