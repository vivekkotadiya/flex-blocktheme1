/**
 * External dependencies
 */
import classnames from "classnames";

/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useState, useEffect, useRef } from "@wordpress/element";
import {
  PanelBody,
  __experimentalToggleGroupControl as ToggleGroupControl,
  __experimentalToggleGroupControlOption as ToggleGroupControlOption,
  __experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
  Popover,
  ToolbarButton,
  ToggleControl,
  TextControl,
  Button,
  SelectControl,
} from "@wordpress/components";
import {
  InspectorControls,
  useBlockProps,
  RichText,
  __experimentalLinkControl as LinkControl,
  BlockControls,
  PanelColorSettings,
} from "@wordpress/block-editor";
import { displayShortcut } from "@wordpress/keycodes";
import { link, linkOff } from "@wordpress/icons";
import { alignCenter, alignLeft, alignRight } from "@wordpress/icons";

/***
 * Interal dependencies
 */
import { theme_colors } from "../../utils/block-helpers";

export default function edit({
  setAttributes,
  attributes,
  isSelected,
  onReplace,
  mergeBlocks,
}) {
  const {
    style,
    bgcolor,
    bgcolorClass,
    widthXs,
    widthSm,
    widthMd,
    widthLg,
    widthXl,
    linkTarget,
    text,
    url,
    AlignXs,
    AlignSm,
    AlignMd,
    AlignLg,
    AlignXl,
    anchor,
    downloadable,
  } = attributes;

  const ref = useRef();
  const richTextRef = useRef();

  const [isEditingURL, setIsEditingURL] = useState(false);
  const isURLSet = !!url;
  const opensInNewTab = linkTarget === "_blank";

  const relAttributes = [];

  // Stop the buttons from doing anything in the editor.
  const links = document.querySelectorAll("a.button");

  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener(
      "click",
      function (e) {
        if (links[i].getAttribute("href")) {
          links[i].removeAttribute("href");
          e.preventDefault();
        }
      },
      false
    );
  }

  function onToggleOpenInNewTab(value) {
    const newLinkTarget = value ? "_blank" : undefined;

    if (newLinkTarget) {
      relAttributes.push("noopener");
    }

    setAttributes({
      linkTarget: newLinkTarget,
    });
  }

  function startEditing(event) {
    event.preventDefault();
    setIsEditingURL(true);
  }

  function unlink() {
    setAttributes({
      url: undefined,
      linkTarget: undefined,
      rel: undefined,
    });
    setIsEditingURL(false);
  }

  useEffect(() => {
    if (!isSelected) {
      setIsEditingURL(false);
    }
  }, [isSelected]);

  const SetColorClass = (value) => {
    if (value !== undefined) {
      theme_colors.filter(function (item) {
        if (item.color == value) {
          setAttributes({
            bgcolorClass: item.slug,
          });
          setAttributes({
            bgcolor: item.color,
          });
        }
      });
    } else {
      setAttributes({
        bgcolorClass: "",
        bgcolor: "",
      });
    }
  };

  let alignclass = "";
  let widthClass = "";
  const [responsiveMode, setresponsiveMode] = useState("xs");
  if (
    AlignXs == AlignSm &&
    AlignSm == AlignMd &&
    AlignMd == AlignLg &&
    AlignLg == AlignXl
  ) {
    if (AlignXs) {
      alignclass += " button--align-xs-" + AlignXs;
    }
  } else {
    if (AlignXs) {
      alignclass += " button--align-xs-" + AlignXs;
    }
    if (AlignSm) {
      if (AlignSm != AlignXs) {
        alignclass += " button--align-sm-" + AlignSm;
      }
    }
    if (AlignMd) {
      if (AlignMd != AlignSm) {
        alignclass += " button--align-md-" + AlignMd;
      }
    }
    if (AlignLg) {
      if (AlignLg != AlignMd) {
        alignclass += " button--align-lg-" + AlignLg;
      }
    }
    if (AlignXl) {
      if (AlignXl != AlignLg) {
        alignclass += " button--align-xl-" + AlignXl;
      }
    }
  }

  if (
    widthXs == widthSm &&
    widthSm == widthMd &&
    widthMd == widthLg &&
    widthLg == widthXl
  ) {
    if (widthXs) {
      widthClass += " button--width-xs-" + widthXs;
    }
  } else {
    if (widthXs) {
      widthClass += " button--width-xs-" + widthXs;
    }
    if (widthSm) {
      if (widthSm != widthXs) {
        widthClass += " button--width-sm-" + widthSm;
      }
    }
    if (widthMd) {
      if (widthMd != widthSm) {
        widthClass += " button--width-md-" + widthMd;
      }
    }
    if (widthLg) {
      if (widthLg != widthMd) {
        widthClass += " button--width-lg-" + widthLg;
      }
    }
    if (widthXl) {
      if (widthXl != widthLg) {
        widthClass += " button--width-xl-" + widthXl;
      }
    }
  }

  const classes = `button--cta button--style-${style} button--color-${bgcolorClass}`;
  const btnclassName = classnames({
    [`${classes}`]: undefined !== classes,
    [`${alignclass}`]: "" !== alignclass,
    [`${widthClass}`]: "" !== widthClass,
  });

  const relation =
    relAttributes && relAttributes.length > 0 ? relAttributes.join(" ") : null;

  const resMode = ["xs", "sm", "md", "lg", "xl"];
  const btnAlignSettings = {
    xs: {
      align: AlignXs,
      width: widthXs,
    },
    sm: {
      align: AlignSm,
      width: widthSm,
    },
    md: {
      align: AlignMd,
      width: widthMd,
    },
    lg: {
      align: AlignLg,
      width: widthLg,
    },
    xl: {
      align: AlignXl,
      width: widthXl,
    },
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

  // update width
  const onChangeWidth = (value) => {
    if (responsiveMode == "xl") {
      setAttributes({
        widthXl: value !== undefined ? value : "",
      });
    }
    if (responsiveMode == "lg") {
      setAttributes({
        widthLg: value !== undefined ? value : "",
      });
    }
    if (responsiveMode == "md") {
      setAttributes({
        widthMd: value !== undefined ? value : "",
      });
    }
    if (responsiveMode == "sm") {
      setAttributes({
        widthSm: value !== undefined ? value : "",
      });
    }
    if (responsiveMode == "xs") {
      setAttributes({
        widthXs: value !== undefined ? value : "",
      });
    }
  };

  const resetWidth = (resMode) => {
    if (resMode == "xl") {
      setAttributes({
        widthXl: "",
      });
    }
    if (resMode == "lg") {
      setAttributes({
        widthLg: "",
      });
    }
    if (resMode == "md") {
      setAttributes({
        widthMd: "",
      });
    }
    if (resMode == "sm") {
      setAttributes({
        widthSm: "",
      });
    }
    if (resMode == "xs") {
      setAttributes({
        widthXs: "",
      });
    }
  };

  return (
    <>
      <div {...useBlockProps({ className: `${alignclass}` })}>
        <InspectorControls>
          <PanelBody title={__("Styles", "smt-theme")} initialOpen={true}>
            <SelectControl
              label={__("Styles", "smt-theme")}
              options={[
                {
                  value: "one",
                  label: __("One", "smt-theme"),
                },
                {
                  value: "two",
                  label: __("Two", "smt-theme"),
                },
                {
                  value: "three",
                  label: __("Three", "smt-theme"),
                },
              ]}
              value={style}
              onChange={(value) => {
                setAttributes({
                  style: value,
                });
              }}></SelectControl>
            <PanelColorSettings
              title={__("Button color", "smt-theme")}
              className={"block-color-setting block-color-top-0"}
              colorSettings={[
                {
                  colors: theme_colors,
                  value: bgcolor,
                  onChange: (value) => {
                    SetColorClass(value);
                  },
                  label: __("Button Color", "smt-theme"),
                },
              ]}
            />
          </PanelBody>
          <PanelBody title={__("Settings", "smt-theme")} initialOpen={true}>
            {/* <span className="block-seprator"></span> */}
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
              {responsiveMode && (
                <div className="button-control">
                  {resMode.map((item, index) => {
                    let align = btnAlignSettings[item]["align"];
                    let width = btnAlignSettings[item]["width"];
                    return (
                      <div className="col-control-wrap" id={`col-${index}`}>
                        {responsiveMode == item ? (
                          <>
                            <div className="block--row__settings">
                              <ToggleGroupControl
                                label={__("Alignment", "smt-theme")}
                                className="block-togglegroup smt-theme-togglegroup"
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
                            <div className="block--row__settings">
                              <ToggleGroupControl
                                label={__("Width", "smt-theme")}
                                className="block-togglegroup"
                                value={width}
                                isBlock
                                onChange={onChangeWidth}>
                                <ToggleGroupControlOption
                                  value="inline"
                                  label={__("Inline", "smt-theme")}
                                  showTooltip={true}
                                  aria-label={__("Inline", "smt-theme")}
                                />
                                <ToggleGroupControlOption
                                  value="one"
                                  label={__("1/4", "smt-theme")}
                                  showTooltip={true}
                                  aria-label={__("1/4", "smt-theme")}
                                />
                                <ToggleGroupControlOption
                                  value="two"
                                  label={__("2/4", "smt-theme")}
                                  showTooltip={true}
                                  aria-label={__("2/4", "smt-theme")}
                                />
                                <ToggleGroupControlOption
                                  value="three"
                                  label={__("3/4", "smt-theme")}
                                  showTooltip={true}
                                  aria-label={__("3/4", "smt-theme")}
                                />
                                <ToggleGroupControlOption
                                  value="four"
                                  label={__("4/4", "smt-theme")}
                                  showTooltip={true}
                                  aria-label={__("4/4", "smt-theme")}
                                />
                              </ToggleGroupControl>
                              <Button
                                onClick={() => resetWidth(responsiveMode)}
                                label={__("Reset", "smt-theme")}
                                className="components-button components-range-control__reset is-secondary is-small align--reset">
                                {__("Reset", "smt-theme")}
                              </Button>
                            </div>
                          </>
                        ) : (
                          <></>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <ToggleControl
              label={__("Download", "smt-theme")}
              className="block-mt"
              checked={downloadable}
              onChange={() =>
                setAttributes({
                  downloadable: !downloadable,
                })
              }
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

        <BlockControls group="block">
          {!isURLSet && (
            <ToolbarButton
              name="link"
              icon={link}
              title={__("Link", "smt-theme")}
              shortcut={displayShortcut.primary("k")}
              onClick={startEditing}
            />
          )}
          {isURLSet && (
            <ToolbarButton
              name="link"
              icon={linkOff}
              title={__("Unlink", "smt-theme")}
              shortcut={displayShortcut.primaryShift("k")}
              onClick={unlink}
              isActive={true}
            />
          )}
        </BlockControls>
        {isSelected && (isEditingURL || isURLSet) && (
          <Popover
            onClose={() => {
              setIsEditingURL(false);
              richTextRef.current?.focus();
            }}
            anchorRef={ref?.current}
            focusOnMount={isEditingURL ? "firstElement" : false}
            __unstableSlotName={"__unstable-block-tools-after"}>
            <LinkControl
              className="wp-block-navigation-link__inline-link-input"
              value={{ url, opensInNewTab }}
              onChange={({
                url: newURL = "",
                opensInNewTab: newOpensInNewTab,
              }) => {
                setAttributes({ url: newURL });

                if (opensInNewTab !== newOpensInNewTab) {
                  onToggleOpenInNewTab(newOpensInNewTab);
                }
              }}
              onRemove={() => {
                unlink();
                richTextRef.current?.focus();
              }}
              forceIsEditingLink={isEditingURL}
            />
          </Popover>
        )}

        <a
          onClick={(e) => e.preventDefault()}
          id={anchor ? anchor : null}
          className={btnclassName}
          href={!!url ? url : null}
          target={!!linkTarget ? "_blank" : null}
          rel={relation}
          download={downloadable == true ? true : false}>
          <span className="button--text">
            <RichText
              ref={richTextRef}
              aria-label={__("Button text", "smt-theme")}
              placeholder={__("Add text…", "smt-theme")}
              value={text}
              onChange={(value) => setAttributes({ text: value })}
              withoutInteractiveFormatting={false}
              allowedFormats={[]}
              onReplace={onReplace}
              onMerge={mergeBlocks}
              identifier="text"
            />
          </span>
        </a>
      </div>
    </>
  );
}
