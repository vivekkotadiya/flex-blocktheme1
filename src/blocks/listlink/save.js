/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";

import { InnerBlocks } from "@wordpress/block-editor";

/**
 * External dependencies
 */
import classnames from "classnames";

export default function save({ attributes }) {
  const { listLinkColorClass, listLinkStyle, anchor } = attributes;
  const listLinkClass = classnames(
    `list-link`,
    listLinkStyle ? `list-link--style-${listLinkStyle}` : null,
    listLinkColorClass ? `list-link--color-${listLinkColorClass}` : null
  );
  return (
    <ul id={anchor ? anchor : null} className={listLinkClass}>
      <InnerBlocks.Content />
    </ul>
  );
}
