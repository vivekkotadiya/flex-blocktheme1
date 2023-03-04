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
import { IconPlay } from "../../utils/block-icons";
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
        shapeTop,
        shapeBottom,
        shapePosition,
      },
    } = this.props;

    return (
      <div
        id={anchor ? `${anchor}` : null}
        className={classnames(
          `youtube youtube--big`,
          shapeTop && !shapeBottom === true ? `youtube--shape-top` : null,
          shapeBottom && !shapeTop === true ? `youtube--shape-bottom` : null,
          shapeBottom && shapeTop === true ? `youtube--shape-both` : null,
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
        </a>
      </div>
    );
  }
}
