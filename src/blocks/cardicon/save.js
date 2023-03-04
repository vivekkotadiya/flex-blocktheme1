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
        cardIconHeadColorClass,
        cardIconHead,
        cardIconHeadLevel,
        cardIconTextColorClass,
        cardIconText,
        cardIconTextTag,
        cardiconColorClass,
        cardiconClass,
        cardiconBorderColorClass,
        anchor,
      },
    } = this.props;

    const HeadTag =
      cardIconHeadLevel == "span" ? "span" : "h" + cardIconHeadLevel;
    const TextTag = cardIconTextTag;

    return (
      <div className="card-icon" id={anchor ? anchor : null}>
        <div
          className={classnames(
            "card-icon__visual",
            "undefined" !== cardiconBorderColorClass
              ? `card-icon__visual--color-${cardiconBorderColorClass}`
              : null
          )}>
          <i
            className={classnames(
              cardiconClass,
              "undefined" !== cardiconColorClass
                ? `icon--color-${cardiconColorClass}`
                : null
            )}></i>
        </div>
        <HeadTag
          className={classnames(
            "card-icon__headline headline headline--style-four headline--align-xs-center",
            "undefined" !== cardIconHeadColorClass
              ? `headline--color-${cardIconHeadColorClass}`
              : null
          )}>
          <RichText.Content value={cardIconHead} />
        </HeadTag>
        <TextTag
          className={classnames(
            "card-icon__text text text--style-two text--align-xs-center",
            "undefined" !== cardIconTextColorClass
              ? `text--color-${cardIconTextColorClass}`
              : null
          )}>
          <RichText.Content value={cardIconText} />
        </TextTag>
      </div>
    );
  }
}
