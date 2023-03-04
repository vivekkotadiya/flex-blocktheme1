/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import {
  PanelBody,
  __experimentalToggleGroupControl as ToggleGroupControl,
  __experimentalToggleGroupControlOption as ToggleGroupControlOption,
  ToggleControl,
  SelectControl,
  Button,
  TextControl,
} from "@wordpress/components";
import { Component } from "@wordpress/element";

export default class Edit extends Component {
  render() {
    const {
      attributes: {
        xlAlignH,
        lgAlignH,
        mdAlignH,
        smAlignH,
        xsAlignH,
        xlAlignV,
        lgAlignV,
        mdAlignV,
        smAlignV,
        xsAlignV,
        xlReverseCol,
        lgReverseCol,
        mdReverseCol,
        smReverseCol,
        xsReverseCol,
        colheight,
        contentwidth,
        colgap,
        anchor,
      },
      rowResponsiveMode,
      setrowResponsiveMode,
      setAttributes,
    } = this.props;

    const resMode = ["xs", "sm", "md", "lg", "xl"];

    const rowSettings = {
      xs: {
        alignH: xsAlignH,
        alignV: xsAlignV,
      },
      sm: {
        alignH: smAlignH,
        alignV: smAlignV,
      },
      md: {
        alignH: mdAlignH,
        alignV: mdAlignV,
      },
      lg: {
        alignH: lgAlignH,
        alignV: lgAlignV,
      },
      xl: {
        alignH: xlAlignH,
        alignV: xlAlignV,
      },
    };

    const updateHAlign = (value) => {
      if (rowResponsiveMode == "xl") {
        setAttributes({
          xlAlignH: value,
        });
      }
      if (rowResponsiveMode == "lg") {
        setAttributes({
          lgAlignH: value,
        });
      }
      if (rowResponsiveMode == "md") {
        setAttributes({
          mdAlignH: value,
        });
      }
      if (rowResponsiveMode == "sm") {
        setAttributes({
          smAlignH: value,
        });
      }
      if (rowResponsiveMode == "xs") {
        setAttributes({
          xsAlignH: value,
        });
      }
    };
    const updateVAlign = (value) => {
      if (rowResponsiveMode == "xl") {
        setAttributes({
          xlAlignV: value,
        });
      }
      if (rowResponsiveMode == "lg") {
        setAttributes({
          lgAlignV: value,
        });
      }
      if (rowResponsiveMode == "md") {
        setAttributes({
          mdAlignV: value,
        });
      }
      if (rowResponsiveMode == "sm") {
        setAttributes({
          smAlignV: value,
        });
      }
      if (rowResponsiveMode == "xs") {
        setAttributes({
          xsAlignV: value,
        });
      }
    };

    const resetHAlignment = (responsiveMode) => {
      if (responsiveMode == "xl") {
        setAttributes({
          xlAlignH: "",
        });
      }
      if (responsiveMode == "lg") {
        setAttributes({
          lgAlignH: "",
        });
      }
      if (responsiveMode == "md") {
        setAttributes({
          mdAlignH: "",
        });
      }
      if (responsiveMode == "sm") {
        setAttributes({
          smAlignH: "",
        });
      }
      if (responsiveMode == "xs") {
        setAttributes({
          xsAlignH: "",
        });
      }
    };

    const resetVAlignment = (responsiveMode) => {
      if (responsiveMode == "xl") {
        setAttributes({
          xlAlignV: "",
        });
      }
      if (responsiveMode == "lg") {
        setAttributes({
          lgAlignV: "",
        });
      }
      if (responsiveMode == "md") {
        setAttributes({
          mdAlignV: "",
        });
      }
      if (responsiveMode == "sm") {
        setAttributes({
          smAlignV: "",
        });
      }
      if (responsiveMode == "xs") {
        setAttributes({
          xsAlignV: "",
        });
      }
    };

    return (
      <Fragment>
        <InspectorControls>
          <PanelBody title={__("Settings", "smt-theme")} initialOpen={true}>
            <ToggleGroupControl
              label={__("Responsive Mode", "smt-theme")}
              className="block-togglegroup"
              value={rowResponsiveMode}
              isBlock
              onChange={(value) => {
                setrowResponsiveMode(value);
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
            {rowResponsiveMode && (
              <div className="row-control">
                {resMode.map((item, index) => {
                  let horizontalAlign = rowSettings[item]["alignH"];
                  let verticalAlign = rowSettings[item]["alignV"];
                  return (
                    <div className="row-control-wrap" id={`row-${index}`}>
                      {rowResponsiveMode == item ? (
                        <>
                          <div className="block--row__settings">
                            <SelectControl
                              label={__("Alignment - Horizontal", "smt-theme")}
                              options={[
                                {
                                  value: "",
                                  label: __("Not Set", "smt-theme"),
                                },
                                {
                                  value: "start",
                                  label: __("Start", "smt-theme"),
                                },
                                {
                                  value: "center",
                                  label: __("Center", "smt-theme"),
                                },
                                {
                                  value: "end",
                                  label: __("End", "smt-theme"),
                                },
                              ]}
                              value={horizontalAlign}
                              onChange={updateHAlign}></SelectControl>
                            <Button
                              onClick={() => resetHAlignment(rowResponsiveMode)}
                              label={__("Reset", "smt-theme")}
                              className="components-button components-range-control__reset is-secondary is-small">
                              {__("Reset", "smt-theme")}
                            </Button>
                          </div>
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
                              value={verticalAlign}
                              onChange={updateVAlign}></SelectControl>
                            <Button
                              onClick={() => resetVAlignment(rowResponsiveMode)}
                              label={__("Reset", "smt-theme")}
                              className="components-button components-range-control__reset is-secondary is-small">
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
            <label className="block--label">Column - Order</label>
            <div className="block--row__settings">
              {rowResponsiveMode == "xl" && (
                <>
                  <ToggleControl
                    label={__("Reverse Columns", "smt-theme")}
                    checked={xlReverseCol}
                    onChange={() =>
                      setAttributes({
                        xlReverseCol: !xlReverseCol,
                      })
                    }
                  />
                  <Button
                    onClick={() =>
                      setAttributes({
                        xlReverseCol: false,
                      })
                    }
                    label={__("Reset", "smt-theme")}
                    className="components-button components-range-control__reset is-secondary is-small">
                    {__("Reset", "smt-theme")}
                  </Button>
                </>
              )}
              {rowResponsiveMode == "lg" && (
                <>
                  <ToggleControl
                    label={__("Reverse Columns", "smt-theme")}
                    checked={lgReverseCol}
                    onChange={() =>
                      setAttributes({
                        lgReverseCol: !lgReverseCol,
                      })
                    }
                  />
                  <Button
                    onClick={() =>
                      setAttributes({
                        lgReverseCol: false,
                      })
                    }
                    label={__("Reset", "smt-theme")}
                    className="components-button components-range-control__reset is-secondary is-small">
                    {__("Reset", "smt-theme")}
                  </Button>
                </>
              )}
              {rowResponsiveMode == "md" && (
                <>
                  <ToggleControl
                    label={__("Reverse Columns", "smt-theme")}
                    checked={mdReverseCol}
                    onChange={() =>
                      setAttributes({
                        mdReverseCol: !mdReverseCol,
                      })
                    }
                  />
                  <Button
                    onClick={() =>
                      setAttributes({
                        mdReverseCol: false,
                      })
                    }
                    label={__("Reset", "smt-theme")}
                    className="components-button components-range-control__reset is-secondary is-small">
                    {__("Reset", "smt-theme")}
                  </Button>
                </>
              )}
              {rowResponsiveMode == "sm" && (
                <>
                  <ToggleControl
                    label={__("Reverse Columns", "smt-theme")}
                    checked={smReverseCol}
                    onChange={() =>
                      setAttributes({
                        smReverseCol: !smReverseCol,
                      })
                    }
                  />
                  <Button
                    onClick={() =>
                      setAttributes({
                        smReverseCol: false,
                      })
                    }
                    label={__("Reset", "smt-theme")}
                    className="components-button components-range-control__reset is-secondary is-small">
                    {__("Reset", "smt-theme")}
                  </Button>
                </>
              )}
              {rowResponsiveMode == "xs" && (
                <>
                  <ToggleControl
                    label={__("Reverse Columns", "smt-theme")}
                    checked={xsReverseCol}
                    onChange={() =>
                      setAttributes({
                        xsReverseCol: !xsReverseCol,
                      })
                    }
                  />
                  <Button
                    onClick={() =>
                      setAttributes({
                        xsReverseCol: false,
                      })
                    }
                    label={__("Reset", "smt-theme")}
                    className="components-button components-range-control__reset is-secondary is-small">
                    {__("Reset", "smt-theme")}
                  </Button>
                </>
              )}
            </div>
          </PanelBody>
          <PanelBody title={__("Additional", "smt-theme")} initialOpen={true}>
            <label className="block--label">Column - Height</label>
            <ToggleControl
              label={__("Same Height", "smt-theme")}
              checked={colheight}
              onChange={() =>
                setAttributes({
                  colheight: !colheight,
                })
              }
            />
            <label className="block--label">Content - Width</label>
            <ToggleControl
              label={__("Limited Width", "smt-theme")}
              checked={contentwidth}
              onChange={() =>
                setAttributes({
                  contentwidth: !contentwidth,
                })
              }
            />
            <ToggleGroupControl
              label={__("Column Gap", "smt-theme")}
              className="block-togglegroup"
              value={colgap}
              isBlock
              onChange={(value) => {
                setAttributes({
                  colgap: Number(value),
                });
              }}>
              <ToggleGroupControlOption
                value="0"
                label={__("0", "smt-theme")}
                showTooltip={true}
                aria-label={__("Small", "smt-theme")}
              />
              <ToggleGroupControlOption
                value="1"
                label={__("1", "smt-theme")}
                showTooltip={true}
                aria-label={__("Medium", "smt-theme")}
              />
              <ToggleGroupControlOption
                value="2"
                label={__("2", "smt-theme")}
                showTooltip={true}
                aria-label={__("Large", "smt-theme")}
              />
              <ToggleGroupControlOption
                value="3"
                label={__("3", "smt-theme")}
                showTooltip={true}
                aria-label={__("Extra Large", "smt-theme")}
              />
            </ToggleGroupControl>
          </PanelBody>
          <PanelBody title={__("Advanced", "smt-theme")} initialOpen={true}>
            <TextControl
              label={__("Anchor", "smt-theme")}
              placeholder={__("Specify ID…", "smt-theme")}
              type="text"
              value={anchor}
              onChange={(value) => setAttributes({ anchor: value })}
            />
          </PanelBody>
        </InspectorControls>
      </Fragment>
    );
  }
}
