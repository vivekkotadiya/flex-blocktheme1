/**
 * External dependencies
 */
import classnames from "classnames";

/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const {
    counterColorClass,
    counterCornorColorClass,
    counterMain,
    counterSubText,
    number,
    numberType,
    anchor,
  } = attributes;
  const blockClass = classnames(
    `counter`,
    "" !== counterCornorColorClass
      ? `counter--corner-color-${counterCornorColorClass}`
      : null,
    "" !== counterColorClass ? `counter--text-color-${counterColorClass}` : null
  );
  return (
    <div id={anchor ? anchor : null} className={blockClass}>
      <h5 className="counter__number" data-number={number}>
        <span className="counter__number-value">{number}</span>
        {numberType}
      </h5>
      <p className="counter__text">
        <span className="counter__text-main">
          <RichText.Content value={counterMain} />
        </span>
        <span className="counter__text-sub">
          <RichText.Content value={counterSubText} />
        </span>
      </p>
    </div>
  );
}
