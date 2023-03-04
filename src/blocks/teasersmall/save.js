/**
 * External dependencies
 */
import classnames from "classnames";

/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { Component } from "@wordpress/element";
import { InnerBlocks, RichText } from "@wordpress/block-editor";

/**
 * Internal Dependencies
 */
import smtLogo from "../../assets/images/smtLogo.svg";
import smtLogoDark from "../../assets/images/SMTLogo-dark.svg";

export default class Save extends Component {
  constructor(props) {
    super(...arguments);
  }
  render() {
    const {
      attributes: {
        backgroundAlt,
        backgroundDefaultAlt,
        xlbackgroundImagesrcArray,
        mdbackgroundImagesrcArray,
        xsbackgroundImagesrcArray,
        headline,
        level,
        headlineColorClass,
        subHeadline,
        subHeadlineLevel,
        subHeadlineColorClass,
        showLogo,
        LogoColor,
        anchor,
      },
    } = this.props;

    let xlImage = "";
    let xlwebpImage = "";
    let mdImage = "";
    let mdwebpImage = "";
    let xsImage = "";
    let xswebpImage = "";

    if (
      xlbackgroundImagesrcArray ||
      mdbackgroundImagesrcArray ||
      xsbackgroundImagesrcArray
    ) {
      // Desktop Image
      if (xlbackgroundImagesrcArray) {
        if (xlbackgroundImagesrcArray["xl"]) {
          xlImage = xlbackgroundImagesrcArray["xl"];
        }
        if (xlbackgroundImagesrcArray["xlwebp"]) {
          xlwebpImage = xlbackgroundImagesrcArray["xlwebp"];
        }
      }

      // Tablet Image
      if (mdbackgroundImagesrcArray && mdbackgroundImagesrcArray["md"]) {
        mdImage = mdbackgroundImagesrcArray["md"];
      } else {
        if (xlbackgroundImagesrcArray && xlbackgroundImagesrcArray["md"]) {
          mdImage = xlbackgroundImagesrcArray["md"];
        }
      }

      if (mdbackgroundImagesrcArray && mdbackgroundImagesrcArray["mdwebp"]) {
        mdwebpImage = mdbackgroundImagesrcArray["mdwebp"];
      } else {
        if (xlbackgroundImagesrcArray && xlbackgroundImagesrcArray["mdwebp"]) {
          mdwebpImage = xlbackgroundImagesrcArray["mdwebp"];
        }
      }

      // Mobile Image
      if (xsbackgroundImagesrcArray && xsbackgroundImagesrcArray["xs"]) {
        xsImage = xsbackgroundImagesrcArray["xs"];
      } else {
        if (mdbackgroundImagesrcArray && mdbackgroundImagesrcArray["xs"]) {
          xsImage = mdbackgroundImagesrcArray["xs"];
        } else {
          if (xlbackgroundImagesrcArray && xlbackgroundImagesrcArray["xs"]) {
            xsImage = xlbackgroundImagesrcArray["xs"];
          }
        }
      }
      if (xsbackgroundImagesrcArray && xsbackgroundImagesrcArray["xswebp"]) {
        xswebpImage = xsbackgroundImagesrcArray["xswebp"];
      } else {
        if (mdbackgroundImagesrcArray && mdbackgroundImagesrcArray["xswebp"]) {
          xswebpImage = mdbackgroundImagesrcArray["xswebp"];
        } else {
          if (
            xlbackgroundImagesrcArray &&
            xlbackgroundImagesrcArray["xswebp"]
          ) {
            xswebpImage = xlbackgroundImagesrcArray["xswebp"];
          }
        }
      }
    }

    const HeadlineTag = level == "span" ? "span" : "h" + level;
    const SubHeadlineTag =
      subHeadlineLevel == "span" ? "span" : "h" + subHeadlineLevel;

     const logoclass = showLogo ? `section--logo` : "";

    return (
      <section 
      id={anchor ? anchor : null} 
      className={classnames(
        `section section--hero-small`,
        `${logoclass}`
      )}>
        {(xlImage || mdImage || xsImage) && (
          <div className="section__background">
            <picture>
              {/* Desktop Image rendering */}
              {xlwebpImage && (
                <source
                  media="(min-width:1025px)"
                  srcset={`${xlwebpImage}`}
                  type="image/webp"
                />
              )}
              {xlImage && (
                <source media="(min-width:1025px)" srcset={`${xlImage}`} />
              )}

              {/* Tablet Image Rendering */}
              {mdwebpImage && (
                <source
                  media="(min-width:481px)"
                  srcset={`${mdwebpImage}`}
                  type="image/webp"
                />
              )}
              {mdImage && (
                <source media="(min-width:481px)" srcset={`${mdImage}`} />
              )}

              {/* Mobile Image Rendering */}
              {xswebpImage && (
                <source
                  media="(max-width:480px)"
                  srcset={`${xswebpImage}`}
                  type="image/webp"
                />
              )}
              {xsImage && (
                <source media="(max-width:480px)" srcset={`${xsImage}`} />
              )}
              {xlImage ? (
                <img
                  src={`${xlImage}`}
                  alt={
                    "" !== backgroundAlt
                      ? `${backgroundAlt}`
                      : `${backgroundDefaultAlt}`
                  }
                  width="auto"
                  height="auto"
                />
              ) : !xlImage && mdImage ? (
                <img
                  src={`${mdImage}`}
                  alt={
                    "" !== backgroundAlt
                      ? `${backgroundAlt}`
                      : `${backgroundDefaultAlt}`
                  }
                  width="auto"
                  height="auto"
                />
              ) : !xlImage && !mdImage && xsImage ? (
                <img
                  src={`${xsImage}`}
                  alt={
                    "" !== backgroundAlt
                      ? `${backgroundAlt}`
                      : `${backgroundDefaultAlt}`
                  }
                  width="auto"
                  height="auto"
                />
              ) : (
                ""
              )}
            </picture>
          </div>
        )}
       
       { showLogo == true && (
            <a
              href="/"
              className={`section__logo section__logo--${LogoColor}`}
              onClick={(e) => e.preventDefault()}>
              {LogoColor == "light" ? (
                <img
                  src={smtLogo}
                  alt="SMT - School of Management and Technology"
                />
              ) : (
                <img
                  src={smtLogoDark}
                  alt="SMT - School of Management and Technology"
                />
              )}
            </a>
          )}
        <div className="section__content">
          <div className="row-wrapper">
            <div className="row row-wrapper--ct-wd">
              <div className="col col--xs-12">
                <div className="col-content">
                  <HeadlineTag
                    className={classnames(
                      "headline headline--style-six",
                      "" !== headlineColorClass
                        ? "headline--color-" + headlineColorClass
                        : "headline--color-one"
                    )}>
                    <RichText.Content value={headline} />
                  </HeadlineTag>
                  <SubHeadlineTag
                    className={classnames(
                      "headline headline--style-three",
                      "" !== subHeadlineColorClass
                        ? "headline--color-" + subHeadlineColorClass
                        : "headline--color-one"
                    )}>
                    <RichText.Content value={subHeadline} />
                  </SubHeadlineTag>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
