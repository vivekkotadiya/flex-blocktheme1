/**
 * External dependencies
 */
import classnames from "classnames";

/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useState, useRef } from "@wordpress/element";
import {
  useInnerBlocksProps,
  useBlockProps,
  InnerBlocks,
  RichText,
  PanelColorSettings,
  InspectorControls,
  __experimentalLinkControl as LinkControl,
} from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";
import { useSelect } from "@wordpress/data";

/***
 * Interal dependencies
 */
import { theme_colors } from "../../utils/block-helpers";

export default function edit({
  hasChildBlocks,
  clientId,
  setAttributes,
  attributes,
  onReplace,
  mergeBlocks,
}) {
  const {
    url,
    studyJobTarget,
    studyJobBtnColor,
    studyJobBtnColorClass,
    studyjobcontent,
    anchor,
  } = attributes;

  const { getBlockOrder } = useSelect((select) => {
    return select("core/block-editor") || select("core/editor");
  });

  hasChildBlocks = getBlockOrder(clientId).length;

  const innerBlocksProps = useInnerBlocksProps(
    {
      className: "row row--col-ht row--xs-center row--gap-2",
    },
    {
      allowedBlocks: ["smt-theme/studyjobitem"],
      templateLock: false,
      renderAppender: InnerBlocks.ButtonBlockAppender,
    }
  );

  const richTextRef = useRef();

  const [isEditingURL, setIsEditingURL] = useState(false);
  const opensInNewTab = studyJobTarget === "_blank";

  const relAttributes = [];

  function unlink() {
    setAttributes({
      url: undefined,
      studyJobTarget: undefined,
    });
    setIsEditingURL(false);
  }

  function onToggleOpenInNewTab(value) {
    const newLinkTarget = value ? "_blank" : undefined;

    if (newLinkTarget) {
      relAttributes.push("noopener");
    }

    setAttributes({
      studyJobTarget: newLinkTarget,
    });
  }

  const relation =
    relAttributes && relAttributes.length > 0 ? relAttributes.join(" ") : null;

  const SetColorClass = (value) => {
    if (value !== undefined) {
      theme_colors.filter(function (item) {
        if (item.color == value) {
          setAttributes({
            studyJobBtnColorClass: item.slug,
          });
          setAttributes({
            studyJobBtnColor: item.color,
          });
        }
      });
    } else {
      setAttributes({
        studyJobBtnColorClass: "",
        studyJobBtnColor: "",
      });
    }
  };

  return (
    <>
      <div
        {...useBlockProps({ className: "job-cards" })}
        id={anchor ? anchor : null}>
        <InspectorControls>
          <PanelBody
            title={__("Link Settings", "smt-theme")}
            initialOpen={true}>
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
            <PanelColorSettings
              title={__("Button color", "smt-theme")}
              className={"block-color-setting block-color-top-0"}
              colorSettings={[
                {
                  colors: theme_colors,
                  value: studyJobBtnColor,
                  onChange: (value) => {
                    SetColorClass(value);
                  },
                  label: __("Button Color", "smt-theme"),
                },
              ]}
            />
          </PanelBody>
        </InspectorControls>
        <div className="job-cards__background"></div>
        <div className="row-wrapper row-wrapper--ct-wd">
          <div {...innerBlocksProps} />
          {undefined !== url && (
            <a
              onClick={(e) => e.preventDefault()}
              className={classnames(
                `job-cards__button button--cta button--style-one button--align-xs-center button--width-xs-inline`,
                studyJobBtnColorClass !== "undefined"
                  ? `button--color-${studyJobBtnColorClass}`
                  : null
              )}
              href={!!url ? url : null}
              target={!!studyJobTarget ? "_blank" : null}
              rel={relation}>
              <span className="button--text">
                <RichText
                  ref={richTextRef}
                  aria-label={__("Button text", "smt-theme")}
                  placeholder={__("lorem ipsum dolor", "smt-theme")}
                  value={studyjobcontent}
                  onChange={(value) =>
                    setAttributes({ studyjobcontent: value })
                  }
                  withoutInteractiveFormatting={false}
                  allowedFormats={[]}
                  onReplace={onReplace}
                  onMerge={mergeBlocks}
                  identifier="text"
                />
              </span>
            </a>
          )}
        </div>
      </div>
    </>
  );
}
