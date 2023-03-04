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
    url,
    linkTarget,
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

  const boxcolorClass = colorClass ? `box--color-${colorClass}` : "";

  const blockClass = classnames(
    `box`,
    "" !== boxcolorClass ? `${boxcolorClass}` : null
  );

  const blockProps = useBlockProps({ className: "" });

  const ref = useRef();
  const richTextRef = useRef();

  const [isEditingURL, setIsEditingURL] = useState(false);
  const isURLSet = !!url;
  const opensInNewTab = linkTarget === "_blank";
  const relAttributes = [];

  function unlink() {
    setAttributes({
      url: undefined,
      linkTarget: undefined,
    });
    setIsEditingURL(false);
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
  const relation =
    relAttributes && relAttributes.length > 0 ? relAttributes.join(" ") : null;
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
          <label>Box Link Setting</label>
          <div className="gb--link-control">
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
          </div>
        </PanelBody>
      </InspectorControls>
      
      {undefined !== url ? (
        <a
          onClick={(e) => e.preventDefault()}
          href={!!url ? url : null}
          className={blockClass}
          target={!!linkTarget ? "_blank" : null}
          rel={relation}>

            <RichText
              identifier="boxHeadline"
              tagName={headlineTag}
              className="box__headline headline headline--style-four"
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
              className="box__text text text--style-two"
              value={boxParagraph}
              onChange={(value) => setAttributes({ boxParagraph: value })}
              aria-label={__("Paragraph text", "smt-theme")}
              placeholder={__("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.", "smt-theme")}
              {...(Platform.isNative && { deleteEnter: true })} // setup RichText on native mobile to delete the "Enter" key as it's handled by the JS/RN side
              allowedFormats={[""]}
            />
            <div className="box__visual"></div>
            
          </a>
      ) : (
        <div className={blockClass}>
          <RichText
            identifier="boxHeadline"
            tagName={headlineTag}
            className="box__headline headline headline--style-four"
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
            className="box__text text text--style-two"
            value={boxParagraph}
            onChange={(value) => setAttributes({ boxParagraph: value })}
            aria-label={__("Paragraph text", "smt-theme")}
            placeholder={__("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.", "smt-theme")}
            {...(Platform.isNative && { deleteEnter: true })} // setup RichText on native mobile to delete the "Enter" key as it's handled by the JS/RN side
            allowedFormats={[""]}
          />
        </div>
      )}
    </div>
  );
}
