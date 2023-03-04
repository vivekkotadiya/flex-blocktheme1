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
import {
  PanelBody,
  CustomSelectControl,
  TextControl,
  __experimentalToggleGroupControl as ToggleGroupControl,
  __experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from "@wordpress/components";
import { useSelect } from "@wordpress/data";

/**
 * Internal Dependencies
 */
import { theme_colors, ButtonBlockAppender } from "../../utils/block-helpers";

export default function edit({
  setAttributes,
  attributes,
  clientId,
  hasChildBlocks,
}) {
  const { listStyle, listType, listColorClass, listColor, anchor } = attributes;

  const SetColorClass = (value) => {
    theme_colors.filter(function (item) {
      if (item.color == value) {
        setAttributes({
          listColorClass: item.slug,
        });
      }
    });
  };
  const colorClass = listColorClass ? `list--color-${listColorClass}` : "";

  const options = [
    {
      key: "notset",
      name: "Not Set",
      style: {
        fontSize: "22px",
        lineHeight: "24px",
        fontFamily: "Montserrat",
      },
    },
    {
      key: "one",
      name: "One",
      style: {
        fontSize: "18px",
        lineHeight: "28px",
        fontFamily: "Montserrat",
      },
    },
  ];

  const { getBlockOrder } = useSelect((select) => {
    return select("core/block-editor") || select("core/editor");
  });

  hasChildBlocks = getBlockOrder(clientId).length;

  const renderappender = () => (
    <ButtonBlockAppender rootClientId={clientId} label={"Add a List Item"} />
  );

  const innerBlocksProps = useInnerBlocksProps(
    {
      className: classnames(
        `list`,
        "" !== listStyle ? `list--style-${listStyle}` : null,
        "" !== colorClass ? `${colorClass}` : null
      ),
    },
    {
      allowedBlocks: ["smt-theme/listitem"],
      template: [["smt-theme/listitem"]],
      renderAppender: renderappender,
    }
  );

  const TagName = listType == "ordered" ? "ol" : "ul";

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Styles", "smt-theme")} initialOpen={true}>
          <CustomSelectControl
            __nextUnconstrainedWidth
            label={__("Style", "smt-theme")}
            options={options}
            className="block--customselect"
            onChange={({ selectedItem }) =>
              setAttributes({
                listStyle: selectedItem.key,
              })
            }
            value={options.find((option) => option.key === listStyle)}
          />
          <ToggleGroupControl
            label=""
            className="responsive_buttons"
            value={listType}
            isBlock
            onChange={(value) => {
              setAttributes({
                listType: value,
              });
            }}>
            <ToggleGroupControlOption
              value="ordered"
              label={__("Ordered", "smt-theme")}
              showTooltip={true}
              aria-label={__("Ordered", "smt-theme")}
            />
            <ToggleGroupControlOption
              value="unordered"
              label={__("UnOrdered", "smt-theme")}
              showTooltip={true}
              aria-label={__("UnOrdered", "smt-theme")}
            />
          </ToggleGroupControl>
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
        <TagName {...innerBlocksProps} />
      </div>
    </>
  );
}
