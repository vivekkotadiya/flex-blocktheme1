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
    mainHeadline,
    mainHeadLevel,
    subHeadline,
    subHeadLevel,
    mainHeadColorClass,
    subHeadColorClass,
    lineColorClass,
    AlignXs,
    AlignSm,
    AlignMd,
    AlignLg,
    AlignXl,
    anchor,
  } = attributes;

  let alignclass = "";

  if (
    AlignXs == AlignSm &&
    AlignSm == AlignMd &&
    AlignMd == AlignLg &&
    AlignLg == AlignXl &&
    AlignXs == "left"
  ) {
    alignclass = "";
  } else {
    if (AlignXs) {
      alignclass += " headline-special--align-xs-" + AlignXs;
    }
    if (AlignSm) {
      if (AlignSm != AlignXs) {
        alignclass += " headline-special--align-sm-" + AlignSm;
      }
    }
    if (AlignMd) {
      if (AlignMd != AlignSm) {
        alignclass += " headline-special--align-md-" + AlignMd;
      }
    }
    if (AlignLg) {
      if (AlignLg != AlignMd) {
        alignclass += " headline-special--align-lg-" + AlignLg;
      }
    }
    if (AlignXl) {
      if (AlignXl != AlignLg) {
        alignclass += " headline-special--align-xl-" + AlignXl;
      }
    }
  }

  const MainTag = mainHeadLevel == "span" ? "span" : "h" + mainHeadLevel;
  const SubTag = subHeadLevel == "span" ? "span" : "h" + subHeadLevel;

  const headlineAlign = "" !== alignclass ? `${alignclass}` : "";

  return (
    <div
      id={anchor ? anchor : null}
      className={classnames(`headline-special`, `${headlineAlign}`)}>
      <MainTag
        className={classnames(
          "headline-special__main headline headline--style-three",
          "" !== mainHeadColorClass
            ? `headline--color-${mainHeadColorClass}`
            : ""
        )}>
        <RichText.Content value={mainHeadline} />
      </MainTag>
      <SubTag
        className={classnames(
          "headline-special__sub headline headline--style-one",
          "" !== subHeadColorClass
            ? `headline--color-${subHeadColorClass}`
            : ""
        )}>
        <RichText.Content value={subHeadline} />
      </SubTag>
      <span
        className={classnames(
          "headline-special__separator",
          "" !== lineColorClass
            ? `headline-special__separator--color-${lineColorClass}`
            : ""
        )}></span>
    </div>
  );
}
