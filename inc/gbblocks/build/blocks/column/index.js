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

/***/ "./src/blocks/column/colClasses.js":
/*!*****************************************!*\
  !*** ./src/blocks/column/colClasses.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Return Jnext Timeline Block Dynamic generated Classes
 */

function colClasses(attributes) {
  const {
    xlwidth,
    lgwidth,
    mdwidth,
    smwidth,
    xswidth,
    xloffset,
    lgoffset,
    mdoffset,
    smoffset,
    xsoffset,
    colPadding,
    xlalignV,
    lgalignV,
    mdalignV,
    smalignV,
    xsalignV,
    hideLG,
    hideMD,
    hideXS
  } = attributes;
  let colClasses = "";

  // col width
  //IF XS is set ---------------------------------------------------------
  if (xswidth != 0) {
    colClasses += " col--xs-" + xswidth;
  } else {
    colClasses += " col--xs-12";
  }

  //IF SM is set ---------------------------------------------------------
  if (smwidth != 0) {
    //IF XS is set
    if (xswidth != 0) {
      //IF SM is unequal XS
      if (smwidth != xswidth) {
        colClasses += " col--sm-" + smwidth;
      }
    }

    //IF XS is notset
    else {
      // IF SM is unequal 12
      if (smwidth != 12) {
        colClasses += " col--sm-" + smwidth;
      }
    }
  }

  //IF MD is set ---------------------------------------------------------
  if (mdwidth != 0) {
    //IF SM is set
    if (smwidth != 0) {
      //IF MD is unequal SM
      if (mdwidth != smwidth) {
        colClasses += " col--md-" + mdwidth;
      }
    }

    //IF SM is notset
    else {
      //IF XS is set
      if (xswidth != 0) {
        //IF MD is unequal XS
        if (mdwidth != xswidth) {
          colClasses += " col--md-" + mdwidth;
        }

        //IF XS is default
      } else {
        // IF MD is unequal 12
        if (mdwidth != 12) {
          colClasses += " col--md-" + mdwidth;
        }
      }
    }
  }

  //IF LG is set ---------------------------------------------------------
  if (lgwidth != 0) {
    //IF MD is set
    if (mdwidth != 0) {
      //IF LG is unequal MD
      if (lgwidth != mdwidth) {
        colClasses += " col--lg-" + lgwidth;
      }
    }

    //IF MD is notset
    else {
      //IF SM is set
      if (smwidth != 0) {
        //IF LG is unequal SM
        if (lgwidth != smwidth) {
          colClasses += " col--lg-" + lgwidth;
        }

        //IF SM is notset
      } else {
        //IF XS is set
        if (xswidth != 0) {
          //IF LG is unequal XS
          if (lgwidth != xswidth) {
            colClasses += " col--lg-" + lgwidth;
          }

          //IF XS is default
        } else {
          // IF LG is unequal 12
          if (lgwidth != 12) {
            colClasses += " col--lg-" + lgwidth;
          }
        }
      }
    }
  }

  //IF XL is set ---------------------------------------------------------
  if (xlwidth != 0) {
    //IF LG is set
    if (lgwidth != 0) {
      //IF XL is unequal LG
      if (xlwidth != lgwidth) {
        colClasses += " col--xl-" + xlwidth;
      }
    }

    //IF LG is notset
    else {
      //IF MD is set
      if (mdwidth != 0) {
        //IF XL is unequal MD
        if (xlwidth != mdwidth) {
          colClasses += " col--xl-" + xlwidth;
        }
      }

      //IF MD is notset
      else {
        //IF SM is set
        if (smwidth != 0) {
          //IF XL is unequal SM
          if (xlwidth != smwidth) {
            colClasses += " col--xl-" + xlwidth;
          }

          //IF SM is notset
        } else {
          //IF XS is set
          if (xswidth != 0) {
            //IF XL is unequal XS
            if (xlwidth != xswidth) {
              colClasses += " col--xl-" + xlwidth;
            }

            //IF XS is default
          } else {
            // IF XL is unequal 12
            if (xlwidth != 12) {
              colClasses += " col--xl-" + xlwidth;
            }
          }
        }
      }
    }
  }
  // ---------------------------------------------------------------------

  // col offset
  //IF XS is set ---------------------------------------------------------
  if (xsoffset != -1) {
    colClasses += " col--xs-os-" + xsoffset;
  }

  //IF SM is set ---------------------------------------------------------
  if (smoffset != -1) {
    //IF XS is set
    if (xsoffset != -1) {
      //IF SM is unequal XS
      if (smoffset != xsoffset) {
        colClasses += " col--sm-os-" + smoffset;
      }
    }

    //IF XS is notset
    else {
      // IF SM is unequal 12
      if (smoffset != -1) {
        colClasses += " col--sm-os-" + smoffset;
      }
    }
  }

  //IF MD is set ---------------------------------------------------------
  if (mdoffset != -1) {
    //IF SM is set
    if (smoffset != -1) {
      //IF MD is unequal SM
      if (mdoffset != smoffset) {
        colClasses += " col--md-os-" + mdoffset;
      }
    }

    //IF SM is notset
    else {
      //IF XS is set
      if (xsoffset != -1) {
        //IF MD is unequal XS
        if (mdoffset != xsoffset) {
          colClasses += " col--md-os-" + mdoffset;
        }

        //IF XS is default
      } else {
        // IF MD is unequal 12
        if (mdoffset != -1) {
          colClasses += " col--md-os-" + mdoffset;
        }
      }
    }
  }

  //IF LG is set ---------------------------------------------------------
  if (lgoffset != -1) {
    //IF MD is set
    if (mdoffset != -1) {
      //IF LG is unequal MD
      if (lgoffset != mdoffset) {
        colClasses += " col--lg-os-" + lgoffset;
      }
    }

    //IF MD is notset
    else {
      //IF SM is set
      if (smoffset != -1) {
        //IF LG is unequal SM
        if (lgoffset != smoffset) {
          colClasses += " col--lg-os-" + lgoffset;
        }

        //IF SM is notset
      } else {
        //IF XS is set
        if (xsoffset != -1) {
          //IF LG is unequal XS
          if (lgoffset != xsoffset) {
            colClasses += " col--lg-os-" + lgoffset;
          }

          //IF XS is default
        } else {
          // IF LG is unequal 12
          if (lgoffset != -1) {
            colClasses += " col--lg-os-" + lgoffset;
          }
        }
      }
    }
  }

  //IF XL is set ---------------------------------------------------------
  if (xloffset != -1) {
    //IF LG is set
    if (lgoffset != -1) {
      //IF XL is unequal LG
      if (xloffset != lgoffset) {
        colClasses += " col--xl-os-" + xloffset;
      }
    }

    //IF LG is notset
    else {
      //IF MD is set
      if (mdoffset != -1) {
        //IF XL is unequal MD
        if (xloffset != mdoffset) {
          colClasses += " col--xl-os-" + xloffset;
        }
      }

      //IF MD is notset
      else {
        //IF SM is set
        if (smoffset != -1) {
          //IF XL is unequal SM
          if (xloffset != smoffset) {
            colClasses += " col--xl-os-" + xloffset;
          }

          //IF SM is notset
        } else {
          //IF XS is set
          if (xsoffset != -1) {
            //IF XL is unequal XS
            if (xloffset != xsoffset) {
              colClasses += " col--xl-os-" + xloffset;
            }

            //IF XS is default
          } else {
            // IF XL is unequal 12
            if (xloffset != -1) {
              colClasses += " col--xl-os-" + xloffset;
            }
          }
        }
      }
    }
  }

  // col Vertical align
  if (xsalignV == smalignV && smalignV == mdalignV && mdalignV == lgalignV && lgalignV == xlalignV) {
    colClasses += xsalignV != "" ? " col--xs-" + xsalignV : "";
  } else {
    if (xsalignV) {
      colClasses += xsalignV != "" ? " col--xs-" + xsalignV : "";
    }
    if (smalignV) {
      if (smalignV != xsalignV) {
        colClasses += smalignV != "" ? " col--sm-" + smalignV : "";
      }
    }
    if (mdalignV) {
      if (mdalignV != smalignV) {
        colClasses += mdalignV != "" ? " col--md-" + mdalignV : "";
      }
    }
    if (lgalignV) {
      if (lgalignV != mdalignV) {
        colClasses += lgalignV != "" ? " col--lg-" + lgalignV : "";
      }
    }
    if (xlalignV) {
      if (xlalignV != lgalignV) {
        colClasses += xlalignV != "" ? " col--xl-" + xlalignV : "";
      }
    }
  }
  colClasses += " col--pd-" + colPadding;
  if (hideLG == true) {
    colClasses += " col--lg-hide";
  }
  if (hideMD == true) {
    colClasses += " col--md-hide";
  }
  if (hideXS == true) {
    colClasses += " col--xs-hide";
  }
  return [colClasses];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (colClasses);

/***/ }),

