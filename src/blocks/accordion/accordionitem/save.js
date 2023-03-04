/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { Component } from "@wordpress/element";
import { InnerBlocks, RichText } from "@wordpress/block-editor";

/**
 * Internal dependencies
 */
import { ArrowIcon } from "../../../utils/block-icons";

export default class Save extends Component {
  render() {
    return (
      <div className="accordion-item">
        <button className="accordion-item__header">
          <RichText.Content
            tagName="span"
            value={this.props.attributes.content}
          />
          <ArrowIcon />
        </button>
        <div className={`accordion-item__content`}>
          <div className="accordion-item__content-helper">  
            <InnerBlocks.Content />
          </div>
        </div>
      </div>
    );
  }
}
