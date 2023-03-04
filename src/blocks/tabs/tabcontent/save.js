/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { Component } from "@wordpress/element";
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const { tabClientId } = attributes;
  return (
      <div id={tabClientId} className="tabs-content__item">
        <InnerBlocks.Content />
      </div>
  );
}

