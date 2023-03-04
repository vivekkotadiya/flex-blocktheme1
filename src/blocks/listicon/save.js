/**
 * External dependencies
 */
import classnames from "classnames";

/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { InnerBlocks } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const { listIconColorClass, anchor } = attributes;
  const listIconClass = classnames(
    `list-icon`,
    listIconColorClass ? `list-icon--color-${listIconColorClass}` : null
  );
  return (
    <ul id={anchor ? anchor : null} className={listIconClass}>
      <InnerBlocks.Content />
    </ul>
  );
}
