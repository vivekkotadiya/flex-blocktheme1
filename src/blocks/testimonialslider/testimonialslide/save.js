/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { Component } from "@wordpress/element";
import { RichText } from "@wordpress/block-editor";


export default class Save extends Component {
	constructor(props) {
		super(...arguments);
	}
	render() {
		const { xsimageUrl, xswebpImageUrl, altText, headlinelevel, texttag, headlinetext, description } = this.props.attributes;

		const headlinetag = headlinelevel == "span" ? "span" : "h" + headlinelevel;

		return (
			<div className="splide__slide testimonial">
				<div className="row--wrapper row-wrapper--ct-wd">
					<div className="row row--xs-center">
						<div className="col col--xs-12 col--lg-4">
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
							</div>
						</div>
						<div className="col col--xs-12 col--lg-7">
							<div className="col__content">
								<div className="testimonial__inner">
									<RichText.Content className={"testimonial--name headline headline--style-four headline--color-three"} tagName={headlinetag} value={ headlinetext } />
									<RichText.Content className={"testimonial--text text text--color-eight text--style-one"} tagName={texttag} value={ description } />
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
					</div>
				</div>
			</div>
		);
	}
}
