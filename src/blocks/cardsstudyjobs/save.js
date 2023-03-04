/**
 * External dependencies
 */
import classnames from "classnames";

/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { RichText, InnerBlocks } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const {
    url,
    studyJobTarget,
    studyjobcontent,
    studyJobBtnColorClass,
    anchor,
  } = attributes;

  const relAttributes = [];

  if (studyJobTarget) {
    relAttributes.push("noopener");
  }

  const relation =
    relAttributes && relAttributes.length > 0 ? relAttributes.join(" ") : null;

  return (
    <div className="job-cards" id={anchor ? anchor : null}>
      <div className="job-cards__background"></div>
      <div className="row-wrapper row-wrapper--ct-wd">
        <div className="row row--col-ht row--xs-center row--gap-2">
          <InnerBlocks.Content />
        </div>
        {undefined !== url && (
          <a
            className={classnames(
              `job-cards__button button--cta button--style-one button--align-xs-center button--width-xs-inline`,
              studyJobBtnColorClass !== "undefined"
                ? `button--color-${studyJobBtnColorClass}`
                : null
            )}
            href={!!url ? url : null}
            target={!!studyJobTarget ? "_blank" : null}
            rel={relation}>
            <RichText.Content
              tagName="span"
              className="button--text"
              value={studyjobcontent}
            />
          </a>
        )}
      </div>
    </div>
  );
}
