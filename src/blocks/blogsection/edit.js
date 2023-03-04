/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import {
  InspectorControls,
  useInnerBlocksProps,
  useBlockProps,
} from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";
import { useSelect } from "@wordpress/data";

export default function edit({
  hasChildBlocks,
  clientId,
  setAttributes,
  attributes,
}) {
  const { anchor } = attributes;
  const BLOCK_TEMPLATE = [
    ["smt-theme/blogcolumn"],
    ["smt-theme/blogslider"],
  ];

  const { getBlockOrder } = useSelect((select) => {
    return select("core/block-editor") || select("core/editor");
  });

  hasChildBlocks = getBlockOrder(clientId).length;

  const innerBlocksProps = useInnerBlocksProps(
    { className: "row row--col-ht row--xs-center row--gap-2" },
    {
      template: BLOCK_TEMPLATE,
      renderappender: false,
    }
  );

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Additional", "smt-theme")} initialOpen={true}>
          <TextControl
            label={__("Anchor", "smt-theme")}
            placeholder={__("Specify Id…", "smt-theme")}
            type="text"
            value={anchor}
            onChange={(value) => setAttributes({ anchor: value })}
          />
        </PanelBody>
      </InspectorControls>
      <div
        id={anchor ? anchor : null}
        {...useBlockProps({ className: "blog-section" })}>
        <div className="row-wrapper">
          <div {...innerBlocksProps} />
        </div>
      </div>
    </>
  );
}
