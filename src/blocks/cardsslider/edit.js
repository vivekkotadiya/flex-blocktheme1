/**
 * External dependencies
 */

import { isEqual } from "lodash";

/**
 * Internal dependencies
 */

import Navigation from "./navigation";


/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { compose } from "@wordpress/compose";
import { Component, createRef } from "@wordpress/element";
import {
	ToolbarGroup,
	ToolbarButton,
	PanelBody,
	ToggleControl,
	TextControl,
} from "@wordpress/components";
import {
	BlockControls,
	InnerBlocks,
	useBlockProps,
	InspectorControls,
	useInnerBlocksProps,
	__experimentalLinkControl as LinkControl,
	RichText
} from "@wordpress/block-editor";
import { withSelect, withDispatch, subscribe } from "@wordpress/data";
import { createBlock } from "@wordpress/blocks";
import { Splide, SplideTrack } from '@splidejs/react-splide';


/**
 * Create an Component
 */
class Edit extends Component {
	constructor() {
		super(...arguments);

		this.state = {
			activeSlideIndex: 0,
			activeSlideID: "",
			slidesCount: 0,
			slidesOrder: [],
			innerBlocksAttributes: [],
			isEditingURL: false,
			setIsEditingURL: false,
			splideInstance : "{}"
		};

		this.addSlide = this.addSlide.bind(this);
		this.activateSlide = this.activateSlide.bind(this);
		this.getSelectedSlide = this.getSelectedSlide.bind(this);
		this.listenSlidesChange = this.listenSlidesChange.bind(this);
		this.isSlidesOrderChanged = this.isSlidesOrderChanged.bind(this);
		this.isSlidesSelectionUpdated = this.isSlidesSelectionUpdated.bind(this);
		this.isSlideInViewport = this.isSlideInViewport.bind(this);

		this.myRef = createRef();
		this.splideRef = createRef();
	}

	addSlide() {
		const { insertBlock, getBlock, clientId } = this.props;

		let innerBlocks;
		const block = getBlock(clientId);

		if (block) {
			const insertedBlock = createBlock("smt-theme/cardslide");
			innerBlocks = block.innerBlocks;
			insertBlock(insertedBlock, innerBlocks.length, clientId);
		}
	}

	activateSlide(index) {
		const { clientId, getBlockOrder, selectBlock } = this.props;
		const blocksOrder = getBlockOrder(clientId);
		const activeSlideID = blocksOrder[index] || blocksOrder[0];

		this.setState({
			slidesOrder: blocksOrder,
			activeSlideID: activeSlideID,
			activeSlideIndex: index,
			slidesCount: blocksOrder.length,
		});


	}

	getSelectedSlide() {
		const { clientId, hasSelectedInnerBlock, getSelectedBlock } = this.props;

		if (hasSelectedInnerBlock(clientId)) {
			return getSelectedBlock();
		}

		return null;
	}

	getIndexOfSelectedSlide() {
		const { clientId, getBlockIndex } = this.props;
		const selectedSlide = this.getSelectedSlide();

		return selectedSlide ? getBlockIndex(selectedSlide.clientId, clientId) : 0;
	}

	listenSlidesChange() {
		if (this.isSlidesOrderChanged() || this.isSlidesSelectionUpdated()) {
			this.activateSlide(this.getIndexOfSelectedSlide());
		}
	}

	isSlidesOrderChanged() {
		const newSlidesOrder = this.props.getBlockOrder(this.props.clientId);

		return !isEqual(this.state.slidesOrder, newSlidesOrder);
	}

	isSlidesSelectionUpdated() {
		const { clientId, hasSelectedInnerBlock, getSelectedBlockClientId } =
			this.props;

		const hasSelectedSlide = hasSelectedInnerBlock(clientId);
		const selectedBlockId = getSelectedBlockClientId();

		return hasSelectedSlide && selectedBlockId !== this.state.activeSlideID;
	}

