/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { Fragment, Platform, useState, useRef } from "@wordpress/element";
import { PanelBody, SelectControl } from "@wordpress/components";
import { store as coreStore } from "@wordpress/core-data";
import {
  InspectorControls,
  useBlockProps,
  __experimentalLinkControl as LinkControl,
} from "@wordpress/block-editor";
import { useSelect } from "@wordpress/data";
import ServerSideRender from "@wordpress/server-side-render";

/**
 * Internal dependencies
 */
import metadata from "./block.json";
const { name } = metadata;

export default function edit({ attributes, setAttributes }) {
  const { degreeTax, detailTax, url, linkTarget } =
    attributes;
  // useSelect to retrieve all post types
  const degTax = useSelect(
    (select) =>
      select(coreStore).getEntityRecords("taxonomy", "degree", {
        per_page: -1,
      }),
    []
  );

  var degTaxOptions = !Array.isArray(degTax)
    ? degreeTax
    : degTax.map(
        // Format the options for display in the <SelectControl/>
        (degreeTax) => ({
          label: degreeTax.name,
          value: degreeTax.id, // the value saved as taxonomy in attributes
        })
      );

  if (degTax && degTaxOptions) {
    degTaxOptions.unshift({ label: __("Select a Degree"), value: "" });
  }

  const detTax = useSelect(
    (select) =>
      select(coreStore).getEntityRecords("taxonomy", "detail", {
        per_page: -1,
      }),
    []
  );

  var detailTaxOptions = !Array.isArray(detTax)
    ? detailTax
    : detTax.map(
        // Format the options for display in the <SelectControl/>
        (detailTax) => ({
          label: detailTax.name,
          value: detailTax.id, // the value saved as taxonomy in attributes
        })
      );
  if (detTax && detailTaxOptions) {
    detailTaxOptions.unshift({ label: __("Select a Detail"), value: "" });
  }
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
    <div {...useBlockProps()}>
      <Fragment>
        <InspectorControls>
          <PanelBody title={__("Button Link", "smt-theme")} initialOpen={true}>
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
          <PanelBody title={__("Settings", "smt-theme")}>
            <SelectControl
              label="Select a Degree"
              value={degreeTax}
              options={degTaxOptions}
              onChange={(value) => setAttributes({ degreeTax: value })}
            />
            <SelectControl
              label="Select a Detail"
              value={detailTax}
              options={detailTaxOptions}
              onChange={(value) => setAttributes({ detailTax: value })}
            />
          </PanelBody>
        </InspectorControls>
        <ServerSideRender block={name} attributes={attributes} />
      </Fragment>
    </div>
  );
}
