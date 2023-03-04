/**
 * External Dependencies
 */
import classnames from "classnames";

/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import {
  InspectorControls,
  PanelColorSettings,
  InnerBlocks,
} from "@wordpress/block-editor";
import {
  PanelBody,
  __experimentalToggleGroupControl as ToggleGroupControl,
  __experimentalToggleGroupControlOption as ToggleGroupControlOption,
  ToggleControl,
  TextControl,
} from "@wordpress/components";
import { Component } from "@wordpress/element";

/***
 * Interal dependencies
 */
import { pattern_colors } from "../../utils/block-helpers";
import smtLogo from "../../assets/images/smtLogo.svg";
import smtLogoDark from "../../assets/images/SMTLogo-dark.svg";

export default class Edit extends Component {
  constructor(props) {
    super(...arguments);
  }

  render() {
    const {
      attributes: {
        backgroundColor,
        backgroundColorClass,
        topPadding,
        bottomPadding,
        shapeTop,
        shapeBottom,
        shapePosition,
        LogoColor,
        showLogo,
        anchor,
      },
      setAttributes,
    } = this.props;

    const SetColorClass = (value) => {
      pattern_colors.filter(function (item) {
        if (item.color == value || item.gradient == value) {
          setAttributes({
            backgroundColorClass: item.slug,
          });
        }
      });
    };

    const logoclass = showLogo ? `section--logo` : "";

    return (
      <>
        <InspectorControls>
          <PanelBody
            title={__("Logo Settings", "smt-theme")}
            initialOpen={false}>
            <ToggleControl
              label={__("Show/Hide Logo", "smt-theme")}
              checked={showLogo}
              onChange={() =>
                setAttributes({
                  showLogo: !showLogo,
                })
              }
            />
            <ToggleGroupControl
              label={__("Logo Color", "smt-theme")}
              className="block-togglegroup"
              value={LogoColor}
              isBlock
              onChange={(value) => {
                setAttributes({
                  LogoColor: value,
                });
              }}>
              <ToggleGroupControlOption
                value="light"
                label={__("Light", "smt-theme")}
                showTooltip={true}
                aria-label={__("Light", "smt-theme")}
              />
              <ToggleGroupControlOption
                value="dark"
                label="Dark"
                showTooltip={true}
                aria-label="Dark"
              />
            </ToggleGroupControl>
          </PanelBody>
          <PanelBody title={__("Settings", "smt-theme")} initialOpen={false}>
            <ToggleControl
              label={__("Shape Top", "smt-theme")}
              checked={shapeTop}
              onChange={() =>
                setAttributes({
                  shapeTop: !shapeTop,
                })
              }
            />
            <ToggleControl
              label={__("Shape Bottom", "smt-theme")}
              checked={shapeBottom}
              onChange={() =>
                setAttributes({
                  shapeBottom: !shapeBottom,
                })
              }
            />
            <ToggleGroupControl
              label={__("Shape Position", "smt-theme")}
              className="block-togglegroup"
              value={shapePosition}
              isBlock
              onChange={(value) => {
                setAttributes({
                  shapePosition: value,
                });
              }}>
              <ToggleGroupControlOption
                value="leftToright"
                label={__("Left to Right", "smt-theme")}
                showTooltip={true}
                aria-label={__("Left to Right", "smt-theme")}
              />
              <ToggleGroupControlOption
                value="rightToleft"
                label={__("Right to Left", "smt-theme")}
                showTooltip={true}
                aria-label={__("Right to Left", "smt-theme")}
              />
            </ToggleGroupControl>
            <PanelColorSettings
              title={__("Background color", "smt-theme")}
              className={"block-color-setting"}
              colorSettings={[
                {
                  colors: pattern_colors,
                  value: backgroundColor,
                  onChange: (value) => {
                    typeof value == "undefined"
                      ? setAttributes({
                          backgroundColorClass: "",
                        })
                      : SetColorClass(value);
                    setAttributes({
                      backgroundColor: value,
                    });
                  },
                  label: __("Background Color", "smt-theme"),
                },
              ]}
            />
            <ToggleGroupControl
              label={__("Top Padding", "smt-theme")}
              className="block-togglegroup"
              value={topPadding}
              isBlock
              onChange={(value) => {
                setAttributes({
                  topPadding: Number(value),
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
                aria-label={__("60px", "smt-theme")}
              />
              <ToggleGroupControlOption
                value="2"
                label={__("2", "smt-theme")}
                showTooltip={true}
                aria-label={__("90px", "smt-theme")}
              />
              <ToggleGroupControlOption
                value="3"
                label={__("3", "smt-theme")}
                showTooltip={true}
                aria-label={__("120px", "smt-theme")}
              />
              <ToggleGroupControlOption
                value="4"
                label={__("4", "smt-theme")}
                showTooltip={true}
                aria-label={__("240px", "smt-theme")}
              />
            </ToggleGroupControl>
            <ToggleGroupControl
              label={__("Bottom Padding", "smt-theme")}
              className="block-togglegroup"
              value={bottomPadding}
              isBlock
              onChange={(value) => {
                setAttributes({
                  bottomPadding: Number(value),
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
                label="1"
                showTooltip={true}
                aria-label="60px"
              />
              <ToggleGroupControlOption
                value="2"
                label={__("2", "smt-theme")}
                showTooltip={true}
                aria-label={__("90px", "smt-theme")}
              />
              <ToggleGroupControlOption
                value="3"
                label={__("3", "smt-theme")}
                showTooltip={true}
                aria-label={__("120", "smt-theme")}
              />
              <ToggleGroupControlOption
                value="4"
                label={__("4", "smt-theme")}
                showTooltip={true}
                aria-label={__("240px", "smt-theme")}
              />
            </ToggleGroupControl>
          </PanelBody>
          <PanelBody
            title={__("Additional Settings", "smt-theme")}
            initialOpen={false}>
            <TextControl
              label={__("Anchor", "smt-theme")}
              placeholder="Specify link ID…"
              type="text"
              value={anchor}
              onChange={(value) => setAttributes({ anchor: value })}
            />
          </PanelBody>
        </InspectorControls>

        <section
          id={anchor ? anchor : null}
          className={classnames(
            `section section--pattern`,
            `section--pd-top-${topPadding}`,
            `section--pd-bottom-${bottomPadding}`,
            "undefined" !== backgroundColorClass
              ? `section--color-${backgroundColorClass}`
              : null,
            shapeTop && !shapeBottom === true ? `section--shape-top` : null,
            shapeBottom && !shapeTop === true ? `section--shape-bottom` : null,
            shapeBottom && shapeTop === true ? `section--shape-both` : null,
            undefined !== shapePosition && shapePosition == `leftToright`
              ? `section--shape-left`
              : null,
            undefined !== shapePosition && shapePosition == `rightToleft`
              ? `section--shape-right`
              : null,
            `${logoclass}`
          )}>
          <div className="section__background"></div>
          {showLogo == true && (
            <a href="/" className={`section__logo section__logo--${LogoColor}`}>
              {LogoColor == "light" ? (
                <img
                  src={smtLogo}
                  alt="SMT - School of Management and Technology"
                />
              ) : (
                <img
                  src={smtLogoDark}
                  alt="SMT - School of Management and Technology"
                />
              )}
            </a>
          )}
          <div className="section__content">
            <InnerBlocks allowedBlocks={["smt-theme/row"]} />
          </div>
        </section>
      </>
    );
  }
}