/***/ "./src/blocks/column/edit.js":
/*!***********************************!*\
  !*** ./src/blocks/column/edit.js ***!
  \***********************************/
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
/* harmony import */ var _utils_block_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/block-helpers */ "./src/utils/block-helpers.js");

/**
 * WordPress dependencies
 */





/***
 * Interal dependencies
 */

class Edit extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    const {
      attributes: {
        backgroundColor,
        xlwidth,
        lgwidth,
        mdwidth,
        smwidth,
        xswidth,
        xloffset,
        lgoffset,
        mdoffset,
        smoffset,
        xsoffset,
        colPadding,
        xlalignV,
        lgalignV,
        mdalignV,
        smalignV,
        xsalignV,
        anchor,
        hideLG,
        hideMD,
        hideXS
      },
      colResponsiveMode,
      setcolResponsiveMode,
      setAttributes
    } = this.props;
    const resMode = ["xs", "sm", "md", "lg", "xl"];
    const colSettings = {
      xs: {
        width: xswidth,
        offset: xsoffset,
        alignV: xsalignV
      },
      sm: {
        width: smwidth,
        offset: smoffset,
        alignV: smalignV
      },
      md: {
        width: mdwidth,
        offset: mdoffset,
        alignV: mdalignV
      },
      lg: {
        width: lgwidth,
        offset: lgoffset,
        alignV: lgalignV
      },
      xl: {
        width: xlwidth,
        offset: xloffset,
        alignV: xlalignV
      }
    };
    const onChangeWidth = value => {
      if (colResponsiveMode == "xl") {
        setAttributes({
          xlwidth: value !== undefined ? value : 0
        });
      }
      if (colResponsiveMode == "lg") {
        setAttributes({
          lgwidth: value !== undefined ? value : 0
        });
      }
      if (colResponsiveMode == "md") {
        setAttributes({
          mdwidth: value !== undefined ? value : 0
        });
      }
      if (colResponsiveMode == "sm") {
        setAttributes({
          smwidth: value !== undefined ? value : 0
        });
      }
      if (colResponsiveMode == "xs") {
        setAttributes({
          xswidth: value !== undefined ? value : 0
        });
      }
    };
    const onChangeOffset = value => {
      if (colResponsiveMode == "xl") {
        setAttributes({
          xloffset: value !== undefined ? value : -1
        });
      }
      if (colResponsiveMode == "lg") {
        setAttributes({
          lgoffset: value !== undefined ? value : -1
        });
      }
      if (colResponsiveMode == "md") {
        setAttributes({
          mdoffset: value !== undefined ? value : -1
        });
      }
      if (colResponsiveMode == "sm") {
        setAttributes({
          smoffset: value !== undefined ? value : -1
        });
      }
      if (colResponsiveMode == "xs") {
        setAttributes({
          xsoffset: value !== undefined ? value : -1
        });
      }
    };
    const onChangeAlignV = value => {
      if (colResponsiveMode == "xl") {
        setAttributes({
          xlalignV: value
        });
      }
      if (colResponsiveMode == "lg") {
        setAttributes({
          lgalignV: value
        });
      }
      if (colResponsiveMode == "md") {
        setAttributes({
          mdalignV: value
        });
      }
      if (colResponsiveMode == "sm") {
        setAttributes({
          smalignV: value
        });
      }
      if (colResponsiveMode == "xs") {
        setAttributes({
          xsalignV: value
        });
      }
    };
    const resetColAlignV = responsiveMode => {
      if (responsiveMode == "xl") {
        setAttributes({
          xlalignV: ""
        });
      }
      if (responsiveMode == "lg") {
        setAttributes({
          lgalignV: ""
        });
      }
      if (responsiveMode == "md") {
        setAttributes({
          mdalignV: ""
        });
      }
      if (responsiveMode == "sm") {
        setAttributes({
          smalignV: ""
        });
      }
      if (responsiveMode == "xs") {
        setAttributes({
          xsalignV: ""
        });
      }
    };
    const SetColorClass = value => {
      _utils_block_helpers__WEBPACK_IMPORTED_MODULE_4__.theme_colors.filter(function (item) {
        if (item.color == value) {
          setAttributes({
            colbgClass: item.slug
          });
        }
      });
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Styles", "smt-theme"),
      initialOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Background color", "smt-theme"),
      className: "block-color-setting",
      colorSettings: [{
        colors: _utils_block_helpers__WEBPACK_IMPORTED_MODULE_4__.theme_colors,
        value: backgroundColor,
        onChange: value => {
          typeof value == "undefined" ? setAttributes({
            colbgClass: ""
          }) : SetColorClass(value);
          setAttributes({
            backgroundColor: value
          });
        },
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Background Color", "smt-theme")
      }]
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Settings", "smt-theme"),
      initialOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Responsive Mode", "smt-theme"),
      className: "block-togglegroup",
      value: colResponsiveMode,
      isBlock: true,
      onChange: value => {
        setcolResponsiveMode(value);
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
    })), colResponsiveMode && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-control"
    }, resMode.map((item, index) => {
      let vAlign = colSettings[item]["alignV"];
      let width = colSettings[item]["width"];
      let offset = colSettings[item]["offset"];
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "col-control-wrap",
        id: `col-${index}`
      }, colResponsiveMode == item ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Width", "smt-theme"),
        value: width,
        onChange: onChangeWidth,
        min: 0,
        max: 12,
        allowReset: true
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Offset", "smt-theme"),
        value: offset,
        onChange: onChangeOffset,
        min: -1,
        max: 11,
        allowReset: true
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
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
        value: vAlign,
        onChange: onChangeAlignV
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        onClick: () => resetColAlignV(colResponsiveMode),
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Reset", "smt-theme"),
        className: "components-button components-range-control__reset is-secondary is-small block--reset-btn"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Reset", "smt-theme")))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null));
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Additional", "smt-theme"),
      initialOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("diV", {
      className: "block--row__settings block--row__col"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Padding", "smt-theme"),
      className: "block-togglegroup",
      value: colPadding,
      isBlock: true,
      onChange: value => {
        setAttributes({
          colPadding: Number(value)
        });
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOption, {
      value: "0",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("0", "smt-theme"),
      showTooltip: true,
      "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("0px", "smt-theme")
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOption, {
      value: "1",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("1", "smt-theme"),
      showTooltip: true,
      "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("3px", "smt-theme")
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOption, {
      value: "2",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("2", "smt-theme"),
      showTooltip: true,
      "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("30px", "smt-theme")
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOption, {
      value: "3",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("3", "smt-theme"),
      showTooltip: true,
      "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("50px", "smt-theme")
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOption, {
      value: "4",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("4", "smt-theme"),
      showTooltip: true,
      "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("50px", "smt-theme")
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: () => setAttributes({
        colPadding: Number(1)
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Reset Padding", "smt-theme"),
      className: "components-button components-range-control__reset is-secondary is-small block--reset-btn"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Reset Padding", "smt-theme")))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Advanced", "smt-theme"),
      initialOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Anchor", "smt-theme"),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Specify link ID…", "smt-theme"),
      type: "text",
      value: anchor,
      onChange: value => setAttributes({
        anchor: value
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "block-seprator"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Hide on Smartphone", "smt-theme"),
      checked: hideXS,
      onChange: () => setAttributes({
        hideXS: !hideXS
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Hide on Tablet", "smt-theme"),
      checked: hideMD,
      onChange: () => setAttributes({
        hideMD: !hideMD
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Hide on Desktop", "smt-theme"),
      checked: hideLG,
      onChange: () => setAttributes({
        hideLG: !hideLG
      })
    }))));
  }
}

/***/ }),

/***/ "./src/blocks/column/save.js":
/*!***********************************!*\
  !*** ./src/blocks/column/save.js ***!
  \***********************************/
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
/* harmony import */ var _colClasses__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./colClasses */ "./src/blocks/column/colClasses.js");

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
    const {
      attributes: {
        colbgClass,
        anchor
      }
    } = this.props;
    const bgclass = colbgClass ? `col--bg-${colbgClass}` : "";
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      id: anchor ? `${anchor}` : null,
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(`col`, ...(0,_colClasses__WEBPACK_IMPORTED_MODULE_4__["default"])(this.props.attributes), "" !== bgclass ? `${bgclass}` : null)
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col__content"
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

/***/ "./src/blocks/column/styles/editor.scss":
/*!**********************************************!*\
  !*** ./src/blocks/column/styles/editor.scss ***!
  \**********************************************/
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

/***/ "./src/blocks/column/block.json":
/*!**************************************!*\
  !*** ./src/blocks/column/block.json ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"$schema":"https://json.schemastore.org/block.json","apiVersion":2,"name":"smt-theme/column","version":"0.1.5","title":"Column","category":"block-category-grid","description":"","supports":{"html":false,"anchor":false,"customClassName":false},"attributes":{"backgroundColor":{"type":"string","default":""},"colbgClass":{"type":"string","default":""},"xlwidth":{"type":"number","default":0},"lgwidth":{"type":"number","default":0},"mdwidth":{"type":"number","default":0},"smwidth":{"type":"number","default":0},"xswidth":{"type":"number","default":0},"xloffset":{"type":"number","default":-1},"lgoffset":{"type":"number","default":-1},"mdoffset":{"type":"number","default":-1},"smoffset":{"type":"number","default":-1},"xsoffset":{"type":"number","default":-1},"colPadding":{"type":"number","default":1},"xlalignV":{"type":"string","default":""},"lgalignV":{"type":"string","default":""},"mdalignV":{"type":"string","default":""},"smalignV":{"type":"string","default":""},"xsalignV":{"type":"string","default":""},"hideLG":{"type":"boolean","default":false},"hideMD":{"type":"boolean","default":false},"hideXS":{"type":"boolean","default":false},"anchor":{"type":"string","default":""},"allowBlocks":{"type":"boolean","default":true}},"keywords":["column"],"parent":["smt-theme/row"],"textdomain":"smt-theme","editorScript":"file:./index.js","editorStyle":"file:./index.css"}');

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
/*!************************************!*\
  !*** ./src/blocks/column/index.js ***!
  \************************************/
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
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit */ "./src/blocks/column/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./save */ "./src/blocks/column/save.js");
/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/editor.scss */ "./src/blocks/column/styles/editor.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./block.json */ "./src/blocks/column/block.json");
/* harmony import */ var _colClasses__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./colClasses */ "./src/blocks/column/colClasses.js");
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
    id: "e5594fba-959c-4e5d-8699-2c8819162145",
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
    fill: "#037cbb"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
    x: "16.16",
    y: "8.79",
    width: "5.81",
    height: "12.43",
    fill: "#fff"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
    d: "M26.41,25.28H3.59V4.72H26.41Zm-20.82-2H24.41V6.72H5.59Z",
    fill: "#fff"
  })),
  /**
   * @see ./edit.js
   */
  edit: props => {
    const ALLOWED_BLOCKS = ["smt-theme/headline", "smt-theme/headlinespecial", "smt-theme/paragraph", "smt-theme/button", "smt-theme/list", "smt-theme/image", "smt-theme/divider", "smt-theme/icon", "smt-theme/listarrow", "smt-theme/listicon", "smt-theme/listlink", "smt-theme/accordion", "smt-theme/youtubesmall"];
    const bgclass = props.attributes.colbgClass ? `col--bg-${props.attributes.colbgClass}` : "";
    const {
      getBlockOrder
    } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => {
      return select("core/block-editor") || select("core/editor");
    });
    props.hasChildBlocks = getBlockOrder(props.clientId).length;
    const renderappender = props.hasChildBlocks ? undefined : () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InnerBlocks.ButtonBlockAppender, null);
    const innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useInnerBlocksProps)({
      className: "col__content"
    }, {
      allowedBlocks: props.attributes.allowBlocks == true ? ALLOWED_BLOCKS : [],
      renderAppender: props.attributes.allowBlocks == true ? renderappender : false
    });
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps)({
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(`col`, ...(0,_colClasses__WEBPACK_IMPORTED_MODULE_10__["default"])(props.attributes), "" !== bgclass ? `${bgclass}` : null)
    });
    const [colResponsiveMode, setcolResponsiveMode] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)("xs");
    props.colResponsiveMode = colResponsiveMode;
    props.setcolResponsiveMode = setcolResponsiveMode;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      id: props.attributes.anchor ? `${props.attributes.anchor}` : null
    }, blockProps), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_edit__WEBPACK_IMPORTED_MODULE_6__["default"], props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", innerBlocksProps));
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