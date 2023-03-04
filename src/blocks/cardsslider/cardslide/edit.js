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
	useBlockProps,
	PanelColorSettings,
	__experimentalLinkControl as LinkControl,
} from "@wordpress/block-editor";
import { withSelect, withDispatch, subscribe } from "@wordpress/data";
import { createBlock } from "@wordpress/blocks";
import { theme_colors } from "../../../utils/block-helpers";
import { SplideSlide } from '@splidejs/react-splide';
import { Platform, useState, useRef } from "@wordpress/element";
/**
 * External dependencies
 */
import classnames from "classnames";



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
			const insertedBlock = createBlock("smt-theme/cardslide");

			insertBlock(insertedBlock, index, rootId);
		}
	}

	renderBlockControls() {
		return (
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						label={__("Add card Slide Before", "smt-theme")}
						onClick={() => {
							this.addSlide("before");
						}}
					>
						{__("Add card Slide Before", "smt-theme")}
					</ToolbarButton>
					<ToolbarButton
						label={__("Add card Slide After", "smt-theme")}
						onClick={() => {
							this.addSlide();
						}}
					>
						{__("Add card Slide After", "smt-theme")}
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
		const { xsimageUrl, imageId, altText, xswebpImageUrl, headlinelevel, texttag, headlinetext, description, headColor, headColorClass, textColor, textColorClass, buttonUrl, buttonlinkTarget, buttonText, buttonColor, buttonColorClass } =
			this.props.attributes;
		const { setAttributes, Image, blockProps, richTextRef, isEditingURL,
			setIsEditingURL } = this.props;

		const headlinetag = headlinelevel == "span" ? "span" : "h" + headlinelevel;

		const headlineClass = classnames(
			`card--name headline headline--style-four`,
			`headline--color-${headColorClass}`,
		  );

		const textClass = classnames(
			`card--text text text--style-one`,
			`text--color-${textColorClass}`,
		);

		const buttonclasses = `button--cta button--style-one button--color-${buttonColorClass}`;
	
		const instructions = (
			<p>
				{__(
					"To edit the background image, you need permission to upload media.",
					"smt-theme"
				)}
			</p>
		);

		const opensInNewTab = buttonlinkTarget === "_blank";
		const relAttributes = [];

		function unlink() {
			  setAttributes({
				buttonUrl: undefined,
				buttonlinkTarget: undefined,
			  });
			  setIsEditingURL(false);
		}
		
		function onToggleOpenInNewTab(value) {
			  const newLinkTarget = value ? "_blank" : undefined;
			  if (newLinkTarget) {
				relAttributes.push("noopener");
			  }
			  setAttributes({
				buttonlinkTarget: newLinkTarget,
			  });
		}

		const relation = relAttributes && relAttributes.length > 0
			  ? relAttributes.join(" ")
			  : null;
		  

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

		const SetHeadlineColorClass = (value) => {
			if (value !== undefined) {
			  theme_colors.filter(function (item) {
				if (item.color == value) {
				  setAttributes({
					headColorClass: item.slug,
				  });
				}
			  });
			} else {
			  setAttributes({
				headColorClass: "",
			  });
			}
		  };

		const SetTextColorClass = (value) => {
		if (value !== undefined) {
			theme_colors.filter(function (item) {
			if (item.color == value) {
				setAttributes({
					textColorClass: item.slug,
				});
			}
			});
		} else {
			setAttributes({
				textColorClass: "",
			});
		}
		};

		const SetButtonColorClass = (value) => {
			if (value !== undefined) {
				theme_colors.filter(function (item) {
				if (item.color == value) {
					setAttributes({
						buttonColorClass: item.slug,
					});
				}
				});
			} else {
				setAttributes({
					buttonColorClass: "",
				});
			}
			};

	
		
		return (

			<SplideSlide >
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
					<PanelBody title={__("Headline", "smt-theme")} initialOpen={false}>
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
						<PanelColorSettings
							title={__("Color", "smt-theme")}
							className={"block-color-setting block-color-top-0"}
							colorSettings={[
							{
								colors: theme_colors,
								value: headColor,
								onChange: (value) => {
								typeof value == "undefined"
									? setAttributes({ headColorClass: "" })
									: SetHeadlineColorClass(value);
								typeof value == "undefined"
									? setAttributes({
										headColor: "#575756",
									})
									: setAttributes({ headColor: value });
								},
								label: __("Color", "smt-theme"),
							},
							]}
						/>
					</PanelBody>
					<PanelBody title={__("Text", "smt-theme")} initialOpen={false}>
						<ToggleGroupControl
							label={__("Text Tag", "smt-theme")}
							value={texttag}
							onChange={(value) => {
							setAttributes({
								texttag: value,
							});
							}}
							className="block-toggle-full">
							<ToggleGroupControlOption
							value="p"
							label={__("P", "smt-theme")}
							showTooltip={true}
							aria-label={__("P", "smt-theme")}
							/>
							<ToggleGroupControlOption
							value="span"
							label={__("SPAN", "smt-theme")}
							showTooltip={true}
							aria-label={__("Span", "smt-theme")}
							/>
						</ToggleGroupControl>
						<PanelColorSettings
							title={__("Color", "smt-theme")}
							className={"block-color-setting block-color-top-0"}
							colorSettings={[
							{
								colors: theme_colors,
								value: textColor,
								onChange: (value) => {
								typeof value == "undefined"
									? setAttributes({ textColorClass: "" })
									: SetTextColorClass(value);
								typeof value == "undefined"
									? setAttributes({
										textColor: "#575756",
									})
									: setAttributes({ textColor: value });
								},
								label: __("Color", "smt-theme"),
							},
							]}
						/>
					</PanelBody>
					<PanelBody title={__("Button", "smt-theme")} initialOpen={false}>
						<div className="gb--link-control">
							<LinkControl
								className="wp-block-navigation-link__inline-link-input"
								value={{
								url: buttonUrl,
								opensInNewTab: opensInNewTab,
								}}
								onChange={(value) => {
								if (opensInNewTab !== value.opensInNewTab) {
									onToggleOpenInNewTab(value.opensInNewTab);
								}
								setAttributes({
									buttonUrl: value.url,
									opensInNewTab: value.opensInNewTab,
								});
								}}
								onRemove={() => {
								unlink();
								richTextRef.current?.focus();
								}}
								forceIsEditingLink={isEditingURL}
							/>
						</div>	
						<PanelColorSettings
							title={__("Color", "smt-theme")}
							className={"block-color-setting block-color-top-0"}
							colorSettings={[
							{
								colors: theme_colors,
								value: buttonColor,
								onChange: (value) => {
								typeof value == "undefined"
									? setAttributes({ buttonColorClass: "" })
									: SetButtonColorClass(value);
								typeof value == "undefined"
									? setAttributes({
										buttonColor: "#575756",
									})
									: setAttributes({ buttonColor: value });
								},
								label: __("Color", "smt-theme"),
							},
							]}
						/>
					</PanelBody>
				</InspectorControls>
				<div {...blockProps}>
					{xsimageUrl ? (
						<div className="image">
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
						</div>
					) : (
						""
					)}
					<div className="card__inner">
						<RichText
							identifier="headlinetext"
							tagName={headlinetag}
							className={headlineClass}
							value={headlinetext} 
							allowedFormats={ [] } 
							onChange={ ( content ) => setAttributes( { headlinetext: content } ) } 
							placeholder={ __( 'Heading...' ) } 
						/>
						<RichText
							identifier="description"
							className={textClass}
							tagName={texttag}
							value={description} 
							allowedFormats={ [] } 
							onChange={ ( content ) => setAttributes( { description: content } ) } 
							placeholder={ __( 'Description Text...' ) } 
						/>
						 <a
							onClick={(e) => e.preventDefault()}
							href={!!buttonUrl ? buttonUrl : null}
							className={buttonclasses}
							target={!!buttonlinkTarget ? "_blank" : null}
							rel={relation}>
								<span className="button--text">
									<RichText
										ref={richTextRef}
										value={buttonText}
										onChange={(value) => setAttributes({ buttonText: value })}
										aria-label={__("Button text", "smt-theme")}
										placeholder={__("Add text here...", "smt-theme")}
										{...(Platform.isNative && { deleteEnter: true })} 
										allowedFormats={[]}
									/>
								</span>
						</a>
					</div>
				</div>			
			</SplideSlide>
		);
	}
}


export default compose([
	withSelect((select, props) => {
		const { getBlock, getBlockRootClientId, getBlockIndex, getBlockOrder } =
			select("core/block-editor");
		const { getMedia } = select("core");
	
		const { imageId } = props.attributes;

		const blockProps = useBlockProps({
			className: 'card__wrapper'
		});

		const richTextRef = useRef();

		const [isEditingURL, setIsEditingURL] = useState(false);

		return {
			getBlock,
			getBlockRootClientId,
			getBlockIndex,
			getBlockOrder,
			Image: imageId ? getMedia(imageId) : null,
			blockProps,
			richTextRef,
			isEditingURL,
			setIsEditingURL
		};
	}),
	withDispatch((dispatch, props) => {
		const { insertBlock } = dispatch("core/block-editor");
		return {
			insertBlock,
		};
	}),
])(Edit);

