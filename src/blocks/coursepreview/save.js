/**
 * External dependencies
 */
import classnames from "classnames";

/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { Component } from "@wordpress/element";
import { InnerBlocks } from "@wordpress/block-editor";

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
        imgOrientation,
        overlayText1,
        overlayText2,
        anchor,
      },
    } = this.props;

    const CourseImageOverlay = () => {
      return (
        <>
          {"" !== overlayText1 && (
            <div className="course-overlay course-overlay--left">
              <span className="course-overlay__icon">+</span>
              <span className="course-overlay__text">{overlayText1}</span>
            </div>
          )}
          {(mdimageUrl || xsimageUrl) && (
            <picture className={`course-preview__image`}>
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
                  <source media="(min-width:769px)" srcset={`${mdimageUrl}`} />
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
                  <source media="(min-width:769px)" srcset={`${xsimageUrl}`} />
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
                  <source media="(min-width:481px)" srcset={`${xsimageUrl}`} />
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
                  <source media="(min-width:481px)" srcset={`${mdimageUrl}`} />
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
                  <source media="(max-width:480px)" srcset={`${xsimageUrl}`} />
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
                  <source media="(max-width:480px)" srcset={`${mdimageUrl}`} />
                </>
              )}
              <img
                src={`${mdimageUrl}`}
                alt={"" !== imageAlt ? `${imageAlt}` : `${imageDefaultAlt}`}
                loading="lazy"
              />
            </picture>
          )}
          {"" !== overlayText2 && (
            <div className="course-overlay course-overlay--right">
              <span className="course-overlay__icon">+</span>
              <span className="course-overlay__text">{overlayText2}</span>
            </div>
          )}
        </>
      );
    };

    return (
      <div
        className={classnames(
          "course-preview",
          imgOrientation == "left" ? "course--left" : "course--right"
        )}
        id={anchor ? anchor : null}>
        <div className="row-wrapper row-wrapper--ct-wd">
          <div className="row row--xs-middle row--xs-center row--gap-2">
            <div className="course-preview__visual col col--xs-12 col--md-10 col--lg-6 col--pd-0">
              <div className="col__content">
                <CourseImageOverlay />
              </div>
            </div>
            <div className="course-preview__detail col col--xs-12 col--md-10 col--lg-6 col--pd-0">
              <div className="col__content">
                <InnerBlocks.Content />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
