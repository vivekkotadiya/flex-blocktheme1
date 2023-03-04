/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { InnerBlocks } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const { anchor } = attributes;
  return (
    <div id={anchor ? anchor : null} className="blog-section">
      <div className="row-wrapper">
        <div className="row row--col-ht row--xs-center row--gap-2">
          <InnerBlocks.Content />
        </div>
      </div>
    </div>
  );
}
