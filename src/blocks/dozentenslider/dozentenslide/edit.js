/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { compose } from "@wordpress/compose";
import { Component } from "@wordpress/element";
import {
	Spinner,
	Button,
	PanelBody,
	ResponsiveWrapper,
	TextControl,
	ToolbarGroup,
	ToolbarButton,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from "@wordpress/components";
import {
	BlockControls,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	RichText,
	useInnerBlocksProps
} from "@wordpress/block-editor";
import { withSelect, withDispatch, subscribe } from "@wordpress/data";
import { createBlock } from "@wordpress/blocks";


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
		const index =
			getBlockIndex(clientId, rootId) + (position === "before" ? 0 : 1);
		const block = getBlock(clientId);

		if (block) {
			const insertedBlock = createBlock("smt-theme/dozentenslide");

			insertBlock(insertedBlock, index, rootId);
		}
	}

	renderBlockControls() {
		return (
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						label={__("Add Dozentin Slide Before", "smt-theme")}
						onClick={() => {
							this.addSlide("before");
						}}
					>
						{__("Add Dozentin Slide Before", "smt-theme")}
					</ToolbarButton>
					<ToolbarButton
						label={__("Add Dozentin Slide After", "smt-theme")}
						onClick={() => {
							this.addSlide();
						}}
					>
						{__("Add Dozentin Slide After", "smt-theme")}
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
		const { xsimageUrl, imageId, altText, xswebpImageUrl, headlinelevel, tags, headlinetext, description } =
			this.props.attributes;
		const { setAttributes, Image, innerBlocksProps } = this.props;

		const headlinetag = headlinelevel == "span" ? "span" : "h" + headlinelevel;
	
		const instructions = (
			<p>
				{__(
					"To edit the background image, you need permission to upload media.",
					"smt-theme"
				)}
			</p>
		);

		const ALLOWED_MEDIA_TYPES = ["image"];

		const onUpdateImage = (image) => {
			setAttributes({
				imageId: image.id,
				xsimageUrl: image?.sizes?.xs?.url
					? image?.sizes?.xs?.url
					: image?.sizes?.md?.url
					? image?.sizes?.md?.url
					: image.url,
				altText: image.alt,
			});
			var xswebp = "";
			if (image.sizes["xs"]) {
				xswebp =
					image.sizes["xs"].url.substring(
						0,
						image.sizes["xs"].url.lastIndexOf(".") + 1
					) + "webp";
			} else if (image.sizes["md"]) {
				xswebp =
					image.sizes["md"].url.substring(
						0,
						image.sizes["md"].url.lastIndexOf(".") + 1
					) + "webp";
			} else {
				xswebp =
					image.url.substring(0, image.url.lastIndexOf(".") + 1) + "webp";
			}
			if (xswebp) {
				var xhr = new XMLHttpRequest();
				xhr.open("HEAD", xswebp, false);
				xhr.send();
				if (xhr.status != "404") {
					setAttributes({
						xswebpImageUrl: xswebp,
					});
				} else {
					setAttributes({
						xswebpImageUrl: "",
					});
				}
			} else {
				setAttributes({
					xswebpImageUrl: "",
				});
			}
		};

		const onRemoveImage = () => {
			setAttributes({
				imageId: undefined,
				xsimageUrl: "",
				xswebpImageUrl: "",
			});
		};

		let tagsArray = tags ? tags.split(',') : [];
		 	tagsArray = tagsArray.filter(function (el) {
				return el.trim() !== "";
			  });
		const tagItems = tagsArray.map((tag) =>
			<span>{tag.trim()}</span>
		);

		return (
			<div className="splide__slide dozenten">
				{this.renderBlockControls()}
				<InspectorControls>
					<PanelBody title={__("Image", "smt-theme")} initialOpen={true}>
						<MediaUploadCheck fallback={instructions}>
							<MediaUpload
								title={__("Image", "smt-theme")}
								onSelect={onUpdateImage}
								allowedTypes={ALLOWED_MEDIA_TYPES}
								value={imageId}
								render={({ open }) => (
									<Button
										className={
											!imageId
												? "editor-post-featured-image__toggle"
												: "editor-post-featured-image__preview"
										}
										onClick={open}
									>
										{!!imageId && !Image && <Spinner />}
										{!imageId && __("Set image", "smt-theme")}
										{!!imageId && Image && (
											<ResponsiveWrapper
												naturalWidth={Image.media_details.width}
												naturalHeight={Image.media_details.height}
											>
												<img
													src={Image.source_url}
													alt={__("Image", "smt-theme")}
												/>
											</ResponsiveWrapper>
										)}
									</Button>
								)}
							/>
						</MediaUploadCheck>
						{!!imageId && Image ? (
							<MediaUploadCheck>
								<MediaUpload
									title={__("Image", "smt-theme")}
									onSelect={onUpdateImage}
									allowedTypes={ALLOWED_MEDIA_TYPES}
									value={imageId}
									render={({ open }) => (
										<Button
											onClick={open}
											isDefault
											isLarge
											isLink
											className="block--image-attr block-section-background-image-replace"
										>
											{__("Replace image", "smt-theme")}
										</Button>
									)}
								/>
							</MediaUploadCheck>
						) : (
							<></>
						)}
						{!!imageId ? (
							<MediaUploadCheck>
								<Button
									onClick={onRemoveImage}
									isDestructive
									className="block--image-attr block-section-background-image-remove"
								>
									{__("Remove image", "smt-theme")}
								</Button>
							</MediaUploadCheck>
						) : (
							<></>
						)}
						<TextControl
							className="block-mt"
							label={__("Image Alt - Text", "smt-theme")}
							type="text"
							placeholder="Overwrite default Alt-Text..."
							value={altText}
							onChange={(value) => setAttributes({ altText: value })}
						/>
					</PanelBody>
					<PanelBody title={__("Headline and Tags", "smt-theme")} initialOpen={false}>
						<ToggleGroupControl
							label={__("Headline Tag", "smt-theme")}
							value={headlinelevel}
							onChange={(value) => {
							setAttributes({
								headlinelevel: value,
							});
							}}
							className="block-toggle-full">
							<ToggleGroupControlOption
							value="1"
							label={__("1", "smt-theme")}
							showTooltip={true}
							aria-label={__("H1", "smt-theme")}
							/>
							<ToggleGroupControlOption
							value="2"
							label={__("2", "smt-theme")}
							showTooltip={true}
							aria-label={__("H2", "smt-theme")}
							/>
							<ToggleGroupControlOption
							value="3"
							label={__("3", "smt-theme")}
							showTooltip={true}
							aria-label={__("H3", "smt-theme")}
							/>
							<ToggleGroupControlOption
							value="4"
							label={__("4", "smt-theme")}
							showTooltip={true}
							aria-label={__("H4", "smt-theme")}
							/>
							<ToggleGroupControlOption
							value="5"
							label={__("5", "smt-theme")}
							showTooltip={true}
							aria-label={__("H5", "smt-theme")}
							/>
							<ToggleGroupControlOption
							value="6"
							label={__("6", "smt-theme")}
							showTooltip={true}
							aria-label={__("H6", "smt-theme")}
							/>
							<ToggleGroupControlOption
							value="span"
							label={__("SPAN", "smt-theme")}
							showTooltip={true}
							aria-label={__("Span", "smt-theme")}
							/>
						</ToggleGroupControl>
						<TextControl
							className="block-mt"
							label={__("Tags", "smt-theme")}
							type="text"
							value={tags}
							onChange={(value) => setAttributes({ tags: value })}
							help={__("Comma seprated text", "smt-theme")}
						/>
					</PanelBody>
				</InspectorControls>
			
				<div className="row--wrapper row-wrapper--ct-wd">
					<div className="row row--xs-center">
						<div className="col col--xs-12 col--xl-4">
							<div className="col__content">
								<div className="image">
									{xsimageUrl ? (
										<picture className={`image__content`}>
											<>
												{xswebpImageUrl ? (
													<source
														media="(max-width:480px)"
														srcset={`${xswebpImageUrl}`}
														type="image/webp"
													/>
												) : (
													""
												)}
												<source media="(max-width:480px)" srcset={`${xsimageUrl}`} />
												<img src={`${xsimageUrl}`} alt={`${altText}`} />
											</>
										</picture>
									) : (
										""
									)}
								
								</div>
								<div class="splide__arrows">
									<button class="splide__arrow splide__arrow--prev">
										<span className="nav--arrow is--left"></span>
									</button>
									<button class="splide__arrow splide__arrow--next">
										<span className="nav--arrow is--right"></span>
									</button>
								</div>
							</div>
						</div>
						<div className="col col--xs-12 col--xl-7">
							<div className="col__content">
								<div className="dozentin__inner">
									<RichText
										identifier="headlinetext"
										tagName={headlinetag}
										className={"dozent--name headline headline--style-four headline--color-three"}
										value={headlinetext} 
										allowedFormats={ [] } 
										onChange={ ( content ) => setAttributes( { headlinetext: content } ) } 
										placeholder={ __( 'Prof. Dr....' ) } 
									/>
									{ tagItems && tagItems.length > 0 && 
										<div className="dozentin--tags">{tagItems}</div>
									}
									<div {...innerBlocksProps} />
								</div>
								
							</div>
						</div>
					</div>
				</div>
				
			</div>
		);
	}
}

