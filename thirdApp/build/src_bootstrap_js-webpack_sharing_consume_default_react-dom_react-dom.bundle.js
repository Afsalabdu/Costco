"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkthirdApp"] = self["webpackChunkthirdApp"] || []).push([["src_bootstrap_js-webpack_sharing_consume_default_react-dom_react-dom"],{

/***/ "./src/ThirdAppStartPage.jsx":
/*!***********************************!*\
  !*** ./src/ThirdAppStartPage.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?3b74\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ThirdAppStartPage_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ThirdAppStartPage.css */ \"./src/ThirdAppStartPage.css\");\n/* harmony import */ var _components_DonutChart_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/DonutChart.jsx */ \"./src/components/DonutChart.jsx\");\n/* harmony import */ var _constant_constant_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constant/constant.js */ \"./src/constant/constant.js\");\n\n\n\n\nconst ThirdAppStartPage = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"app\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"header\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, \"Third App\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_DonutChart_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    data: _constant_constant_js__WEBPACK_IMPORTED_MODULE_3__.data,\n    options: _constant_constant_js__WEBPACK_IMPORTED_MODULE_3__.options\n  }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThirdAppStartPage);\n\n//# sourceURL=webpack://thirdApp/./src/ThirdAppStartPage.jsx?");

/***/ }),

/***/ "./src/bootstrap.js":
/*!**************************!*\
  !*** ./src/bootstrap.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?3b74\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ \"./node_modules/react-dom/client.js\");\n/* harmony import */ var _ThirdAppStartPage_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ThirdAppStartPage.jsx */ \"./src/ThirdAppStartPage.jsx\");\n\n\n\nconst rootElement = document.getElementById(\"root\");\nconst root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(rootElement);\nroot.render(\n/*#__PURE__*/\n// <StrictMode>\nreact__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ThirdAppStartPage_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)\n// </StrictMode>\n);\n\n//# sourceURL=webpack://thirdApp/./src/bootstrap.js?");

/***/ }),

/***/ "./src/components/DonutChart.jsx":
/*!***************************************!*\
  !*** ./src/components/DonutChart.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?3b74\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_google_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-google-charts */ \"./node_modules/react-google-charts/dist/index.js\");\n\n\nconst DonutChart = _ref => {\n  let {\n    data,\n    options\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_google_charts__WEBPACK_IMPORTED_MODULE_1__.Chart, {\n    chartType: \"PieChart\",\n    width: \"100%\",\n    height: \"400px\",\n    data: data,\n    options: options\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DonutChart);\n\n//# sourceURL=webpack://thirdApp/./src/components/DonutChart.jsx?");

/***/ }),

/***/ "./src/constant/constant.js":
/*!**********************************!*\
  !*** ./src/constant/constant.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   data: () => (/* binding */ data),\n/* harmony export */   options: () => (/* binding */ options)\n/* harmony export */ });\nconst data = [[\"brand\", \"price\"], [\"Essence\", 50], [\"Glamour Beauty\", 300], [\"Velvet Touch\", 500], [\"Nail Couture\", 100] // CSS-style declaration\n];\nconst options = {\n  title: \"\",\n  pieHole: 0.4,\n  is3D: false\n};\n\n//# sourceURL=webpack://thirdApp/./src/constant/constant.js?");

/***/ }),

/***/ "./src/ThirdAppStartPage.css":
/*!***********************************!*\
  !*** ./src/ThirdAppStartPage.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://thirdApp/./src/ThirdAppStartPage.css?");

/***/ })

}]);