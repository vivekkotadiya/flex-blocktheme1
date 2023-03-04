/**
 * External dependencies
 */
import classnames from "classnames";

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
    const {
      attributes: {
        imageAlt,
        imageDefaultAlt,
        mdimageUrl,
        webpmdImageUrl,
        xsimageUrl,
        webpxsImageUrl,
        cardHeadColorClass,
        cardHead,
        cardHeadLevel,
        cardTextColorClass,
        cardText,
        cardTextTag,
        cardTBtncontent,
        url,
        cardTBtntarget,
        cardTBtnColorClass,
        anchor,
      },
    } = this.props;

    const HeadTag = cardHeadLevel == "span" ? "span" : "h" + cardHeadLevel;
    const TextTag = cardTextTag;

    const relAttributes = [];

    if (cardTBtntarget) {
      relAttributes.push("noopener");
    }

    const relation =
      relAttributes && relAttributes.length > 0
        ? relAttributes.join(" ")
        : null;

    return (
      <div className="card-teaser" id={anchor ? anchor : null}>
        <div className="row-wrapper row-wrapper--ct-wd">
          <div className="card-teaser__item row row--col-ht row--xs-center row--gap-0">
            <div className="card-teaser__item--image col col--xs-12 col--lg-5 col--pd-0">
              <div className="col__content">
                {(mdimageUrl || xsimageUrl) && (
                  <picture>
                    {/* Desktop Image rendering */}
                    {mdimageUrl ? (
                      <>
                        {webpmdImageUrl ? (
                          <source
                            media="(min-width:769px)"
                            srcset={`${webpmdImageUrl}`}
                            type="image/webp"
                          />
                        ) : (
                          ""
                        )}
                        <source
                          media="(min-width:769px)"
                          srcset={`${mdimageUrl}`}
                        />
                      </>
                    ) : (
                      <>
                        {webpxsImageUrl ? (
                          <source
                            media="(min-width:769px)"
                            srcset={`${webpxsImageUrl}`}
                            type="image/webp"
                          />
                        ) : (
                          ""
                        )}
                        <source
                          media="(min-width:769px)"
                          srcset={`${xsimageUrl}`}
                        />
                      </>
                    )}
                    {/* Tablet Image rendering */}
                    {xsimageUrl ? (
                      <>
                        {webpxsImageUrl ? (
                          <source
                            media="(min-width:481px)"
                            srcset={`${webpxsImageUrl}`}
                            type="image/webp"
                          />
                        ) : (
                          ""
                        )}
                        <source
                          media="(min-width:481px)"
                          srcset={`${xsimageUrl}`}
                        />
                      </>
                    ) : (
                      <>
                        {webpmdImageUrl ? (
                          <source
                            media="(min-width:481px)"
                            srcset={`${webpmdImageUrl}`}
                            type="image/webp"
                          />
                        ) : (
                          ""
                        )}
                        <source
                          media="(min-width:481px)"
                          srcset={`${mdimageUrl}`}
                        />
                      </>
                    )}
                    {/* Mobile Image rendering */}
                    {xsimageUrl ? (
                      <>
                        {webpxsImageUrl ? (
                          <source
                            media="(max-width:480px)"
                            srcset={`${webpxsImageUrl}`}
                            type="image/webp"
                          />
                        ) : (
                          ""
                        )}
                        <source
                          media="(max-width:480px)"
                          srcset={`${xsimageUrl}`}
                        />
                      </>
                    ) : (
                      <>
                        {webpmdImageUrl ? (
                          <source
                            media="(max-width:480px)"
                            srcset={`${webpmdImageUrl}`}
                            type="image/webp"
                          />
                        ) : (
                          ""
                        )}
                        <source
                          media="(max-width:480px)"
                          srcset={`${mdimageUrl}`}
                        />
                      </>
                    )}
                    <img
                      src={`${mdimageUrl}`}
                      alt={
                        "" !== imageAlt ? `${imageAlt}` : `${imageDefaultAlt}`
                      }
                      loading="lazy"
                    />
                  </picture>
                )}
              </div>
            </div>
            <div className="card-teaser__item--detail col col--xs-12 col--lg-7 col--pd-3">
              <div className="col__content">
                <HeadTag
                  className={classnames(
                    "card-teaser__headline headline headline--style-four",
                    "undefined" !== cardHeadColorClass
                      ? `headline--color-${cardHeadColorClass}`
                      : null
                  )}>
                  <RichText.Content value={cardHead} />
                </HeadTag>
                <TextTag
                  className={classnames(
                    "card-teaser__text text text--style-two",
                    "undefined" !== cardTextColorClass
                      ? `text--color-${cardTextColorClass}`
                      : null
                  )}>
                  <RichText.Content value={cardText} />
                </TextTag>
                {undefined !== url && (
                  <a
                    className={classnames(
                      `card-teaser__button button--cta button--style-two button--align-xs-left button--width-xs-inline`,
                      cardTBtnColorClass !== "undefined"
                        ? `button--color-${cardTBtnColorClass}`
                        : null
                    )}
                    href={!!url ? url : null}
                    target={!!cardTBtntarget ? "_blank" : null}
                    rel={relation}>
                    <RichText.Content
                      tagName="span"
                      className="button--text card-teaser__button--text"
                      value={cardTBtncontent}
                    />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
