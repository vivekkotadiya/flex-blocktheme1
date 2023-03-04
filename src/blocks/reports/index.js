/**
 * WordPress dependencies
 */
import { registerPlugin } from "@wordpress/plugins";
import { __ } from "@wordpress/i18n";

/**
 * Internal dependencies
 */
import edit from "./edit";

registerPlugin("reports-postmeta-fields", {
  render: edit,
});
