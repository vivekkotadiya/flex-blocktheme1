/**
 * External dependencies
 */
import { map } from "lodash";
import classnames from "classnames";

/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import {
  InspectorControls,
  RichText,
  PanelColorSettings,
} from "@wordpress/block-editor";
import {
  PanelBody,
  TextControl,
  Button,
  Tooltip,
  __experimentalToggleGroupControl as ToggleGroupControl,
  __experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from "@wordpress/components";
import { Component, Platform } from "@wordpress/element";

/***
 * Interal dependencies
 */
import { theme_colors } from "../../utils/block-helpers";
import Icons from "../icon/icon.json";

export default class Edit extends Component {
  constructor(props) {
    super(...arguments);
    this.toggle = this.toggle.bind(this);

    this.state = {
      icons: Icons,
      isOpen: false,
      keyword: "",
    };
  }

  search(keyword) {
    let filtered = [];

    map(Icons, (icon) => {
      if (icon.toLowerCase().search(keyword.toLowerCase()) !== -1) {
        filtered.push(icon);
      }
    });

    this.setState({ keyword, icons: filtered });
  }

  toggle() {
    this.setState((state) => ({
      isOpen: !state.isOpen,
    }));

    this.setState({ keyword: "", icons: Icons });

    const selection = window.getSelection();
    anchorRange = selection.rangeCount > 0 ? selection.getRangeAt(0) : null;
  }

  render() {
    const {
      attributes: {
        cardHIconeadColor,
        cardIconHeadColorClass,
        cardIconHead,
        cardIconHeadLevel,
        cardIconTextColor,
        cardIconTextColorClass,
        cardIconText,
        cardIconTextTag,
        cardiconColor,
        cardiconColorClass,
        cardiconClass,
        cardiconBorderColor,
        cardiconBorderColorClass,
        anchor,
      },
      setAttributes,
    } = this.props;

    const SetColorClass = (value, type) => {
      if (value !== undefined) {
        theme_colors.filter(function (item) {
          if (item.color == value) {
            if (type == "head") {
              setAttributes({
                cardIconHeadColorClass: item.slug,
              });
            } else if (type == "text") {
              setAttributes({
                cardIconTextColorClass: item.slug,
              });
            } else if (type == "icon") {
              setAttributes({
                cardiconColorClass: item.slug,
              });
            } else if (type == "border") {
              setAttributes({
                cardiconBorderColorClass: item.slug,
              });
            }
          }
        });
      } else {
        if (type == "head") {
          setAttributes({
            cardIconHeadColorClass: "",
          });
        } else if (type == "text") {
          setAttributes({
            cardIconTextColorClass: "",
          });
        } else if (type == "icon") {
          setAttributes({
            cardiconColorClass: "",
          });
        } else if (type == "border") {
          setAttributes({
            cardiconBorderColorClass: "",
          });
        }
      }
    };

    const { icons, keyword } = this.state;

    const headTag =
      cardIconHeadLevel == "span" ? "span" : "h" + cardIconHeadLevel;
    const textTag = cardIconTextTag;

    return (
      <>
        <InspectorControls>
          <PanelBody title={__("Icon", "smt-theme")} initialOpen={false}>
            <TextControl
              value={keyword}
              placeholder={__("Search", "smt-theme")}
              onChange={(newKeyword) => {
                this.search(newKeyword);
              }}
            />
            <div className="smt-theme-icon-panel">
              {icons.length > 0 ? (
                <ul className="smt-theme-icon-list">
                  {cardiconClass && (
                    <li data-key={cardiconClass} className="selectedicon">
                      <Tooltip text={cardiconClass}>
                        <Button
                          onClick={() => {
                            setAttributes({
                              cardiconClass: cardiconClass,
                            });
                          }}>
                          <i className={cardiconClass} aria-hidden="true"></i>
                        </Button>
                      </Tooltip>
                    </li>
                  )}

                  {map(icons, (icon) => {
                    return (
                      <li data-key={icon}>
                        <Tooltip text={icon}>
                          <Button
                            onClick={() => {
                              setAttributes({
                                cardiconClass: icon,
                              });
                            }}>
                            <i className={icon} aria-hidden="true"></i>
                          </Button>
                        </Tooltip>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <p>{__("No characters found.", "block-options")}</p>
              )}
            </div>
            <PanelColorSettings
              title={__("Icon", "smt-theme")}
              className={"block-color-setting block-color-top-0"}
              colorSettings={[
                {
                  colors: theme_colors,
                  value: cardiconColor,
                  onChange: (value) => {
                    typeof value == "undefined"
                      ? setAttributes({ cardiconColorClass: "" })
                      : SetColorClass(value, "icon");
                    typeof value == "undefined"
                      ? setAttributes({
                          cardiconColor: "#607886",
                        })
                      : setAttributes({ cardiconColor: value });
                  },
                  label: __("Color", "smt-theme"),
                },
              ]}
            />
            <PanelColorSettings
              title={__("Border", "smt-theme")}
              className={"block-color-setting block-color-top-0"}
              colorSettings={[
                {
                  colors: theme_colors,
                  value: cardiconBorderColor,
                  onChange: (value) => {
                    typeof value == "undefined"
                      ? setAttributes({ cardiconBorderColorClass: "" })
                      : SetColorClass(value, "border");
                    typeof value == "undefined"
                      ? setAttributes({
                          cardiconBorderColor: "#BC1717",
                        })
                      : setAttributes({ cardiconBorderColor: value });
                  },
                  label: __("Color", "smt-theme"),
                },
              ]}
            />
          </PanelBody>
          <PanelBody title={__("Headline", "smt-theme")} initialOpen={false}>
            <ToggleGroupControl
              label={__("Tag", "smt-theme")}
              value={cardIconHeadLevel}
              onChange={(value) => {
                setAttributes({
                  cardIconHeadLevel: value,
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
              title={__("Headline Color", "smt-theme")}
              className={"block-color-setting block-color-top-0"}
              colorSettings={[
                {
                  colors: theme_colors,
                  value: cardHIconeadColor,
                  onChange: (value) => {
                    typeof value == "undefined"
                      ? setAttributes({ cardIconHeadColorClass: "" })
                      : SetColorClass(value, "head");
                    typeof value == "undefined"
                      ? setAttributes({
                          cardHIconeadColor: "#39515E",
                        })
                      : setAttributes({ cardHIconeadColor: value });
                  },
                  label: __("Headline Color", "smt-theme"),
                },
              ]}
            />
          </PanelBody>
          <PanelBody title={__("Text", "smt-theme")} initialOpen={false}>
            <ToggleGroupControl
              label={__("Tag", "smt-theme")}
              className="block-togglegroup block-toggle-full"
              value={cardIconTextTag}
              onChange={(value) => {
                setAttributes({
                  cardIconTextTag: value,
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
            <PanelColorSettings
              title={__("Text Color", "smt-theme")}
              className={"block-color-setting block-color-top-0"}
              colorSettings={[
                {
                  colors: theme_colors,
                  value: cardIconTextColor,
                  onChange: (value) => {
                    typeof value == "undefined"
                      ? setAttributes({ cardIconTextColorClass: "" })
                      : SetColorClass(value, "text");
                    typeof value == "undefined"
                      ? setAttributes({
                          cardIconTextColor: "#000000",
                        })
                      : setAttributes({ cardIconTextColor: value });
                  },
                  label: __("Text Color", "smt-theme"),
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
        <div
          className={classnames(
            "card-icon__visual",
            "undefined" !== cardiconBorderColorClass
              ? `card-icon__visual--color-${cardiconBorderColorClass}`
              : null
          )}>
          <i
            className={classnames(
              cardiconClass,
              "undefined" !== cardiconColorClass
                ? `icon--color-${cardiconColorClass}`
                : null
            )}></i>
        </div>
        <RichText
          identifier="cardIconHead"
          tagName={headTag}
          className={classnames(
            "card-icon__headline headline headline--style-four headline--align-xs-center",
            "undefined" !== cardIconHeadColorClass
              ? `headline--color-${cardIconHeadColorClass}`
              : null
          )}
          value={cardIconHead}
          onChange={(value) => {
            setAttributes({ cardIconHead: value });
          }}
          withoutInteractiveFormatting={true}
          aria-label={__("Card Icon Heading text", "smt-theme")}
          placeholder={__("Lorem ipsum dolor", "smt-theme")}
          {...(Platform.isNative && { deleteEnter: true })} // setup RichText on native mobile to delete the "Enter" key as it's handled by the JS/RN side
          allowedFormats={[""]}
        />
        <RichText
          identifier="cardIconText"
          tagName={textTag}
          className={classnames(
            "card-icon__text text text--style-two text--align-xs-center",
            "undefined" !== cardIconTextColorClass
              ? `text--color-${cardIconTextColorClass}`
              : null
          )}
          value={cardIconText}
          onChange={(value) => {
            setAttributes({ cardIconText: value });
          }}
          withoutInteractiveFormatting={true}
          aria-label={__("Card Icon text", "smt-theme")}
          placeholder={__("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.", "smt-theme")}
          {...(Platform.isNative && { deleteEnter: true })} // setup RichText on native mobile to delete the "Enter" key as it's handled by the JS/RN side
          allowedFormats={[""]}
        />
      </>
    );
  }
}
