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
        backgroundColorClass,
        topPadding,
        bottomPadding,
        shapeTop,
        shapeBottom,
        shapePosition,
        LogoColor,
        showLogo,
        anchor,
      },
    } = this.props;

    const logoclass = showLogo
      ? `section--logo`
      : "";

    return (
      <section
        id={anchor ? anchor : null}
        className={classnames(
          `section section--pattern`,
          `section--pd-top-${topPadding}`,
          `section--pd-bottom-${bottomPadding}`,
          "undefined" !== backgroundColorClass
            ? `section--color-${backgroundColorClass}`
            : null,
            shapeTop && !shapeBottom === true ? `section--shape-top` : null,
            shapeBottom && !shapeTop === true ? `section--shape-bottom` : null,
            shapeBottom && shapeTop === true ? `section--shape-both` : null,
            undefined !== shapePosition && shapePosition == `leftToright`
              ? `section--shape-left`
              : null,
            undefined !== shapePosition && shapePosition == `rightToleft`
              ? `section--shape-right`
              : null,
            `${logoclass}`
        )}>
        <div className="section__background"></div>
        {showLogo == true && (
          <a href="/" className={`section__logo section__logo--${LogoColor}`}>
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
          <InnerBlocks.Content />
        </div>
      </section>
    );
  }
}
