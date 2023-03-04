/**
 * External dependencies
 */
import classnames from "classnames";

/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import {
  InspectorControls,
  RichText,
  PanelColorSettings,
} from "@wordpress/block-editor";
import { PanelBody, TextControl, RangeControl } from "@wordpress/components";
import { Platform } from "@wordpress/element";

/***
 * Interal dependencies
 */
import { theme_colors } from "../../utils/block-helpers";

export default function edit({ attributes, setAttributes }) {
  const {
    counterColor,
    counterColorClass,
    counterCornorColor,
    counterCornorColorClass,
    counterMain,
    counterSubText,
    number,
    numberType,
    anchor,
  } = attributes;

  const SetColorClass = (value, type) => {
    if (value !== undefined) {
      theme_colors.filter(function (item) {
        if (item.color == value) {
          if (type == "text") {
            setAttributes({
              counterColorClass: item.slug,
            });
          } else if (type == "cornor") {
            setAttributes({
              counterCornorColorClass: item.slug,
            });
          }
        }
      });
    } else {
      if (type == "text") {
        setAttributes({
          counterColorClass: "",
        });
      } else if (type == "cornor") {
        setAttributes({
          counterCornorColorClass: "",
        });
      }
    }
  };
  const blockClass = classnames(
    `counter`,
    "" !== counterCornorColorClass
      ? `counter--corner-color-${counterCornorColorClass}`
      : null,
    "" !== counterColorClass ? `counter--text-color-${counterColorClass}` : null
  );

  return (
    <div {...useBlockProps()}>
      <InspectorControls>
        <PanelBody title={__("Style", "smt-theme")} initialOpen={false}>
          <PanelColorSettings
            title={__("Text Color", "smt-theme")}
            className={"block-color-setting block-color-top-0"}
            colorSettings={[
              {
                colors: theme_colors,
                value: counterColor,
                onChange: (value) => {
                  typeof value == "undefined"
                    ? setAttributes({ counterColorClass: "" })
                    : SetColorClass(value, "text");
                  typeof value == "undefined"
                    ? setAttributes({
                        counterColor: "#39515E",
                      })
                    : setAttributes({ counterColor: value });
                },
                label: __("Text Color", "smt-theme"),
              },
            ]}
          />
          <PanelColorSettings
            title={__("Corner Color", "smt-theme")}
            className={"block-color-setting block-color-top-0"}
            colorSettings={[
              {
                colors: theme_colors,
                value: counterCornorColor,
                onChange: (value) => {
                  typeof value == "undefined"
                    ? setAttributes({ counterCornorColorClass: "" })
                    : SetColorClass(value, "cornor");
                  typeof value == "undefined"
                    ? setAttributes({
                        counterCornorColor: "#B21115",
                      })
                    : setAttributes({ counterCornorColor: value });
                },
                label: __("Corner Color", "smt-theme"),
              },
            ]}
          />
        </PanelBody>
        <PanelBody title={__("Value", "smt-theme")} initialOpen={false}>
          <RangeControl
            label={__("Number", "gbblocks")}
            value={number}
            onChange={(value) => setAttributes({ number: value })}
            min={0}
            max={100000}
          />
          <TextControl
            label={__("Type", "smt-theme")}
            placeholder={__("%,+..", "smt-theme")}
            type="text"
            value={numberType}
            onChange={(value) => setAttributes({ numberType: value })}
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
      <div className={blockClass}>
        <h5 className="counter__number" data-number={number}>
          <span className="counter__number-value">{number}</span>
          {numberType}
        </h5>
        <p className="counter__text">
          <RichText
            identifier="counterMain"
            tagName="span"
            className="counter__text-main"
            value={counterMain}
            onChange={(value) => {
              setAttributes({ counterMain: value });
            }}
            withoutInteractiveFormatting={true}
            aria-label={__("Counter Main Text", "smt-theme")}
            placeholder={__("Lorem ipsum dolor", "smt-theme")}
            {...(Platform.isNative && { deleteEnter: true })} // setup RichText on native mobile to delete the "Enter" key as it's handled by the JS/RN side
            allowedFormats={[""]}
          />
          <RichText
            identifier="cardIconText"
            tagName="span"
            className="counter__text-sub"
            value={counterSubText}
            onChange={(value) => {
              setAttributes({ counterSubText: value });
            }}
            withoutInteractiveFormatting={true}
            aria-label={__("Counter Sub Text", "smt-theme")}
            placeholder={__("Lorem ipsum dolor sit amet", "smt-theme")}
            {...(Platform.isNative && { deleteEnter: true })} // setup RichText on native mobile to delete the "Enter" key as it's handled by the JS/RN side
            allowedFormats={[""]}
          />
        </p>
      </div>
    </div>
  );
}
