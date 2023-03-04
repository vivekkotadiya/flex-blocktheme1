/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { compose } from "@wordpress/compose";
import { Component } from "@wordpress/element";
import {
  PanelBody,
  TextControl,
  ToolbarGroup,
  ToolbarButton,
} from "@wordpress/components";
import {
  BlockControls,
  InspectorControls,
  InnerBlocks,
  useBlockProps
} from "@wordpress/block-editor";
import { withSelect, withDispatch, subscribe } from "@wordpress/data";
import { createBlock } from "@wordpress/blocks";

/**
 * Create an Component
 */
const ALLOWED_BLOCKS = ["smt-theme/row"];

class Edit extends Component {
  constructor() {
    super(...arguments);

    this.state = {
      hasContent: true,
    };

    this.hasContent = this.hasContent.bind(this);
    this.addSlide = this.addSlide.bind(this);
    this.listenSlideContentChange = this.listenSlideContentChange.bind(this);
  }

  hasContent() {
    const { getBlock, clientId } = this.props;

    const innerBlocks = getBlock(clientId).innerBlocks;

    return innerBlocks.length > 0;
  }

  addSlide(position = "after") {
    const {
      insertBlock,
      getBlock,
      clientId,
      getBlockIndex,
      getBlockRootClientId,
    } = this.props;

    const rootId = getBlockRootClientId(clientId);
    const index = getBlockIndex(clientId, rootId) + (position === "before" ? 0 : 1);
    const block = getBlock(clientId);

    if (block) {
      const insertedBlock = createBlock("smt-theme/tabcontent");

      insertBlock(insertedBlock, index, rootId);
    }
  }

  renderBlockControls() {
    return (
      <BlockControls>
        <ToolbarGroup>
          <ToolbarButton
            label={__("Add Tab Content Before", "smt-theme")}
            onClick={() => {
              this.addSlide("before");
            }}>
            {__("Add Tab Content Before", "smt-theme")}
          </ToolbarButton>
          <ToolbarButton
            label={__("Add Tab Content After", "smt-theme")}
            onClick={() => {
              this.addSlide();
            }}>
            {__("Add Tab Content After", "smt-theme")}
          </ToolbarButton>
        </ToolbarGroup>
      </BlockControls>
    );
  }

  listenSlideContentChange() {

    const slideContent = this.props.getBlockOrder(this.props.clientId);

    if (!this.state.hasContent && slideContent.length > 0) {
      this.setState({
        hasContent: true,
      });
    }

    if (this.state.hasContent && slideContent.length <= 0) {
      this.setState({
        hasContent: false,
      });
    }
  }

  componentDidMount() {
    this.listenSlideContentChange();
    subscribe(this.listenSlideContentChange);
  }

  render() {
    const { tabTitle, tabClientId } = this.props.attributes;
    const { setAttributes, clientId } = this.props;
    if(tabClientId === undefined){
      const uniqueId = `tab-${Date.now()}`;
      setAttributes({ tabClientId: uniqueId });
    }

    return (
      <>
        {this.renderBlockControls()}
        <InspectorControls>
          <PanelBody title={__("Settings", "smt-theme")} initialOpen={true}>
            <TextControl
              className="block-mt"
              label={__("Tab Headline", "smt-theme")}
              type="text"
              placeholder="Add Tab Head text.."
              value={tabTitle}
              onChange={(value) => setAttributes({ tabTitle: value })}
            />
          </PanelBody>
        </InspectorControls>

        <div id={tabClientId} className="tabs-content__item">
          <InnerBlocks
            templateInsertUpdatesSelection={true}
            allowedBlocks={ALLOWED_BLOCKS}
          />
        </div>
      </>
    );
  }
}

export default compose([
  withSelect((select, props) => {
    const { getBlock, getBlockRootClientId, getBlockIndex, getBlockOrder } =
      select("core/block-editor");
    const { getMedia } = select("core");
    const { imageId } = props.attributes;
    const blockProps = useBlockProps();
    return {
      getBlock,
      getBlockRootClientId,
      getBlockIndex,
      getBlockOrder,
      Image: imageId ? getMedia(imageId) : null,
      blockProps
    };
  }),
  withDispatch((dispatch, props) => {
    const { insertBlock } = dispatch("core/block-editor");
    return {
      insertBlock,
    };
  }),
])(Edit);
