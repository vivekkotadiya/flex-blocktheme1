/**
 * External dependencies
 */
import classnames from "classnames";

/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const {
    style,
    bgcolorClass,
    widthXs,
    widthSm,
    widthMd,
    widthLg,
    widthXl,
    url,
    linkTarget,
    text,
    AlignLg,
    AlignXl,
    AlignMd,
    AlignSm,
    AlignXs,
    anchor,
    downloadable,
  } = attributes;

  const relAttributes = [];

  if (linkTarget) {
    relAttributes.push("noopener");
  }

  let alignclass = "";
  if (
    AlignXs == AlignSm &&
    AlignSm == AlignMd &&
    AlignMd == AlignLg &&
    AlignLg == AlignXl
  ) {
    if (AlignXs) {
      alignclass += " button--align-xs-" + AlignXs;
    }
  } else {
    if (AlignXs) {
      alignclass += " button--align-xs-" + AlignXs;
    }
    if (AlignSm) {
      if (AlignSm != AlignXs) {
        alignclass += " button--align-sm-" + AlignSm;
      }
    }
    if (AlignMd) {
      if (AlignMd != AlignSm) {
        alignclass += " button--align-md-" + AlignMd;
      }
    }
    if (AlignLg) {
      if (AlignLg != AlignMd) {
        alignclass += " button--align-lg-" + AlignLg;
      }
    }
    if (AlignXl) {
      if (AlignXl != AlignLg) {
        alignclass += " button--align-xl-" + AlignXl;
      }
    }
  }

  let widthClass = "";
  if (
    widthXs == widthSm &&
    widthSm == widthMd &&
    widthMd == widthLg &&
    widthLg == widthXl
  ) {
    if (widthXs) {
      widthClass += " button--width-xs-" + widthXs;
    }
  } else {
    if (widthXs) {
      widthClass += " button--width-xs-" + widthXs;
    }
    if (widthSm) {
      if (widthSm != widthXs) {
        widthClass += " button--width-sm-" + widthSm;
      }
    }
    if (widthMd) {
      if (widthMd != widthSm) {
        widthClass += " button--width-md-" + widthMd;
      }
    }
    if (widthLg) {
      if (widthLg != widthMd) {
        widthClass += " button--width-lg-" + widthLg;
      }
    }
    if (widthXl) {
      if (widthXl != widthLg) {
        widthClass += " button--width-xl-" + widthXl;
      }
    }
  }

  const classes = `button--cta button--style-${style} button--color-${bgcolorClass}`;
  const btnclassName = classnames({
    [`${classes}`]: undefined !== classes,
    [`${alignclass}`]: "" !== alignclass,
    [`${widthClass}`]: "" !== widthClass,
  });
  const relation =
    relAttributes && relAttributes.length > 0 ? relAttributes.join(" ") : null;

  return (
    <>
      <a
        id={anchor ? anchor : null}
        className={btnclassName}
        href={!!url ? url : null}
        target={!!linkTarget ? "_blank" : null}
        rel={relation}
        download={downloadable == true ? true : false}>
        <RichText.Content
          tagName="span"
          className="button--text"
          value={text}
        />
      </a>
    </>
  );
}
