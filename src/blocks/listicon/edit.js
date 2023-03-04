/**
 * External dependencies
 */
import classnames from "classnames";

/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { PanelBody, TextControl } from "@wordpress/components";
import {
  InspectorControls,
  PanelColorSettings,
  useBlockProps,
  useInnerBlocksProps,
} from "@wordpress/block-editor";

/**
 * Internal dependencies
 */
import { theme_colors, ButtonBlockAppender } from "../../utils/block-helpers";

export default function edit(props) {
  const { attributes, setAttributes, clientId } = props;

  const ALLOWED_BLOCKS = ["smt-theme/listiconitem"];

  const { anchor, listIconColor, listIconColorClass } = attributes;

  const blockProps = useBlockProps();

  const SetColorClass = (value) => {
    if (value !== undefined) {
      theme_colors.filter(function (item) {
        if (item.color == value) {
          setAttributes({
            listIconColorClass: item.slug,
          });
        }
      });
    } else {
      setAttributes({
        listIconColorClass: "",
      });
    }
  };

  const renderappender = () => (
    <ButtonBlockAppender rootClientId={clientId} label={"Add List Icon Item"} />
  );

  const listIconClass = classnames(
    `list-icon`,
    listIconColorClass ? `list-icon--color-${listIconColorClass}` : null
  );

  const innerBlocksProps = useInnerBlocksProps(
    { className: listIconClass },

    {
      allowedBlocks: ALLOWED_BLOCKS,
      renderAppender: renderappender,
    }
  );

  return (
    <div {...blockProps}>
      <InspectorControls>
        <PanelBody title={__("Style", "smt-theme")} initialOpen={true}>
          <PanelColorSettings
            title={__("Color", "smt-theme")}
            className={"block-color-setting block-color-top-0"}
            colorSettings={[
              {
                colors: theme_colors,
                value: listIconColor,
                onChange: (value) => {
                  typeof value == "undefined"
                    ? setAttributes({ listIconColorClass: "eight" })
                    : SetColorClass(value);
                  typeof value == "undefined"
                    ? setAttributes({
                        listIconColor: "#000",
                      })
                    : setAttributes({ listIconColor: value });
                },
                label: __("Color", "smt-theme"),
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
      <ul id={anchor ? anchor : null} {...innerBlocksProps} />
    </div>
  );
}
