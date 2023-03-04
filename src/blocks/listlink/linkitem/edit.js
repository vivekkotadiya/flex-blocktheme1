/**
 * External dependencies
 */
import classnames from "classnames";

/**
 * wordpress dependencies
 */
import { __ } from "@wordpress/i18n";
import { PanelBody } from "@wordpress/components";
import {
  RichText,
  useBlockProps,
  __experimentalLinkControl as LinkControl,
  InspectorControls,
} from "@wordpress/block-editor";
import { useState, useRef } from "@wordpress/element";

export default function edit(props) {
  const { mergeBlocks, onReplace, setAttributes, attributes } = props;

  const { content, url, linkTarget } = attributes;

  const richTextRef = useRef();

  const [isEditingURL, setIsEditingURL] = useState(false);
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
    <li
      {...useBlockProps({
        className: classnames(
          `list-link__item`,
          undefined == url ? `list-link__item--content` : null
        ),
      })}>
      <InspectorControls>
        <PanelBody title={__("Link Settings", "smt-theme")} initialOpen={true}>
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
          className="list-link__item--content"
          onClick={(e) => e.preventDefault()}
          href={!!url ? url : null}
          target={!!linkTarget ? "_blank" : null}
          rel={relation}>
          <RichText
            aria-label={__("List Link Text", "smt-theme")}
            placeholder={__("Write List Link text...", "smt-theme")}
            value={content}
            onChange={(value) => setAttributes({ content: value })}
            withoutInteractiveFormatting={false}
            allowedFormats={[]}
            onReplace={onReplace}
            onMerge={mergeBlocks}
            identifier="text"
          />
        </a>
      ) : (
        <RichText
          aria-label={__("List Link Text", "smt-theme")}
          placeholder={__("Write List Link text...", "smt-theme")}
          value={content}
          onChange={(value) => setAttributes({ content: value })}
          withoutInteractiveFormatting={false}
          allowedFormats={[]}
          onReplace={onReplace}
          onMerge={mergeBlocks}
          identifier="text"
        />
      )}
    </li>
  );
}
