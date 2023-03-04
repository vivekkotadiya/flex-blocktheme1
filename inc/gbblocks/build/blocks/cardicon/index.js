/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/icons/build-module/icon/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/icon/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

/** @typedef {{icon: JSX.Element, size?: number} & import('@wordpress/primitives').SVGProps} IconProps */

/**
 * Return an SVG icon.
 *
 * @param {IconProps} props icon is the SVG component to render
 *                          size is a number specifiying the icon size in pixels
 *                          Other props will be passed to wrapped SVG component
 *
 * @return {JSX.Element}  Icon component
 */

function Icon(_ref) {
  let {
    icon,
    size = 24,
    ...props
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(icon, {
    width: size,
    height: size,
    ...props
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/plus.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/plus.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const plus = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (plus);
//# sourceMappingURL=plus.js.map

/***/ }),

/***/ "./src/blocks/cardicon/edit.js":
/*!*************************************!*\
  !*** ./src/blocks/cardicon/edit.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_block_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/block-helpers */ "./src/utils/block-helpers.js");
/* harmony import */ var _icon_icon_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../icon/icon.json */ "./src/blocks/icon/icon.json");


/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */





/***
 * Interal dependencies
 */


class Edit extends _wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(...arguments);
    this.toggle = this.toggle.bind(this);
    this.state = {
      icons: _icon_icon_json__WEBPACK_IMPORTED_MODULE_8__,
      isOpen: false,
      keyword: ""
    };
  }
  search(keyword) {
    let filtered = [];
    (0,lodash__WEBPACK_IMPORTED_MODULE_2__.map)(_icon_icon_json__WEBPACK_IMPORTED_MODULE_8__, icon => {
      if (icon.toLowerCase().search(keyword.toLowerCase()) !== -1) {
        filtered.push(icon);
      }
    });
    this.setState({
      keyword,
      icons: filtered
    });
  }
  toggle() {
    this.setState(state => ({
      isOpen: !state.isOpen
    }));
    this.setState({
      keyword: "",
      icons: _icon_icon_json__WEBPACK_IMPORTED_MODULE_8__
    });
    const selection = window.getSelection();
    anchorRange = selection.rangeCount > 0 ? selection.getRangeAt(0) : null;
  }
  render() {
    const {
      attributes: {
        cardHIconeadColor,
        cardIconHeadColorClass,
        cardIconHead,
        cardIconHeadLevel,
        cardIconTextColor,
        cardIconTextColorClass,
        cardIconText,
        cardIconTextTag,
        cardiconColor,
        cardiconColorClass,
        cardiconClass,
        cardiconBorderColor,
        cardiconBorderColorClass,
        anchor
      },
      setAttributes
    } = this.props;
    const SetColorClass = (value, type) => {
      if (value !== undefined) {
        _utils_block_helpers__WEBPACK_IMPORTED_MODULE_7__.theme_colors.filter(function (item) {
          if (item.color == value) {
            if (type == "head") {
              setAttributes({
                cardIconHeadColorClass: item.slug
              });
            } else if (type == "text") {
              setAttributes({
                cardIconTextColorClass: item.slug
              });
            } else if (type == "icon") {
              setAttributes({
                cardiconColorClass: item.slug
              });
            } else if (type == "border") {
              setAttributes({
                cardiconBorderColorClass: item.slug
              });
            }
          }
        });
      } else {
        if (type == "head") {
          setAttributes({
            cardIconHeadColorClass: ""
          });
        } else if (type == "text") {
          setAttributes({
            cardIconTextColorClass: ""
          });
        } else if (type == "icon") {
          setAttributes({
            cardiconColorClass: ""
          });
        } else if (type == "border") {
          setAttributes({
            cardiconBorderColorClass: ""
          });
        }
      }
    };
    const {
      icons,
      keyword
    } = this.state;
    const headTag = cardIconHeadLevel == "span" ? "span" : "h" + cardIconHeadLevel;
    const textTag = cardIconTextTag;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Icon", "smt-theme"),
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      value: keyword,
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Search", "smt-theme"),
      onChange: newKeyword => {
        this.search(newKeyword);
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "smt-theme-icon-panel"
    }, icons.length > 0 ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("ul", {
      className: "smt-theme-icon-list"
    }, cardiconClass && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("li", {
      "data-key": cardiconClass,
      className: "selectedicon"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Tooltip, {
      text: cardiconClass
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
      onClick: () => {
        setAttributes({
          cardiconClass: cardiconClass
        });
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("i", {
      className: cardiconClass,
      "aria-hidden": "true"
    })))), (0,lodash__WEBPACK_IMPORTED_MODULE_2__.map)(icons, icon => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("li", {
        "data-key": icon
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Tooltip, {
        text: icon
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
        onClick: () => {
          setAttributes({
            cardiconClass: icon
          });
        }
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("i", {
        className: icon,
        "aria-hidden": "true"
      }))));
    })) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("No characters found.", "block-options"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.PanelColorSettings, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Icon", "smt-theme"),
      className: "block-color-setting block-color-top-0",
      colorSettings: [{
        colors: _utils_block_helpers__WEBPACK_IMPORTED_MODULE_7__.theme_colors,
        value: cardiconColor,
        onChange: value => {
          typeof value == "undefined" ? setAttributes({
            cardiconColorClass: ""
          }) : SetColorClass(value, "icon");
          typeof value == "undefined" ? setAttributes({
            cardiconColor: "#607886"
          }) : setAttributes({
            cardiconColor: value
          });
        },
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Color", "smt-theme")
      }]
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.PanelColorSettings, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Border", "smt-theme"),
      className: "block-color-setting block-color-top-0",
      colorSettings: [{
        colors: _utils_block_helpers__WEBPACK_IMPORTED_MODULE_7__.theme_colors,
        value: cardiconBorderColor,
        onChange: value => {
          typeof value == "undefined" ? setAttributes({
            cardiconBorderColorClass: ""
          }) : SetColorClass(value, "border");
          typeof value == "undefined" ? setAttributes({
            cardiconBorderColor: "#BC1717"
          }) : setAttributes({
            cardiconBorderColor: value
          });
        },
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Color", "smt-theme")
      }]
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Headline", "smt-theme"),
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.__experimentalToggleGroupControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Tag", "smt-theme"),
      value: cardIconHeadLevel,
      onChange: value => {
        setAttributes({
          cardIconHeadLevel: value
        });
      },
      className: "block-toggle-full"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.__experimentalToggleGroupControlOption, {
      value: "1",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("1", "smt-theme"),
      showTooltip: true,
      "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("H1", "smt-theme")
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.__experimentalToggleGroupControlOption, {
      value: "2",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("2", "smt-theme"),
      showTooltip: true,
      "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("H2", "smt-theme")
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.__experimentalToggleGroupControlOption, {
      value: "3",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("3", "smt-theme"),
      showTooltip: true,
      "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("H3", "smt-theme")
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.__experimentalToggleGroupControlOption, {
      value: "4",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("4", "smt-theme"),
      showTooltip: true,
      "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("H4", "smt-theme")
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.__experimentalToggleGroupControlOption, {
      value: "5",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("5", "smt-theme"),
      showTooltip: true,
      "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("H5", "smt-theme")
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.__experimentalToggleGroupControlOption, {
      value: "6",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("6", "smt-theme"),
      showTooltip: true,
      "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("H6", "smt-theme")
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.__experimentalToggleGroupControlOption, {
      value: "span",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("SPAN", "smt-theme"),
      showTooltip: true,
      "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Span", "smt-theme")
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.PanelColorSettings, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Headline Color", "smt-theme"),
      className: "block-color-setting block-color-top-0",
      colorSettings: [{
        colors: _utils_block_helpers__WEBPACK_IMPORTED_MODULE_7__.theme_colors,
        value: cardHIconeadColor,
        onChange: value => {
          typeof value == "undefined" ? setAttributes({
            cardIconHeadColorClass: ""
          }) : SetColorClass(value, "head");
          typeof value == "undefined" ? setAttributes({
            cardHIconeadColor: "#39515E"
          }) : setAttributes({
            cardHIconeadColor: value
          });
        },
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Headline Color", "smt-theme")
      }]
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Text", "smt-theme"),
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.__experimentalToggleGroupControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Tag", "smt-theme"),
      className: "block-togglegroup block-toggle-full",
      value: cardIconTextTag,
      onChange: value => {
        setAttributes({
          cardIconTextTag: value
        });
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.__experimentalToggleGroupControlOption, {
      value: "p",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("P", "smt-theme"),
      showTooltip: true,
      "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("P", "smt-theme")
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.__experimentalToggleGroupControlOption, {
      value: "span",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("SPAN", "smt-theme"),
      showTooltip: true,
      "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("SPAN", "smt-theme")
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.PanelColorSettings, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Text Color", "smt-theme"),
      className: "block-color-setting block-color-top-0",
      colorSettings: [{
        colors: _utils_block_helpers__WEBPACK_IMPORTED_MODULE_7__.theme_colors,
        value: cardIconTextColor,
        onChange: value => {
          typeof value == "undefined" ? setAttributes({
            cardIconTextColorClass: ""
          }) : SetColorClass(value, "text");
          typeof value == "undefined" ? setAttributes({
            cardIconTextColor: "#000000"
          }) : setAttributes({
            cardIconTextColor: value
          });
        },
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Text Color", "smt-theme")
      }]
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Additional", "smt-theme"),
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Anchor", "smt-theme"),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Specify Id…", "smt-theme"),
      type: "text",
      value: anchor,
      onChange: value => setAttributes({
        anchor: value
      })
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("card-icon__visual", "undefined" !== cardiconBorderColorClass ? `card-icon__visual--color-${cardiconBorderColorClass}` : null)
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("i", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(cardiconClass, "undefined" !== cardiconColorClass ? `icon--color-${cardiconColorClass}` : null)
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.RichText, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      identifier: "cardIconHead",
      tagName: headTag,
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("card-icon__headline headline headline--style-four headline--align-xs-center", "undefined" !== cardIconHeadColorClass ? `headline--color-${cardIconHeadColorClass}` : null),
      value: cardIconHead,
      onChange: value => {
        setAttributes({
          cardIconHead: value
        });
      },
      withoutInteractiveFormatting: true,
      "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Card Icon Heading text", "smt-theme"),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Lorem ipsum dolor", "smt-theme")
    }, _wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Platform.isNative && {
      deleteEnter: true
    }, {
      // setup RichText on native mobile to delete the "Enter" key as it's handled by the JS/RN side
      allowedFormats: [""]
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.RichText, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      identifier: "cardIconText",
      tagName: textTag,
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("card-icon__text text text--style-two text--align-xs-center", "undefined" !== cardIconTextColorClass ? `text--color-${cardIconTextColorClass}` : null),
      value: cardIconText,
      onChange: value => {
        setAttributes({
          cardIconText: value
        });
      },
      withoutInteractiveFormatting: true,
      "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Card Icon text", "smt-theme"),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.", "smt-theme")
    }, _wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Platform.isNative && {
      deleteEnter: true
    }, {
      // setup RichText on native mobile to delete the "Enter" key as it's handled by the JS/RN side
      allowedFormats: [""]
    })));
  }
}

/***/ }),

/***/ "./src/blocks/cardicon/save.js":
/*!*************************************!*\
  !*** ./src/blocks/cardicon/save.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Save)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */



class Save extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(...arguments);
  }
  render() {
    const {
      attributes: {
        cardIconHeadColorClass,
        cardIconHead,
        cardIconHeadLevel,
        cardIconTextColorClass,
        cardIconText,
        cardIconTextTag,
        cardiconColorClass,
        cardiconClass,
        cardiconBorderColorClass,
        anchor
      }
    } = this.props;
    const HeadTag = cardIconHeadLevel == "span" ? "span" : "h" + cardIconHeadLevel;
    const TextTag = cardIconTextTag;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "card-icon",
      id: anchor ? anchor : null
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("card-icon__visual", "undefined" !== cardiconBorderColorClass ? `card-icon__visual--color-${cardiconBorderColorClass}` : null)
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(cardiconClass, "undefined" !== cardiconColorClass ? `icon--color-${cardiconColorClass}` : null)
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(HeadTag, {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("card-icon__headline headline headline--style-four headline--align-xs-center", "undefined" !== cardIconHeadColorClass ? `headline--color-${cardIconHeadColorClass}` : null)
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText.Content, {
      value: cardIconHead
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextTag, {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("card-icon__text text text--style-two text--align-xs-center", "undefined" !== cardIconTextColorClass ? `text--color-${cardIconTextColorClass}` : null)
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText.Content, {
      value: cardIconText
    })));
  }
}

