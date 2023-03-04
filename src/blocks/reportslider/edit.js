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
    [
      "smt-theme/column",
      { xlwidth: 3, lgwidth: 4, xswidth: 9, xloffset: 1, colPadding: 0 },
      [
        [
          "smt-theme/headlinespecial",
          {
            mainHeadColor: "#39515E",
            mainHeadColorClass: "seven",
            subHeadColor: "#39515E",
            subHeadColorClass: "seven",
            lineColor: "#39515E",
            lineColorClass: "seven",
            AlignXs: "left",
          },
        ],
        [
          "smt-theme/paragraph",
          {
            level: "p",
            textStyle: "one",
            textColor: "#39515E",
            textColorClass: "seven",
          },
        ],
        [
          "smt-theme/paragraph",
          {
            level: "p",
            textStyle: "one",
            textColor: "#39515E",
            textColorClass: "seven",
          },
        ],
      ],
    ],
    [
      "smt-theme/column",
      {
        xlwidth: 7,
        lgwidth: 6,
        xswidth: 11,
        xloffset: 1,
        lgoffset: 1,
        xsoffset: 1,
        colPadding: 0,
        allowBlocks: false,
      },
      [["smt-theme/reportslides"]],
    ],
  ];

  const { getBlockOrder } = useSelect((select) => {
    return select("core/block-editor") || select("core/editor");
  });

  hasChildBlocks = getBlockOrder(clientId).length;

  const innerBlocksProps = useInnerBlocksProps(
    { className: "row row--col-ht row--xs-left" },
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
        {...useBlockProps({ className: "report-slider" })}
        id={anchor ? anchor : null}>
        <div className="row-wrapper">
          <div {...innerBlocksProps} />
        </div>
      </div>
    </>
  );
}
