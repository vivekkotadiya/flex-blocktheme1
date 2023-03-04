/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { PanelBody, TextControl } from "@wordpress/components";
import {
  InspectorControls,
  useBlockProps,
  useInnerBlocksProps,
} from "@wordpress/block-editor";
/**
 * Internal dependencies
 */
import { ButtonBlockAppender } from "../../utils/block-helpers";

export default function edit(props) {
  const { attributes, setAttributes, clientId } = props;
  const { anchor } = attributes;

  const ALLOWED_BLOCKS = ["smt-theme/timelineitem"];

  const blockProps = useBlockProps({ className: "timeline" });

  const renderappender = () => (
    <ButtonBlockAppender
      rootClientId={clientId}
      label={"Add a Timeline Item"}
    />
  );

  const innerBlocksProps = useInnerBlocksProps(
    { className: "timeline__content" },
    {
      allowedBlocks: ALLOWED_BLOCKS,
      renderAppender: renderappender,
    }
  );

  return (
    <div id={anchor ? anchor : null} {...blockProps}>
      <InspectorControls>
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
      <div {...innerBlocksProps} />
      <div className="timeline__connector">
        <div className="timeline__connector--arrow">
          <span className="timeline__connector--arrow-view"></span>
        </div>
      </div>
    </div>
  );
}
