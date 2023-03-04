/**
 * WordPress dependencies
 */

import { __ } from "@wordpress/i18n";
import { withSelect, withDispatch } from "@wordpress/data";
import { compose } from "@wordpress/compose";
import { PluginDocumentSettingPanel } from "@wordpress/edit-post";
import {
  __experimentalInputControl as InputControl,
  TextControl,
  PanelRow,
} from "@wordpress/components";

const edit = ({ postType, postMeta, setPostMeta }) => {
  if ("events" !== postType) {
    return null; // Will only render component for post type 'page'
  }
  return (
    <PluginDocumentSettingPanel
      title={__("Event Information", "smt-theme")}
      icon=""
      initialOpen="false"
      className="smt-theme_hide_panel_icon smt-theme_course_meta_panel">
      <label>Date</label>
      <PanelRow>
        <InputControl
          className="smt-theme_text_area"
          value={postMeta.start_date}
          type="date"
          onChange={(value) => setPostMeta({ start_date: value })}
        />
      </PanelRow>
      <PanelRow>
        <InputControl
          className="smt-theme_text_area"
          value={postMeta.end_date}
          type="date"
          onChange={(value) => setPostMeta({ end_date: value })}
        />
      </PanelRow>
      <label>Time</label>
      <PanelRow>
        <InputControl
          className="smt-theme_text_area"
          value={postMeta.start_time}
          type="time"
          onChange={(value) => setPostMeta({ start_time: value })}
        />
      </PanelRow>
      <PanelRow>
        <InputControl
          className="smt-theme_text_area"
          value={postMeta.end_time}
          type="time"
          onChange={(value) => setPostMeta({ end_time: value })}
        />
      </PanelRow>
      <PanelRow>
        <TextControl
          className="smt-theme_text_area"
          label={__("Place", "smt-theme")}
          value={postMeta.event_place}
          onChange={(value) => setPostMeta({ event_place: value })}
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
