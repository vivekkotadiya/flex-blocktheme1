/**
 * External dependencies
 */

import classnames from "classnames";

/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  TextControl,
  __experimentalToggleGroupControl as ToggleGroupControl,
  __experimentalToggleGroupControlOption as ToggleGroupControlOption,
  __experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
  CustomSelectControl,
  Button,
} from "@wordpress/components";
import {
  InspectorControls,
  useBlockProps,
  RichText,
  PanelColorSettings,
} from "@wordpress/block-editor";
import { createBlock } from "@wordpress/blocks";
import { Platform, useState } from "@wordpress/element";
import { alignCenter, alignLeft, alignRight } from "@wordpress/icons";

/***
 * Interal dependencies
 */
import { theme_colors } from "../../utils/block-helpers";

export default function edit({
  setAttributes,
  attributes,
  clientId,
  mergeBlocks,
  onReplace,
  onRemove,
}) {
  const {
    content,
    tag,
    placeholder,
    textColorClass,
    textColor,
    textStyle,
    AlignXs,
    AlignSm,
    AlignMd,
    AlignLg,
    AlignXl,
    anchor,
    extraClass,
  } = attributes;

  const onContentChange = (value) => {
    const newContent = { content: value };
    setAttributes(newContent);
  };

  const tagName = tag;

  const SetColorClass = (value) => {
    theme_colors.filter(function (item) {
      if (item.color == value) {
        setAttributes({
          textColorClass: item.slug,
        });
      }
    });
  };

  const [responsiveMode, setresponsiveMode] = useState("xs");

  let alignclass = "";

  if (
    AlignXs == AlignSm &&
    AlignSm == AlignMd &&
    AlignMd == AlignLg &&
    AlignLg == AlignXl &&
    AlignXs == "left"
  ) {
    alignclass = "";
  } else {
    if (AlignXs) {
      alignclass += " text--align-xs-" + AlignXs;
    }

    if (AlignSm) {
      if (AlignSm != AlignXs) {
        alignclass += " text--align-sm-" + AlignSm;
      }
    }

    if (AlignMd) {
      if (AlignMd != AlignSm) {
        alignclass += " text--align-md-" + AlignMd;
      }
    }

    if (AlignLg) {
      if (AlignLg != AlignMd) {
        alignclass += " text--align-lg-" + AlignLg;
      }
    }

    if (AlignXl) {
      if (AlignXl != AlignLg) {
        alignclass += " text--align-xl-" + AlignXl;
      }
    }
  }

  const colorClass = textColorClass ? `text--color-${textColorClass}` : "";
  const styleClass = textStyle ? `text--style-${textStyle}` : "";
  const extraParagraphClass = extraClass ? `${extraClass}` : "";
  const paragraphAlignClass = "" !== alignclass ? `${alignclass}` : "";

  const blockClass = classnames(
    `text`,
    `${paragraphAlignClass}`,
    `${colorClass}`,
    `${styleClass}`,
    `${extraParagraphClass}`
  );

  const resMode = ["xs", "sm", "md", "lg", "xl"];
  const textAlignSettings = {
    xs: {
      align: AlignXs,
    },
    sm: {
      align: AlignSm,
    },
    md: {
      align: AlignMd,
    },
    lg: {
      align: AlignLg,
    },
    xl: {
      align: AlignXl,
    },
  };

  const resetAlignment = (resMode) => {
    if (resMode == "xl") {
      setAttributes({
        AlignXl: "",
      });
    }
    if (resMode == "lg") {
      setAttributes({
        AlignLg: "",
      });
    }
    if (resMode == "md") {
      setAttributes({
        AlignMd: "",
      });
    }
    if (resMode == "sm") {
      setAttributes({
        AlignSm: "",
      });
    }
    if (resMode == "xs") {
      setAttributes({
        AlignXs: "",
      });
    }
  };

  const onChangeAlign = (value) => {
    if (responsiveMode == "xl") {
      setAttributes({
        AlignXl: value !== undefined ? value : "",
      });
    }
    if (responsiveMode == "lg") {
      setAttributes({
        AlignLg: value !== undefined ? value : "",
      });
    }
    if (responsiveMode == "md") {
      setAttributes({
        AlignMd: value !== undefined ? value : "",
      });
    }
    if (responsiveMode == "sm") {
      setAttributes({
        AlignSm: value !== undefined ? value : "",
      });
    }
    if (responsiveMode == "xs") {
      setAttributes({
        AlignXs: value !== undefined ? value : "",
      });
    }
  };

  const blockProps = useBlockProps();

  const options = [
    {
      key: "one",
      name: "One",
      style: {
        fontSize: "18px",
        lineHeight: "30px",
        fontFamily: "Montserrat",
      },
    },
    {
      key: "two",
      name: "Two",
      style: {
        fontSize: "16px",
        lineHeight: "26px",
        fontFamily: "Montserrat",
      },
    },
  ];

  return (
    <div {...blockProps}>
      <InspectorControls>
        <PanelBody title={__("Styles", "smt-theme")} initialOpen={true}>
          <CustomSelectControl
            __nextUnconstrainedWidth
            label={__("Style", "smt-theme")}
            options={options}
            className="block--customselect"
            onChange={({ selectedItem }) =>
              setAttributes({
                textStyle: selectedItem.key,
              })
            }
            value={options.find((option) => option.key === textStyle)}
          />
          <PanelColorSettings
            title={__("Text Color", "smt-theme")}
            className={"block-color-setting block-color-top-0"}
            colorSettings={[
              {
                colors: theme_colors,
                value: textColor,
                onChange: (value) => {
                  typeof value == "undefined"
                    ? setAttributes({ textColorClass: "" })
                    : SetColorClass(value);
                  typeof value == "undefined"
                    ? setAttributes({
                        textColor: "#000000",
                      })
                    : setAttributes({ textColor: value });
                },
                label: __("Text Color", "smt-theme"),
              },
            ]}
          />
          <span className="block-seprator"></span>
          <div className="block--component-align">
            <label className="blocks-label block--label-as-component-button">
              Alignment
            </label>
            <ToggleGroupControl
              label={__("Responsive Mode", "smt-theme")}
              className="block-togglegroup"
              value={responsiveMode}
              isBlock
              onChange={(value) => {
                setresponsiveMode(value);
              }}>
              <ToggleGroupControlOption
                value="xs"
                label={__("XS", "smt-theme")}
                showTooltip={true}
                aria-label={__("Extra Small", "smt-theme")}
              />
              <ToggleGroupControlOption
                value="sm"
                label={__("SM", "smt-theme")}
                showTooltip={true}
                aria-label={__("Small", "smt-theme")}
              />
              <ToggleGroupControlOption
                value="md"
                label={__("MD", "smt-theme")}
                showTooltip={true}
                aria-label={__("Medium", "smt-theme")}
              />
              <ToggleGroupControlOption
                value="lg"
                label={__("LG", "smt-theme")}
                showTooltip={true}
                aria-label={__("Large", "smt-theme")}
              />
              <ToggleGroupControlOption
                value="xl"
                label={__("XL", "smt-theme")}
                showTooltip={true}
                aria-label={__("Extra Large", "smt-theme")}
              />
            </ToggleGroupControl>
            {responsiveMode ? (
              <div className="button-control">
                {resMode.map((item, index) => {
                  let align = textAlignSettings[item]["align"];
                  return (
                    <div className="col-control-wrap" id={`col-${index}`}>
                      {responsiveMode == item ? (
                        <div className="block--row__settings">
                          <ToggleGroupControl
                            label={__("Alignment", "smt-theme")}
                            className="block-togglegroup"
                            value={align}
                            isBlock
                            onChange={onChangeAlign}>
                            <ToggleGroupControlOptionIcon
                              value="left"
                              icon={alignLeft}
                              showTooltip={true}
                              aria-label={__("Left", "smt-theme")}
                            />
                            <ToggleGroupControlOptionIcon
                              value="center"
                              icon={alignCenter}
                              showTooltip={true}
                              aria-label={__("Center", "smt-theme")}
                            />
                            <ToggleGroupControlOptionIcon
                              value="right"
                              icon={alignRight}
                              showTooltip={true}
                              aria-label={__("Right", "smt-theme")}
                            />
                          </ToggleGroupControl>
                          <Button
                            onClick={() => resetAlignment(responsiveMode)}
                            label={__("Reset", "smt-theme")}
                            className="components-button components-range-control__reset is-secondary is-small align--reset">
                            {__("Reset", "smt-theme")}
                          </Button>
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <ToggleGroupControl
                label={__("Alignment", "smt-theme")}
                className="block-togglegroup smt-theme-togglegroup"
                value=""
                isBlock
                onChange={onChangeAlign}>
                <ToggleGroupControlOptionIcon
                  value="left"
                  icon={alignLeft}
                  showTooltip={true}
                  aria-label={__("Left", "smt-theme")}
                />
                <ToggleGroupControlOptionIcon
                  value="center"
                  icon={alignCenter}
                  showTooltip={true}
                  aria-label={__("Center", "smt-theme")}
                />
                <ToggleGroupControlOptionIcon
                  value="right"
                  icon={alignRight}
                  showTooltip={true}
                  aria-label={__("Right", "smt-theme")}
                />
              </ToggleGroupControl>
            )}
          </div>
        </PanelBody>
        <PanelBody title={__("Settings", "smt-theme")} initialOpen={true}>
          <ToggleGroupControl
            label={__("Tag", "smt-theme")}
            className="block-togglegroup block-toggle-full"
            value={tag}
            onChange={(value) => {
              setAttributes({
                tag: value,
              });
            }}>
            <ToggleGroupControlOption
              value="p"
              label={__("P", "smt-theme")}
              showTooltip={true}
              aria-label={__("P", "smt-theme")}
            />
            <ToggleGroupControlOption
              value="span"
              label={__("SPAN", "smt-theme")}
              showTooltip={true}
              aria-label={__("SPAN", "smt-theme")}
            />
          </ToggleGroupControl>
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

      <RichText
        identifier="content"
        tagName={tagName}
        id={anchor ? anchor : null}
        className={blockClass}
        value={content}
        onChange={onContentChange}
        onSplit={(value, isOriginal) => {
          let newAttributes;

          newAttributes = {
            ...attributes,
            content: value,
          };

          const block = createBlock("smt-theme/paragraph", newAttributes);

          if (isOriginal) {
            block.clientId = clientId;
          }

          return block;
        }}
        onMerge={mergeBlocks}
        onReplace={onReplace}
        onRemove={onRemove}
        aria-label={__("Paragraph text", "smt-theme")}
        placeholder={placeholder || __("Add text here...", "smt-theme")}
        {...(Platform.isNative && { deleteEnter: true })} // setup RichText on native mobile to delete the "Enter" key as it's handled by the JS/RN side
        allowedFormats={["core/bold", "core/italic", "core/link"]}
      />
    </div>
  );
}
