/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  TextControl,
  FormTokenField,
  SelectControl,
} from "@wordpress/components";
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import { useSelect } from "@wordpress/data";
import ServerSideRender from "@wordpress/server-side-render";

/**
 * Internal dependencies
 */
import metadata from "./block.json";
const { name } = metadata;

export default function edit({ attributes, setAttributes }) {
  const { partners, anchor } = attributes;

  const partnerPosts = useSelect((select) => {
    return select("core").getEntityRecords("postType", "partner", {
      status: "publish",
    });
  });

  let options = [];

  if (partnerPosts) {
    options = partnerPosts.map((partner) => partner.slug);
  }

  return (
    <div {...useBlockProps()}>
      <InspectorControls>
        <PanelBody title={__("Settings", "smt-theme")}>
          {partnerPosts !== null && partnerPosts.length !== 0 ? (
            <FormTokenField
              value={partners}
              suggestions={options}
              onChange={(tokens) => {
                setAttributes({
                  partners: [...tokens],
                });
              }}
            />
          ) : (
            <label>Please add Partner</label>
          )}
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
    </div>
  );
}
