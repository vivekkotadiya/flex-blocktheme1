/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { RichText, useBlockProps } from "@wordpress/block-editor";

export default function edit({ setAttributes, attributes, onReplace }) {
  const { values } = attributes;

  return (
    <li {...useBlockProps()}>
      <RichText
        identifier="values"
        onChange={(nextValues) => setAttributes({ values: nextValues })}
        value={values}
        aria-label={__("List text", "smt-theme")}
        placeholder={__("List", "smt-theme")}
        onReplace={onReplace}
        onRemove={() => onReplace([])}
        type="string"
        allowedFormats={["core/bold", "core/italic", "core/link"]}></RichText>
    </li>
  );
}
