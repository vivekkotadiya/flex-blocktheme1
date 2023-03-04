/**
 * External Dependencies
 */
import classnames from "classnames";

/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { withSelect } from "@wordpress/data";
import {
  InspectorControls,
  PanelColorSettings,
  MediaUpload,
  MediaUploadCheck,
  useInnerBlocksProps,
  RichText,
  __experimentalLinkControl as LinkControl,
} from "@wordpress/block-editor";
import {
  Spinner,
  Button,
  PanelBody,
  ResponsiveWrapper,
  __experimentalToggleGroupControl as ToggleGroupControl,
  __experimentalToggleGroupControlOption as ToggleGroupControlOption,
  TextControl,
  ToggleControl,
} from "@wordpress/components";
import { compose } from "@wordpress/compose";
import { Platform, useState, useRef, Component } from "@wordpress/element";

/***
 * Interal dependencies
 */
import { theme_colors } from "../../utils/block-helpers";
import smtLogo from "../../assets/images/smtLogo.svg";
import smtLogoDark from "../../assets/images/SMTLogo-dark.svg";

class Edit extends Component {
  constructor(props) {
    super(...arguments);
  }

  render() {
    const {
      attributes: {
        backgroundAlt,
        backgroundDefaultAlt,
        xlbackgroundImageId,
        xlbackgroundImagesrcArray,
        mdbackgroundImagesrcArray,
        xsbackgroundImagesrcArray,
        mdbackgroundImageId,
        xsbackgroundImageId,
        visualAlt,
        visualDefaultAlt,
        visualImageId,
        visualImagesrc,
        visualImageWebpsrc,
        visualImageMdSrc,
        visualImageMdWebpsrc,
        visualImageXsSrc,
        visualImageXsWebpsrc,
        headline,
        level,
        headlineColor,
        headlineColorClass,
        subHeadline,
        subHeadlineLevel,
        subHeadlineColor,
        subHeadlineColorClass,
        showLogo,
        LogoColor,
        anchor,
        buttonUrl, buttonlinkTarget, buttonText, buttonColor, buttonColorClass
      },
      xlbackgroundImage,
      mdbackgroundImage,
      xsbackgroundImage,
      setAttributes,
      visualImage,
      hasinnerBlocksProps,
      bgResponsiveMode,
      setbgResponsiveMode,
      richTextRef,
      isEditingURL,
      setIsEditingURL
    } = this.props;

    const headlineTag = level == "span" ? "span" : "h" + level;
    const subHeadlineTag =
      subHeadlineLevel == "span" ? "span" : "h" + subHeadlineLevel;

    const buttonclasses = `button--cta button--style-one button--width-xs-inline button--color-${buttonColorClass}`;
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
        backgroundDefaultAlt: image.alt,
      });

      let xlsrcArray = {};
      if (bgResponsiveMode == "xl") {
        xlsrcArray["xl"] = image?.sizes?.xl?.url
          ? image?.sizes?.xl?.url
          : image.url;
        xlsrcArray["md"] = image?.sizes?.md?.url
          ? image?.sizes?.md?.url
          : image.url;
        xlsrcArray["xs"] = image?.sizes?.xs?.url
          ? image?.sizes?.xs?.url
          : image.url;

        // Tablet Image
        var mdwebp = "";
        mdwebp = setmdWebpImage(image);
        if (mdwebp) {
          xlsrcArray["mdwebp"] = mdwebp;
        }

        // Mobile Image
        var xswebp = "";
        xswebp = setxsWebpImage(image);
        if (xswebp) {
          xlsrcArray["xswebp"] = xswebp;
        }

        // Desktop Image
        var xlwebp = "";
        var xlwebpExist = "";
        if (image.sizes["xl"]) {
          xlwebp =
            image.sizes["xl"].url.substring(
              0,
              image.sizes["xl"].url.lastIndexOf(".") + 1
            ) + "webp";
        } else {
          xlwebp =
            image.url.substring(0, image.url.lastIndexOf(".") + 1) + "webp";
        }
        var exists = isExistWebp(xlwebp);
        if (exists == true) {
          xlwebpExist = xlwebp;
        }

        xlsrcArray["xlwebp"] = xlwebpExist;

        setAttributes({
          xlbackgroundImageId: image.id,
          xlbackgroundImagesrcArray: xlsrcArray,
        });
      }
      let mdsrcArray = {};
      if (bgResponsiveMode == "md") {
        mdsrcArray["md"] = image?.sizes?.md?.url
          ? image?.sizes?.md?.url
          : image.url;

        mdsrcArray["xs"] = image?.sizes?.xs?.url
          ? image?.sizes?.xs?.url
          : image.url;

        // Mobile Image
        var xswebp = "";
        xswebp = setxsWebpImage(image);
        if (xswebp) {
          mdsrcArray["xswebp"] = xswebp;
        }

        // Tablet Image
        var mdwebp = "";
        mdwebp = setmdWebpImage(image);
        mdsrcArray["mdwebp"] = mdwebp;
        setAttributes({
          mdbackgroundImageId: image.id,
          mdbackgroundImagesrcArray: mdsrcArray,
        });
      }

      let xssrcArray = {};
      if (bgResponsiveMode == "xs") {
        xssrcArray["xs"] = image?.sizes?.xs?.url
          ? image?.sizes?.xs?.url
          : image.url;
        var xswebp = "";
        xswebp = setxsWebpImage(image);
        if (xswebp) {
          xssrcArray["xswebp"] = xswebp;
        }

        setAttributes({
          xsbackgroundImageId: image.id,
          xsbackgroundImagesrcArray: xssrcArray,
        });
      }
    };

    const onUpdateVisualImage = (image) => {
      // Desktop Image
      var xlwebp = "";
      var xlwebpExist = "";
      if (image.sizes["xl"]) {
        xlwebp =
          image.sizes["xl"].url.substring(
            0,
            image.sizes["xl"].url.lastIndexOf(".") + 1
          ) + "webp";
      } else {
        xlwebp =
          image.url.substring(0, image.url.lastIndexOf(".") + 1) + "webp";
      }
      var exists = isExistWebp(xlwebp);

      if (exists == true) {
        xlwebpExist = xlwebp;
      }

      // Tablet Image
      var mdwebp = "";
      var mdwebpExist = "";
      if (image.sizes["md"]) {
        mdwebp =
          image.sizes["md"].url.substring(
            0,
            image.sizes["md"].url.lastIndexOf(".") + 1
          ) + "webp";
      } else {
        mdwebp =
          image.url.substring(0, image.url.lastIndexOf(".") + 1) + "webp";
      }
      var exists = isExistWebp(mdwebp);

      if (exists == true) {
        mdwebpExist = mdwebp;
      }

      // Mobile Image
      var xswebp = "";
      var xswebpExist = "";
      if (image.sizes["xs"]) {
        xswebp =
          image.sizes["xs"].url.substring(
            0,
            image.sizes["xs"].url.lastIndexOf(".") + 1
          ) + "webp";
      } else {
        xswebp =
          image.url.substring(0, image.url.lastIndexOf(".") + 1) + "webp";
      }
      var exists = isExistWebp(xswebp);

      if (exists == true) {
        xswebpExist = xswebp;
      }

      setAttributes({
        visualDefaultAlt: image.alt,
        visualImageId: image.id,
        visualImagesrc: image?.sizes?.xl?.url
          ? image?.sizes?.xl?.url
          : image.url,
        visualImageWebpsrc: xlwebpExist,
        visualImageMdSrc: image?.sizes?.md?.url
          ? image?.sizes?.md?.url
          : image.url,
        visualImageMdWebpsrc: mdwebpExist,
        visualImageXsSrc: image?.sizes?.xs?.url
          ? image?.sizes?.xs?.url
          : image.url,
        visualImageXsWebpsrc: xswebpExist,
      });
    };

    const setmdWebpImage = (image) => {
      var mdwebp = "";
      var mdwebpExist = "";
      if (image.sizes["md"]) {
        mdwebp =
          image.sizes["md"].url.substring(
            0,
            image.sizes["md"].url.lastIndexOf(".") + 1
          ) + "webp";
      } else {
        mdwebp =
          image.url.substring(0, image.url.lastIndexOf(".") + 1) + "webp";
      }
      var exists = isExistWebp(mdwebp);
      if (exists == true) {
        mdwebpExist = mdwebp;
      }
      return mdwebpExist;
    };

    const setxsWebpImage = (image) => {
      var xswebp = "";
      var xswebpExist = "";
      if (image.sizes["xs"]) {
        xswebp =
          image.sizes["xs"].url.substring(
            0,
            image.sizes["xs"].url.lastIndexOf(".") + 1
          ) + "webp";
      } else {
        xswebp =
          image.url.substring(0, image.url.lastIndexOf(".") + 1) + "webp";
      }
      var exists = isExistWebp(xswebp);
      if (exists == true) {
        xswebpExist = xswebp;
      }
      return xswebpExist;
    };

    const isExistWebp = (webp) => {
      var status = false;
      var xhr = new XMLHttpRequest();
      xhr.open("HEAD", webp, false);
      xhr.send();
      if (xhr.status != "404") {
        status = true;
      }
      return status;
    };

    const onRemoveImage = () => {
      if (bgResponsiveMode == "xl") {
        setAttributes({
          xlbackgroundImageId: undefined,
          xlbackgroundImagesrcArray: [],
        });
      }
      if (bgResponsiveMode == "md") {
        setAttributes({
          mdbackgroundImageId: undefined,
          mdbackgroundImagesrcArray: [],
        });
      }
      if (bgResponsiveMode == "xs") {
        setAttributes({
          xsbackgroundImageId: undefined,
          xsbackgroundImagesrcArray: [],
        });
      }
    };

    const onRemoveVisualImage = () => {
      setAttributes({
        visualDefaultAlt: "",
        visualImageId: undefined,
        visualImagesrc: "",
        visualImageWebpsrc: "",
        visualImageMdSrc: "",
        visualImageMdWebpsrc: "",
        visualImageXsSrc: "",
        visualImageXsWebpsrc: "",
      });
    };

    const resMode = ["xs", "md", "xl"];

    const responsiveBgImage = {
      xs: {
        BgId: xsbackgroundImageId,
        BgImage: xsbackgroundImage,
      },
      md: {
        BgId: mdbackgroundImageId,
        BgImage: mdbackgroundImage,
      },
      xl: {
        BgId: xlbackgroundImageId,
        BgImage: xlbackgroundImage,
      },
    };

    const SetColorClass = (value) => {
      theme_colors.filter(function (item) {
        if (item.color == value) {
          setAttributes({
            headlineColorClass: item.slug,
          });
        }
      });
    };

    const SetSubHeadColorClass = (value) => {
      theme_colors.filter(function (item) {
        if (item.color == value) {
          setAttributes({
            subHeadlineColorClass: item.slug,
          });
        }
      });
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

    let xlImage = "";
    let xlwebpImage = "";
    let mdImage = "";
    let mdwebpImage = "";
    let xsImage = "";
    let xswebpImage = "";

    if (
      xlbackgroundImagesrcArray ||
      mdbackgroundImagesrcArray ||
      xsbackgroundImagesrcArray
    ) {
      // Desktop Image
      if (xlbackgroundImagesrcArray) {
        if (xlbackgroundImagesrcArray["xl"]) {
          xlImage = xlbackgroundImagesrcArray["xl"];
        }
        if (xlbackgroundImagesrcArray["xlwebp"]) {
          xlwebpImage = xlbackgroundImagesrcArray["xlwebp"];
        }
      }

      // Tablet Image
      if (mdbackgroundImagesrcArray && mdbackgroundImagesrcArray["md"]) {
        mdImage = mdbackgroundImagesrcArray["md"];
      } else {
        if (xlbackgroundImagesrcArray && xlbackgroundImagesrcArray["md"]) {
          mdImage = xlbackgroundImagesrcArray["md"];
        }
      }

      if (mdbackgroundImagesrcArray && mdbackgroundImagesrcArray["mdwebp"]) {
        mdwebpImage = mdbackgroundImagesrcArray["mdwebp"];
      } else {
        if (xlbackgroundImagesrcArray && xlbackgroundImagesrcArray["mdwebp"]) {
          mdwebpImage = xlbackgroundImagesrcArray["mdwebp"];
        }
      }

      // Mobile Image
      if (xsbackgroundImagesrcArray && xsbackgroundImagesrcArray["xs"]) {
        xsImage = xsbackgroundImagesrcArray["xs"];
      } else {
        if (mdbackgroundImagesrcArray && mdbackgroundImagesrcArray["xs"]) {
          xsImage = mdbackgroundImagesrcArray["xs"];
        } else {
          if (xlbackgroundImagesrcArray && xlbackgroundImagesrcArray["xs"]) {
            xsImage = xlbackgroundImagesrcArray["xs"];
          }
        }
      }
      if (xsbackgroundImagesrcArray && xsbackgroundImagesrcArray["xswebp"]) {
        xswebpImage = xsbackgroundImagesrcArray["xswebp"];
      } else {
        if (mdbackgroundImagesrcArray && mdbackgroundImagesrcArray["xswebp"]) {
          xswebpImage = mdbackgroundImagesrcArray["xswebp"];
        } else {
          if (
            xlbackgroundImagesrcArray &&
            xlbackgroundImagesrcArray["xswebp"]
          ) {
            xswebpImage = xlbackgroundImagesrcArray["xswebp"];
          }
        }
      }
    }

    const logoclass = showLogo ? `section--logo` : "";

    return (
      <>
        <InspectorControls>
          <PanelBody
            title={__("Logo Settings", "smt-theme")}
            initialOpen={true}>
            <ToggleControl
              label={__(
                "Show/Hide the Logo in the left top cornor",
                "smt-theme"
              )}
              checked={showLogo}
              onChange={() =>
                setAttributes({
                  showLogo: !showLogo,
                })
              }
            />
            <ToggleGroupControl
              label={__("Logo Color", "smt-theme")}
              className="block-togglegroup"
              value={LogoColor}
              isBlock
              onChange={(value) => {
                setAttributes({
                  LogoColor: value,
                });
              }}>
              <ToggleGroupControlOption
                value="light"
                label={__("Light", "smt-theme")}
                showTooltip={true}
                aria-label={__("Light", "smt-theme")}
              />
              <ToggleGroupControlOption
                value="dark"
                label="Dark"
                showTooltip={true}
                aria-label="Dark"
              />
            </ToggleGroupControl>
          </PanelBody>
          <PanelBody title={__("Headline", "smt-theme")} initialOpen={false}>
            <ToggleGroupControl
              label={__("Tag", "smt-theme")}
              value={level}
              onChange={(value) => {
                setAttributes({
                  level: value,
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
                  value: headlineColor,
                  onChange: (value) => {
                    typeof value == "undefined"
                      ? setAttributes({ headlineColorClass: "" })
                      : SetColorClass(value);
                    typeof value == "undefined"
                      ? setAttributes({
                          headlineColor: "#ffffff",
                        })
                      : setAttributes({ headlineColor: value });
                  },
                  label: __("Color", "smt-theme"),
                },
              ]}
            />
          </PanelBody>
          <PanelBody title={__("Sub Headline", "smt-theme")} initialOpen={false}>
            <ToggleGroupControl
              label={__("Tag", "smt-theme")}
              value={subHeadlineLevel}
              onChange={(value) => {
                setAttributes({
                  subHeadlineLevel: value,
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
                  value: subHeadlineColor,
                  onChange: (value) => {
                    typeof value == "undefined"
                      ? setAttributes({ subHeadlineColorClass: "" })
                      : SetSubHeadColorClass(value);
                    typeof value == "undefined"
                      ? setAttributes({
                          subHeadlineColor: "#ffffff",
                        })
                      : setAttributes({ subHeadlineColor: value });
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
          <PanelBody title={__("Background Image", "smt-theme")} initialOpen={false}>
            <ToggleGroupControl
              label=""
              className="responsive_buttons"
              value={bgResponsiveMode}
              isBlock
              onChange={(value) => {
                setbgResponsiveMode(value);
              }}>
              <ToggleGroupControlOption
                value="xl"
                label={__("Desktop", "smt-theme")}
                showTooltip={true}
                aria-label={__("Device > 1440px", "smt-theme")}
              />
              <ToggleGroupControlOption
                value="md"
                label={__("Tablet", "smt-theme")}
                showTooltip={true}
                aria-label={__(
                  "Device (min. 768px - max. 1440px)",
                  "smt-theme"
                )}
              />
              <ToggleGroupControlOption
                value="xs"
                label={__("Mobile", "smt-theme")}
                showTooltip={true}
                aria-label={__("Device (max. 768px)", "smt-theme")}
              />
            </ToggleGroupControl>
            {bgResponsiveMode && (
              <div className="media-control">
                {resMode.map((item, index) => {
                  return (
                    <div className="media-control-wrap" id={`media-${index}`}>
                      {bgResponsiveMode == item ? (
                        <MediaUploadCheck fallback={instructions}>
                          <MediaUpload
                            title={__("Background Image", "tbblocks")}
                            onSelect={onUpdateImage}
                            allowedTypes={ALLOWED_MEDIA_TYPES}
                            value={responsiveBgImage[item]["BgId"]}
                            render={({ open }) => (
                              <Button
                                id={`media-imgbtn-${index}`}
                                className={
                                  !responsiveBgImage[item]["BgId"]
                                    ? "editor-post-featured-image__toggle"
                                    : "editor-post-featured-image__preview"
                                }
                                onClick={open}>
                                {!!responsiveBgImage[item]["BgId"] &&
                                  !responsiveBgImage[item]["BgImage"] && (
                                    <Spinner />
                                  )}
                                {!responsiveBgImage[item]["BgId"] &&
                                  __("Set image", "tbblocks")}
                                {!!responsiveBgImage[item]["BgId"] &&
                                  responsiveBgImage[item]["BgImage"] && (
                                    <ResponsiveWrapper
                                      naturalWidth={
                                        responsiveBgImage[item]["BgImage"]
                                          .media_details.width
                                      }
                                      naturalHeight={
                                        responsiveBgImage[item]["BgImage"]
                                          .media_details.height
                                      }>
                                      <img
                                        src={
                                          responsiveBgImage[item]["BgImage"]
                                            .source_url
                                        }
                                        alt={__("Background image", "tbblocks")}
                                      />
                                    </ResponsiveWrapper>
                                  )}
                              </Button>
                            )}
                          />
                        </MediaUploadCheck>
                      ) : (
                        <></>
                      )}
                      {bgResponsiveMode == item &&
                      !!responsiveBgImage[item]["BgId"] &&
                      responsiveBgImage[item]["BgImage"] ? (
                        <MediaUploadCheck>
                          <MediaUpload
                            title={__("Background Image", "tbblocks")}
                            onSelect={onUpdateImage}
                            allowedTypes={ALLOWED_MEDIA_TYPES}
                            value={responsiveBgImage[item]["BgId"]}
                            render={({ open }) => (
                              <Button
                                id={`media-replacebtn-${index}`}
                                onClick={open}
                                variant="secondary"
                                isLarge
                                className="block--image-attr block-section-background-image-replace">
                                {__("Replace background image", "tbblocks")}
                              </Button>
                            )}
                          />
                        </MediaUploadCheck>
                      ) : (
                        <></>
                      )}
                      {bgResponsiveMode == item &&
                      !!responsiveBgImage[item]["BgId"] ? (
                        <MediaUploadCheck>
                          <Button
                            id={`media-removebtn-${index}`}
                            onClick={onRemoveImage}
                            isDestructive
                            className="block--image-attr block-section-background-image-remove">
                            {__("Remove background image", "tbblocks")}
                          </Button>
                        </MediaUploadCheck>
                      ) : (
                        <></>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
            <TextControl
              className="block-mt"
              label={__("Alt Text", "smt-theme")}
              placeholder="Overwrite Alt Text…"
              type="text"
              value={backgroundAlt}
              onChange={(value) => setAttributes({ backgroundAlt: value })}
            />
          </PanelBody>
          <PanelBody
            title={__("Visual Image", "smt-theme")}
            initialOpen={false}>
            <div className="media-control">
              <div className="media-control-wrap" id={`media-visual`}>
                <MediaUploadCheck fallback={instructions}>
                  <MediaUpload
                    title={__("Visual Image", "tbblocks")}
                    onSelect={onUpdateVisualImage}
                    allowedTypes={ALLOWED_MEDIA_TYPES}
                    value={visualImageId}
                    render={({ open }) => (
                      <Button
                        id={`media-imgbtn`}
                        className={
                          !visualImageId
                            ? "editor-post-featured-image__toggle"
                            : "editor-post-featured-image__preview"
                        }
                        onClick={open}>
                        {!!visualImageId && !visualImage && <Spinner />}
                        {!visualImageId && __("Set image", "tbblocks")}
                        {!!visualImageId && visualImage && (
                          <ResponsiveWrapper
                            naturalWidth={visualImage.media_details.width}
                            naturalHeight={visualImage.media_details.height}>
                            <img
                              src={visualImage.source_url}
                              alt={__("Visual image", "tbblocks")}
                            />
                          </ResponsiveWrapper>
                        )}
                      </Button>
                    )}
                  />
                </MediaUploadCheck>
                {!!visualImageId && visualImage ? (
                  <MediaUploadCheck>
                    <MediaUpload
                      title={__("Visual Image", "tbblocks")}
                      onSelect={onUpdateVisualImage}
                      allowedTypes={ALLOWED_MEDIA_TYPES}
                      value={visualImageId}
                      render={({ open }) => (
                        <Button
                          id={`media-replacebtn`}
                          onClick={open}
                          variant="secondary"
                          isLarge
                          className="block--image-attr block-section-background-image-replace">
                          {__("Replace visual image", "tbblocks")}
                        </Button>
                      )}
                    />
                  </MediaUploadCheck>
                ) : (
                  <></>
                )}
                {!!visualImageId ? (
                  <MediaUploadCheck>
                    <Button
                      id={`media-removebtn`}
                      onClick={onRemoveVisualImage}
                      isDestructive
                      className="block--image-attr block-section-background-image-remove">
                      {__("Remove visual image", "tbblocks")}
                    </Button>
                  </MediaUploadCheck>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <TextControl
              className="block-mt"
              label={__("Alt Text", "smt-theme")}
              placeholder="Lorem ipsum dolor…"
              type="text"
              value={visualAlt}
              onChange={(value) => setAttributes({ visualAlt: value })}
            />
          </PanelBody>
          <PanelBody title={__("Additional Settings", "smt-theme")}  initialOpen={false}>
            <TextControl
              className="block-mt"
              label={__("Anchor", "smt-theme")}
              placeholder=""
              type="text"
              value={anchor}
              onChange={(value) => setAttributes({ anchor: value })}
            />
          </PanelBody>
        </InspectorControls>
        <section 
          id = { anchor ? anchor : null } 
          className={classnames(`section section--hero-study`, `${logoclass}`)}>
          {(xlImage || mdImage || xsImage) && (
            <div className="section__background">
              <picture>
                {/* Desktop Image rendering */}
                {xlwebpImage && (
                  <source
                    media="(min-width:1025px)"
                    srcset={`${xlwebpImage}`}
                    type="image/webp"
                  />
                )}
                {xlImage && (
                  <source media="(min-width:1025px)" srcset={`${xlImage}`} />
                )}

                {/* Tablet Image Rendering */}
                {mdwebpImage && (
                  <source
                    media="(min-width:481px)"
                    srcset={`${mdwebpImage}`}
                    type="image/webp"
                  />
                )}
                {mdImage && (
                  <source media="(min-width:481px)" srcset={`${mdImage}`} />
                )}

                {/* Mobile Image Rendering */}
                {xswebpImage && (
                  <source
                    media="(max-width:480px)"
                    srcset={`${xswebpImage}`}
                    type="image/webp"
                  />
                )}
                {xsImage && (
                  <source media="(max-width:480px)" srcset={`${xsImage}`} />
                )}

                {xlImage ? (
                  <img
                    src={`${xlImage}`}
                    alt={
                      "" !== backgroundAlt
                        ? `${backgroundAlt}`
                        : `${backgroundDefaultAlt}`
                    }
                    width="auto"
                    height="auto"
                  />
                ) : !xlImage && mdImage ? (
                  <img
                    src={`${mdImage}`}
                    alt={
                      "" !== backgroundAlt
                        ? `${backgroundAlt}`
                        : `${backgroundDefaultAlt}`
                    }
                    width="auto"
                    height="auto"
                  />
                ) : !xlImage && !mdImage && xsImage ? (
                  <img
                    src={`${xsImage}`}
                    alt={
                      "" !== backgroundAlt
                        ? `${backgroundAlt}`
                        : `${backgroundDefaultAlt}`
                    }
                    width="auto"
                    height="auto"
                  />
                ) : (
                  ""
                )}
              </picture>
            </div>
          )}

          { showLogo == true && (
            <a
              href="/"
              className={`section__logo section__logo--${LogoColor}`}
              onClick={(e) => e.preventDefault()}>
              {LogoColor == "light" ? (
                <img
                  src={smtLogo}
                  alt="SMT - School of Management and Technology"
                />
              ) : (
                <img
                  src={smtLogoDark}
                  alt="SMT - School of Management and Technology"
                />
              )}
            </a>
          )}

          {"" !== visualImagesrc && (
            <div className="image__visual">
              <picture>
                {/* Desktop Image rendering */}
                {visualImageWebpsrc && (
                  <source
                    media="(min-width:1025px)"
                    srcset={`${visualImageWebpsrc}`}
                    type="image/webp"
                  />
                )}
                {visualImagesrc && (
                  <source
                    media="(min-width:1025px)"
                    srcset={`${visualImagesrc}`}
                  />
                )}
                {/* Tablet Image Rendering */}
                {visualImageMdWebpsrc && (
                  <source
                    media="(min-width:481px)"
                    srcset={`${visualImageMdWebpsrc}`}
                    type="image/webp"
                  />
                )}
                {visualImageMdSrc && (
                  <source
                    media="(min-width:481px)"
                    srcset={`${visualImageMdSrc}`}
                  />
                )}

                {/* Mobile Image Rendering */}
                {visualImageXsWebpsrc && (
                  <source
                    media="(max-width:480px)"
                    srcset={`${visualImageXsWebpsrc}`}
                    type="image/webp"
                  />
                )}
                {visualImageXsSrc && (
                  <source
                    media="(max-width:480px)"
                    srcset={`${visualImageXsSrc}`}
                  />
                )}

                {visualImagesrc ? (
                  <img
                    src={`${visualImagesrc}`}
                    alt={
                      "" !== visualAlt ? `${visualAlt}` : `${visualDefaultAlt}`
                    }
                    width="auto"
                    height="auto"
                  />
                ) : !visualImagesrc && visualImageMdSrc ? (
                  <img
                    src={`${visualImageMdSrc}`}
                    alt={
                      "" !== visualAlt ? `${visualAlt}` : `${visualDefaultAlt}`
                    }
                    width="auto"
                    height="auto"
                  />
                ) : !visualImagesrc && !visualImageMdSrc && visualImageXsSrc ? (
                  <img
                    src={`${visualImageXsSrc}`}
                    alt={
                      "" !== visualAlt ? `${visualAlt}` : `${visualDefaultAlt}`
                    }
                    loading="lazy"
                  />
                ) : (
                  ""
                )}
              </picture>
            </div>
          )}
         
          <div className="section__content">
            <div className="row-wrapper">
              <div className="row row--xs-middle row-wrapper--ct-wd">
                <div className="col col--xs-12 col--md-12 col--lg-7">
                  <div className="col-content">
                    <div className="col__inner">
                      <RichText
                        identifier="headline--style-six"
                        tagName={headlineTag}
                        className={classnames(
                          "headline headline--style-six",
                          "" !== headlineColorClass
                            ? "headline--color-" + headlineColorClass
                            : "headline--color-one"
                        )}
                        value={headline}
                        onChange={(value) => setAttributes({ headline: value })}
                        withoutInteractiveFormatting={true}
                        aria-label={__("Heading text", "smt-theme")}
                        placeholder={__("Heading", "smt-theme")}
                        {...(Platform.isNative && { deleteEnter: true })} // setup RichText on native mobile to delete the "Enter" key as it's handled by the JS/RN side
                        allowedFormats={[""]}
                      />
                      <RichText
                        identifier="headline--style-three"
                        tagName={subHeadlineTag}
                        className={classnames(
                          "headline headline--style-three",
                          "" !== subHeadlineColorClass
                            ? "headline--color-" + subHeadlineColorClass
                            : "headline--color-one"
                        )}
                        value={subHeadline}
                        onChange={(value) => setAttributes({ subHeadline: value })}
                        withoutInteractiveFormatting={true}
                        aria-label={__("Sub Heading text", "smt-theme")}
                        placeholder={__("Sub Heading", "smt-theme")}
                        {...(Platform.isNative && { deleteEnter: true })} // setup RichText on native mobile to delete the "Enter" key as it's handled by the JS/RN side
                        allowedFormats={[""]}
                      />
                    </div>
                    { buttonUrl && 
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
                      }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default compose(
  withSelect((select, props) => {
    const {
      xlbackgroundImageId,
      mdbackgroundImageId,
      xsbackgroundImageId,
      visualImageId
    } = props.attributes;

    const { getMedia } = select("core");

    const { clientId } = props;
    const { getBlockOrder } =
      select("core/block-editor") || select("core/editor"); // Fallback to 'core/editor' for backwards compatibility
      const richTextRef = useRef();

      const [isEditingURL, setIsEditingURL] = useState(false);
    return {
      xlbackgroundImage: xlbackgroundImageId
        ? getMedia(xlbackgroundImageId)
        : null,
      mdbackgroundImage: mdbackgroundImageId
        ? getMedia(mdbackgroundImageId)
        : null,
      xsbackgroundImage: xsbackgroundImageId
        ? getMedia(xsbackgroundImageId)
        : null,
      hasChildBlocks: getBlockOrder(clientId).length > 0,
      visualImage: visualImageId ? getMedia(visualImageId) : null,
      richTextRef,
      isEditingURL,
      setIsEditingURL
    };
  })
)(Edit);