	isSlideInViewport(element){
		const rect = element.getBoundingClientRect();
		return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
			rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		);
	}

	componentDidMount() {
		this.activateSlide(0);
		subscribe(this.listenSlidesChange);
	}

	componentDidUpdate(prevProps) {
		if(this.splideRef?.current &&  this.state.activeSlideIndex >= 0 ){
			const targetElement = this.splideRef.current.splide.Components.Slides.getAt(this.state.activeSlideIndex);
			const targetSlide = targetElement?.slide;
			if(targetSlide && !this.isSlideInViewport(targetSlide)){
				this.splideRef.current.splide.go(this.state.activeSlideIndex);
			}
		}
	}

	render() {
		
		const { anchor, blockTitle} = this.props.attributes;
		const { setAttributes, innerBlocksProps} = this.props;

		return (
			<>
				<InspectorControls>
					<PanelBody
						title={__("Additional Settings", "smt-theme")}
						initialOpen={true}
					>
						<TextControl
							label={__("Anchor", "smt-theme")}
							placeholder={__("Specify Id…", "smt-theme")}
							type="text"
							value={anchor}
							onChange={(value) => setAttributes({ anchor: value })}
						/>
					</PanelBody>
				</InspectorControls>
				<div
					id={anchor ? anchor : null}
					className="cards--slider"
				>
					<BlockControls>
						<ToolbarGroup>
							<ToolbarButton
								label={__("Add Card Slide", "smt-theme")}
								onClick={this.addSlide}
							>
								{__("Add Card Slide", "smt-theme")}
							</ToolbarButton>
						</ToolbarGroup>
					</BlockControls>

					<Navigation
						addSlide={this.addSlide}
						activateSlide={this.activateSlide}
						activeSlideIndex={this.state.activeSlideIndex}
						activeSlideID={this.state.activeSlideID}
						slidesCount={this.state.slidesCount}
						slidesOrder={this.state.slidesOrder}
						selectBlock={this.props.selectBlock}
						isEditActive={this.props.isSelected}
					/>
					<Splide className="card__slider" 
						hasTrack={ false }
						options={ {
							perPage: 3,
							gap: 20,
							perMove: 1,
							pauseOnHover: false,
							arrows: true,
							easing: 'linear',
							pagination: false,
							drag: false,
							slideFocus: false,
							autoplay: false,
					  	} } 
						ref={this.splideRef}
					>
						<div className="splide__top">
							<div className="splide__arrows">
								<button
									className="splide__arrow splide__arrow--prev"
									disabled={this.state.activeSlideIndex === 0}
									onClick={() => {
										this.activateSlide(this.state.activeSlideIndex - 1);
									}}
								>
									<span className="nav--arrow is--left"></span>
								</button>
								<button
									className="splide__arrow splide__arrow--next"
									disabled={
										this.state.activeSlideIndex === this.state.slidesCount - 1
									}
									onClick={() => {
										this.activateSlide(this.state.activeSlideIndex + 1);
									}}
								>
									<span className="nav--arrow is--right"></span>
								</button>
							</div>
							<RichText
								identifier="headlinetext"
								tagName={"h2"}
								className={"card_slider-title headline headline--style-two headline--color-eight"}
								value={blockTitle} 
								allowedFormats={ [] } 
								onChange={ ( content ) => setAttributes( { blockTitle: content } ) } 
								placeholder={ __( 'Heading...' ) } 
							/>
						</div>
						
						<SplideTrack {...innerBlocksProps}>
							{ innerBlocksProps.children }
						</SplideTrack>	
					</Splide>
				</div>
			</>
		);
	}
}

export default compose([
	withSelect((select, props) => {
		const {
			getBlock,
			getBlockIndex,
			getBlockOrder,
			hasSelectedInnerBlock,
			getSelectedBlockClientId,
			getSelectedBlock,
		} = select("core/block-editor");

		const blockProps = useBlockProps();

		const innerBlocksProps = useInnerBlocksProps(
			blockProps,
			{
				template:[["smt-theme/cardslide", {}]],
				allowedBlocks:["smt-theme/cardslide"],
				templateLock:false,
				renderAppender:false,
				orientation: "horizontal",
			}
		);


		return {
			getBlock,
			getBlockIndex,
			getBlockOrder,
			hasSelectedInnerBlock,
			getSelectedBlockClientId,
			getSelectedBlock,
			innerBlocksProps
		};
	}),
	withDispatch((dispatch, props) => {
		const {
			updateBlockAttributes,
			insertBlock,
			selectNextBlock,
			selectPreviousBlock,
			selectBlock,
		} = dispatch("core/block-editor");

		return {
			insertBlock,
			updateBlockAttributes,
			selectNextBlock,
			selectPreviousBlock,
			selectBlock,
		};
	}),
])(Edit);
