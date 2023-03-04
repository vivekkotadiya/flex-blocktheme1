/**
 * External dependencies
 */
import { map } from "lodash";
/**
 * wordpress dependencies
 */
import { __ } from "@wordpress/i18n";
import { withSelect, useSelect } from "@wordpress/data";
import {
  InnerBlocks,
  useInnerBlocksProps,
  InspectorControls,
  store as blockEditorStore,
} from "@wordpress/block-editor";
import { PanelBody, TextControl, Button, Tooltip } from "@wordpress/components";
import { Component } from "@wordpress/element";
import { compose } from "@wordpress/compose";

/**
 * Internal dependencies
 */
import Icons from "../../icon/icon.json";

class Edit extends Component {
  constructor(props) {
    super(...arguments);
    this.toggle = this.toggle.bind(this);

    this.state = {
      icons: Icons,
      isOpen: false,
      keyword: "",
    };
  }

  search(keyword) {
    let filtered = [];

    map(Icons, (icon) => {
      if (icon.toLowerCase().search(keyword.toLowerCase()) !== -1) {
        filtered.push(icon);
      }
    });

    this.setState({ keyword, icons: filtered });
  }

  toggle() {
    this.setState((state) => ({
      isOpen: !state.isOpen,
    }));

    this.setState({ keyword: "", icons: Icons });

    const selection = window.getSelection();
    anchorRange = selection.rangeCount > 0 ? selection.getRangeAt(0) : null;
  }
  render() {
    const { icons, keyword } = this.state;
    const {
      attributes: { listiconClass },
      hasinnerBlocksProps,
      setAttributes,
    } = this.props;

    return (
      <>
        <InspectorControls>
          <PanelBody title={__("Icon", "smt-theme")} initialOpen={false}>
            <TextControl
              value={keyword}
              placeholder={__("Search", "smt-theme")}
              onChange={(newKeyword) => {
                this.search(newKeyword);
              }}
            />
            <div className="smt-theme-icon-panel">
              {icons.length > 0 ? (
                <ul className="smt-theme-icon-list">
                  {listiconClass && (
                    <li data-key={listiconClass} className="selectedicon">
                      <Tooltip text={listiconClass}>
                        <Button
                          onClick={() => {
                            setAttributes({
                              listiconClass: listiconClass,
                            });
                          }}>
                          <i className={listiconClass} aria-hidden="true"></i>
                        </Button>
                      </Tooltip>
                    </li>
                  )}

                  {map(icons, (icon) => {
                    return (
                      <li data-key={icon}>
                        <Tooltip text={icon}>
                          <Button
                            onClick={() => {
                              setAttributes({
                                listiconClass: icon,
                              });
                            }}>
                            <i className={icon} aria-hidden="true"></i>
                          </Button>
                        </Tooltip>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <p>{__("No characters found.", "block-options")}</p>
              )}
            </div>
          </PanelBody>
        </InspectorControls>
        <li className={`list-icon__item`}>
          <i className={listiconClass}></i>
          <div {...hasinnerBlocksProps} />
        </li>
      </>
    );
  }
}
export default compose(
  withSelect((select, props) => {
    const { clientId } = props;
    const { getBlockOrder } =
      select("core/block-editor") || select("core/editor"); // Fallback to 'core/editor' for backwards compatibility

    const BLOCK_TEMPLATE = [
      [
        "smt-theme/headline",
        {
          headColor: "#000000",
          headColorClass: "eight",
          headStyle: "five",
          level: "span",
        },
      ],
      [
        "smt-theme/paragraph",
        {
          textColor: "#000000",
          textColorClass: "eight",
          textStyle: "two",
          tag: "span",
        },
      ],
    ];

    const { hasInnerBlocks } = useSelect(
      (select) => {
        const { getBlock } = select(blockEditorStore);
        const block = getBlock(clientId);
        return {
          hasInnerBlocks: block.innerBlocks.length,
        };
      },
      [clientId]
    );

    const renderappender = hasInnerBlocks
      ? undefined
      : () => <InnerBlocks.ButtonBlockAppender />;

    const innerBlocksProps = useInnerBlocksProps(
      { className: "list-icon__item--text" },
      {
        allowedBlocks: [
          "smt-theme/headline",
          "smt-theme/paragraph",
          "smt-theme/button",
        ],
        template: BLOCK_TEMPLATE,
        renderAppender: renderappender,
      }
    );

    return {
      hasinnerBlocksProps: innerBlocksProps,
    };
  })
)(Edit);
