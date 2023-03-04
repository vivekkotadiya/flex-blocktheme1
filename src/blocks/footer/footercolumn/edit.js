/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useInnerBlocksProps, useBlockProps } from "@wordpress/block-editor";

export default function edit({ attributes }) {
  const { extraClass } = attributes;

  const innerBlocks = useInnerBlocksProps(
    { className: `footer-col__content` },
    {
      allowedBlocks: [
        "smt-theme/headline",
        "smt-theme/navigation",
        "smt-theme/button",
        "smt-theme/paragraph",
        "smt-theme/divider",
        "smt-theme/footerlogo",
        "smt-theme/icon",
      ],
      renderAppender: false,
    }
  );

  //return <div {...useBlockProps({ className: `footer-col` })} {...innerBlocks} />;

  return (
    <>
      <div {...useBlockProps({ className: `footer-col` })}>
        <div {...innerBlocks}></div>
      </div>
    </>
  );
}
