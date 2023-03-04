/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { Component } from "@wordpress/element";
import { InnerBlocks } from "@wordpress/block-editor";

export default class Save extends Component {
  render() {
    const { innerItem, anchor } = this.props.attributes;
    return (
      <div id={anchor ? anchor : null} className="tabs">
        <div className={`tabs-nav`}>
          {innerItem && (
            <>
              {innerItem.map((item, index) => {
                var tabLink = item.attributes.tabClientId;
                return (
                  <>
                    <button
                      className={"tabs-nav__item"}
                      data-index={index}
                      data-content={tabLink}>
                      {item.attributes.tabTitle}
                    </button>
                  </>
                );
              })}
            </>
          )}
        </div>
        <div className="tabs-content">
          <InnerBlocks.Content />
        </div>
      </div>
    );
  }
}
