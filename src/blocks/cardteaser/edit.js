/**
 * External dependencies
 */
import classnames from "classnames";

/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import {
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
  RichText,
  PanelColorSettings,
  __experimentalLinkControl as LinkControl,
} from "@wordpress/block-editor";
import {
  Spinner,
  Button,
  PanelBody,
  ResponsiveWrapper,
  TextControl,
  __experimentalToggleGroupControl as ToggleGroupControl,
  __experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from "@wordpress/components";
import { Component, Platform, createRef } from "@wordpress/element";
import { compose } from "@wordpress/compose";
import { withSelect } from "@wordpress/data";

/**
 * Internal Dependencies
 */
import PlaceholderImg from "../../assets/images/placeholder.jpg";
import { theme_colors } from "../../utils/block-helpers";

class Edit extends Component {
  constructor() {
    super(...arguments);

    this.state = {
      isEditingURL: false,
    };
    this.richTextRef = createRef();
  }

  render() {
    const {
      attributes: {
        imageId,
        imageAlt,
        imageDefaultAlt,
        mdimageUrl,
        webpmdImageUrl,
        xsimageUrl,
        webpxsImageUrl,
        cardHeadColor,
        cardHeadColorClass,
        cardHead,
        cardHeadLevel,
        cardTextColor,
        cardTextColorClass,
        cardText,
        cardTextTag,
        cardTBtncontent,
        url,
        cardTBtntarget,
        cardTBtnColor,
        cardTBtnColorClass,
        anchor,
      },
      Image,
      setAttributes,
      mergeBlocks,
      onReplace,
    } = this.props;

    const opensInNewTab = cardTBtntarget === "_blank";

    const relAttributes = [];
    const unlink = () => {
      setAttributes({
        url: undefined,
        cardTBtntarget: undefined,
      });
      this.setState({ isEditingURL: false });
    };
    if (cardTBtntarget) {
      relAttributes.push("noopener");
    }

    function onToggleOpenInNewTab(value) {
      const newLinkTarget = value ? "_blank" : undefined;

      if (newLinkTarget) {
        relAttributes.push("noopener");
      }

      setAttributes({
        cardTBtntarget: newLinkTarget,
      });
    }

    const relation =
      relAttributes && relAttributes.length > 0
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
        imageId: image.id,
        mdimageUrl: image?.sizes?.md?.url ? image?.sizes?.md?.url : image.url,
        xsimageUrl: image?.sizes?.xs?.url ? image?.sizes?.xs?.url : image.url,
        webpmdImageUrl: image?.sizes?.md_webp?.url
          ? image?.sizes?.md_webp?.url
          : image.url,
        webpxsImageUrl: image?.sizes?.xs_webp?.url
          ? image?.sizes?.xs_webp?.url
          : image.url,
        imageDefaultAlt: image.alt,
      });
    };

    const onRemoveImage = () => {
      setAttributes({
        imageId: undefined,
        xsimageUrl: "",
        mdimageUrl: "",
        webpmdImageUrl: "",
        webpxsImageUrl: "",
      });
    };

    if (Image) {
      var mdwebp = "";
      if (Image.media_details.sizes["md"]) {
        mdwebp =
          Image.media_details.sizes["md"].source_url.substring(
            0,
            Image.media_details.sizes["md"].source_url.lastIndexOf(".") + 1
          ) + "webp";
      } else {
        mdwebp =
          Image.media_details.sizes["full"].source_url.substring(
            0,
            Image.media_details.sizes["full"].source_url.lastIndexOf(".") + 1
          ) + "webp";
      }
      var xhr = new XMLHttpRequest();
      xhr.open("HEAD", mdwebp, false);
      xhr.send();
      if (xhr.status != "404") {
        setAttributes({
          webpmdImageUrl: mdwebp,
        });
      } else {
        setAttributes({
          webpmdImageUrl: "",
        });
      }
      var xswebp = "";
      if (Image.media_details.sizes["xs"]) {
        xswebp =
          Image.media_details.sizes["xs"].source_url.substring(
            0,
            Image.media_details.sizes["xs"].source_url.lastIndexOf(".") + 1
          ) + "webp";
      } else {
        xswebp =
          Image.media_details.sizes["full"].source_url.substring(
            0,
            Image.media_details.sizes["full"].source_url.lastIndexOf(".") + 1
          ) + "webp";
      }
      var xhr = new XMLHttpRequest();
      xhr.open("HEAD", xswebp, false);
      xhr.send();
      if (xhr.status != "404") {
        setAttributes({
          webpxsImageUrl: xswebp,
        });
      } else {
        setAttributes({
          webpxsImageUrl: "",
        });
      }
    }

    const SetColorClass = (value, type) => {
      if (value !== undefined) {
        theme_colors.filter(function (item) {
          if (item.color == value) {
            if (type == "head") {
              setAttributes({
                cardHeadColorClass: item.slug,
              });
            } else if (type == "text") {
              setAttributes({
                cardTextColorClass: item.slug,
              });
            } else if (type == "button") {
              setAttributes({
                cardTBtnColorClass: item.slug,
              });
            }
          }
        });
      } else {
        if (type == "head") {
          setAttributes({
            cardHeadColorClass: "",
          });
        } else if (type == "text") {
          setAttributes({
            cardTextColorClass: "",
          });
        } else if (type == "button") {
          setAttributes({
            cardTBtnColorClass: "",
          });
        }
      }
    };

    const headTag = cardHeadLevel == "span" ? "span" : "h" + cardHeadLevel;
    const textTag = cardTextTag;

    return (
      <>
        <InspectorControls>
          <PanelBody title={__("Image", "smt-theme")} initialOpen={false}>
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
                    onClick={open}>
                    {!!imageId && !Image && <Spinner />}
                    {!imageId && __("Set image", "smt-theme")}
                    {!!imageId && Image && (
                      <ResponsiveWrapper
                        naturalWidth={Image.media_details.width}
                        naturalHeight={Image.media_details.height}>
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
                      variant="secondary"
                      isLarge
                      className="is-secondary block-section-background-image-replace">
                      {__("Replace Image", "smt-theme")}
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
                  className="is-link is-destructive block-section-background-image-remove">
                  {__("Remove Image", "smt-theme")}
                </Button>
              </MediaUploadCheck>
            ) : (
              <></>
            )}
            <TextControl
              className="block-mt"
              label={__("Alt Text", "smt-theme")}
              type="text"
              placeholder="Lore ipsum..."
              value={imageAlt}
              onChange={(value) => setAttributes({ imageAlt: value })}
            />
          </PanelBody>
          <PanelBody title={__("Headline", "smt-theme")} initialOpen={false}>
            <ToggleGroupControl
              label={__("Tag", "smt-theme")}
              value={cardHeadLevel}
              onChange={(value) => {
                setAttributes({
                  cardHeadLevel: value,
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
                  value: cardHeadColor,
                  onChange: (value) => {
                    typeof value == "undefined"
                      ? setAttributes({ cardHeadColorClass: "" })
                      : SetColorClass(value, "head");
                    typeof value == "undefined"
                      ? setAttributes({
                          cardHeadColor: "#39515E",
                        })
                      : setAttributes({ cardHeadColor: value });
                  },
                  label: __("Color", "smt-theme"),
                },
              ]}
            />
          </PanelBody>
          <PanelBody title={__("Text", "smt-theme")} initialOpen={false}>
            <ToggleGroupControl
              label={__("Tag", "smt-theme")}
              className="block-togglegroup block-toggle-full"
              value={cardTextTag}
              onChange={(value) => {
                setAttributes({
                  cardTextTag: value,
                });
              }}>
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
                aria-label={__("SPAN", "smt-theme")}
              />
            </ToggleGroupControl>
            <PanelColorSettings
              title={__("Text Color", "smt-theme")}
              className={"block-color-setting block-color-top-0"}
              colorSettings={[
                {
                  colors: theme_colors,
                  value: cardTextColor,
                  onChange: (value) => {
                    typeof value == "undefined"
                      ? setAttributes({ cardTextColorClass: "" })
                      : SetColorClass(value, "text");
                    typeof value == "undefined"
                      ? setAttributes({
                          cardTextColor: "#000000",
                        })
                      : setAttributes({ cardTextColor: value });
                  },
                  label: __("Text Color", "smt-theme"),
                },
              ]}
            />
          </PanelBody>
          <PanelBody
            title={__("Link Settings", "smt-theme")}
            initialOpen={false}>
            <div className="gb--link-control">
              <LinkControl
                className="wp-block-navigation-link__inline-link-input"
                value={{ url, opensInNewTab }}
                onChange={({
                  url: newURL = "",
                  opensInNewTab: newOpensInNewTab,
                }) => {
                  setAttributes({ url: newURL });

                  if (opensInNewTab !== newOpensInNewTab) {
                    onToggleOpenInNewTab(newOpensInNewTab);
                  }
                }}
                onRemove={() => {
                  unlink();
                  if (this.richTextRef.current !== null) {
                    this.richTextRef.current?.focus();
                  }
                }}
                forceIsEditingLink={this.state.isEditingURL}
              />
            </div>
            <PanelColorSettings
              title={__("Button color", "smt-theme")}
              className={"block-color-setting block-color-top-0"}
              colorSettings={[
                {
                  colors: theme_colors,
                  value: cardTBtnColor,
                  onChange: (value) => {
                    typeof value == "undefined"
                      ? setAttributes({ cardTBtnColorClass: "" })
                      : SetColorClass(value, "button");
                    typeof value == "undefined"
                      ? setAttributes({
                          cardTBtnColor: "#000000",
                        })
                      : setAttributes({ cardTBtnColor: value });
                  },
                  label: __("Button Color", "smt-theme"),
                },
              ]}
            />
          </PanelBody>
          <PanelBody title={__("Additional", "smt-theme")} initialOpen={false}>
            <TextControl
              label={__("Anchor", "smt-theme")}
              placeholder={__("Specify Id…", "smt-theme")}
              type="text"
              value={anchor}
              onChange={(value) => setAttributes({ anchor: value })}
            />
          </PanelBody>
        </InspectorControls>
        <div className="row-wrapper row-wrapper--ct-wd">
          <div className="card-teaser__item row row--col-ht row--xs-center row--gap-0">
            <div className="card-teaser__item--image col col--xs-12 col--lg-5 col--pd-0">
              <div className="col__content">
                {!mdimageUrl ? (
                  <div className="placeholder__img">
                    <img src={PlaceholderImg} alt="placeholder" />
                  </div>
                ) : xsimageUrl || mdimageUrl ? (
                  <picture>
                    {/* Desktop Image rendering */}
                    {mdimageUrl ? (
                      <>
                        {webpmdImageUrl ? (
                          <source
                            media="(min-width:769px)"
                            srcset={`${webpmdImageUrl}`}
                            type="image/webp"
                          />
                        ) : (
                          ""
                        )}
                        <source
                          media="(min-width:769px)"
                          srcset={`${mdimageUrl}`}
                        />
                      </>
                    ) : (
                      <>
                        {webpxsImageUrl ? (
                          <source
                            media="(min-width:769px)"
                            srcset={`${webpxsImageUrl}`}
                            type="image/webp"
                          />
                        ) : (
                          ""
                        )}
                        <source
                          media="(min-width:769px)"
                          srcset={`${xsimageUrl}`}
                        />
                      </>
                    )}
                    {/* Tablet Image rendering */}
                    {xsimageUrl ? (
                      <>
                        {webpxsImageUrl ? (
                          <source
                            media="(min-width:481px)"
                            srcset={`${webpxsImageUrl}`}
                            type="image/webp"
                          />
                        ) : (
                          ""
                        )}
                        <source
                          media="(min-width:481px)"
                          srcset={`${xsimageUrl}`}
                        />
                      </>
                    ) : (
                      <>
                        {webpmdImageUrl ? (
                          <source
                            media="(min-width:481px)"
                            srcset={`${webpmdImageUrl}`}
                            type="image/webp"
                          />
                        ) : (
                          ""
                        )}
                        <source
                          media="(min-width:481px)"
                          srcset={`${mdimageUrl}`}
                        />
                      </>
                    )}
                    {/* Mobile Image rendering */}
                    {xsimageUrl ? (
                      <>
                        {webpxsImageUrl ? (
                          <source
                            media="(max-width:480px)"
                            srcset={`${webpxsImageUrl}`}
                            type="image/webp"
                          />
                        ) : (
                          ""
                        )}
                        <source
                          media="(max-width:480px)"
                          srcset={`${xsimageUrl}`}
                        />
                      </>
                    ) : (
                      <>
                        {webpmdImageUrl ? (
                          <source
                            media="(max-width:480px)"
                            srcset={`${webpmdImageUrl}`}
                            type="image/webp"
                          />
                        ) : (
                          ""
                        )}
                        <source
                          media="(max-width:480px)"
                          srcset={`${mdimageUrl}`}
                        />
                      </>
                    )}
                    <img
                      src={`${mdimageUrl}`}
                      alt={
                        "" !== imageAlt ? `${imageAlt}` : `${imageDefaultAlt}`
                      }
                      loading="lazy"
                    />
                  </picture>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className="card-teaser__item--detail col col--xs-12 col--lg-7 col--pd-3">
              <div className="col__content">
                <RichText
                  identifier="cardHead"
                  tagName={headTag}
                  className={classnames(
                    "card-teaser__headline headline headline--style-four",
                    "undefined" !== cardHeadColorClass
                      ? `headline--color-${cardHeadColorClass}`
                      : null
                  )}
                  value={cardHead}
                  onChange={(value) => {
                    setAttributes({ cardHead: value });
                  }}
                  withoutInteractiveFormatting={true}
                  aria-label={__("Card Heading text", "smt-theme")}
                  placeholder={__("Lorem ipsum dolor", "smt-theme")}
                  {...(Platform.isNative && { deleteEnter: true })} // setup RichText on native mobile to delete the "Enter" key as it's handled by the JS/RN side
                  allowedFormats={[""]}
                />
                <RichText
                  identifier="cardText"
                  tagName={textTag}
                  className={classnames(
                    "card-teaser__text text text--style-two",
                    "undefined" !== cardTextColorClass
                      ? `text--color-${cardTextColorClass}`
                      : null
                  )}
                  value={cardText}
                  onChange={(value) => {
                    setAttributes({ cardText: value });
                  }}
                  withoutInteractiveFormatting={true}
                  aria-label={__("Card text", "smt-theme")}
                  placeholder={__(
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
                    "smt-theme"
                  )}
                  {...(Platform.isNative && { deleteEnter: true })} // setup RichText on native mobile to delete the "Enter" key as it's handled by the JS/RN side
                  allowedFormats={[""]}
                />
                {undefined !== url && (
                  <a
                    onClick={(e) => e.preventDefault()}
                    className={classnames(
                      `card-teaser__button button--cta button--style-two button--align-xs-left button--width-xs-inline`,
                      "undefined" !== cardTBtnColorClass
                        ? `button--color-${cardTBtnColorClass}`
                        : null
                    )}
                    href={!!url ? url : null}
                    target={!!cardTBtntarget ? "_blank" : null}
                    rel={relation}>
                    <span className="button--text card-teaser__button--text">
                      <RichText
                        ref={this.richTextRef}
                        aria-label={__("Button text", "smt-theme")}
                        placeholder={__("lorem ipsum", "smt-theme")}
                        value={cardTBtncontent}
                        onChange={(value) =>
                          setAttributes({ cardTBtncontent: value })
                        }
                        withoutInteractiveFormatting={false}
                        allowedFormats={[]}
                        onReplace={onReplace}
                        onMerge={mergeBlocks}
                        identifier="text"
                      />
                    </span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default compose(
  withSelect((select, props) => {
    const { getMedia } = select("core");
    const { imageId } = props.attributes;

    return {
      Image: imageId ? getMedia(imageId) : null,
    };
  })
)(Edit);
