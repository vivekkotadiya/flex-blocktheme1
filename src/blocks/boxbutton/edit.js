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
  __experimentalToggleGroupControl as ToggleGroupControl,
  __experimentalToggleGroupControlOption as ToggleGroupControlOption,
  ToggleControl,
} from "@wordpress/components";
import {
  InspectorControls,
  useBlockProps,
  RichText,
  __experimentalLinkControl as LinkControl,
  PanelColorSettings,
} from "@wordpress/block-editor";
import { Platform, useState, useRef } from "@wordpress/element";

/***
 * Interal dependencies
 */
import { theme_colors } from "../../utils/block-helpers";

export default function edit({ setAttributes, attributes }) {
  const {
    boxColor,
    colorClass,
    level,
    tag,
    boxHeadline,
    boxParagraph,
    button1url,
    button1linkTarget,
    button1Text,
    button2url,
    button2linkTarget,
    button2Text,
  } = attributes;

  const headlineTag = level == "span" ? "span" : "h" + level;
  const paragraphTag = tag;

  const SetColorClass = (value) => {
    if (value !== undefined) {
      theme_colors.filter(function (item) {
        if (item.color == value) {
          setAttributes({
            colorClass: item.slug,
          });
        }
      });
    } else {
      setAttributes({
        colorClass: "",
      });
    }
  };

  const boxcolorClass = colorClass ? `box-button--color-${colorClass}` : "";

  const blockClass = classnames(
    `box-button`,
    "" !== boxcolorClass ? `${boxcolorClass}` : null
  );

  const blockProps = useBlockProps({ className: blockClass });

  const richTextRef = useRef();
  const richTextRef1 = useRef();

  const [isEditingURL, setIsEditingURL] = useState(false);
  const [isEditingURL1, setIsEditingURL1] = useState(false);
  const opensInNewTab1 = button1linkTarget === "_blank";
  const opensInNewTab2 = button2linkTarget === "_blank";
  const relAttributes1 = [];
  const relAttributes2 = [];

  function unlink(btn) {
    if (btn == "btn1") {
      setAttributes({
        button1url: undefined,
        button1linkTarget: undefined,
      });
      setIsEditingURL(false);
    }
    if (btn == "btn2") {
      setAttributes({
        button2url: undefined,
        button2linkTarget: undefined,
      });
      setIsEditingURL1(false);
    }
  }

  function onToggleOpenInNewTab(value, btn) {
    if (btn == "btn1") {
      const newLinkTarget = value ? "_blank" : undefined;
      if (newLinkTarget) {
        relAttributes1.push("noopener");
      }
      setAttributes({
        button1linkTarget: newLinkTarget,
      });
    } else {
      if (btn == "btn2") {
        const newLinkTarget1 = value ? "_blank" : undefined;
        if (newLinkTarget1) {
          relAttributes2.push("noopener");
        }
        setAttributes({
          button2linkTarget: newLinkTarget1,
        });
      }
    }
  }
  const relation1 =
    relAttributes1 && relAttributes1.length > 0
      ? relAttributes1.join(" ")
      : null;
  const relation2 =
    relAttributes2 && relAttributes2.length > 0
      ? relAttributes2.join(" ")
      : null;

  return (
    <div {...blockProps}>
      <InspectorControls>
        <PanelBody title={__("Style", "smt-theme")} initialOpen={false}>
          <PanelColorSettings
            title={__("Color", "smt-theme")}
            className={"block-color-setting block-color-top-0"}
            colorSettings={[
              {
                colors: theme_colors,
                value: boxColor,
                onChange: (value) => {
                  typeof value == "undefined"
                    ? setAttributes({ colorClass: "" })
                    : SetColorClass(value);
                  typeof value == "undefined"
                    ? setAttributes({
                        boxColor: "#39515E",
                      })
                    : setAttributes({ boxColor: value });
                },
                label: __("Color", "smt-theme"),
              },
            ]}
          />
          <span className="block-seprator"></span>
        </PanelBody>
        <PanelBody title={__("Settings")} initialOpen={false}>
          <ToggleGroupControl
            label={__("Headline Tag", "smt-theme")}
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
          <ToggleGroupControl
            label={__("Paragraph Tag", "smt-theme")}
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
        <PanelBody title={__("Button 1")} initialOpen={false}>
          <div className="gb--link-control">
            <LinkControl
              className="wp-block-navigation-link__inline-link-input"
              value={{
                url: button1url,
                opensInNewTab: opensInNewTab1,
              }}
              onChange={(value) => {
                if (opensInNewTab1 !== value.opensInNewTab) {
                  onToggleOpenInNewTab(value.opensInNewTab, "btn1");
                }
                setAttributes({
                  button1url: value.url,
                  opensInNewTab1: value.opensInNewTab,
                });
              }}
              onRemove={() => {
                unlink("btn1");
                richTextRef.current?.focus();
              }}
              forceIsEditingLink={isEditingURL}
            />
          </div>
        </PanelBody>
        <PanelBody title={__("Button 2")} initialOpen={false}>
          <div className="gb--link-control">
            <LinkControl
              className="wp-block-navigation-link__inline-link-input"
              value={{
                url: button2url,
                opensInNewTab: opensInNewTab2,
              }}
              onChange={(value) => {
                if (opensInNewTab2 !== value.opensInNewTab) {
                  onToggleOpenInNewTab(value.opensInNewTab, "btn2");
                }
                setAttributes({
                  button2url: value.url,
                  opensInNewTab2: value.opensInNewTab,
                });
              }}
              onRemove={() => {
                unlink("btn2");
                richTextRef1.current?.focus();
              }}
              forceIsEditingLink={isEditingURL1}
            />
          </div>
        </PanelBody>
      </InspectorControls>

      <RichText
        identifier="boxHeadline"
        tagName={headlineTag}
        className="box-button__headline headline headline--style-four"
        value={boxHeadline}
        onChange={(value) => setAttributes({ boxHeadline: value })}
        withoutInteractiveFormatting={true}
        aria-label={__("Heading text", "smt-theme")}
        placeholder={__("Lorem ipsum dolor", "smt-theme")}
        {...(Platform.isNative && { deleteEnter: true })} // setup RichText on native mobile to delete the "Enter" key as it's handled by the JS/RN side
        allowedFormats={[""]}
      />
      <RichText
        identifier="boxParagraph"
        tagName={paragraphTag}
        className="box-button__text text text--style-two"
        value={boxParagraph}
        onChange={(value) => setAttributes({ boxParagraph: value })}
        aria-label={__("Paragraph text", "smt-theme")}
        placeholder={__("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.", "smt-theme")}
        {...(Platform.isNative && { deleteEnter: true })} // setup RichText on native mobile to delete the "Enter" key as it's handled by the JS/RN side
        allowedFormats={[""]}
      />

      {undefined !== button1url && (
        <a
          onClick={(e) => e.preventDefault()}
          href={!!button1url ? button1url : null}
          className="box-button__one button--cta button--style-three button--width-inline"
          target={!!button1linkTarget ? "_blank" : null}
          rel={relation1}>
          <RichText
            identifier="button1Text"
            tagName="span"
            className="button--text"
            value={button1Text}
            onChange={(value) => setAttributes({ button1Text: value })}
            aria-label={__("Button text", "smt-theme")}
            placeholder={__("Lorem ipsum", "smt-theme")}
            {...(Platform.isNative && { deleteEnter: true })} // setup RichText on native mobile to delete the "Enter" key as it's handled by the JS/RN side
            allowedFormats={[""]}
          />
        </a>
      )}
      {undefined !== button2url && (
        <a
          onClick={(e) => e.preventDefault()}
          href={!!button2url ? button2url : null}
          className="box-button__two button--cta button--style-three button--width-inline"
          target={!!button2linkTarget ? "_blank" : null}
          rel={relation2}>
          <RichText
            identifier="button2Text"
            tagName="span"
            className="button--text"
            value={button2Text}
            onChange={(value) => setAttributes({ button2Text: value })}
            aria-label={__("Button text", "smt-theme")}
            placeholder={__("Lorem ipsum", "smt-theme")}
            {...(Platform.isNative && { deleteEnter: true })} // setup RichText on native mobile to delete the "Enter" key as it's handled by the JS/RN side
            allowedFormats={[""]}
          />
        </a>
      )}
    </div>
  );
}
