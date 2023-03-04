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

/***/ "./src/blocks/row/edit.js":
/*!********************************!*\
  !*** ./src/blocks/row/edit.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);

/**
 * WordPress dependencies
 */




class Edit extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    const {
      attributes: {
        xlAlignH,
        lgAlignH,
        mdAlignH,
        smAlignH,
        xsAlignH,
        xlAlignV,
        lgAlignV,
        mdAlignV,
        smAlignV,
        xsAlignV,
        xlReverseCol,
        lgReverseCol,
        mdReverseCol,
        smReverseCol,
        xsReverseCol,
        colheight,
        contentwidth,
        colgap,
        anchor
      },
      rowResponsiveMode,
      setrowResponsiveMode,
      setAttributes
    } = this.props;
    const resMode = ["xs", "sm", "md", "lg", "xl"];
    const rowSettings = {
      xs: {
        alignH: xsAlignH,
        alignV: xsAlignV
      },
      sm: {
        alignH: smAlignH,
        alignV: smAlignV
      },
      md: {
        alignH: mdAlignH,
        alignV: mdAlignV
      },
      lg: {
        alignH: lgAlignH,
        alignV: lgAlignV
      },
      xl: {
        alignH: xlAlignH,
        alignV: xlAlignV
      }
    };
    const updateHAlign = value => {
      if (rowResponsiveMode == "xl") {
        setAttributes({
          xlAlignH: value
        });
      }
      if (rowResponsiveMode == "lg") {
        setAttributes({
          lgAlignH: value
        });
      }
      if (rowResponsiveMode == "md") {
        setAttributes({
          mdAlignH: value
        });
      }
      if (rowResponsiveMode == "sm") {
        setAttributes({
          smAlignH: value
        });
      }
      if (rowResponsiveMode == "xs") {
        setAttributes({
          xsAlignH: value
        });
      }
    };
    const updateVAlign = value => {
      if (rowResponsiveMode == "xl") {
        setAttributes({
          xlAlignV: value
        });
      }
      if (rowResponsiveMode == "lg") {
        setAttributes({
          lgAlignV: value
        });
      }
      if (rowResponsiveMode == "md") {
        setAttributes({
          mdAlignV: value
        });
      }
      if (rowResponsiveMode == "sm") {
        setAttributes({
          smAlignV: value
        });
      }
      if (rowResponsiveMode == "xs") {
        setAttributes({
          xsAlignV: value
        });
      }
    };
    const resetHAlignment = responsiveMode => {
      if (responsiveMode == "xl") {
        setAttributes({
          xlAlignH: ""
        });
      }
      if (responsiveMode == "lg") {
        setAttributes({
          lgAlignH: ""
        });
      }
      if (responsiveMode == "md") {
        setAttributes({
          mdAlignH: ""
        });
      }
      if (responsiveMode == "sm") {
        setAttributes({
          smAlignH: ""
        });
      }
      if (responsiveMode == "xs") {
        setAttributes({
          xsAlignH: ""
        });
      }
    };
    const resetVAlignment = responsiveMode => {
      if (responsiveMode == "xl") {
        setAttributes({
          xlAlignV: ""
        });
      }
      if (responsiveMode == "lg") {
        setAttributes({
          lgAlignV: ""
        });
      }
      if (responsiveMode == "md") {
        setAttributes({
          mdAlignV: ""
        });
      }
      if (responsiveMode == "sm") {
        setAttributes({
          smAlignV: ""
        });
      }
      if (responsiveMode == "xs") {
        setAttributes({
          xsAlignV: ""
        });
      }
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Settings", "smt-theme"),
      initialOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Responsive Mode", "smt-theme"),
      className: "block-togglegroup",
      value: rowResponsiveMode,
      isBlock: true,
      onChange: value => {
        setrowResponsiveMode(value);
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOption, {
      value: "xs",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("XS", "smt-theme"),
      showTooltip: true,
      "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Extra Small", "smt-theme")
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOption, {
      value: "sm",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("SM", "smt-theme"),
      showTooltip: true,
      "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Small", "smt-theme")
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOption, {
      value: "md",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("MD", "smt-theme"),
      showTooltip: true,
      "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Medium", "smt-theme")
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOption, {
      value: "lg",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("LG", "smt-theme"),
      showTooltip: true,
      "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Large", "smt-theme")
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOption, {
      value: "xl",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("XL", "smt-theme"),
      showTooltip: true,
      "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Extra Large", "smt-theme")
    })), rowResponsiveMode && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "row-control"
    }, resMode.map((item, index) => {
      let horizontalAlign = rowSettings[item]["alignH"];
      let verticalAlign = rowSettings[item]["alignV"];
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "row-control-wrap",
        id: `row-${index}`
      }, rowResponsiveMode == item ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "block--row__settings"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Alignment - Horizontal", "smt-theme"),
        options: [{
          value: "",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Not Set", "smt-theme")
        }, {
          value: "start",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Start", "smt-theme")
        }, {
          value: "center",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Center", "smt-theme")
        }, {
          value: "end",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("End", "smt-theme")
        }],
        value: horizontalAlign,
        onChange: updateHAlign
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        onClick: () => resetHAlignment(rowResponsiveMode),
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Reset", "smt-theme"),
        className: "components-button components-range-control__reset is-secondary is-small"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Reset", "smt-theme"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "block--row__settings"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Alignment - Vertical", "smt-theme"),
        options: [{
          value: "",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Not Set", "smt-theme")
        }, {
          value: "top",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Top", "smt-theme")
        }, {
          value: "middle",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Middle", "smt-theme")
        }, {
          value: "bottom",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Bottom", "smt-theme")
        }],
        value: verticalAlign,
        onChange: updateVAlign
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        onClick: () => resetVAlignment(rowResponsiveMode),
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Reset", "smt-theme"),
        className: "components-button components-range-control__reset is-secondary is-small"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Reset", "smt-theme")))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null));
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "block--label"
    }, "Column - Order"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "block--row__settings"
    }, rowResponsiveMode == "xl" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Reverse Columns", "smt-theme"),
      checked: xlReverseCol,
      onChange: () => setAttributes({
        xlReverseCol: !xlReverseCol
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: () => setAttributes({
        xlReverseCol: false
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Reset", "smt-theme"),
      className: "components-button components-range-control__reset is-secondary is-small"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Reset", "smt-theme"))), rowResponsiveMode == "lg" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Reverse Columns", "smt-theme"),
      checked: lgReverseCol,
      onChange: () => setAttributes({
        lgReverseCol: !lgReverseCol
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: () => setAttributes({
        lgReverseCol: false
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Reset", "smt-theme"),
      className: "components-button components-range-control__reset is-secondary is-small"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Reset", "smt-theme"))), rowResponsiveMode == "md" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Reverse Columns", "smt-theme"),
      checked: mdReverseCol,
      onChange: () => setAttributes({
        mdReverseCol: !mdReverseCol
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: () => setAttributes({
        mdReverseCol: false
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Reset", "smt-theme"),
      className: "components-button components-range-control__reset is-secondary is-small"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Reset", "smt-theme"))), rowResponsiveMode == "sm" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Reverse Columns", "smt-theme"),
      checked: smReverseCol,
      onChange: () => setAttributes({
        smReverseCol: !smReverseCol
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: () => setAttributes({
        smReverseCol: false
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Reset", "smt-theme"),
      className: "components-button components-range-control__reset is-secondary is-small"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Reset", "smt-theme"))), rowResponsiveMode == "xs" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Reverse Columns", "smt-theme"),
      checked: xsReverseCol,
      onChange: () => setAttributes({
        xsReverseCol: !xsReverseCol
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: () => setAttributes({
        xsReverseCol: false
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Reset", "smt-theme"),
      className: "components-button components-range-control__reset is-secondary is-small"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Reset", "smt-theme"))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Additional", "smt-theme"),
      initialOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "block--label"
    }, "Column - Height"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Same Height", "smt-theme"),
      checked: colheight,
      onChange: () => setAttributes({
        colheight: !colheight
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "block--label"
    }, "Content - Width"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Limited Width", "smt-theme"),
      checked: contentwidth,
      onChange: () => setAttributes({
        contentwidth: !contentwidth
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Column Gap", "smt-theme"),
      className: "block-togglegroup",
      value: colgap,
      isBlock: true,
      onChange: value => {
        setAttributes({
          colgap: Number(value)
        });
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOption, {
      value: "0",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("0", "smt-theme"),
      showTooltip: true,
      "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Small", "smt-theme")
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOption, {
      value: "1",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("1", "smt-theme"),
      showTooltip: true,
      "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Medium", "smt-theme")
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOption, {
      value: "2",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("2", "smt-theme"),
      showTooltip: true,
      "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Large", "smt-theme")
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOption, {
      value: "3",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("3", "smt-theme"),
      showTooltip: true,
      "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Extra Large", "smt-theme")
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Advanced", "smt-theme"),
      initialOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Anchor", "smt-theme"),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Specify ID…", "smt-theme"),
      type: "text",
      value: anchor,
      onChange: value => setAttributes({
        anchor: value
      })
    }))));
  }
}

/***/ }),

/***/ "./src/blocks/row/rowClasses.js":
/*!**************************************!*\
  !*** ./src/blocks/row/rowClasses.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Return row Dynamic generated Classes
 */

function rowClasses(attributes) {
  const {
    xlAlignH,
    lgAlignH,
    mdAlignH,
    smAlignH,
    xsAlignH,
    xlAlignV,
    lgAlignV,
    mdAlignV,
    smAlignV,
    xsAlignV,
    xlReverseCol,
    lgReverseCol,
    mdReverseCol,
    smReverseCol,
    xsReverseCol,
    colheight,
    colgap
  } = attributes;
  let rowClasses = "";

  // Horizontal
  if (xsAlignH == smAlignH && smAlignH == mdAlignH && mdAlignH == lgAlignH && lgAlignH == xlAlignH) {
    rowClasses += xsAlignH != "" ? " row--xs-" + xsAlignH : "";
  } else {
    if (xsAlignH) {
      rowClasses += xsAlignH != "" ? " row--xs-" + xsAlignH : "";
    }
    if (smAlignH) {
      if (smAlignH != xsAlignH) {
        rowClasses += smAlignH != "" ? " row--sm-" + smAlignH : "";
      }
    }
    if (mdAlignH) {
      if (mdAlignH != smAlignH) {
        rowClasses += mdAlignH != "" ? " row--md-" + mdAlignH : "";
      }
    }
    if (lgAlignH) {
      if (lgAlignH != mdAlignH) {
        rowClasses += lgAlignH != "" ? " row--lg-" + lgAlignH : "";
      }
    }
    if (xlAlignH) {
      if (xlAlignH != lgAlignH) {
        rowClasses += xlAlignH != "" ? " row--xl-" + xlAlignH : "";
      }
    }
  }

  // vertical
  if (xsAlignV == smAlignV && smAlignV == mdAlignV && mdAlignV == lgAlignV && lgAlignV == xlAlignV) {
    rowClasses += xsAlignV != "" ? " row--xs-" + xsAlignV : "";
  } else {
    if (xsAlignV) {
      rowClasses += xsAlignV != "" ? " row--xs-" + xsAlignV : "";
    }
    if (smAlignV) {
      if (smAlignV != xsAlignV) {
        rowClasses += smAlignV != "" ? " row--sm-" + smAlignV : "";
      }
    }
    if (mdAlignV) {
      if (mdAlignV != smAlignV) {
        rowClasses += mdAlignV != "" ? " row--md-" + mdAlignV : "";
      }
    }
    if (lgAlignV) {
      if (lgAlignV != mdAlignV) {
        rowClasses += lgAlignV != "" ? " row--lg-" + lgAlignV : "";
      }
    }
    if (xlAlignV) {
      if (xlAlignV != lgAlignV) {
        rowClasses += xlAlignV != "" ? " row--xl-" + xlAlignV : "";
      }
    }
  }
  if (xlReverseCol == true && lgReverseCol == true && mdReverseCol == true && smReverseCol == true && xsReverseCol == true) {
    rowClasses += " row--xs-rv";
  } else if (xlReverseCol == true && lgReverseCol == true && mdReverseCol == true && smReverseCol == true && xsReverseCol == false) {
    rowClasses += " row--sm-rv";
  } else if (xlReverseCol == true && lgReverseCol == true && mdReverseCol == true && smReverseCol == false && xsReverseCol == false) {
    rowClasses += " row--md-rv";
  } else if (xlReverseCol == true && lgReverseCol == true && mdReverseCol == false && smReverseCol == false && xsReverseCol == false) {
    rowClasses += " row--lg-rv";
  } else if (xlReverseCol == true && lgReverseCol == false && mdReverseCol == false && smReverseCol == false && xsReverseCol == false) {
    rowClasses += " row--xl-rv";
  } else {
    rowClasses += xlReverseCol == true ? " row--xl-rv" : "";
    rowClasses += lgReverseCol == true ? " row--lg-rv" : "";
    rowClasses += mdReverseCol == true ? " row--md-rv" : "";
    rowClasses += smReverseCol == true ? " row--sm-rv" : "";
    rowClasses += xsReverseCol == true ? " row--xs-rv" : "";
  }
  if (colheight == true) {
    rowClasses += " row--col-ht";
  }
  rowClasses += colgap ? ` row--gap-${colgap}` : "";
  return [rowClasses];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rowClasses);

/***/ }),

/***/ "./src/blocks/row/save.js":
/*!********************************!*\
  !*** ./src/blocks/row/save.js ***!
  \********************************/
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
/* harmony import */ var _rowClasses__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rowClasses */ "./src/blocks/row/rowClasses.js");

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */

class Save extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      id: this.props.attributes.anchor ? `${this.props.attributes.anchor}` : null,
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(`row-wrapper`, this.props.attributes.contentwidth == true ? " row-wrapper--ct-wd" : "", this.props.attributes.extraclass != undefined ? this.props.attributes.extraclass : null)
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(`row`, ...(0,_rowClasses__WEBPACK_IMPORTED_MODULE_4__["default"])(this.props.attributes))
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null)));
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

/***/ "./src/blocks/row/styles/editor.scss":
/*!*******************************************!*\
  !*** ./src/blocks/row/styles/editor.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

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

/***/ "./src/blocks/row/block.json":
/*!***********************************!*\
  !*** ./src/blocks/row/block.json ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"$schema":"https://json.schemastore.org/block.json","apiVersion":2,"name":"smt-theme/row","version":"0.1.5","title":"Row","category":"block-category-grid","description":"","supports":{"html":false,"anchor":false,"customClassName":false},"attributes":{"xlAlignH":{"type":"string","default":""},"lgAlignH":{"type":"string","default":""},"mdAlignH":{"type":"string","default":""},"smAlignH":{"type":"string","default":""},"xsAlignH":{"type":"string","default":""},"xlAlignV":{"type":"string","default":""},"lgAlignV":{"type":"string","default":""},"mdAlignV":{"type":"string","default":""},"smAlignV":{"type":"string","default":""},"xsAlignV":{"type":"string","default":""},"xlReverseCol":{"type":"boolean","default":false},"lgReverseCol":{"type":"boolean","default":false},"mdReverseCol":{"type":"boolean","default":false},"smReverseCol":{"type":"boolean","default":false},"xsReverseCol":{"type":"boolean","default":false},"colheight":{"type":"boolean","default":false},"contentwidth":{"type":"boolean","default":false},"colgap":{"type":"number","default":1},"anchor":{"type":"string","default":""},"extraclass":{"type":"string","default":""}},"keywords":["row"],"parent":["smt-theme/section","smt-theme/sectionpattern","smt-theme/tabcontent"],"textdomain":"smt-theme","editorScript":"file:./index.js","editorStyle":"file:./index.css"}');

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
/*!*********************************!*\
  !*** ./src/blocks/row/index.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": () => (/* reexport default export from named module */ _block_json__WEBPACK_IMPORTED_MODULE_9__),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit */ "./src/blocks/row/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./save */ "./src/blocks/row/save.js");
/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/editor.scss */ "./src/blocks/row/styles/editor.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./block.json */ "./src/blocks/row/block.json");
/* harmony import */ var _rowClasses__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./rowClasses */ "./src/blocks/row/rowClasses.js");
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/helper */ "./src/utils/helper.js");


