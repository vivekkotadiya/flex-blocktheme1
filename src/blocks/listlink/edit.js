/**
 * External dependencies
 */
import classnames from "classnames";

/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { PanelBody, TextControl, SelectControl } from "@wordpress/components";
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

  const ALLOWED_BLOCKS = ["smt-theme/linkitem"];

  const { anchor, listLinkColor, listLinkColorClass, listLinkStyle } =
    attributes;

  const blockProps = useBlockProps();

  const SetColorClass = (value) => {
    if (value !== undefined) {
      theme_colors.filter(function (item) {
        if (item.color == value) {
          setAttributes({
            listLinkColorClass: item.slug,
          });
        }
      });
    } else {
      setAttributes({
        listLinkColorClass: "",
      });
    }
  };

  const renderappender = () => (
    <ButtonBlockAppender rootClientId={clientId} label={"Add List Link Item"} />
  );

  const listLinkClass = classnames(
    `list-link`,
    listLinkStyle ? `list-link--style-${listLinkStyle}` : null,
    listLinkColorClass ? `list-link--color-${listLinkColorClass}` : null
  );

  const innerBlocksProps = useInnerBlocksProps(
    { className: listLinkClass },

    {
      allowedBlocks: ALLOWED_BLOCKS,
      renderAppender: renderappender,
    }
  );

  return (
    <div id={anchor ? anchor : null} {...blockProps}>
      <InspectorControls>
        <PanelBody title={__("Style", "smt-theme")} initialOpen={true}>
          <SelectControl
            label={__("List Link Style", "smt-theme")}
            options={[
              {
                value: "one",
                label: __("One", "smt-theme"),
              },
              {
                value: "two",
                label: __("Two", "smt-theme"),
              },
            ]}
            value={listLinkStyle}
            onChange={(value) =>
              setAttributes({ listLinkStyle: value })
            }></SelectControl>
          <PanelColorSettings
            title={__("Color", "smt-theme")}
            className={"block-color-setting block-color-top-0"}
            colorSettings={[
              {
                colors: theme_colors,
                value: listLinkColor,
                onChange: (value) => {
                  typeof value == "undefined"
                    ? setAttributes({ listLinkColorClass: "eight" })
                    : SetColorClass(value);
                  typeof value == "undefined"
                    ? setAttributes({
                        listLinkColor: "#000",
                      })
                    : setAttributes({ listLinkColor: value });
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

      <ul {...innerBlocksProps} />
    </div>
  );
}
