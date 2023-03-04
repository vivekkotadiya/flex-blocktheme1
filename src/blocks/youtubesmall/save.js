/**
 * External dependencies
 */
import classnames from "classnames";

/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { Component } from "@wordpress/element";

/***
 * Interal dependencies
 */
import { IconPlay, YoutubeOverlay } from "../../utils/block-icons";
import PlaceholderImg from "../../assets/images/placeholder.jpg";

export default class Save extends Component {
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
        imageAlt,
        imageDefaultAlt,
        youTubeId,
        anchor,
        shapePosition,
      },
    } = this.props;

    return (
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
        <a
          href="#"
          className={classnames(`youtube__link`)}
          data-youtubeid={youTubeId}>
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
                  <source media="(min-width:1025px)" srcset={`${mdimageUrl}`} />
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
                  <source media="(min-width:1025px)" srcset={`${xsimageUrl}`} />
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
                  <source media="(min-width:481px)" srcset={`${mdimageUrl}`} />
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
                  <source media="(min-width:481px)" srcset={`${xsimageUrl}`} />
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
                  <source media="(max-width:480px)" srcset={`${xsimageUrl}`} />
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
                  <source media="(max-width:480px)" srcset={`${mdimageUrl}`} />
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
          <div class="youtube__icon">
            <IconPlay />
          </div>
          <svg
            className="youtube__overlay"
            xmlns="http://www.w3.org/2000/svg"
            width="1370"
            height="233"
            viewBox="0 0 1370.147 233.266">
            <g
              id="Gruppe_3691"
              data-name="Gruppe 3691"
              transform="translate(14172.999 -2203.62)">
              <path
                id="Hintergrundfläche"
                d="M5854.978,829.18,7225.125,985.939H5854.978Z"
                transform="translate(-20027.977 1450.946)"
                fill="#fff"
                opacity="0.541"
              />
              <path
                id="Hintergrundfläche-2"
                data-name="Hintergrundfläche"
                d="M5854.978,661.061,6200.5,894.327H5854.978Z"
                transform="translate(-20027.977 1542.559)"
                fill="#fff"
                opacity="0.541"
              />
            </g>
          </svg>
        </a>
      </div>
    );
  }
}
