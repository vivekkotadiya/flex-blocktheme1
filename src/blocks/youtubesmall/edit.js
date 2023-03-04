/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { withSelect } from "@wordpress/data";
import {
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
} from "@wordpress/block-editor";
import {
  PanelBody,
  TextControl,
  Spinner,
  Button,
  ResponsiveWrapper,
  __experimentalToggleGroupControl as ToggleGroupControl,
  __experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from "@wordpress/components";
import { Component } from "@wordpress/element";
import { compose } from "@wordpress/compose";

/**
 * External dependencies
 */
import classnames from "classnames";

/***
 * Interal dependencies
 */
import { IconPlay, YoutubeOverlay } from "../../utils/block-icons";
import PlaceholderImg from "../../assets/images/placeholder.jpg";

class Edit extends Component {
  constructor(props) {
    super(...arguments);
  }

  render() {
    const {
      attributes: {
        imageUrl,
        webpImageUrl,
        xsimageUrl,
        webpxsImageUrl,
        mdimageUrl,
        webpmdImageUrl,
        imageId,
        imageAlt,
        imageDefaultAlt,
        youTubeId,
        anchor,
        shapePosition,
      },
      setAttributes,
      VideoImage,
      clientId,
    } = this.props;

    const instructions = (
      <p>
        {__(
          "To edit the image, you need permission to upload media.",
          "default-theme"
        )}
      </p>
    );

    const ALLOWED_MEDIA_TYPES = ["image"];

    const onUpdateImage = (image) => {
      setAttributes({
        imageId: image.id,
        imageUrl: image?.sizes?.xl?.url ? image?.sizes?.xl?.url : image.url,
        mdimageUrl: image?.sizes?.md?.url ? image?.sizes?.md?.url : image.url,
        xsimageUrl: image?.sizes?.xs?.url ? image?.sizes?.xs?.url : image.url,
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

    if (VideoImage) {
      var xlwebp = "";
      if (VideoImage.media_details.sizes["xl"]) {
        xlwebp =
          VideoImage.media_details.sizes["xl"].source_url.substring(
            0,
            VideoImage.media_details.sizes["xl"].source_url.lastIndexOf(".") + 1
          ) + "webp";
      } else {
        xlwebp =
          VideoImage.source_url.substring(
            0,
            VideoImage.source_url.lastIndexOf(".") + 1
          ) + "webp";
      }
      var xhr = new XMLHttpRequest();
      xhr.open("HEAD", xlwebp, false);
      xhr.send();
      if (xhr.status != "404") {
        setAttributes({
          webpImageUrl: xlwebp,
        });
      } else {
        setAttributes({
          webpImageUrl: "",
        });
      }

      if (VideoImage.media_details.sizes["md"]) {
        var mdwebp = "";
        if (VideoImage.media_details.sizes["md"]) {
          mdwebp =
            VideoImage.media_details.sizes["md"].source_url.substring(
              0,
              VideoImage.media_details.sizes["md"].source_url.lastIndexOf(".") +
                1
            ) + "webp";
        } else {
          mdwebp =
            VideoImage.source_url.substring(
              0,
              VideoImage.source_url.lastIndexOf(".") + 1
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
      } else {
        setAttributes({
          webpmdImageUrl: "",
        });
      }
      if (VideoImage.media_details.sizes["xs"]) {
        var xswebp = "";
        if (VideoImage.media_details.sizes["xs"]) {
          xswebp =
            VideoImage.media_details.sizes["xs"].source_url.substring(
              0,
              VideoImage.media_details.sizes["xs"].source_url.lastIndexOf(".") +
                1
            ) + "webp";
        } else {
          xswebp =
            VideoImage.source_url.substring(
              0,
              VideoImage.source_url.lastIndexOf(".") + 1
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
      } else {
        setAttributes({
          webpxsImageUrl: "",
        });
      }
    }

    return (
      <>
        <InspectorControls>
          <PanelBody title={__("Settings", "default-theme")} initialOpen={true}>
            <MediaUploadCheck fallback={instructions}>
              <MediaUpload
                title={__("Image", "default-theme")}
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
                    {!!imageId && !VideoImage && <Spinner />}
                    {!imageId && __("Set image", "default-theme")}
                    {!!imageId && VideoImage && (
                      <ResponsiveWrapper
                        naturalWidth={VideoImage.media_details.width}
                        naturalHeight={VideoImage.media_details.height}>
                        <img
                          src={VideoImage.source_url}
                          alt={__("Image", "default-theme")}
                        />
                      </ResponsiveWrapper>
                    )}
                  </Button>
                )}
              />
            </MediaUploadCheck>
            {!!imageId && VideoImage ? (
              <MediaUploadCheck>
                <MediaUpload
                  title={__("Image", "default-theme")}
                  onSelect={onUpdateImage}
                  allowedTypes={ALLOWED_MEDIA_TYPES}
                  value={imageId}
                  render={({ open }) => (
                    <Button
                      onClick={open}
                      variant="secondary"
                      isLarge
                      className="block--image-attr block-section-background-image-replace">
                      {__("Replace image", "default-theme")}
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
                  className="block--image-attr block-section-background-image-remove">
                  {__("Remove image", "default-theme")}
                </Button>
              </MediaUploadCheck>
            ) : (
              <></>
            )}
            <TextControl
              className="block-mt"
              label={__("Image Alt - Text", "default-theme")}
              type="text"
              placeholder="Overwrite default Alt-Text..."
              value={imageAlt}
              onChange={(value) => setAttributes({ imageAlt: value })}
            />
            <TextControl
              label={__("Youtube Id", "default-theme")}
              type="text"
              placeholder="Specify YouTube Id..."
              value={youTubeId}
              onChange={(value) => setAttributes({ youTubeId: value })}
            />
            <ToggleGroupControl
              label={__("Shape Position", "smt-theme")}
              className="block-togglegroup"
              value={shapePosition}
              isBlock
              onChange={(value) => {
                setAttributes({
                  shapePosition: value,
                });
              }}>
              <ToggleGroupControlOption
                value="leftToright"
                label={__("Left to Right", "smt-theme")}
                showTooltip={true}
                aria-label={__("Left to Right", "smt-theme")}
              />
              <ToggleGroupControlOption
                value="rightToleft"
                label={__("Right to Left", "smt-theme")}
                showTooltip={true}
                aria-label={__("Right to Left", "smt-theme")}
              />
            </ToggleGroupControl>
          </PanelBody>
          <PanelBody
            title={__("Additional", "default-theme")}
            initialOpen={true}>
            <TextControl
              label={__("Anchor", "default-theme")}
              placeholder={__("Specify Id…", "default-theme")}
              type="text"
              value={anchor}
              onChange={(value) => setAttributes({ anchor: value })}
            />
          </PanelBody>
        </InspectorControls>
        <div
          id={anchor ? `${anchor}` : null}
          className={classnames(
            `youtube youtube--small youtube--shape-bottom`,
            undefined !== shapePosition && shapePosition == `leftToright`
              ? `youtube--shape-left`
              : null,
            undefined !== shapePosition && shapePosition == `rightToleft`
              ? `youtube--shape-right`
              : null
          )}>
          <a href="#" className="youtube__link" data-youtubeid={youTubeId}>
            {imageUrl || xsimageUrl || mdimageUrl ? (
              <picture className={`youtube__image-helper`}>
                {imageUrl ? (
                  <>
                    {webpImageUrl ? (
                      <source
                        media="(min-width:1025px)"
                        srcset={`${webpImageUrl}`}
                        type="image/webp"
                      />
                    ) : (
                      ""
                    )}
                    <source media="(min-width:1025px)" srcset={`${imageUrl}`} />
                  </>
                ) : mdimageUrl ? (
                  <>
                    {webpmdImageUrl ? (
                      <source
                        media="(min-width:1025px)"
                        srcset={`${webpmdImageUrl}`}
                        type="image/webp"
                      />
                    ) : (
                      ""
                    )}
                    <source
                      media="(min-width:1025px)"
                      srcset={`${mdimageUrl}`}
                    />
                  </>
                ) : (
                  <>
                    {webpxsImageUrl ? (
                      <source
                        media="(min-width:1025px)"
                        srcset={`${webpxsImageUrl}`}
                        type="image/webp"
                      />
                    ) : (
                      ""
                    )}
                    <source
                      media="(min-width:1025px)"
                      srcset={`${xsimageUrl}`}
                    />
                  </>
                )}
                {mdimageUrl ? (
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
                ) : imageUrl ? (
                  <>
                    {webpImageUrl ? (
                      <source
                        media="(min-width:481px)"
                        srcset={`${webpImageUrl}`}
                        type="image/webp"
                      />
                    ) : (
                      ""
                    )}
                    <source media="(min-width:481px)" srcset={`${imageUrl}`} />
                  </>
                ) : (
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
                )}
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
                ) : mdimageUrl ? (
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
                ) : (
                  <>
                    {webpImageUrl ? (
                      <source
                        media="(max-width:480px)"
                        srcset={`${webpImageUrl}`}
                        type="image/webp"
                      />
                    ) : (
                      ""
                    )}
                    <source media="(max-width:480px)" srcset={`${imageUrl}`} />
                  </>
                )}
                <img
                  src={`${imageUrl}`}
                  alt={"" !== imageAlt ? `${imageAlt}` : `${imageDefaultAlt}`}
                />
              </picture>
            ) : (
              <div className="placeholder__img">
                <img src={PlaceholderImg} alt="placeholder" />
              </div>
            )}
            <div className="youtube__icon">
              <IconPlay />
            </div>
            <YoutubeOverlay />
          </a>
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
      VideoImage: imageId ? getMedia(imageId) : null,
    };
  })
)(Edit);
