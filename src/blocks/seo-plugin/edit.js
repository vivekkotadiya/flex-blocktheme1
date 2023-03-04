/**
 * WordPress dependencies
 */

import { __ } from "@wordpress/i18n";
import { withSelect, withDispatch } from "@wordpress/data";
import { compose } from "@wordpress/compose";
import { PluginDocumentSettingPanel } from "@wordpress/edit-post";
import {
  ToggleControl,
  TextareaControl,
  PanelRow,
} from "@wordpress/components";

const edit = ({ postType, postMeta, setPostMeta }) => {
  if (
    "post" !== postType &&
    "page" !== postType &&
    "blog" !== postType &&
    "events" !== postType &&
    "reports" !== postType &&
    "jobs" !== postType
  ) {
    return null; // Will only render component for post type 'post', 'page', 'blog','events', 'reports', 'jobs'
  }

  return (
    <PluginDocumentSettingPanel
      title={__("SEO Settings", "smt-theme")}
      icon=""
      initialOpen="false"
      className="smt-theme_hide_panel_icon">
      <PanelRow>
        <TextareaControl
          className="smt-theme_text_area"
          label={__("Meta Title", "smt-theme")}
          value={postMeta.seo_meta_title}
          onChange={(value) => setPostMeta({ seo_meta_title: value })}
        />
      </PanelRow>
      <PanelRow>
        <TextareaControl
          className="smt-theme_text_area"
          label={__("Meta Description", "smt-theme")}
          value={postMeta.seo_meta_description}
          onChange={(value) =>
            setPostMeta({
              seo_meta_description: value,
            })
          }
        />
      </PanelRow>
      <PanelRow>
        <ToggleControl
          label={__("No Index", "smt-theme")}
          onChange={(value) => setPostMeta({ seo_no_index: value })}
          checked={postMeta.seo_no_index}
        />
      </PanelRow>
      <PanelRow>
        <ToggleControl
          label={__("No Follow", "smt-theme")}
          onChange={(value) => setPostMeta({ seo_no_follow: value })}
          checked={postMeta.seo_no_follow}
        />
      </PanelRow>
    </PluginDocumentSettingPanel>
  );
};

export default compose([
  withSelect((select) => {
    return {
      postMeta: select("core/editor").getEditedPostAttribute("meta"),
      postType: select("core/editor").getCurrentPostType(),
    };
  }),
  withDispatch((dispatch) => {
    return {
      setPostMeta(newMeta) {
        dispatch("core/editor").editPost({ meta: newMeta });
      },
    };
  }),
])(edit);
