/**
 * External dependencies
 */
import { map } from "lodash";

/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import {
  InspectorControls,
  PanelColorSettings,
  __experimentalLinkControl as LinkControl,
} from "@wordpress/block-editor";
import { PanelBody, TextControl, Button, Tooltip } from "@wordpress/components";
import { Component, createRef } from "@wordpress/element";

/***
 * Interal dependencies
 */
import { theme_colors } from "../../utils/block-helpers";
import Icons from "./icon.json";

/**
 * Module constants
 */
const NEW_TAB_REL = "noreferrer noopener";

export default class Edit extends Component {
  constructor(props) {
    super(...arguments);
    this.toggle = this.toggle.bind(this);

    this.state = {
      icons: Icons,
      isOpen: false,
      keyword: "",
      isEditingURL: false,
    };
    this.myRef = createRef();
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
    //onChange( toggleFormat( value, { type: name } ) );
  }

  customResizeIcons() {
    var elements = document.getElementsByClassName("icon__visual");
    if (elements.length < 0) {
      return;
    }
    var _len = elements.length;
    for (var _i = 0; _i < _len; _i++) {
      var el = elements[_i];
      var elWidth = el.offsetWidth;
      var iconSize = elWidth * 0.9;
      var iconSizeRounded = Math.round(iconSize / 2) * 2;
      el.style.fontSize = iconSizeRounded + "px";
    }
  }

  unlink() {
    this.props.setAttributes({
      url: undefined,
      linkTarget: undefined,
    });
    this.setState({isEditingURL: false});
  }

  onToggleOpenInNewTab(value) {
    const newLinkTarget = value ? "_blank" : undefined;
    if (newLinkTarget) {
      relAttributes.push("noopener");
    }
    this.props.setAttributes({
      linkTarget: newLinkTarget,
    });
  }

  render() {
    const {
      attributes: { iconColor, iconColorClass, iconClass, url, linkTarget, anchor },
      setAttributes,
    } = this.props;

    this.customResizeIcons();
    window.addEventListener("resize", this.customResizeIcons);

    const links = document.querySelectorAll(".wp-block a");

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

    const SetIconColorClass = (value) => {
      theme_colors.filter(function (item) {
        if (item.color == value) {
          setAttributes({
            iconColorClass: item.slug,
          });
          setAttributes({
            iconColor: item.color,
          });
        }
      });
    };

    const iconcolorclass = iconColorClass
      ? ` icon--color-${iconColorClass}`
      : "";

    const iconClasses = `${iconcolorclass}`;

    const { icons, keyword } = this.state;

    const richTextRef = this.myRef;

    const opensInNewTab = linkTarget === "_blank";
    const relAttributes = [];

    const relation =
      relAttributes && relAttributes.length > 0
        ? relAttributes.join(" ")
        : null;

    return (
      <>
        <InspectorControls>
          <PanelBody title={__("Icon", "smt-theme")} initialOpen={true}>
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
                  {iconClass && (
                    <li data-key={iconClass} className="selectedicon">
                      <Tooltip text={iconClass}>
                        <Button
                          onClick={() => {
                            setAttributes({
                              iconClass: iconClass,
                            });
                          }}>
                          <i className={iconClass} aria-hidden="true"></i>
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
                                iconClass: icon,
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
          </PanelBody>
          <PanelBody title={__("Style", "smt-theme")} initialOpen={true}>
            <PanelColorSettings
              title={__("Icon color", "smt-theme")}
              className={"block-color-setting block-color-top-0"}
              colorSettings={[
                {
                  colors: theme_colors,
                  value: iconColor,
                  onChange: (value) => {
                    SetIconColorClass(value);
                  },
                  label: __("Icon Color", "smt-theme"),
                },
              ]}
            />
          </PanelBody>
          <PanelBody
            title={__("Link Settings", "smt-theme")}
            initialOpen={true}>
            <div className="gb--link-control">
              <LinkControl
                className="wp-block-navigation-link__inline-link-input"
                value={{
                  url: url,
                  opensInNewTab: opensInNewTab,
                }}
                onChange={(value) => {
                  if (opensInNewTab !== value.opensInNewTab) {
                    this.onToggleOpenInNewTab(value.opensInNewTab);
                  }
                  setAttributes({
                    url: value.url,
                    opensInNewTab: value.opensInNewTab,
                  });
                }}
                onRemove={() => {
                  this.unlink();
                  richTextRef.current?.focus();
                }}
                forceIsEditingLink={this.state.isEditingURL}
              />
            </div>
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
        {undefined == url ? (
          <div id={anchor ? `${anchor}` : null} class={`icon ${iconClasses}`}>
            <div class="icon__helper"></div>
            <i class={`icon__visual ${iconClass}`}></i>
          </div>
        ) : (
          <a
            onClick={(e) => e.preventDefault()}
            href={url}
            target={linkTarget}
            rel={relation}
            className={`icon icon--link ${iconClasses}`}
            id={anchor ? `${anchor}` : null}>
            <div class="icon__helper"></div>
            <i class={`icon__visual ${iconClass}`}></i>
          </a>
        )}
      </>
    );
  }
}