/***/ }),

/***/ "./src/utils/block-helpers.js":
/*!************************************!*\
  !*** ./src/utils/block-helpers.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonBlockAppender": () => (/* binding */ ButtonBlockAppender),
/* harmony export */   "hasEmptyAttributes": () => (/* binding */ hasEmptyAttributes),
/* harmony export */   "hasFormattingCategory": () => (/* binding */ hasFormattingCategory),
/* harmony export */   "pattern_colors": () => (/* binding */ pattern_colors),
/* harmony export */   "supportsCollections": () => (/* binding */ supportsCollections),
/* harmony export */   "theme_colors": () => (/* binding */ theme_colors)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/icon/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/plus.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);

/**
 * external dependencies
 */


/**
 * WordPress dependencies
 */





/**
 * Determine if the block attributes are empty.
 *
 * @param {Object} attributes The block attributes to check.
 * @return {boolean} The empty state of the attributes passed.
 */
const hasEmptyAttributes = attributes => {
  return !Object.entries(attributes).map(_ref => {
    let [, value] = _ref;
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
  }).filter(value => value === true).length;
};

/**
 * Return bool depending on registerBlockCollection compatibility.
 *
 * @return {boolean} Value to indicate function support.
 */
const supportsCollections = () => {
  if (typeof _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockCollection === "function") {
    return true;
  }
  return false;
};

