/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";

import { InnerBlocks } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const { anchor } = attributes;
  return (
    <div id={anchor ? anchor : null} className="timeline">
      <div className="timeline__content">
        <InnerBlocks.Content />
      </div>
      <div className="timeline__connector">
        <div className="timeline__connector--arrow">
          <span className="timeline__connector--arrow-view"></span>
        </div>
      </div>
    </div>
  );
}
