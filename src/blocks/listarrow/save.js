/**
 * External Dependencies
 */
import classnames from "classnames";

/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { InnerBlocks } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const { listColorClass, anchor } = attributes;

  const colorClass = listColorClass
    ? `list-arrow--color-${listColorClass}`
    : "";

  return (
    <ul
      id={anchor ? `${anchor}` : null}
      className={classnames(
        "list-arrow",
        "" !== colorClass ? `${colorClass}` : null
      )}>
      <InnerBlocks.Content />
    </ul>
  );
}
