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
  useInnerBlocksProps,
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
import { Component } from "@wordpress/element";
import { compose } from "@wordpress/compose";
import { withSelect } from "@wordpress/data";

/**
 * Internal Dependencies
 */
import PlaceholderImg from "../../assets/images/placeholder.jpg";

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
        mdimageUrl,
        webpmdImageUrl,
        xsimageUrl,
        webpxsImageUrl,
        imgOrientation,
        overlayText1,
        overlayText2,
        anchor,
      },
      Image,
      hasinnerBlocksProps,
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
        mdimageUrl: image?.sizes?.md?.url ? image?.sizes?.md?.url : image.url,
        xsimageUrl: image?.sizes?.xs?.url ? image?.sizes?.xs?.url : image.url,
        imageDefaultAlt: image.alt,
      });
    };

    const onRemoveImage = () => {
      setAttributes({
        imageId: undefined,
        mdimageUrl: "",
        webpImageUrl: "",
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

    const CourseImageOverlay = () => {
      return (
        <>
          {"" !== overlayText1 && (
            <div className="course-overlay course-overlay--left">
              <span className="course-overlay__icon">+</span>
              <span className="course-overlay__text">{overlayText1}</span>
            </div>
          )}
          {!mdimageUrl ? (
            <div className="placeholder__img">
              <img src={PlaceholderImg} alt="placeholder" />
            </div>
          ) : xsimageUrl || mdimageUrl ? (
            <picture className={`course-preview__image`}>
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
                  <source media="(min-width:769px)" srcset={`${mdimageUrl}`} />
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
                  <source media="(min-width:769px)" srcset={`${xsimageUrl}`} />
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
                  <source media="(min-width:481px)" srcset={`${xsimageUrl}`} />
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
                  <source media="(min-width:481px)" srcset={`${mdimageUrl}`} />
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
                  <source media="(max-width:480px)" srcset={`${xsimageUrl}`} />
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
                  <source media="(max-width:480px)" srcset={`${mdimageUrl}`} />
                </>
              )}
              <img
                src={`${mdimageUrl}`}
                alt={"" !== imageAlt ? `${imageAlt}` : `${imageDefaultAlt}`}
                loading="lazy"
              />
            </picture>
          ) : (
            <></>
          )}
          {"" !== overlayText2 && (
            <div className="course-overlay course-overlay--right">
              <span className="course-overlay__icon">+</span>
              <span className="course-overlay__text">{overlayText2}</span>
            </div>
          )}
        </>
      );
    };

    return (
      <>
        <InspectorControls>
          <PanelBody title={__("General", "smt-theme")} initialOpen={false}>
            <ToggleGroupControl
              label={__("Orientation", "smt-theme")}
              className="block-togglegroup"
              value={imgOrientation}
              isBlock
              onChange={(value) => {
                setAttributes({
                  imgOrientation: value,
                });
              }}>
              <ToggleGroupControlOption
                value="left"
                label={__("Left", "smt-theme")}
                showTooltip={true}
                aria-label={__("Left", "smt-theme")}
              />
              <ToggleGroupControlOption
                value="right"
                label={__("Right", "smt-theme")}
                showTooltip={true}
                aria-label={__("Right", "smt-theme")}
              />
            </ToggleGroupControl>
          </PanelBody>
          <PanelBody title={__("Image", "smt-theme")} initialOpen={false}>
            <MediaUploadCheck fallback={instructions}>
              <MediaUpload
                title={__("Background Image", "smt-theme")}
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
                  className="is-link is-destructive block-section-background-image-remove">
                  {__("Remove image", "smt-theme")}
                </Button>
              </MediaUploadCheck>
            ) : (
              <></>
            )}
            <TextControl
              className="block-mt"
              label={__("Alt Text", "smt-theme")}
              type="text"
              placeholder="Lorem ipsum dolor ..."
              value={imageAlt}
              onChange={(value) => setAttributes({ imageAlt: value })}
            />
          </PanelBody>
          <PanelBody title={__("Overlays", "smt-theme")} initialOpen={false}>
            <TextControl
              className="block-mt"
              label={__("Overlay 1", "smt-theme")}
              type="text"
              placeholder="Lorem ipsum dolor ..."
              value={overlayText1}
              onChange={(value) => setAttributes({ overlayText1: value })}
            />
            <TextControl
              className="block-mt"
              label={__("Overlay 2", "smt-theme")}
              type="text"
              placeholder="Lorem ipsum dolor ..."
              value={overlayText2}
              onChange={(value) => setAttributes({ overlayText2: value })}
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
        <div
          className={classnames(
            "course-preview",
            imgOrientation == "left" ? "course--left" : "course--right"
          )}
          id={anchor ? anchor : null}>
          <div className="row-wrapper row-wrapper--ct-wd">
            <div className="row row--xs-middle row--xs-center row--gap-2">
              <div className="course-preview__visual col col--xs-12 col--md-10 col--lg-6 col--pd-0">
                <div className="col__content">
                  <CourseImageOverlay />
                </div>
              </div>
              <div className="course-preview__detail col col--xs-12 col--md-10 col--lg-6 col--pd-0">
                <div {...hasinnerBlocksProps} />
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
    const BLOCK_TEMPLATE = [
      [
        "smt-theme/headline",
        {
          headStyle: "six",
          level: "4",
          headColor: "#39515E",
          headColorClass: "seven",
        },
      ],
      [
        "smt-theme/paragraph",
        {
          textStyle: "one",
          level: "p",
          textColor: "#39515E",
          textColorClass: "seven",
        },
      ],
      [
        "smt-theme/button",
        {
          style: "one",
          bgcolorClass: "three",
          bgcolor: "#BC1717",
        },
      ],
    ];
    const innerBlocksProps = useInnerBlocksProps(
      { className: "col__content" },
      {
        allowedBlocks: [
          "smt-theme/headline",
          "smt-theme/text",
          "smt-theme/button",
        ],
        template: BLOCK_TEMPLATE,
        templateLock: false,
      }
    );

    return {
      Image: imageId ? getMedia(imageId) : null,
      hasinnerBlocksProps: innerBlocksProps,
    };
  })
)(Edit);
