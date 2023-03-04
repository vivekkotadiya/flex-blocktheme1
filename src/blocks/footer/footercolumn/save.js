/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { InnerBlocks } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const { extraClass } = attributes;

  return (
    <div className={`footer-col`}>
      <div className="footer-col__content">
        <InnerBlocks.Content />
      </div>
    </div>
  );
}