/**
 * Check for which category to assign.
 *
 * @return {boolean} Value to indicate function support.
 */
const hasFormattingCategory = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.getCategories)().some(function (category) {
  return category.slug === "formatting";
});
const theme_colors = [{
  name: "White",
  slug: "one",
  color: "#ffffff"
}, {
  name: "Light Grey",
  slug: "two",
  color: "#f7f7f7"
}, {
  name: "Red",
  slug: "three",
  color: "#BC1717"
}, {
  name: "Blue",
  slug: "four",
  color: "#59A7D4"
}, {
  name: "Green",
  slug: "five",
  color: "#4AC8B5"
}, {
  name: "Grey",
  slug: "six",
  color: "#607886"
}, {
  name: "Dark Grey",
  slug: "seven",
  color: "#39515E"
}, {
  name: "Black",
  slug: "eight",
  color: "#000000"
}];
const pattern_colors = [{
  name: "White",
  slug: "one",
  color: "#ffffff"
}, {
  name: "Light Grey",
  slug: "two",
  color: "#f7f7f7"
}, {
  name: "Red",
  slug: "three",
  color: "#BC1717"
}, {
  name: "Blue",
  slug: "four",
  color: "#59A7D4"
}, {
  name: "Green",
  slug: "five",
  color: "#4AC8B5"
}, {
  name: "Grey",
  slug: "six",
  color: "#607886"
}, {
  name: "Dark Grey",
  slug: "seven",
  color: "#39515E"
}, {
  name: "Black",
  slug: "eight",
  color: "#000000"
}, {
  name: "Grey to Red",
  slug: "gradient",
  color: "linear-gradient(135deg, #7A8D96 0%, #BA2B2B 100%)"
}];
const ButtonBlockAppender = (_ref2, ref) => {
  let {
    rootClientId,
    label
  } = _ref2;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.Inserter, {
    rootClientId: rootClientId,
    buttonText: "Add Block",
    renderToggle: _ref3 => {
      let {
        onToggle,
        disabled,
        hasSingleBlockType
      } = _ref3;
      const isToggleButton = !hasSingleBlockType;
      let inserterButton = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        ref: ref,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("my-button-block-appender"),
        onClick: onToggle,
        disabled: disabled,
        label: label
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"], {
        icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"]
      }), label);
      return inserterButton;
    },
    isAppender: true
  });
};

