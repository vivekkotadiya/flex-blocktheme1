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
import { Platform, useState } from "@wordpress/element";
import { alignCenter, alignLeft, alignRight } from "@wordpress/icons";

/***
 * Interal dependencies
 */
import { theme_colors } from "../../utils/block-helpers";

export default function edit({ setAttributes, attributes }) {
  const {
    content,
    level,
    placeholder,
    headColor,
    headColorClass,
    headStyle,
    AlignXs,
    AlignSm,
    AlignMd,
    AlignLg,
    AlignXl,
    extraClass,
    anchor,
  } = attributes;

  const [headresponsiveMode, setheadresponsiveMode] = useState("xs");

  const tagName = level == "span" ? "span" : "h" + level;

  const onContentChange = (value) => {
    const newContent = {
      content: value,
    };
    setAttributes(newContent);
  };

  const blockProps = useBlockProps();

  const SetColorClass = (value) => {
    if (value !== undefined) {
      theme_colors.filter(function (item) {
        if (item.color == value) {
          setAttributes({
            headColorClass: item.slug,
          });
        }
      });
    } else {
      setAttributes({
        headColorClass: "",
      });
    }
  };

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
      alignclass += " headline--align-xs-" + AlignXs;
    }

    if (AlignSm) {
      if (AlignSm != AlignXs) {
        alignclass += " headline--align-sm-" + AlignSm;
      }
    }

    if (AlignMd) {
      if (AlignMd != AlignSm) {
        alignclass += " headline--align-md-" + AlignMd;
      }
    }

    if (AlignLg) {
      if (AlignLg != AlignMd) {
        alignclass += " headline--align-lg-" + AlignLg;
      }
    }

    if (AlignXl) {
      if (AlignXl != AlignLg) {
        alignclass += " headline--align-xl-" + AlignXl;
      }
    }
  }

  const colorClass = headColorClass ? `headline--color-${headColorClass}` : "";
  const styleClass = headStyle ? `headline--style-${headStyle}` : "";
  const headlineAlign = "" !== alignclass ? `${alignclass}` : "";

  const blockClass = classnames(
    `headline`,
    `${headlineAlign}`,
    `${styleClass}`,
    `${colorClass}`,
    `${extraClass}`
  );

  const resMode = ["xs", "sm", "md", "lg", "xl"];
  const headAlignSettings = {
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

  const onChangeAlign = (value) => {
    if (headresponsiveMode == "xl") {
      setAttributes({
        AlignXl: value !== undefined ? value : "",
      });
    }
    if (headresponsiveMode == "lg") {
      setAttributes({
        AlignLg: value !== undefined ? value : "",
      });
    }
    if (headresponsiveMode == "md") {
      setAttributes({
        AlignMd: value !== undefined ? value : "",
      });
    }
    if (headresponsiveMode == "sm") {
      setAttributes({
        AlignSm: value !== undefined ? value : "",
      });
    }
    if (headresponsiveMode == "xs") {
      setAttributes({
        AlignXs: value !== undefined ? value : "",
      });
    }
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

  const options = [
    {
      key: "six",
      name: "One",
      style: {
        fontSize: "55px",
        lineHeight: "59px",
        fontFamily: "Montserrat",
        fontWeight: "700",
        textTransform: "uppercase",
      },
    },
    {
      key: "one",
      name: "Two",
      style: {
        fontSize: "32px",
        lineHeight: "39px",
        fontWeight: "600",
        textTransform: "uppercase",
        fontFamily: "Montserrat",
      },
    },
    {
      key: "two",
      name: "Three",
      style: {
        fontSize: "28px",
        lineHeight: "38px",
        textTransform: "uppercase",
        fontFamily: "Montserrat",
        fontWeight: "600",
      },
    },
    {
      key: "three",
      name: "Four",
      style: {
        fontSize: "26px",
        lineHeight: "39px",
        textTransform: "uppercase",
        fontFamily: "Montserrat",
        fontWeight: "300",
      },
    },
    {
      key: "four",
      name: "Five",
      style: {
        fontSize: "24px",
        lineHeight: "30px",
        textTransform: "uppercase",
        fontWeight: "600",
        fontFamily: "Open Sans",
      },
    },
    {
      key: "five",
      name: "Six",
      style: {
        fontSize: "22px",
        lineHeight: "24px",
        fontWeight: "600",
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
                headStyle: selectedItem.key,
              })
            }
            value={options.find((option) => option.key === headStyle)}
          />
          <PanelColorSettings
            title={__("Color", "smt-theme")}
            className={"block-color-setting block-color-top-0"}
            colorSettings={[
              {
                colors: theme_colors,
                value: headColor,
                onChange: (value) => {
                  typeof value == "undefined"
                    ? setAttributes({ headColorClass: "" })
                    : SetColorClass(value);
                  typeof value == "undefined"
                    ? setAttributes({
                        headColor: "#575756",
                      })
                    : setAttributes({ headColor: value });
                },
                label: __("Color", "smt-theme"),
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
              value={headresponsiveMode}
              isBlock
              onChange={(value) => {
                setheadresponsiveMode(value);
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
            {headresponsiveMode ? (
              <div className="button-control">
                {resMode.map((item, index) => {
                  let align = headAlignSettings[item]["align"];

                  return (
                    <div className="col-control-wrap" id={`col-${index}`}>
                      {headresponsiveMode == item ? (
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
                            onClick={() => resetAlignment(item)}
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
        <PanelBody title={__("Settings")} initialOpen={true}>
          <ToggleGroupControl
            label={__("Tag", "smt-theme")}
            value={level}
            onChange={(value) => {
              setAttributes({
                level: value,
              });
            }}
            className="block-toggle-full">
            <ToggleGroupControlOption
              value="1"
              label={__("1", "smt-theme")}
              showTooltip={true}
              aria-label={__("H1", "smt-theme")}
            />
            <ToggleGroupControlOption
              value="2"
              label={__("2", "smt-theme")}
              showTooltip={true}
              aria-label={__("H2", "smt-theme")}
            />
            <ToggleGroupControlOption
              value="3"
              label={__("3", "smt-theme")}
              showTooltip={true}
              aria-label={__("H3", "smt-theme")}
            />
            <ToggleGroupControlOption
              value="4"
              label={__("4", "smt-theme")}
              showTooltip={true}
              aria-label={__("H4", "smt-theme")}
            />
            <ToggleGroupControlOption
              value="5"
              label={__("5", "smt-theme")}
              showTooltip={true}
              aria-label={__("H5", "smt-theme")}
            />
            <ToggleGroupControlOption
              value="6"
              label={__("6", "smt-theme")}
              showTooltip={true}
              aria-label={__("H6", "smt-theme")}
            />
            <ToggleGroupControlOption
              value="span"
              label={__("SPAN", "smt-theme")}
              showTooltip={true}
              aria-label={__("Span", "smt-theme")}
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
        className={blockClass}
        value={content}
        id={anchor ? anchor : null}
        onChange={onContentChange}
        withoutInteractiveFormatting={true}
        aria-label={__("Heading text", "smt-theme")}
        placeholder={placeholder || __("Heading", "smt-theme")}
        {...(Platform.isNative && { deleteEnter: true })} // setup RichText on native mobile to delete the "Enter" key as it's handled by the JS/RN side
        allowedFormats={[""]}
      />
    </div>
  );
}
