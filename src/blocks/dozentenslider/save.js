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
				<div className="splide dozenten_slider">
					<div class="splide__track">
						<div className="splide__list">
							<InnerBlocks.Content />		
						</div>
						<div class="splide__arrows arrows--lg-hide">
							<button class="splide__arrow splide__arrow--prev">
								<span className="nav--arrow is--left"></span>
							</button>
							<button class="splide__arrow splide__arrow--next">
								<span className="nav--arrow is--right"></span>
							</button>
						</div>
					</div>
					
				</div>
			</div>
		);
	}
}
