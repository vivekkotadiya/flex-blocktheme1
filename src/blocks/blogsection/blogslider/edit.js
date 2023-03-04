/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { Fragment } from "@wordpress/element";
import { CheckboxControl, PanelBody } from "@wordpress/components";
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
  const { listTaxonomy, blogsListing, blogsLink } = attributes;
  // useSelect to retrieve all post types
  const taxonomies = useSelect(
    (select) =>
      select(coreStore).getEntityRecords("taxonomy", "category", {
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
    setAttributes({ listTaxonomy: [...data], blogsListing: !blogsListing });
  }

  return (
    <div {...useBlockProps({ className: "col col--xs-11 col--lg-6 col--xl-7 col--xs-os-1 col--lg-os-1 col--xl-os-1 col--pd-0" })}>
      <Fragment>
        <InspectorControls>
          <PanelBody title={__("Settings", "smt-theme")}>
            <label className="components-base-control__label custom--label">
              Select Category
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
          <PanelBody
            title={__("Blog page Link", "smt-theme")}
            initialOpen={true}>
            <div className="gb--link-control">
              <LinkControl
                searchInputPlaceholder="Search here..."
                value={blogsLink}
                settings={[
                  {
                    id: "opensInNewTab",
                    title: "Open in new tab",
                  },
                ]}
                onChange={(newLink) => setAttributes({ blogsLink: newLink })}
                withCreateSuggestion={true}
                createSuggestion={(inputValue) =>
                  setAttributes({
                    post: {
                      ...blogsLink,
                      title: inputValue,
                      type: "custom-url",
                      id: Date.now(),
                      url: inputValue,
                    },
                  })
                }></LinkControl>
            </div>
          </PanelBody>
        </InspectorControls>
        <ServerSideRender block={name} attributes={attributes} className="col__content" />
      </Fragment>
    </div>
  );
}