/***/ }),

/***/ "./src/utils/helper.js":
/*!*****************************!*\
  !*** ./src/utils/helper.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBlockIconColor": () => (/* binding */ getBlockIconColor),
/* harmony export */   "registerBlock": () => (/* binding */ registerBlock)
/* harmony export */ });
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block-helpers */ "./src/utils/block-helpers.js");
/**
 * WordPress dependencies
 */


// Categories Helper


/**
 * Function to register an individual block.
 *
 * @param {Object} block The block to be registered.
 */
const registerBlock = block => {
  if (!block) {
    return;
  }
  let {
    category
  } = block;
  const {
    name,
    settings
  } = block;
  if (!(0,_block_helpers__WEBPACK_IMPORTED_MODULE_1__.supportsCollections)() && !name.includes("gallery")) {
    category = "smt-theme";
  }
  let icon = "";
  if (!!settings?.icon) {
    icon = {
      foreground: getBlockIconColor(),
      src: settings.icon
    };
  }
  const isV2 = block?.metadata?.apiVersion === 2;
  const v2Settings = isV2 ? block?.metadata : {};
  if (!!settings?.attributes && isV2) {
    v2Settings.attributes = {
      ...v2Settings.attributes,
      ...settings?.attributes
    };
  }
  (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(name, {
    ...settings,
    category,
    icon,
    // V2 Block API Upgrades
    ...v2Settings
  });
};

/**
 * Returns the color used for Icon Color in the block editor.
 */
function getBlockIconColor() {
  return "#607886";
}

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;
	var nativeCodeString = '[native code]';

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./src/blocks/cardicon/block.json":
/*!****************************************!*\
  !*** ./src/blocks/cardicon/block.json ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"$schema":"https://json.schemastore.org/block.json","apiVersion":2,"name":"smt-theme/cardicon","version":"0.1.5","title":"Card Icon","category":"block-category-listing","keywords":["card","Icon"],"description":"","supports":{"html":false,"anchor":false,"customClassName":false},"attributes":{"cardHIconeadColor":{"type":"string","default":"#BC1717"},"cardIconHeadColorClass":{"type":"string","default":"three"},"cardIconHead":{"type":"string","source":"html","selector":".card-icon__headline","default":""},"cardIconHeadLevel":{"type":"string","default":"span"},"cardIconTextColor":{"type":"string","default":"#39515E"},"cardIconTextColorClass":{"type":"string","default":"seven"},"cardIconText":{"type":"string","source":"html","selector":".card-icon__text","default":""},"cardIconTextTag":{"type":"string","default":"span"},"cardiconColor":{"type":"string","default":"#607886"},"cardiconColorClass":{"type":"string","default":"six"},"cardiconClass":{"type":"string","default":"icon-asterisk"},"cardiconBorderColor":{"type":"string","default":"#BC1717"},"cardiconBorderColorClass":{"type":"string","default":"three"},"anchor":{"type":"string","default":""}},"parent":["smt-theme/column"],"textdomain":"smt-theme","editorScript":"file:./index.js"}');

/***/ }),

