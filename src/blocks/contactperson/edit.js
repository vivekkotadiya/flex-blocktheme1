/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { Fragment } from "@wordpress/element";
import { SelectControl, PanelBody, TextControl } from "@wordpress/components";
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import { useSelect } from "@wordpress/data";

/**
 * Internal dependencies
 */
import metadata from "./block.json";
import Contactcard from "./Contactcard";
const { name } = metadata;

export default function edit({ attributes, setAttributes }) {
  const { style, personId, anchor } = attributes;
  // useSelect to retrieve all post types

  const teamPosts = useSelect((select) => {
    return select("core").getEntityRecords("postType", "team", {
      status: "publish",
    });
  });

  let options = [];

  if (teamPosts) {
    options.push({ value: 0, label: "Select a Contact Person" });
    teamPosts.forEach((teamPost) => {
      options.push({ value: teamPost.id, label: teamPost.title.rendered });
    });
  } else {
    options.push({ value: 0, label: "Loading..." });
  }

  const onPersonChangeHandler = (newValue) => {
    setAttributes({ personId: newValue });
  };

  const Contactperson = () => {
    if (teamPosts != null && personId != 0) {
      const personPost = teamPosts.filter(
        (teampost) => teampost.id == personId
      );
      return (
        <Contactcard
          personPost={personPost}
          personId={personId}
          style={style}
        />
      );
    }
    return <h5>Select Contact Person..</h5>;
  };

  return (
    <div {...useBlockProps()}>
      <Fragment>
        <InspectorControls>
          <PanelBody title={__("Settings", "smt-theme")}>
            <SelectControl
              value={personId}
              label="Select a Contact Person"
              options={options}
              onChange={onPersonChangeHandler}
            />
            <SelectControl
              value={style}
              label="Select Layout Preset Style"
              options={[
                { label: "One", value: "one" },
                { label: "Two", value: "two" },
              ]}
              onChange={(newStyle) => setAttributes({ style: newStyle })}
            />
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
      </Fragment>
      <Contactperson />
    </div>
  );
}
