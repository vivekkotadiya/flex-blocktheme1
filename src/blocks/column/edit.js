/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { InspectorControls, PanelColorSettings } from "@wordpress/block-editor";
import {
  PanelBody,
  __experimentalToggleGroupControl as ToggleGroupControl,
  __experimentalToggleGroupControlOption as ToggleGroupControlOption,
  ToggleControl,
  SelectControl,
  RangeControl,
  Button,
  TextControl,
} from "@wordpress/components";
import { Component } from "@wordpress/element";

/***
 * Interal dependencies
 */
import { theme_colors } from "../../utils/block-helpers";

export default class Edit extends Component {
  render() {
    const {
      attributes: {
        backgroundColor,
        xlwidth,
        lgwidth,
        mdwidth,
        smwidth,
        xswidth,
        xloffset,
        lgoffset,
        mdoffset,
        smoffset,
        xsoffset,
        colPadding,
        xlalignV,
        lgalignV,
        mdalignV,
        smalignV,
        xsalignV,
        anchor,
        hideLG,
        hideMD,
        hideXS,
      },
      colResponsiveMode,
      setcolResponsiveMode,
      setAttributes,
    } = this.props;

    const resMode = ["xs", "sm", "md", "lg", "xl"];

    const colSettings = {
      xs: {
        width: xswidth,
        offset: xsoffset,
        alignV: xsalignV,
      },
      sm: {
        width: smwidth,
        offset: smoffset,
        alignV: smalignV,
      },
      md: {
        width: mdwidth,
        offset: mdoffset,
        alignV: mdalignV,
      },
      lg: {
        width: lgwidth,
        offset: lgoffset,
        alignV: lgalignV,
      },
      xl: {
        width: xlwidth,
        offset: xloffset,
        alignV: xlalignV,
      },
    };

    const onChangeWidth = (value) => {
      if (colResponsiveMode == "xl") {
        setAttributes({
          xlwidth: value !== undefined ? value : 0,
        });
      }
      if (colResponsiveMode == "lg") {
        setAttributes({
          lgwidth: value !== undefined ? value : 0,
        });
      }
      if (colResponsiveMode == "md") {
        setAttributes({
          mdwidth: value !== undefined ? value : 0,
        });
      }
      if (colResponsiveMode == "sm") {
        setAttributes({
          smwidth: value !== undefined ? value : 0,
        });
      }
      if (colResponsiveMode == "xs") {
        setAttributes({
          xswidth: value !== undefined ? value : 0,
        });
      }
    };
    const onChangeOffset = (value) => {
      if (colResponsiveMode == "xl") {
        setAttributes({
          xloffset: value !== undefined ? value : -1,
        });
      }
      if (colResponsiveMode == "lg") {
        setAttributes({
          lgoffset: value !== undefined ? value : -1,
        });
      }
      if (colResponsiveMode == "md") {
        setAttributes({
          mdoffset: value !== undefined ? value : -1,
        });
      }
      if (colResponsiveMode == "sm") {
        setAttributes({
          smoffset: value !== undefined ? value : -1,
        });
      }
      if (colResponsiveMode == "xs") {
        setAttributes({
          xsoffset: value !== undefined ? value : -1,
        });
      }
    };
    const onChangeAlignV = (value) => {
      if (colResponsiveMode == "xl") {
        setAttributes({
          xlalignV: value,
        });
      }
      if (colResponsiveMode == "lg") {
        setAttributes({
          lgalignV: value,
        });
      }
      if (colResponsiveMode == "md") {
        setAttributes({
          mdalignV: value,
        });
      }
      if (colResponsiveMode == "sm") {
        setAttributes({
          smalignV: value,
        });
      }
      if (colResponsiveMode == "xs") {
        setAttributes({
          xsalignV: value,
        });
      }
    };

    const resetColAlignV = (responsiveMode) => {
      if (responsiveMode == "xl") {
        setAttributes({
          xlalignV: "",
        });
      }
      if (responsiveMode == "lg") {
        setAttributes({
          lgalignV: "",
        });
      }
      if (responsiveMode == "md") {
        setAttributes({
          mdalignV: "",
        });
      }
      if (responsiveMode == "sm") {
        setAttributes({
          smalignV: "",
        });
      }
      if (responsiveMode == "xs") {
        setAttributes({
          xsalignV: "",
        });
      }
    };

    const SetColorClass = (value) => {
      theme_colors.filter(function (item) {
        if (item.color == value) {
          setAttributes({
            colbgClass: item.slug,
          });
        }
      });
    };

    return (
      <>
        <InspectorControls>
          <PanelBody title={__("Styles", "smt-theme")} initialOpen={true}>
            <PanelColorSettings
              title={__("Background color", "smt-theme")}
              className={"block-color-setting"}
              colorSettings={[
                {
                  colors: theme_colors,
                  value: backgroundColor,
                  onChange: (value) => {
                    typeof value == "undefined"
                      ? setAttributes({ colbgClass: "" })
                      : SetColorClass(value);
                    setAttributes({
                      backgroundColor: value,
                    });
                  },
                  label: __("Background Color", "smt-theme"),
                },
              ]}
            />
          </PanelBody>
          <PanelBody title={__("Settings", "smt-theme")} initialOpen={true}>
            <ToggleGroupControl
              label={__("Responsive Mode", "smt-theme")}
              className="block-togglegroup"
              value={colResponsiveMode}
              isBlock
              onChange={(value) => {
                setcolResponsiveMode(value);
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
            {colResponsiveMode && (
              <div className="col-control">
                {resMode.map((item, index) => {
                  let vAlign = colSettings[item]["alignV"];
                  let width = colSettings[item]["width"];
                  let offset = colSettings[item]["offset"];
                  return (
                    <div className="col-control-wrap" id={`col-${index}`}>
                      {colResponsiveMode == item ? (
                        <>
                          <RangeControl
                            label={__("Width", "smt-theme")}
                            value={width}
                            onChange={onChangeWidth}
                            min={0}
                            max={12}
                            allowReset={true}
                          />
                          <RangeControl
                            label={__("Offset", "smt-theme")}
                            value={offset}
                            onChange={onChangeOffset}
                            min={-1}
                            max={11}
                            allowReset={true}
                          />
                          <div className="block--row__settings">
                            <SelectControl
                              label={__("Alignment - Vertical", "smt-theme")}
                              options={[
                                {
                                  value: "",
                                  label: __("Not Set", "smt-theme"),
                                },
                                {
                                  value: "top",
                                  label: __("Top", "smt-theme"),
                                },
                                {
                                  value: "middle",
                                  label: __("Middle", "smt-theme"),
                                },
                                {
                                  value: "bottom",
                                  label: __("Bottom", "smt-theme"),
                                },
                              ]}
                              value={vAlign}
                              onChange={onChangeAlignV}></SelectControl>
                            <Button
                              onClick={() => resetColAlignV(colResponsiveMode)}
                              label={__("Reset", "smt-theme")}
                              className="components-button components-range-control__reset is-secondary is-small block--reset-btn">
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
          </PanelBody>
          <PanelBody title={__("Additional", "smt-theme")} initialOpen={true}>
            <diV className="block--row__settings block--row__col">
              <ToggleGroupControl
                label={__("Padding", "smt-theme")}
                className="block-togglegroup"
                value={colPadding}
                isBlock
                onChange={(value) => {
                  setAttributes({
                    colPadding: Number(value),
                  });
                }}>
                <ToggleGroupControlOption
                  value="0"
                  label={__("0", "smt-theme")}
                  showTooltip={true}
                  aria-label={__("0px", "smt-theme")}
                />
                <ToggleGroupControlOption
                  value="1"
                  label={__("1", "smt-theme")}
                  showTooltip={true}
                  aria-label={__("3px", "smt-theme")}
                />
                <ToggleGroupControlOption
                  value="2"
                  label={__("2", "smt-theme")}
                  showTooltip={true}
                  aria-label={__("30px", "smt-theme")}
                />
                <ToggleGroupControlOption
                  value="3"
                  label={__("3", "smt-theme")}
                  showTooltip={true}
                  aria-label={__("50px", "smt-theme")}
                />
                <ToggleGroupControlOption
                  value="4"
                  label={__("4", "smt-theme")}
                  showTooltip={true}
                  aria-label={__("50px", "smt-theme")}
                />
              </ToggleGroupControl>
              <Button
                onClick={() =>
                  setAttributes({
                    colPadding: Number(1),
                  })
                }
                label={__("Reset Padding", "smt-theme")}
                className="components-button components-range-control__reset is-secondary is-small block--reset-btn">
                {__("Reset Padding", "smt-theme")}
              </Button>
            </diV>
          </PanelBody>
          <PanelBody title={__("Advanced", "smt-theme")} initialOpen={true}>
            <TextControl
              label={__("Anchor", "smt-theme")}
              placeholder={__("Specify link ID…", "smt-theme")}
              type="text"
              value={anchor}
              onChange={(value) => setAttributes({ anchor: value })}
            />
            <span className="block-seprator"></span>
            <ToggleControl
              label={__("Hide on Smartphone", "smt-theme")}
              checked={hideXS}
              onChange={() =>
                setAttributes({
                  hideXS: !hideXS,
                })
              }
            />
            <ToggleControl
              label={__("Hide on Tablet", "smt-theme")}
              checked={hideMD}
              onChange={() =>
                setAttributes({
                  hideMD: !hideMD,
                })
              }
            />
            <ToggleControl
              label={__("Hide on Desktop", "smt-theme")}
              checked={hideLG}
              onChange={() =>
                setAttributes({
                  hideLG: !hideLG,
                })
              }
            />
          </PanelBody>
        </InspectorControls>
      </>
    );
  }
}
