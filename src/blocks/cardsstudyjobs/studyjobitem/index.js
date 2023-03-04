/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

/**
 * Internal dependencies
 */
import Edit from "./edit";
import Save from "./save";
import metadata from "./block.json";
import { registerBlock } from "../../../utils/helper";

const { name } = metadata;

export { metadata, name };

export const settings = {
  icon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="bc92ed95-31d0-490c-a82a-1c81ab434abd"
      data-name="Ebene 1"
      viewBox="0 0 30 30"
    >
      <rect
        width="30"
        height="30"
        rx="3.29"
        fill="#1e1e1e"
      />
      <path
        id="b31ca65b-80aa-4556-b9d7-a16be7af57f8"
        data-name="path935"
        d="M12.41,15.62A7,7,0,0,0,8,22.15a.47.47,0,0,0,.46.47H21.56a.47.47,0,0,0,.46-.47,7,7,0,0,0-4.43-6.53,4.14,4.14,0,0,1-5.18,0Z"
        fill="#fff"
      />
      <path
        id="e19b4470-296a-4776-8ffe-2de78b132494"
        data-name="path940"
        d="M15,7.38a3.75,3.75,0,1,0,3.75,3.75A3.75,3.75,0,0,0,15,7.38Z" 
        fill="#fff"
      />
    </svg>
  ),
  edit: (props) => {
    return (
      <div
        {...useBlockProps({
          className:
            "job-cards__item col col--xs-12 col--md-6 col--xl-4 col--pd-0",
        })}>
        {<Edit {...props} />}
      </div>
    );
  },
  save: (props) => {
    return <Save {...props} />;
  },
};

registerBlock({ metadata, name, settings });