/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */






const {
  name
} = _block_json__WEBPACK_IMPORTED_MODULE_9__;

const settings = {
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "b6ae3bff-8808-4476-a8ee-2257f767a6ee",
    "data-name": "Ebene 1",
    viewBox: "0 0 30 30"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
    width: "30",
    height: "30",
    rx: "3.29",
    fill: "#1e1e1e"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
    x: "8.03",
    y: "8.79",
    width: "5.81",
    height: "12.43",
    fill: "#fff"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
    x: "16.16",
    y: "8.79",
    width: "5.81",
    height: "12.43",
    fill: "#fff"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
    d: "M26.41,25.28H3.59V4.72H26.41Zm-20.82-2H24.41V6.72H5.59Z",
    fill: "#037cbb"
  })),
  /**
   * @see ./edit.js
   */
  edit: props => {
    const rowclass = classnames__WEBPACK_IMPORTED_MODULE_2___default()(`row`, ...(0,_rowClasses__WEBPACK_IMPORTED_MODULE_10__["default"])(props.attributes));
    const {
      getBlockOrder
    } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => {
      return select("core/block-editor") || select("core/editor");
    });
    props.hasChildBlocks = getBlockOrder(props.clientId).length;
    const renderappender = props.hasChildBlocks ? undefined : () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InnerBlocks.ButtonBlockAppender, null);
    const innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useInnerBlocksProps)({
      className: rowclass
    }, {
      allowedBlocks: ["smt-theme/column"],
      renderAppender: renderappender
    });
    const [rowResponsiveMode, setrowResponsiveMode] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)("xs");
    props.rowResponsiveMode = rowResponsiveMode;
    props.setrowResponsiveMode = setrowResponsiveMode;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      id: props.attributes.anchor ? `${props.attributes.anchor}` : null
    }, (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps)({
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(`row-wrapper`, props.attributes.contentwidth == true ? " row-wrapper--ct-wd" : null, props.attributes.extraclass !== undefined ? `${props.attributes.extraclass}` : null)
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_edit__WEBPACK_IMPORTED_MODULE_6__["default"], props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", innerBlocksProps));
  },
  save: props => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_save__WEBPACK_IMPORTED_MODULE_7__["default"], props);
  }
};
(0,_utils_helper__WEBPACK_IMPORTED_MODULE_11__.registerBlock)({
  metadata: _block_json__WEBPACK_IMPORTED_MODULE_9__,
  name,
  settings
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map