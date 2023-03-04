/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { Component } from "@wordpress/element";
import { RichText } from "@wordpress/block-editor";

import { SplideSlide } from '@splidejs/react-splide';

export default class Save extends Component {
	constructor(props) {
		super(...arguments);
	}
	render() {
		const { xsimageUrl, xswebpImageUrl, altText, headlinelevel, texttag, headlinetext, description, buttonlinkTarget, buttonColorClass, buttonText, buttonUrl} = this.props.attributes;

		const headlinetag = headlinelevel == "span" ? "span" : "h" + headlinelevel;

		const relAttributes = [];

		if (buttonlinkTarget) {
			relAttributes.push("noopener");
		}

  		const buttonclasses = `button--cta button--style-one button--color-${buttonColorClass}`;

  		const relation = relAttributes && relAttributes.length > 0 ? relAttributes.join(" ") : null;

		return (
			<SplideSlide>
				<div className="card__wrapper">
					{xsimageUrl ? (
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
					) : (
						""
					)}
					<div className="card__inner">
						<RichText.Content className={"card--name headline headline--style-four headline--color-three"} tagName={headlinetag} value={ headlinetext } />
						<RichText.Content className={"card--text text text--color-eight text--style-one"} tagName={texttag} value={ description } />
						<a
							className={buttonclasses}
							href={!!buttonUrl ? buttonUrl : null}
							target={!!buttonlinkTarget ? "_blank" : null}
							rel={relation}
						>
							<RichText.Content
								tagName="span"
								className="button--text"
								value={buttonText}
							/>
						</a>
					</div>	
				</div>
			</SplideSlide>
		);
	}
}

