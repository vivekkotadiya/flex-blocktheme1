/**
 * WordPress dependencies
 */

import { __ } from "@wordpress/i18n";
import { withSelect, withDispatch } from "@wordpress/data";
import { compose } from "@wordpress/compose";
import { PluginDocumentSettingPanel } from "@wordpress/edit-post";
import {
  TextControl,
  PanelRow,
} from "@wordpress/components";

const edit = ({ postType, postMeta, setPostMeta }) => {
  if ("jobs" !== postType) {
    return null; // Will only render component for post type 'page'
  }
  return (
    <PluginDocumentSettingPanel
      title={__("Job Information", "smt-theme")}
      icon=""
      initialOpen="false"
      className="smt-theme_hide_panel_icon smt-theme_course_meta_panel">
      <PanelRow>
        <TextControl
          className="smt-theme_text_area"
          label={__("Subtitle", "smt-theme")}
          value={postMeta.job_subtitle}
          onChange={(value) => setPostMeta({ job_subtitle: value })}
        />
      </PanelRow>
      <PanelRow>
        <TextControl
          className="smt-theme_text_area"
          label={__("Content", "smt-theme")}
          value={postMeta.job_content}
          onChange={(value) => setPostMeta({ job_content: value })}
        />
      </PanelRow>
      <PanelRow>
        <TextControl
          className="smt-theme_text_area"
          label={__("Job ID", "smt-theme")}
          value={postMeta.job_id}
          onChange={(value) => setPostMeta({ job_id: value })}
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
      newTemplate: select("core/editor").getEditedPostAttribute("template"),
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
