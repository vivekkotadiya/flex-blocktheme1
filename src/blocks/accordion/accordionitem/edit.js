/**
 * External dependencies
 */
import classnames from "classnames";

/**
 * wordpress dependencies
 */
import { __ } from "@wordpress/i18n";
import {
  RichText,
  InnerBlocks,
  useBlockProps,
  useInnerBlocksProps,
  store as blockEditorStore,
} from "@wordpress/block-editor";
import { useSelect } from "@wordpress/data";

/**
 * Internal dependencies
 */
import { ArrowIcon } from "../../../utils/block-icons";

export default function edit(props) {
  const { mergeBlocks, onReplace, setAttributes, attributes, clientId } = props;

  const { content } = attributes;

  const ALLOWED_BLOCKS = [
    "smt-theme/headline",
    "smt-theme/paragraph",
    "smt-theme/image",
    "smt-theme/list",
    "smt-theme/button",
    "smt-theme/icon",
  ];

  const { hasInnerBlocks } = useSelect(
    (select) => {
      const { getBlock } = select(blockEditorStore);
      const block = getBlock(clientId);
      return {
        hasInnerBlocks: block.innerBlocks.length,
      };
    },
    [clientId]
  );

  const renderappender = hasInnerBlocks
    ? undefined
    : () => <InnerBlocks.ButtonBlockAppender />;

  const innerBlocksProps = useInnerBlocksProps(
    { className: "accordion-item__content-helper" },
    { allowedBlocks: ALLOWED_BLOCKS, renderAppender: renderappender }
  );

  return (
    <div
      {...useBlockProps({
        className: classnames(`accordion-item`),
      })}>
      <button className="accordion-item__header">
        <RichText
          tagName="span"
          aria-label={__("Accordion title", "smt-theme")}
          placeholder={__("Write Accordion item title...", "smt-theme")}
          value={content}
          onChange={(value) => setAttributes({ content: value })}
          withoutInteractiveFormatting={false}
          allowedFormats={[]}
          onReplace={onReplace}
          onMerge={mergeBlocks}
          identifier="text"
        />
        <ArrowIcon />
      </button>
      <div className="accordion-item__content">
        <div {...innerBlocksProps} />
      </div>
    </div>
  );
}
