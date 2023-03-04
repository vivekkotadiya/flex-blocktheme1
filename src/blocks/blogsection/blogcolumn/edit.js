/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  useInnerBlocksProps,
} from "@wordpress/block-editor";

/**
 * Internal dependencies
 */
import { ButtonBlockAppender } from "../../../utils/block-helpers";

export default function edit(props) {

  const { clientId } = props;

  const BLOCK_TEMPLATE = [
    [
      "smt-theme/headline",
      {
        level: "5",
        headColor: "#BC1717",
        headColorClass: "three",
      },
    ],
    [
      "smt-theme/paragraph",
      {
        level: "p",
        textStyle: "one",
        textColor: "#000000",
        textColorClass: "eight",
      },
    ],
  ];

  const blockProps = useBlockProps({ className: "col col--xs-9 col--lg-4 col--xl-3 col--lg-os-1 col--xl-os-1 col--pd-0" });

  const renderappender = () => (
    <ButtonBlockAppender
      rootClientId={clientId}
      label={"Add Content"}
    />
  );

  const innerBlocksProps = useInnerBlocksProps(
    { className: "col__content" },

    {
      template: BLOCK_TEMPLATE,
      renderAppender: renderappender,
    }
  );

  return (
    <div {...blockProps}>
      <div {...innerBlocksProps} />
    </div>
  );
}