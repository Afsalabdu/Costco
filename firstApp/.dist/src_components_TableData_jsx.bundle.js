"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfirstApp"] = self["webpackChunkfirstApp"] || []).push([["src_components_TableData_jsx"],{

/***/ "./src/commonUtils/utils.js":
/*!**********************************!*\
  !*** ./src/commonUtils/utils.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   capitalizeFirstLetter: () => (/* binding */ capitalizeFirstLetter),\n/* harmony export */   dispatchCustomEvent: () => (/* binding */ dispatchCustomEvent)\n/* harmony export */ });\nconst dispatchCustomEvent = (eventName, detail) => {\n  const event = new CustomEvent(eventName, {\n    detail,\n    bubbles: true,\n    cancelable: true\n  });\n  window.dispatchEvent(event);\n};\nconst capitalizeFirstLetter = string => {\n  return string.charAt(0).toUpperCase() + string.slice(1);\n};\n\n//# sourceURL=webpack://firstApp/./src/commonUtils/utils.js?");

/***/ }),

/***/ "./src/components/TableBody.jsx":
/*!**************************************!*\
  !*** ./src/components/TableBody.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?3b74\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _commonUtils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../commonUtils/utils */ \"./src/commonUtils/utils.js\");\n/* harmony import */ var _constant_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constant/constant */ \"./src/constant/constant.js\");\n\n\n\nconst TableBody = props => {\n  const {\n    headers,\n    rows\n  } = props;\n  const columns = headers ? headers.length : 0;\n  const showSpinner = rows === null;\n  const buildRow = (row, headers) => {\n    const hanleRowClick = rowData => {\n      (0,_commonUtils_utils__WEBPACK_IMPORTED_MODULE_1__.dispatchCustomEvent)(_constant_constant__WEBPACK_IMPORTED_MODULE_2__.MY_CUSTOM_EVENT, {\n        data: rowData\n      });\n    };\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"tr\", {\n      key: row.id,\n      onClick: () => hanleRowClick(row)\n    }, headers.map((value, index) => {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"td\", {\n        key: index\n      }, row[value]);\n    }));\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"tbody\", null, showSpinner && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"tr\", {\n    key: \"spinner-0\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"td\", {\n    colSpan: columns,\n    className: \"text-center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"spinner-border\",\n    role: \"status\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"sr-only\"\n  }, \"Loading...\")))), !showSpinner && rows && rows.map(value => {\n    return buildRow(value, headers);\n  }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableBody);\n\n//# sourceURL=webpack://firstApp/./src/components/TableBody.jsx?");

/***/ }),

/***/ "./src/components/TableData.jsx":
/*!**************************************!*\
  !*** ./src/components/TableData.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?3b74\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _TableBody_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableBody.jsx */ \"./src/components/TableBody.jsx\");\n/* harmony import */ var _TableHeader_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TableHeader.jsx */ \"./src/components/TableHeader.jsx\");\n\n\n\nconst TableData = _ref => {\n  let {\n    header,\n    data\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"table\", {\n    className: \"table table-bordered table-hover\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TableHeader_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    headers: header\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TableBody_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    headers: header,\n    rows: data\n  }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableData);\n\n//# sourceURL=webpack://firstApp/./src/components/TableData.jsx?");

/***/ }),

/***/ "./src/components/TableHeader.jsx":
/*!****************************************!*\
  !*** ./src/components/TableHeader.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?3b74\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _commonUtils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../commonUtils/utils */ \"./src/commonUtils/utils.js\");\n\n\nconst TableHeader = props => {\n  const {\n    headers\n  } = props;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"thead\", {\n    className: \"thead-dark\",\n    key: \"header-1\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"tr\", {\n    key: \"header-0\"\n  }, headers && headers.map((value, index) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"th\", {\n      key: index\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, (0,_commonUtils_utils__WEBPACK_IMPORTED_MODULE_1__.capitalizeFirstLetter)(value)));\n  })));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableHeader);\n\n//# sourceURL=webpack://firstApp/./src/components/TableHeader.jsx?");

/***/ }),

/***/ "./src/constant/constant.js":
/*!**********************************!*\
  !*** ./src/constant/constant.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MY_CUSTOM_EVENT: () => (/* binding */ MY_CUSTOM_EVENT),\n/* harmony export */   data: () => (/* binding */ data),\n/* harmony export */   header: () => (/* binding */ header)\n/* harmony export */ });\nconst header = [\"id\", \"category\", \"price\", \"brand\", \"availabilityStatus\"];\nconst data = [{\n  \"id\": \"1\",\n  \"category\": \"10\",\n  \"price\": \"item\",\n  \"brand\": \"Essence\",\n  \"availabilityStatus\": \"Low Stock\"\n}];\nconst MY_CUSTOM_EVENT = 'tableRowClick';\n\n//# sourceURL=webpack://firstApp/./src/constant/constant.js?");

/***/ })

}]);