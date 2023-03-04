/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { InnerBlocks } from "@wordpress/block-editor";

export default function save() {

  return (
    <div className={`col col--xs-9 col--lg-4 col--xl-3 col--lg-os-1 col--xl-os-1 col--pd-0`}>
      <div className="col__content">
        <InnerBlocks.Content />
      </div>
    </div>
  );
}