/***/ "./src/blocks/icon/icon.json":
/*!***********************************!*\
  !*** ./src/blocks/icon/icon.json ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('["icon-asterisk","icon-plus","icon-question","icon-minus","icon-glass","icon-music","icon-search","icon-envelope-o","icon-heart","icon-star","icon-star-o","icon-user","icon-film","icon-th-large","icon-th","icon-th-list","icon-check","icon-close","icon-remove","icon-times","icon-search-plus","icon-search-minus","icon-power-off","icon-signal","icon-cog","icon-gear","icon-trash-o","icon-home","icon-file-o","icon-clock-o","icon-road","icon-download","icon-arrow-circle-o-down","icon-arrow-circle-o-up","icon-inbox","icon-play-circle-o","icon-repeat","icon-rotate-right","icon-refresh","icon-list-alt","icon-lock","icon-flag","icon-headphones","icon-volume-off","icon-volume-down","icon-volume-up","icon-qrcode","icon-barcode","icon-tag","icon-tags","icon-book","icon-bookmark","icon-print","icon-camera","icon-font","icon-bold","icon-italic","icon-text-height","icon-text-width","icon-align-left","icon-align-center","icon-align-right","icon-align-justify","icon-list","icon-dedent","icon-outdent","icon-indent","icon-video-camera","icon-image","icon-photo","icon-picture-o","icon-pencil","icon-map-marker","icon-adjust","icon-tint","icon-edit","icon-pencil-square-o","icon-share-square-o","icon-check-square-o","icon-arrows","icon-step-backward","icon-fast-backward","icon-backward","icon-play","icon-pause","icon-stop","icon-forward","icon-fast-forward","icon-step-forward","icon-eject","icon-chevron-left","icon-chevron-right","icon-plus-circle","icon-minus-circle","icon-times-circle","icon-check-circle","icon-question-circle","icon-info-circle","icon-crosshairs","icon-times-circle-o","icon-check-circle-o","icon-ban","icon-arrow-left","icon-arrow-right","icon-arrow-up","icon-arrow-down","icon-mail-forward","icon-share","icon-expand","icon-compress","icon-exclamation-circle","icon-gift","icon-leaf","icon-fire","icon-eye","icon-eye-slash","icon-exclamation-triangle","icon-warning","icon-plane","icon-calendar","icon-random","icon-comment","icon-magnet","icon-chevron-up","icon-chevron-down","icon-retweet","icon-shopping-cart","icon-folder","icon-folder-open","icon-arrows-v","icon-arrows-h","icon-bar-chart","icon-bar-chart-o","icon-twitter-square","icon-facebook-square","icon-camera-retro","icon-key","icon-cogs","icon-gears","icon-comments","icon-thumbs-o-up","icon-thumbs-o-down","icon-star-half","icon-heart-o","icon-sign-out","icon-linkedin-square","icon-thumb-tack","icon-external-link","icon-sign-in","icon-trophy","icon-github-square","icon-upload","icon-lemon-o","icon-phone","icon-square-o","icon-bookmark-o","icon-phone-square","icon-twitter","icon-facebook","icon-facebook-f","icon-github","icon-unlock","icon-credit-card","icon-feed","icon-rss","icon-hdd-o","icon-bullhorn","icon-bell-o","icon-certificate","icon-hand-o-right","icon-hand-o-left","icon-hand-o-up","icon-hand-o-down","icon-arrow-circle-left","icon-arrow-circle-right","icon-arrow-circle-up","icon-arrow-circle-down","icon-globe","icon-wrench","icon-tasks","icon-filter","icon-briefcase","icon-arrows-alt","icon-group","icon-users","icon-chain","icon-link","icon-cloud","icon-flask","icon-cut","icon-scissors","icon-copy","icon-files-o","icon-paperclip","icon-floppy-o","icon-save","icon-square","icon-bars","icon-navicon","icon-reorder","icon-list-ul","icon-list-ol","icon-strikethrough","icon-underline","icon-table","icon-magic","icon-truck","icon-pinterest","icon-pinterest-square","icon-google-plus-square","icon-google-plus","icon-money","icon-caret-down","icon-caret-up","icon-caret-left","icon-caret-right","icon-columns","icon-sort","icon-unsorted","icon-sort-desc","icon-sort-down","icon-sort-asc","icon-sort-up","icon-envelope","icon-linkedin","icon-rotate-left","icon-undo","icon-gavel","icon-legal","icon-dashboard","icon-tachometer","icon-comment-o","icon-comments-o","icon-bolt","icon-flash","icon-sitemap","icon-umbrella","icon-clipboard","icon-paste","icon-lightbulb-o","icon-exchange","icon-cloud-download","icon-cloud-upload","icon-user-md","icon-stethoscope","icon-suitcase","icon-bell","icon-coffee","icon-cutlery","icon-file-text-o","icon-building-o","icon-hospital-o","icon-ambulance","icon-medkit","icon-fighter-jet","icon-beer","icon-h-square","icon-plus-square","icon-angle-double-left","icon-angle-double-right","icon-angle-double-up","icon-angle-double-down","icon-angle-left","icon-angle-right","icon-angle-up","icon-angle-down","icon-desktop","icon-laptop","icon-tablet","icon-mobile","icon-mobile-phone","icon-circle-o","icon-quote-left","icon-quote-right","icon-spinner","icon-circle","icon-mail-reply","icon-reply","icon-github-alt","icon-folder-o","icon-folder-open-o","icon-smile-o","icon-frown-o","icon-meh-o","icon-gamepad","icon-keyboard-o","icon-flag-o","icon-flag-checkered","icon-terminal","icon-code","icon-mail-reply-all","icon-reply-all","icon-star-half-empty","icon-star-half-full","icon-star-half-o","icon-location-arrow","icon-crop","icon-code-fork","icon-chain-broken","icon-unlink","icon-info","icon-exclamation","icon-superscript","icon-subscript","icon-eraser","icon-puzzle-piece","icon-microphone","icon-microphone-slash","icon-shield","icon-calendar-o","icon-fire-extinguisher","icon-rocket","icon-maxcdn","icon-chevron-circle-left","icon-chevron-circle-right","icon-chevron-circle-up","icon-chevron-circle-down","icon-html5","icon-css3","icon-anchor","icon-unlock-alt","icon-bullseye","icon-ellipsis-h","icon-ellipsis-v","icon-rss-square","icon-play-circle","icon-ticket","icon-minus-square","icon-minus-square-o","icon-level-up","icon-level-down","icon-check-square","icon-pencil-square","icon-external-link-square","icon-share-square","icon-compass","icon-caret-square-o-down","icon-toggle-down","icon-caret-square-o-up","icon-toggle-up","icon-caret-square-o-right","icon-toggle-right","icon-eur","icon-euro","icon-gbp","icon-dollar","icon-usd","icon-inr","icon-rupee","icon-cny","icon-jpy","icon-rmb","icon-yen","icon-rouble","icon-rub","icon-ruble","icon-krw","icon-won","icon-bitcoin","icon-btc","icon-file","icon-file-text","icon-sort-alpha-asc","icon-sort-alpha-desc","icon-sort-amount-asc","icon-sort-amount-desc","icon-sort-numeric-asc","icon-sort-numeric-desc","icon-thumbs-up","icon-thumbs-down","icon-youtube-square","icon-youtube","icon-xing","icon-xing-square","icon-youtube-play","icon-dropbox","icon-stack-overflow","icon-instagram","icon-flickr","icon-adn","icon-bitbucket","icon-bitbucket-square","icon-tumblr","icon-tumblr-square","icon-long-arrow-down","icon-long-arrow-up","icon-long-arrow-left","icon-long-arrow-right","icon-apple","icon-windows","icon-android","icon-linux","icon-dribbble","icon-skype","icon-foursquare","icon-trello","icon-female","icon-male","icon-gittip","icon-gratipay","icon-sun-o","icon-moon-o","icon-archive","icon-bug","icon-vk","icon-weibo","icon-renren","icon-pagelines","icon-stack-exchange","icon-arrow-circle-o-right","icon-arrow-circle-o-left","icon-caret-square-o-left","icon-toggle-left","icon-dot-circle-o","icon-wheelchair","icon-vimeo-square","icon-try","icon-turkish-lira","icon-plus-square-o","icon-space-shuttle","icon-slack","icon-envelope-square","icon-wordpress","icon-openid","icon-bank","icon-institution","icon-university","icon-graduation-cap","icon-mortar-board","icon-yahoo","icon-google","icon-reddit","icon-reddit-square","icon-stumbleupon-circle","icon-stumbleupon","icon-delicious","icon-digg","icon-pied-piper-pp","icon-pied-piper-alt","icon-drupal","icon-joomla","icon-language","icon-fax","icon-building","icon-child","icon-paw","icon-spoon","icon-cube","icon-cubes","icon-behance","icon-behance-square","icon-steam","icon-steam-square","icon-recycle","icon-automobile","icon-car","icon-cab","icon-taxi","icon-tree","icon-spotify","icon-deviantart","icon-soundcloud","icon-database","icon-file-pdf-o","icon-file-word-o","icon-file-excel-o","icon-file-powerpoint-o","icon-file-image-o","icon-file-photo-o","icon-file-picture-o","icon-file-archive-o","icon-file-zip-o","icon-file-audio-o","icon-file-sound-o","icon-file-movie-o","icon-file-video-o","icon-file-code-o","icon-vine","icon-codepen","icon-jsfiddle","icon-life-bouy","icon-life-buoy","icon-life-ring","icon-life-saver","icon-support","icon-circle-o-notch","icon-ra","icon-rebel","icon-resistance","icon-empire","icon-ge","icon-git-square","icon-git","icon-hacker-news","icon-y-combinator-square","icon-yc-square","icon-tencent-weibo","icon-qq","icon-wechat","icon-weixin","icon-paper-plane","icon-send","icon-paper-plane-o","icon-send-o","icon-history","icon-circle-thin","icon-header","icon-paragraph","icon-sliders","icon-share-alt","icon-share-alt-square","icon-bomb","icon-futbol-o","icon-soccer-ball-o","icon-tty","icon-binoculars","icon-plug","icon-slideshare","icon-twitch","icon-yelp","icon-newspaper-o","icon-wifi","icon-calculator","icon-paypal","icon-google-wallet","icon-cc-visa","icon-cc-mastercard","icon-cc-discover","icon-cc-amex","icon-cc-paypal","icon-cc-stripe","icon-bell-slash","icon-bell-slash-o","icon-trash","icon-copyright","icon-at","icon-eyedropper","icon-paint-brush","icon-birthday-cake","icon-area-chart","icon-pie-chart","icon-line-chart","icon-lastfm","icon-lastfm-square","icon-toggle-off","icon-toggle-on","icon-bicycle","icon-bus","icon-ioxhost","icon-angellist","icon-cc","icon-ils","icon-shekel","icon-sheqel","icon-meanpath","icon-buysellads","icon-connectdevelop","icon-dashcube","icon-forumbee","icon-leanpub","icon-sellsy","icon-shirtsinbulk","icon-simplybuilt","icon-skyatlas","icon-cart-plus","icon-cart-arrow-down","icon-diamond","icon-ship","icon-user-secret","icon-motorcycle","icon-street-view","icon-heartbeat","icon-venus","icon-mars","icon-mercury","icon-intersex","icon-transgender","icon-transgender-alt","icon-venus-double","icon-mars-double","icon-venus-mars","icon-mars-stroke","icon-mars-stroke-v","icon-mars-stroke-h","icon-neuter","icon-genderless","icon-facebook-official","icon-pinterest-p","icon-whatsapp","icon-server","icon-user-plus","icon-user-times","icon-bed","icon-hotel","icon-viacoin","icon-train","icon-subway","icon-medium","icon-y-combinator","icon-yc","icon-optin-monster","icon-opencart","icon-expeditedssl","icon-battery","icon-battery-4","icon-battery-full","icon-battery-3","icon-battery-three-quarters","icon-battery-2","icon-battery-half","icon-battery-1","icon-battery-quarter","icon-battery-0","icon-battery-empty","icon-mouse-pointer","icon-i-cursor","icon-object-group","icon-object-ungroup","icon-sticky-note","icon-sticky-note-o","icon-cc-jcb","icon-cc-diners-club","icon-clone","icon-balance-scale","icon-hourglass-o","icon-hourglass-1","icon-hourglass-start","icon-hourglass-2","icon-hourglass-half","icon-hourglass-3","icon-hourglass-end","icon-hourglass","icon-hand-grab-o","icon-hand-rock-o","icon-hand-paper-o","icon-hand-stop-o","icon-hand-scissors-o","icon-hand-lizard-o","icon-hand-spock-o","icon-hand-pointer-o","icon-hand-peace-o","icon-trademark","icon-registered","icon-creative-commons","icon-gg","icon-gg-circle","icon-tripadvisor","icon-odnoklassniki","icon-odnoklassniki-square","icon-get-pocket","icon-wikipedia-w","icon-safari","icon-chrome","icon-firefox","icon-opera","icon-internet-explorer","icon-television","icon-tv","icon-contao","icon-500px","icon-amazon","icon-calendar-plus-o","icon-calendar-minus-o","icon-calendar-times-o","icon-calendar-check-o","icon-industry","icon-map-pin","icon-map-signs","icon-map-o","icon-map","icon-commenting","icon-commenting-o","icon-houzz","icon-vimeo","icon-black-tie","icon-fonticons","icon-reddit-alien","icon-edge","icon-credit-card-alt","icon-codiepie","icon-modx","icon-fort-awesome","icon-usb","icon-product-hunt","icon-mixcloud","icon-scribd","icon-pause-circle","icon-pause-circle-o","icon-stop-circle","icon-stop-circle-o","icon-shopping-bag","icon-shopping-basket","icon-hashtag","icon-bluetooth","icon-bluetooth-b","icon-percent","icon-gitlab","icon-wpbeginner","icon-wpforms","icon-envira","icon-universal-access","icon-wheelchair-alt","icon-question-circle-o","icon-blind","icon-audio-description","icon-volume-control-phone","icon-braille","icon-assistive-listening-systems","icon-american-sign-language-interpreting","icon-asl-interpreting","icon-deaf","icon-deafness","icon-hard-of-hearing","icon-glide","icon-glide-g","icon-sign-language","icon-signing","icon-low-vision","icon-viadeo","icon-viadeo-square","icon-snapchat","icon-snapchat-ghost","icon-snapchat-square","icon-pied-piper","icon-first-order","icon-yoast","icon-themeisle","icon-google-plus-circle","icon-google-plus-official","icon-fa","icon-font-awesome","icon-handshake-o","icon-envelope-open","icon-envelope-open-o","icon-linode","icon-address-book","icon-address-book-o","icon-address-card","icon-vcard","icon-address-card-o","icon-vcard-o","icon-user-circle","icon-user-circle-o","icon-user-o","icon-id-badge","icon-drivers-license","icon-id-card","icon-drivers-license-o","icon-id-card-o","icon-quora","icon-free-code-camp","icon-telegram","icon-thermometer","icon-thermometer-4","icon-thermometer-full","icon-thermometer-3","icon-thermometer-three-quarters","icon-thermometer-2","icon-thermometer-half","icon-thermometer-1","icon-thermometer-quarter","icon-thermometer-0","icon-thermometer-empty","icon-shower","icon-bath","icon-bathtub","icon-s15","icon-podcast","icon-window-maximize","icon-window-minimize","icon-window-restore","icon-times-rectangle","icon-window-close","icon-times-rectangle-o","icon-window-close-o","icon-bandcamp","icon-grav","icon-etsy","icon-imdb","icon-ravelry","icon-eercast","icon-microchip","icon-snowflake-o","icon-superpowers","icon-wpexplorer","icon-meetup"]');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**************************************!*\
  !*** ./src/blocks/cardicon/index.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": () => (/* reexport default export from named module */ _block_json__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/blocks/cardicon/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/blocks/cardicon/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./src/blocks/cardicon/block.json");
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/helper */ "./src/utils/helper.js");

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */




