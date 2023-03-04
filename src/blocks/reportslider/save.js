/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { InnerBlocks } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const { anchor } = attributes;
  return (
    <div className="report-slider" id={anchor ? anchor : null}>
      <div className="row-wrapper">
        <div className="row row--col-ht row--xs-left">
          <InnerBlocks.Content />
        </div>
      </div>
    </div>
  );
}
