/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { Component } from "@wordpress/element";
import { useInnerBlocksProps } from "@wordpress/block-editor";
import { Splide, SplideTrack } from '@splidejs/react-splide';
import { RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {

	const { anchor, blockTitle } = attributes;
	const innerBlocksProps = useInnerBlocksProps.save();

	return (
		<div id={anchor ? anchor : null} className="cards--slider">
			<Splide hasTrack={ false } className="card__slider">
				<div className="splide__top">
					<div class="splide__arrows">
						<button class="splide__arrow splide__arrow--prev">
							<span className="nav--arrow is--left"></span>
						</button>
						<button class="splide__arrow splide__arrow--next">
							<span className="nav--arrow is--right"></span>
						</button>
					</div>
					<RichText.Content className={"card_slider-title headline headline--style-two headline--color-eight"} tagName={"h2"} value={ blockTitle } />
				</div>
				<SplideTrack {...innerBlocksProps}>
					{ innerBlocksProps.children }
				</SplideTrack>	
			</Splide>
		</div>
	);
}

