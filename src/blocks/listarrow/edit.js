/**
 * External Dependencies
 */
import classnames from "classnames";

/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  InspectorControls,
  PanelColorSettings,
  useInnerBlocksProps,
} from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";
import { useSelect } from "@wordpress/data";

/**
 * Internale Dependencies
 */
import { theme_colors, ButtonBlockAppender } from "../../utils/block-helpers";

export default function edit({
  setAttributes,
  attributes,
  clientId,
  hasChildBlocks,
}) {
  const { listColorClass, listColor, anchor } = attributes;

  const SetColorClass = (value) => {
    theme_colors.filter(function (item) {
      if (item.color == value) {
        setAttributes({
          listColorClass: item.slug,
        });
      }
    });
  };
  const colorClass = listColorClass
    ? `list-arrow--color-${listColorClass}`
    : "";

  const { getBlockOrder } = useSelect((select) => {
    return select("core/block-editor") || select("core/editor");
  });

  hasChildBlocks = getBlockOrder(clientId).length;

  const renderappender = () => (
    <ButtonBlockAppender
      rootClientId={clientId}
      label={"Add a List Arrow Item"}
    />
  );

  const innerBlocksProps = useInnerBlocksProps(
    {
      className: classnames(
        "list-arrow",
        "" !== colorClass ? `${colorClass}` : null
      ),
    },
    {
      allowedBlocks: ["smt-theme/listitem"],
      template: [["smt-theme/listitem"]],
      renderAppender: renderappender,
    }
  );

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Styles", "smt-theme")} initialOpen={true}>
          <PanelColorSettings
            title={__("List Color", "smt-theme")}
            className={"block-color-setting block-color-top-0"}
            colorSettings={[
              {
                colors: theme_colors,
                value: listColor,
                onChange: (value) => {
                  typeof value == "undefined"
                    ? setAttributes({ listColorClass: "" })
                    : SetColorClass(value);
                  setAttributes({ listColor: value });
                },
                label: __("List Color", "smt-theme"),
              },
            ]}
          />
        </PanelBody>
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
      <div {...useBlockProps()}>
        <ul {...innerBlocksProps} />
      </div>
    </>
  );
}
