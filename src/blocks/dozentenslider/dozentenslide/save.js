/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { RichText, useInnerBlocksProps } from "@wordpress/block-editor";


export default function save({attributes}) {
	
		const { xsimageUrl, xswebpImageUrl, altText, headlinelevel, texttag, headlinetext, description, tags } = attributes;

		const headlinetag = headlinelevel == "span" ? "span" : "h" + headlinelevel;

		let tagsArray = tags ? tags.split(',') : [];
			tagsArray = tagsArray.filter(function (el) {
				return el.trim() !== "";
			});

		const tagItems = tagsArray.map((tag) =>
			<span>{tag.trim()}</span>
		);

		const innerBlocksProps = useInnerBlocksProps.save();

		return (
			<div className="splide__slide dozenten">
				<div className="row--wrapper row-wrapper--ct-wd">
					<div className="row row--xs-center">
						<div className="col col--xs-12 col--xl-4">
							<div className="col__content">
								<div className="image">
									<picture className={`image__content`}>
										<>
											{xswebpImageUrl ? (
												<source
													media="(max-width:480px)"
													srcset={`${xswebpImageUrl}`}
													type="image/webp"
												/>
											) : (
												""
											)}
											<source media="(max-width:480px)" srcset={`${xsimageUrl}`} />
											<img src={`${xsimageUrl}`} alt={`${altText}`} />
										</>
									</picture>
								</div>
								<div class="splide__arrows">
									<button class="splide__arrow splide__arrow--prev">
										<span className="nav--arrow is--left"></span>
									</button>
									<button class="splide__arrow splide__arrow--next">
										<span className="nav--arrow is--right"></span>
									</button>
								</div>
							</div>
						</div>
						<div className="col col--xs-12  col--xl-7">
							<div className="col__content">
								<div className="dozentin__inner">
									<RichText.Content className={"dozent--name headline headline--style-four headline--color-three"} tagName={headlinetag} value={ headlinetext } />
									{ tagItems && tagItems.length > 0 && 
										<div className="dozentin--tags">{tagItems}</div>
									}
									<div {...innerBlocksProps} />
								</div>
								
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	
}
