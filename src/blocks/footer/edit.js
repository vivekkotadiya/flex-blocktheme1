/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useInnerBlocksProps, useBlockProps } from "@wordpress/block-editor";
import { useSelect } from "@wordpress/data";

export default function edit({ hasChildBlocks, clientId }) {
  const BLOCK_TEMPLATE = [
    [
      "smt-theme/footercolumn",
      {},
      [
        ["smt-theme/footerlogo"],
        [
          "smt-theme/paragraph",
          {
            extraClass: "footer--address",
            textColor: "#ffffff",
            textColorClass: "one",
          },
        ],
      ],
    ],
    [
      "smt-theme/footercolumn",
      {},
      [
        [
          "smt-theme/headline",
          {
            level: "span",
            headColor: "#ffffff",
            headColorClass: "one",
          },
        ],
        ["smt-theme/navigation"],
      ],
    ],
    [
      "smt-theme/footercolumn",
      {},
      [
        [
          "smt-theme/headline",
          {
            level: "span",
            headColor: "#ffffff",
            headColorClass: "one",
          },
        ],
        ["smt-theme/navigation"],
      ],
    ],
    [
      "smt-theme/footercolumn",
      {},
      [
        [
          "smt-theme/headline",
          {
            level: "span",
            headColor: "#ffffff",
            headColorClass: "one",
          },
        ],
        ["smt-theme/navigation"],
      ],
    ],
    [
      "smt-theme/footercolumn",
      {},
      [
        [
          "smt-theme/button",
          {
            style: "three",
            bgcolorClass: "six",
            bgcolor: "#607886",
          },
        ],
        [
          "smt-theme/button",
          {
            style: "three",
            bgcolorClass: "six",
            bgcolor: "#607886",
          },
        ],
        [
          "smt-theme/icon",
          {
            iconColor: "#39515E",
            iconColorClass: "seven",
          },
        ],
        [
          "smt-theme/icon",
          {
            iconColor: "#39515E",
            iconColorClass: "seven",
          },
        ],
        [
          "smt-theme/icon",
          {
            iconColor: "#39515E",
            iconColorClass: "seven",
          },
        ],
        [
          "smt-theme/icon",
          {
            iconColor: "#39515E",
            iconColorClass: "seven",
          },
        ],
        [
          "smt-theme/icon",
          {
            iconColor: "#39515E",
            iconColorClass: "seven",
          },
        ],
        [
          "smt-theme/icon",
          {
            iconColor: "#39515E",
            iconColorClass: "seven",
          },
        ],
      ],
    ],
    [
      "smt-theme/footercolumn",
      {},
      [
        [
          "smt-theme/paragraph",
          {
            textColor: "#ffffff",
            textColorClass: "one",
          },
        ],
        ["smt-theme/navigation"],
      ],
    ],
  ];

  const { getBlockOrder } = useSelect((select) => {
    return select("core/block-editor") || select("core/editor");
  });

  hasChildBlocks = getBlockOrder(clientId).length;

  const innerBlocksProps = useInnerBlocksProps(
    { className: "footer-helper" },
    {
      allowedBlocks: ["smt-theme/footercolumn"],
      template: BLOCK_TEMPLATE,
    }
  );

  return (
    <>
      <div {...useBlockProps({ className: `footer footer--main` })}>
        <div {...innerBlocksProps}></div>
      </div>
    </>
  );
}