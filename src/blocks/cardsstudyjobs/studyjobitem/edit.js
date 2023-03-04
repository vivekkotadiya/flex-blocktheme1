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
import { Component, Platform } from "@wordpress/element";
import { compose } from "@wordpress/compose";
import { withSelect } from "@wordpress/data";

/**
 * Internal Dependencies
 */
import PlaceholderImg from "../../../assets/images/placeholder.jpg";
import { theme_colors } from "../../../utils/block-helpers";

class Edit extends Component {
  constructor(props) {
    super(...arguments);
  }
  render() {
    const {
      attributes: {
        imageId,
        imageAlt,
        imageDefaultAlt,
        imageUrl,
        webpImageUrl,
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
        cardTag,
        cardTagColor,
        cardTagColorClass,
      },
      Image,
      setAttributes,
    } = this.props;

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
        imageUrl: image?.sizes?.xl?.url ? image?.sizes?.xl?.url : image.url,
        mdimageUrl: image?.sizes?.md?.url ? image?.sizes?.md?.url : "",
        xsimageUrl: image?.sizes?.xs?.url ? image?.sizes?.xs?.url : "",
        imageDefaultAlt: image.alt,
      });
    };

    const onRemoveImage = () => {
      setAttributes({
        imageId: undefined,
        imageUrl: "",
        xsimageUrl: "",
        mdimageUrl: "",
        webpImageUrl: "",
        webpmdImageUrl: "",
        webpxsImageUrl: "",
      });
    };

    if (Image) {
      var mainwebp =
        Image.source_url.substring(0, Image.source_url.lastIndexOf(".") + 1) +
        "webp";

      if (Image.media_details.sizes["xl"]) {
        var xlwebp =
          Image.media_details.sizes["xl"].source_url.substring(
            0,
            Image.media_details.sizes["xl"].source_url.lastIndexOf(".") + 1
          ) + "webp";

        var xhr = new XMLHttpRequest();
        xhr.open("HEAD", xlwebp, false);
        xhr.send();
        if (xhr.status != "404") {
          setAttributes({
            webpImageUrl: xlwebp,
          });
        } else {
          setAttributes({
            webpImageUrl: mainwebp,
          });
        }
      } else {
        setAttributes({
          webpImageUrl: mainwebp,
        });
      }

      if (Image.media_details.sizes["md"]) {
        var mdwebp =
          Image.media_details.sizes["md"].source_url.substring(
            0,
            Image.media_details.sizes["md"].source_url.lastIndexOf(".") + 1
          ) + "webp";

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
      } else {
        setAttributes({
          webpmdImageUrl: "",
        });
      }
      if (Image.media_details.sizes["xs"]) {
        var xswebp =
          Image.media_details.sizes["xs"].source_url.substring(
            0,
            Image.media_details.sizes["xs"].source_url.lastIndexOf(".") + 1
          ) + "webp";
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
            } else if (type == "tag") {
              setAttributes({
                cardTagColorClass: item.slug,
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
        } else if (type == "tag") {
          setAttributes({
            cardTagColorClass: "",
          });
        }
      }
    };

    const headTag = cardHeadLevel == "span" ? "span" : "h" + cardHeadLevel;
    const textTag = cardTextTag;

    const CardTags = () => {
      let tags_list = cardTag.split(",");
      return [
        <>
          {tags_list.map((tag, index) => {
            return <span className="job-cards__meta-tag">{tag}</span>;
          })}
        </>,
      ];
    };

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
              placeholder="Lorem ipsum dolor..."
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
          <PanelBody title={__("Tags", "smt-theme")} initialOpen={false}>
            <TextControl
              label={__("Tags", "smt-theme")}
              placeholder={__("Add Tags comma seprated…", "smt-theme")}
              type="text"
              value={cardTag}
              onChange={(value) => setAttributes({ cardTag: value })}
            />
            <PanelColorSettings
              title={__("Color", "smt-theme")}
              className={"block-color-setting block-color-top-0"}
              colorSettings={[
                {
                  colors: theme_colors,
                  value: cardTagColor,
                  onChange: (value) => {
                    typeof value == "undefined"
                      ? setAttributes({ cardTagColorClass: "" })
                      : SetColorClass(value, "tag");
                    typeof value == "undefined"
                      ? setAttributes({
                          cardTagColor: "#000000",
                        })
                      : setAttributes({ cardTagColor: value });
                  },
                  label: __("Tag Color", "smt-theme"),
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
        </InspectorControls>
        <div className="col__content">
          <div className="job-cards__item--image">
            {!imageUrl ? (
              <div className="placeholder__img">
                <img src={PlaceholderImg} alt="placeholder" />
              </div>
            ) : imageUrl || xsimageUrl || mdimageUrl ? (
              <picture>
                {/* Mobile Image rendering */}
                {xsimageUrl ? (
                  <>
                    {webpxsImageUrl ? (
                      <source srcset={`${webpxsImageUrl}`} type="image/webp" />
                    ) : (
                      ""
                    )}
                    <source srcset={`${xsimageUrl}`} />
                  </>
                ) : mdimageUrl ? (
                  <>
                    {webpmdImageUrl ? (
                      <source srcset={`${webpmdImageUrl}`} type="image/webp" />
                    ) : (
                      ""
                    )}
                    <source srcset={`${mdimageUrl}`} />
                  </>
                ) : (
                  <>
                    {webpImageUrl ? (
                      <source srcset={`${webpImageUrl}`} type="image/webp" />
                    ) : (
                      ""
                    )}
                    <source srcset={`${imageUrl}`} />
                  </>
                )}
                <img
                  src={`${imageUrl}`}
                  alt={"" !== imageAlt ? `${imageAlt}` : `${imageDefaultAlt}`}
                  loading="lazy"
                />
              </picture>
            ) : (
              <></>
            )}
          </div>
          <div className="job-cards__item--detail">
            <RichText
              identifier="cardHead"
              tagName={headTag}
              className={classnames(
                "job-cards__item--headline headline headline--style-four",
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
              placeholder={__("Card Heading", "smt-theme")}
              {...(Platform.isNative && { deleteEnter: true })} // setup RichText on native mobile to delete the "Enter" key as it's handled by the JS/RN side
              allowedFormats={[""]}
            />
            {"undefined" !== cardTag && (
              <div
                className={classnames(
                  "job-cards__meta",
                  "undefined" !== cardTagColorClass
                    ? `job-cards__meta--color-${cardTagColorClass}`
                    : null
                )}>
                {cardTag.indexOf(",") > -1 ? (
                  <CardTags />
                ) : (
                  <span className="job-cards__meta-tag">{cardTag}</span>
                )}
              </div>
            )}
            <RichText
              identifier="cardText"
              tagName={textTag}
              className={classnames(
                "job-cards__item--text text text--style-two",
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
              placeholder={__("Card Text", "smt-theme")}
              {...(Platform.isNative && { deleteEnter: true })} // setup RichText on native mobile to delete the "Enter" key as it's handled by the JS/RN side
              allowedFormats={[""]}
            />
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
