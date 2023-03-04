/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { Component } from "@wordpress/element";

export default class Save extends Component {
  render() {
    const {
      attributes: { iconColorClass, iconClass,  url, linkTarget, anchor },
    } = this.props;

    const iconcolorclass = iconColorClass
      ? ` icon--color-${iconColorClass}`
      : "";

    const iconClasses = `${iconcolorclass}`;

    const relationAttribute = [];
    if (linkTarget) {
      relationAttribute.push("noopener");
    }
    const relation =
      relationAttribute && relationAttribute.length > 0
        ? relationAttribute.join(" ")
        : null;

    return (
      <>
        {undefined == url ? (
          <div id={anchor ? `${anchor}` : null} class={`icon ${iconClasses}`}>
            <div class="icon__helper"></div>
            <i class={`icon__visual ${iconClass}`}></i>
          </div>
        ) : (
          <a
            href={url}
            target={linkTarget}
            rel={relation}
            className={`icon icon--link ${iconClasses}`}
            id={anchor ? `${anchor}` : null}>
            <div class="icon__helper"></div>
            <i class={`icon__visual ${iconClass}`}></i>
          </a>
        )}
      </>
    );
  }
}