export default compose([
	withSelect((select, props) => {
		const { getBlock, getBlockRootClientId, getBlockIndex, getBlockOrder } =
			select("core/block-editor");
		const { getMedia } = select("core");
		const { imageId } = props.attributes;

		const BLOCK_TEMPLATE = [
			[
				"smt-theme/paragraph",
				{
					level: "p",
					textStyle: "one",
					textColor: "#000",
					textColorClass: "eight",
					placeholder: "Bezeichnung..." 
				},
			],
			[
				"smt-theme/paragraph",
				{
					level: "p",
					textStyle: "one",
					textColor: "#000",
					textColorClass: "eight",
					content: "<strong>Expertisen:</strong>"
				},
			],
			[
				"smt-theme/list",
				{
					"listStyle":"one"
				}
			]
		  ];

		const innerBlocksProps = useInnerBlocksProps(
			{ className: "" },
			{
			  template: BLOCK_TEMPLATE,
			  renderappender: false,
			  allowedBlocks: ['smt-theme/list-item']
			}
		  );
		

		return {
			getBlock,
			getBlockRootClientId,
			getBlockIndex,
			getBlockOrder,
			Image: imageId ? getMedia(imageId) : null,
			innerBlocksProps
		};
	}),
	withDispatch((dispatch, props) => {
		const { insertBlock } = dispatch("core/block-editor");
		return {
			insertBlock,
		};
	}),
])(Edit);
