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
    colorClass,
    level,
    tag,
    boxHeadline,
    boxParagraph,
    button1url,
    button1linkTarget,
    button1Text,
    button2url,
    button2linkTarget,
    button2Text,
  } = attributes;

  const HeadlineTag = level == "span" ? "span" : "h" + level;
  const ParagraphTag = tag;

  const boxcolorClass = colorClass ? `box-button--color-${colorClass}` : "";

  const blockClass = classnames(
    `box-button`,
    "" !== boxcolorClass ? `${boxcolorClass}` : null
  );

  const relAttributes1 = [];
  if (button1linkTarget) {
    relAttributes1.push("noopener");
  }
  const relation1 =
    relAttributes1 && relAttributes1.length > 0
      ? relAttributes1.join(" ")
      : null;

  const relAttributes2 = [];
  if (button2linkTarget) {
    relAttributes2.push("noopener");
  }
  const relation2 =
    relAttributes2 && relAttributes2.length > 0
      ? relAttributes2.join(" ")
      : null;

  return (
    <div className={blockClass}>
      
      <RichText.Content tagName={HeadlineTag} className="box-button__headline headline headline--style-four" value={boxHeadline} />
      <RichText.Content tagName={ParagraphTag} className="box-button__text text text--style-two"  value={boxParagraph} />
      
      {undefined !== button1url && (
        <a
          href={!!button1url ? button1url : null}
          className="box-button__one button--cta button--style-three button--width-inline"
          target={!!button1linkTarget ? "_blank" : null}
          rel={relation1}>
          <RichText.Content tagName="span" className="button--text" value={button1Text} />
        </a>
      )}

      {undefined !== button2url && (
        <a
          href={!!button2url ? button2url : null}
          className="box-button__two button--cta button--style-three button--width-inline"
          target={!!button2linkTarget ? "_blank" : null}
          rel={relation2}>
          <RichText.Content tagName="span" className="button--text" value={button2Text} />
        </a>
      )}

    </div>
  );
}
