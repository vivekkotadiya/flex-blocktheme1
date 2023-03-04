/**
 * external dependencies
 */
import classnames from "classnames";

/**
 * WordPress dependencies
 */
import { registerBlockCollection, getCategories } from "@wordpress/blocks";
import { Inserter } from "@wordpress/block-editor";
import { Icon, plus } from "@wordpress/icons";
import { Button } from "@wordpress/components";

/**
 * Determine if the block attributes are empty.
 *
 * @param {Object} attributes The block attributes to check.
 * @return {boolean} The empty state of the attributes passed.
 */
export const hasEmptyAttributes = (attributes) => {
  return !Object.entries(attributes)
    .map(([, value]) => {
      if (typeof value === "string") {
        value = value.trim();
      }

      if (value instanceof Array) {
        value = value.length;
      }

      if (value instanceof Object) {
        value = Object.entries(value).length;
      }

      return !!value;
    })
    .filter((value) => value === true).length;
};

/**
 * Return bool depending on registerBlockCollection compatibility.
 *
 * @return {boolean} Value to indicate function support.
 */
export const supportsCollections = () => {
  if (typeof registerBlockCollection === "function") {
    return true;
  }
  return false;
};

/**
 * Check for which category to assign.
 *
 * @return {boolean} Value to indicate function support.
 */
export const hasFormattingCategory = getCategories().some(function (category) {
  return category.slug === "formatting";
});

export const theme_colors = [
  {
    name: "White",
    slug: "one",
    color: "#ffffff",
  },
  {
    name: "Light Grey",
    slug: "two",
    color: "#f7f7f7",
  },
  {
    name: "Red",
    slug: "three",
    color: "#BC1717",
  },
  {
    name: "Blue",
    slug: "four",
    color: "#59A7D4",
  },
  {
    name: "Green",
    slug: "five",
    color: "#4AC8B5",
  },
  {
    name: "Grey",
    slug: "six",
    color: "#607886",
  },
  {
    name: "Dark Grey",
    slug: "seven",
    color: "#39515E",
  },
  {
    name: "Black",
    slug: "eight",
    color: "#000000",
  },
];

export const pattern_colors = [
  {
    name: "White",
    slug: "one",
    color: "#ffffff",
  },
  {
    name: "Light Grey",
    slug: "two",
    color: "#f7f7f7",
  },
  {
    name: "Red",
    slug: "three",
    color: "#BC1717",
  },
  {
    name: "Blue",
    slug: "four",
    color: "#59A7D4",
  },
  {
    name: "Green",
    slug: "five",
    color: "#4AC8B5",
  },
  {
    name: "Grey",
    slug: "six",
    color: "#607886",
  },
  {
    name: "Dark Grey",
    slug: "seven",
    color: "#39515E",
  },
  {
    name: "Black",
    slug: "eight",
    color: "#000000",
  },
  {
    name: "Grey to Red",
    slug: "gradient",
    color: "linear-gradient(135deg, #7A8D96 0%, #BA2B2B 100%)",
  },
];

export const ButtonBlockAppender = ({ rootClientId, label }, ref) => {
  return (
    <Inserter
      rootClientId={rootClientId}
      buttonText="Add Block"
      renderToggle={({ onToggle, disabled, hasSingleBlockType }) => {
        const isToggleButton = !hasSingleBlockType;
        let inserterButton = (
          <Button
            ref={ref}
            className={classnames("my-button-block-appender")}
            onClick={onToggle}
            disabled={disabled}
            label={label}>
            <Icon icon={plus} />
            {label}
          </Button>
        );
        return inserterButton;
      }}
      isAppender
    />
  );
};
