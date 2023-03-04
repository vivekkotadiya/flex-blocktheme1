/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { Component } from "@wordpress/element";
import { InnerBlocks } from "@wordpress/block-editor";

export default class Save extends Component {
  render() {
    const {
      attributes: { listiconClass },
    } = this.props;

    return (
      <li className="list-icon__item">
        <i className={listiconClass}></i>
        <div className="list-icon__item--text">
          <InnerBlocks.Content />
        </div>
      </li>
    );
  }
}
