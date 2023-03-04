/**
 * External Dependencies
 */
import classnames from "classnames";

/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const { url, linkTarget, content } = attributes;

  const relAttributes = [];
  if (linkTarget) {
    relAttributes.push("noopener");
  }
  const relation =
    relAttributes && relAttributes.length > 0 ? relAttributes.join(" ") : null;

  return (
    <li
      className={classnames(
        `list-link__item`,
        undefined == url ? `list-link__item--content` : null
      )}>
      {undefined != url ? (
        <a
          className="list-link__item--content"
          href={!!url ? url : null}
          target={!!linkTarget ? "_blank" : null}
          rel={relation}>
          <RichText.Content value={content} />
        </a>
      ) : (
        <RichText.Content value={content} />
      )}
    </li>
  );
}
