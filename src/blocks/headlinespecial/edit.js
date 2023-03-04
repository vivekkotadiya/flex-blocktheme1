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
    mainHeadline,
    mainHeadLevel,
    subHeadline,
    subHeadLevel,
    mainHeadColor,
    mainHeadColorClass,
    subHeadColor,
    subHeadColorClass,
    lineColor,
    lineColorClass,
    AlignXs,
    AlignSm,
    AlignMd,
    AlignLg,
    AlignXl,
    anchor,
  } = attributes;

  const [headresponsiveMode, setheadresponsiveMode] = useState("xs");

  const mainTag = mainHeadLevel == "span" ? "span" : "h" + mainHeadLevel;
  const subTag = subHeadLevel == "span" ? "span" : "h" + subHeadLevel;

  const SetColorClass = (value, type) => {
    if (value !== undefined) {
      theme_colors.filter(function (item) {
        if (item.color == value) {
          if (type == "main") {
            setAttributes({
              mainHeadColorClass: item.slug,
            });
          } else if (type == "sub") {
            setAttributes({
              subHeadColorClass: item.slug,
            });
          } else if (type == "line") {
            setAttributes({
              lineColorClass: item.slug,
            });
          }
        }
      });
    } else {
      if (type == "main") {
        setAttributes({
          mainHeadColorClass: "",
        });
      } else if (type == "sub") {
        setAttributes({
          subHeadColorClass: "",
        });
      } else if (type == "line") {
        setAttributes({
          lineColorClass: "",
        });
      }
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
      alignclass += " headline-special--align-xs-" + AlignXs;
    }

    if (AlignSm) {
      if (AlignSm != AlignXs) {
        alignclass += " headline-special--align-sm-" + AlignSm;
      }
    }

    if (AlignMd) {
      if (AlignMd != AlignSm) {
        alignclass += " headline-special--align-md-" + AlignMd;
      }
    }

    if (AlignLg) {
      if (AlignLg != AlignMd) {
        alignclass += " headline-special--align-lg-" + AlignLg;
      }
    }

    if (AlignXl) {
      if (AlignXl != AlignLg) {
        alignclass += " headline-special--align-xl-" + AlignXl;
      }
    }
  }

  const headlineAlign = "" !== alignclass ? `${alignclass}` : "";

  const blockProps = useBlockProps({
    className: classnames(`headline-special`, `${headlineAlign}`),
  });

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

  return (
    <div id={anchor ? anchor : null} {...blockProps}>
      <InspectorControls>
        <PanelBody title={__("General", "smt-theme")} initialOpen={false}>
          <div className="block--component-align">
            <label className="blocks-label block--label-as-component-button">
              Orientation
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
                      {headresponsiveMode == item && (
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
                            onClick={() => resetAlignment(headresponsiveMode)}
                            label={__("Reset", "smt-theme")}
                            className="components-button components-range-control__reset is-secondary is-small align--reset">
                            {__("Reset", "smt-theme")}
                          </Button>
                        </div>
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
        <PanelBody title={__("Main Headline", "smt-theme")} initialOpen={false}>
          <ToggleGroupControl
            label={__("Tag", "smt-theme")}
            value={mainHeadLevel}
            onChange={(value) => {
              setAttributes({
                mainHeadLevel: value,
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
          <PanelColorSettings
            title={__("Color", "smt-theme")}
            className={"block-color-setting block-color-top-0"}
            colorSettings={[
              {
                colors: theme_colors,
                value: mainHeadColor,
                onChange: (value) => {
                  typeof value == "undefined"
                    ? setAttributes({ mainHeadColorClass: "" })
                    : SetColorClass(value, "main");
                  typeof value == "undefined"
                    ? setAttributes({
                        mainHeadColor: "#000000",
                      })
                    : setAttributes({ mainHeadColor: value });
                },
                label: __("Color", "smt-theme"),
              },
            ]}
          />
        </PanelBody>
        <PanelBody title={__("Sub Headline", "smt-theme")} initialOpen={false}>
          <ToggleGroupControl
            label={__("Tag", "smt-theme")}
            value={subHeadLevel}
            onChange={(value) => {
              setAttributes({
                subHeadLevel: value,
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
          <PanelColorSettings
            title={__("Color", "smt-theme")}
            className={"block-color-setting block-color-top-0"}
            colorSettings={[
              {
                colors: theme_colors,
                value: subHeadColor,
                onChange: (value) => {
                  typeof value == "undefined"
                    ? setAttributes({ subHeadColorClass: "" })
                    : SetColorClass(value, "sub");
                  typeof value == "undefined"
                    ? setAttributes({
                        subHeadColor: "#000000",
                      })
                    : setAttributes({ subHeadColor: value });
                },
                label: __("Color", "smt-theme"),
              },
            ]}
          />
        </PanelBody>
        <PanelBody title={__("Separator", "smt-theme")} initialOpen={false}>
          <PanelColorSettings
            title={__("Color", "smt-theme")}
            className={"block-color-setting block-color-top-0"}
            colorSettings={[
              {
                colors: theme_colors,
                value: lineColor,
                onChange: (value) => {
                  typeof value == "undefined"
                    ? setAttributes({ lineColorClass: "" })
                    : SetColorClass(value, "line");
                  typeof value == "undefined"
                    ? setAttributes({
                        lineColor: "#000000",
                      })
                    : setAttributes({ lineColor: value });
                },
                label: __("Color", "smt-theme"),
              },
            ]}
          />
        </PanelBody>
        <PanelBody title={__("Additional", "smt-theme")} initialOpen={false}>
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
        identifier="main-headline"
        tagName={mainTag}
        className={classnames(
          "headline-special__main headline headline--style-three",
          "" !== mainHeadColorClass
            ? `headline--color-${mainHeadColorClass}`
            : ""
        )}
        value={mainHeadline}
        onChange={(value) => {
          setAttributes({ mainHeadline: value });
        }}
        withoutInteractiveFormatting={true}
        aria-label={__("Main Heading text", "smt-theme")}
        placeholder={__("Lorem ipsum dolor", "smt-theme")}
        {...(Platform.isNative && { deleteEnter: true })} // setup RichText on native mobile to delete the "Enter" key as it's handled by the JS/RN side
        allowedFormats={[""]}
      />
      <RichText
        identifier="sub-headline"
        tagName={subTag}
        className={classnames(
          "headline-special__sub headline headline--style-one",
          "" !== subHeadColorClass
            ? `headline--color-${subHeadColorClass}`
            : ""
        )}
        value={subHeadline}
        onChange={(value) => {
          setAttributes({ subHeadline: value });
        }}
        withoutInteractiveFormatting={true}
        aria-label={__("Sub Heading text", "smt-theme")}
        placeholder={__("Lorem ipsum dolor sit amet", "smt-theme")}
        {...(Platform.isNative && { deleteEnter: true })} // setup RichText on native mobile to delete the "Enter" key as it's handled by the JS/RN side
        allowedFormats={[""]}
      />
      <span
        className={classnames(
          "headline-special__separator",
          "" !== lineColorClass
            ? `headline-special__separator--color-${lineColorClass}`
            : ""
        )}></span>
    </div>
  );
}
