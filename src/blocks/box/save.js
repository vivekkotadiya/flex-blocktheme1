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
  const { colorClass, level, tag, boxHeadline, boxParagraph, url, linkTarget } =
    attributes;

  const HeadlineTag = level == "span" ? "span" : "h" + level;
  const ParagraphTag = tag;

  const boxcolorClass = colorClass ? `box--color-${colorClass}` : "";

  const blockClass = classnames(
    `box`,
    "" !== boxcolorClass ? `${boxcolorClass}` : null
  );
  const relAttributes = [];
  if (linkTarget) {
    relAttributes.push("noopener");
  }
  const relation =
    relAttributes && relAttributes.length > 0 ? relAttributes.join(" ") : null;
  return (
    <>
      {undefined !== url ? (
        <a
          href={!!url ? url : null}
          className={blockClass}
          target={!!linkTarget ? "_blank" : null}
          rel={relation}
        >
          <RichText.Content tagName={HeadlineTag} className="box__headline headline headline--style-four" value={boxHeadline} />
          <RichText.Content tagName={ParagraphTag} className="box__text text text--style-two text--color-eight"  value={boxParagraph} />
          <div className="box__visual"></div>
        </a>
      ) : (
        <div className={blockClass}>
          <RichText.Content tagName={HeadlineTag} className="box__headline headline headline--style-four" value={boxHeadline} />
          <RichText.Content tagName={ParagraphTag} className="box__text text text--style-two"  value={boxParagraph} />
        </div>
      )}
    </>
  );
}
