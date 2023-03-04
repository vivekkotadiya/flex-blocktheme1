/**
 * External dependencies
 */
import classnames from "classnames";

/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { InnerBlocks, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const { tagContent, itemColorClass, orientation } = attributes;
  return (
    <div
      className={classnames(
        `timeline-item`,
        "" !== itemColorClass ? `timeline-item--color-${itemColorClass}` : null,
        "" !== orientation ? `timeline-item--align-${orientation}` : null
      )}>
      <div className={`timeline-item__content`}>
        <div className="timeline-item__arrow">
          <span className="timeline-item__arrow-view"></span>
        </div>
        <div className="timeline-item__info">
          <span className="timeline-item__tag">
            <RichText.Content value={tagContent} />
          </span>
          <div className="timeline-item__content-helper">
            <InnerBlocks.Content />
          </div>
        </div>
      </div>
    </div>
  );
}
