/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { Fragment } from "@wordpress/element";
import { PanelBody, TextControl, CheckboxControl } from "@wordpress/components";
import { store as coreStore } from "@wordpress/core-data";
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import { useSelect } from "@wordpress/data";
import ServerSideRender from "@wordpress/server-side-render";

/**
 * Internal dependencies
 */
import metadata from "./block.json";
const { name } = metadata;

export default function edit({ attributes, setAttributes }) {
  const { eventListing, listTaxonomy, anchor } = attributes;

  // useSelect to retrieve all post types
  const taxonomies = useSelect(
    (select) =>
      select(coreStore).getEntityRecords("taxonomy", "event-category", {
        per_page: -1,
      }),
    []
  );

  var taxonomyOptions = !Array.isArray(taxonomies)
    ? listTaxonomy
    : taxonomies.map(
        // Format the options for display in the <SelectControl/>
        (taxonomy) => ({
          label: taxonomy.name,
          value: taxonomy.id, // the value saved as taxonomy in attributes
        })
      );

  function onTaxCheckChange(newValue) {
    let data = listTaxonomy ? listTaxonomy : Array();
    if (data && newValue) {
      if (data.indexOf(newValue) === -1) {
        data.push(newValue);
      } else {
        data = listTaxonomy.filter((v) => v !== newValue);
      }
    } else {
      data = listTaxonomy.filter((v) => v !== newValue);
    }
    data.sort();
    setAttributes({ listTaxonomy: [...data], eventListing: !eventListing });
  }

  return (
    <div {...useBlockProps()}>
      <Fragment>
        <InspectorControls>
          <PanelBody title={__("Settings", "smt-theme")}>
            <label className="components-base-control__label custom--label">
              {typeof taxonomyOptions !== "undefined" &&
              taxonomyOptions.length > 0
                ? __("Select category", "smt-theme")
                : __("Add a Event Category", "smt-theme")}
            </label>
            {taxonomyOptions?.map((item, index) => {
              return (
                <>
                  <CheckboxControl
                    className="checkbox-control block-mt"
                    label={item.label}
                    key={item.value}
                    name="taxonomy[]"
                    checked={
                      listTaxonomy
                        ? listTaxonomy.indexOf(item.value) > -1
                        : false
                    }
                    onChange={(val) => {
                      onTaxCheckChange(item.value);
                    }}
                  />
                </>
              );
            })}
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
