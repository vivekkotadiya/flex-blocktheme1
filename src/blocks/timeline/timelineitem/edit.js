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
  PanelColorSettings,
  InspectorControls,
} from "@wordpress/block-editor";
import {
  PanelBody,
  __experimentalToggleGroupControl as ToggleGroupControl,
  __experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from "@wordpress/components";
import { useSelect } from "@wordpress/data";
import { Platform } from "@wordpress/element";

/***
 * Interal dependencies
 */
import { theme_colors } from "../../../utils/block-helpers";

export default function edit(props) {
  const { setAttributes, attributes, clientId } = props;

  const { tagContent, itemColor, itemColorClass, orientation } = attributes;

  const ALLOWED_BLOCKS = [
    "smt-theme/headline",
    "smt-theme/paragraph",
    "smt-theme/image",
    "smt-theme/button",
  ];

  const BLOCK_TEMPLATE = [
    [
      "smt-theme/headline",
      {
        level: "4",
        placeholder: "Timeline Item Heading",
        headStyle: "four",
        headColor: "#39515E",
        headColorClass: "seven",
      },
    ],
    [
      "smt-theme/paragraph",
      {
        textColor: "#39515E",
        textColorClass: "seven",
        textStyle: "two",
      },
    ],
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
    { className: "timeline-item__content-helper" },
    {
      template: BLOCK_TEMPLATE,
      allowedBlocks: ALLOWED_BLOCKS,
      renderAppender: renderappender,
    }
  );

  const SetColorClass = (value, type) => {
    if (value !== undefined) {
      theme_colors.filter(function (item) {
        if (item.color == value) {
          setAttributes({
            itemColorClass: item.slug,
          });
        }
      });
    } else {
      setAttributes({
        itemColorClass: "",
      });
    }
  };

  return (
    <div
      {...useBlockProps({
        className: classnames(
          `timeline-item`,
          "" !== itemColorClass
            ? `timeline-item--color-${itemColorClass}`
            : null,
          "" !== orientation ? `timeline-item--align-${orientation}` : null
        ),
      })}>
      <InspectorControls>
        <PanelBody title={__("General", "smt-theme")}>
          <PanelColorSettings
            title={__("Color", "smt-theme")}
            className={"block-color-setting block-color-top-0"}
            colorSettings={[
              {
                colors: theme_colors,
                value: itemColor,
                onChange: (value) => {
                  typeof value == "undefined"
                    ? setAttributes({ itemColorClass: "" })
                    : SetColorClass(value, "text");
                  typeof value == "undefined"
                    ? setAttributes({
                        itemColor: "#BC1717",
                      })
                    : setAttributes({ itemColor: value });
                },
                label: __("Color", "smt-theme"),
              },
            ]}
          />
          <ToggleGroupControl
            label={__("Orientation", "smt-theme")}
            className="block-togglegroup"
            value={orientation}
            isBlock
            onChange={(value) => {
              setAttributes({
                orientation: value,
              });
            }}>
            <ToggleGroupControlOption
              value="left"
              label={__("Left", "smt-theme")}
              showTooltip={true}
              aria-label={__("Left", "smt-theme")}
            />
            <ToggleGroupControlOption
              value="right"
              label={__("Right", "smt-theme")}
              showTooltip={true}
              aria-label={__("Right", "smt-theme")}
            />
          </ToggleGroupControl>
        </PanelBody>
      </InspectorControls>

      <div className="timeline-item__content">
        <div className="timeline-item__arrow">
          <span className="timeline-item__arrow-view"></span>
        </div>
        <div className="timeline-item__info">
          <span className="timeline-item__tag">
            <RichText
              identifier="timelineTag"
              value={tagContent}
              onChange={(value) => setAttributes({ tagContent: value })}
              aria-label={__("Tag text", "smt-theme")}
              placeholder={__("Add text here...", "smt-theme")}
              {...(Platform.isNative && { deleteEnter: true })} // setup RichText on native mobile to delete the "Enter" key as it's handled by the JS/RN side
              allowedFormats={[]}
            />
          </span>
          <div {...innerBlocksProps} />
        </div>
      </div>
    </div>
  );
}