const {
  name
} = _block_json__WEBPACK_IMPORTED_MODULE_5__;

const settings = {
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "bb7891b9-b3fa-4fd9-8b43-b15a03af0fbc",
    "data-name": "Ebene 1",
    viewBox: "0 0 30 30"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    width: "30",
    height: "30",
    rx: "3.29",
    fill: "#1e1e1e"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "3.25",
    y: "3.25",
    width: "23.51",
    height: "23.51",
    rx: "3.29",
    fill: "#3c3c3b"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
    cx: "15",
    cy: "11.84",
    r: "6.23",
    fill: "#037cbb"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("polygon", {
    points: "15 7.18 16.51 10.25 19.89 10.74 17.45 13.12 18.02 16.49 15 14.9 11.97 16.49 12.55 13.12 10.11 10.74 13.49 10.25 15 7.18",
    fill: "#3c3c3b"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "7.66",
    y: "21.25",
    width: "14.68",
    height: "3.14",
    fill: "#fff"
  })),
  /**
   * @see ./edit.js
   */
  edit: props => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
      className: "card-icon"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_edit__WEBPACK_IMPORTED_MODULE_3__["default"], props));
  },
  save: props => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_save__WEBPACK_IMPORTED_MODULE_4__["default"], props);
  }
};
(0,_utils_helper__WEBPACK_IMPORTED_MODULE_6__.registerBlock)({
  metadata: _block_json__WEBPACK_IMPORTED_MODULE_5__,
  name,
  settings
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map