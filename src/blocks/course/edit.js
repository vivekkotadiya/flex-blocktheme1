/**
 * WordPress dependencies
 */

import { __ } from "@wordpress/i18n";
import { withSelect, withDispatch } from "@wordpress/data";
import { compose } from "@wordpress/compose";
import { PluginDocumentSettingPanel } from "@wordpress/edit-post";
import { SelectControl, TextControl, PanelRow } from "@wordpress/components";

const edit = ({ postType, postMeta, newTemplate, setPostMeta }) => {
  if ("page" !== postType) {
    return null; // Will only render component for post type 'page'
  }
  return (
    newTemplate == "course" && (
      <PluginDocumentSettingPanel
        title={__("Course Settings", "smt-theme")}
        icon=""
        initialOpen="false"
        className="smt-theme_hide_panel_icon smt-theme_course_meta_panel">
        <PanelRow>
          <SelectControl
            label={__("Degree", "smt-theme")}
            options={[
              {
                value: "",
                label: __("Not Set", "smt-theme"),
              },
              {
                value: "bachelor",
                label: __("Bachelor", "smt-theme"),
              },
              {
                value: "master",
                label: __("Master", "smt-theme"),
              },
              {
                value: "promotion",
                label: __("Promotion", "smt-theme"),
              },
              {
                value: "cetificate",
                label: __("Certificate", "smt-theme"),
              },
            ]}
            value={postMeta.course_degree}
            onChange={(value) =>
              setPostMeta({ course_degree: value })
            }></SelectControl>
        </PanelRow>
        <PanelRow>
          <TextControl
            className="smt-theme_text_area"
            label={__("Preview Title", "smt-theme")}
            value={postMeta.course_preview_title}
            onChange={(value) => setPostMeta({ course_preview_title: value })}
          />
        </PanelRow>
        <PanelRow>
          <TextControl
            className="smt-theme_text_area"
            label={__("Preview Sub Title", "smt-theme")}
            value={postMeta.course_preview_subtitle}
            onChange={(value) =>
              setPostMeta({ course_preview_subtitle: value })
            }
          />
        </PanelRow>
        <PanelRow>
          <TextControl
            className="smt-theme_text_area"
            label={__("Language", "smt-theme")}
            value={postMeta.course_lang}
            onChange={(value) => setPostMeta({ course_lang: value })}
          />
        </PanelRow>
        <PanelRow>
          <TextControl
            className="smt-theme_text_area"
            label={__("Start", "smt-theme")}
            value={postMeta.course_start}
            onChange={(value) => setPostMeta({ course_start: value })}
          />
        </PanelRow>
        <PanelRow>
          <TextControl
            className="smt-theme_text_area"
            label={__("Duration", "smt-theme")}
            value={postMeta.course_duration}
            onChange={(value) => setPostMeta({ course_duration: value })}
          />
        </PanelRow>
        <PanelRow>
          <TextControl
            className="smt-theme_text_area"
            label={__("Location", "smt-theme")}
            value={postMeta.course_location}
            onChange={(value) => setPostMeta({ course_location: value })}
          />
        </PanelRow>
        <PanelRow>
          <TextControl
            className="smt-theme_text_area"
            label={__("Abroad", "smt-theme")}
            value={postMeta.course_aboard}
            onChange={(value) => setPostMeta({ course_aboard: value })}
          />
        </PanelRow>
      </PluginDocumentSettingPanel>
    )
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
