/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { Fragment, useState, useEffect, useRef } from "@wordpress/element";
import { PanelBody, TextControl, SelectControl } from "@wordpress/components";
import {
  InspectorControls,
  useBlockProps,
  __experimentalLinkControl as LinkControl,
} from "@wordpress/block-editor";
import ServerSideRender from "@wordpress/server-side-render";

/**
 * Internal dependencies
 */
import metadata from "./block.json";
const { name } = metadata;

export default function edit({ attributes, setAttributes }) {
  const { degree, url, linkTarget, anchor } = attributes;

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

  return (
    <div {...useBlockProps()}>
      <Fragment>
        <InspectorControls>
          <PanelBody title={__("Settings", "smt-theme")}>
            <SelectControl
              label={__("Select Degree", "smt-theme")}
              options={[
                {
                  value: "",
                  label: __("Not Set", "smt-theme"),
                },
                {
                  value: "bachelor",
                  label: __("Bachelor", "smt-theme"),
                },
                {
                  value: "master",
                  label: __("Master", "smt-theme"),
                },
                {
                  value: "promotion",
                  label: __("Promotion", "smt-theme"),
                },
                {
                  value: "cetificate",
                  label: __("Certificate", "smt-theme"),
                },
              ]}
              value={degree}
              onChange={(value) =>
                setAttributes({ degree: value })
              }></SelectControl>
          </PanelBody>
          <PanelBody title={__("Last Card Link Settings", "smt-theme")}>
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
        <ServerSideRender block={name} attributes={attributes} />
      </Fragment>
    </div>
  );
}
