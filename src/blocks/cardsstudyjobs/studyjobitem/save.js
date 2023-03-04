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
        imageUrl,
        webpImageUrl,
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
        cardTag,
        cardTagColorClass,
      },
    } = this.props;

    const HeadTag = cardHeadLevel == "span" ? "span" : "h" + cardHeadLevel;
    const TextTag = cardTextTag;

    const CardTags = () => {
      const tags_list = cardTag.split(",");
      return [
        <>
          {tags_list.map((tag, index) => {
            return <span className="job-cards__meta-tag">{tag}</span>;
          })}
        </>,
      ];
    };

    return (
      <div className="job-cards__item col col--xs-12 col--md-6 col--xl-4 col--pd-0">
        <div className="col__content">
          <div className="job-cards__item--image">
            {(imageUrl || mdimageUrl || xsimageUrl) && (
              <picture>
                {/* Mobile Image rendering */}
                {xsimageUrl ? (
                  <>
                    {webpxsImageUrl ? (
                      <source srcset={`${webpxsImageUrl}`} type="image/webp" />
                    ) : (
                      ""
                    )}
                    <source srcset={`${xsimageUrl}`} />
                  </>
                ) : mdimageUrl ? (
                  <>
                    {webpmdImageUrl ? (
                      <source srcset={`${webpmdImageUrl}`} type="image/webp" />
                    ) : (
                      ""
                    )}
                    <source srcset={`${mdimageUrl}`} />
                  </>
                ) : (
                  <>
                    {webpImageUrl ? (
                      <source srcset={`${webpImageUrl}`} type="image/webp" />
                    ) : (
                      ""
                    )}
                    <source srcset={`${imageUrl}`} />
                  </>
                )}
                <img
                  src={`${imageUrl}`}
                  alt={"" !== imageAlt ? `${imageAlt}` : `${imageDefaultAlt}`}
                  loading="lazy"
                />
              </picture>
            )}
          </div>
          <div className="job-cards__item--detail">
            <HeadTag
              className={classnames(
                "job-cards__item--headline headline headline--style-four",
                "undefined" !== cardHeadColorClass
                  ? `headline--color-${cardHeadColorClass}`
                  : null
              )}>
              <RichText.Content value={cardHead} />
            </HeadTag>
            {"undefined" !== cardTag && (
              <div
                className={classnames(
                  "job-cards__meta",
                  "undefined" !== cardTagColorClass
                    ? `job-cards__meta--color-${cardTagColorClass}`
                    : null
                )}>
                {cardTag.indexOf(",") > -1 ? (
                  <CardTags />
                ) : (
                  <span className="job-cards__meta-tag">{cardTag}</span>
                )}
              </div>
            )}
            <TextTag
              className={classnames(
                "job-cards__item--text text text--style-two",
                "undefined" !== cardTextColorClass
                  ? `text--color-${cardTextColorClass}`
                  : null
              )}>
              <RichText.Content value={cardText} />
            </TextTag>
          </div>
        </div>
      </div>
    );
  }
}
