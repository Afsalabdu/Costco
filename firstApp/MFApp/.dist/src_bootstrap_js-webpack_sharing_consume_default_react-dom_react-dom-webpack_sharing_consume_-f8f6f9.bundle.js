"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmicrofrontend"] = self["webpackChunkmicrofrontend"] || []).push([["src_bootstrap_js-webpack_sharing_consume_default_react-dom_react-dom-webpack_sharing_consume_-f8f6f9"],{

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?3b74\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Header.jsx */ \"./src/components/Header.jsx\");\n/* harmony import */ var _components_Footer_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Footer.jsx */ \"./src/components/Footer.jsx\");\n/* harmony import */ var _components_Emulator_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Emulator.jsx */ \"./src/components/Emulator.jsx\");\n/* harmony import */ var _components_DisplayTable_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/DisplayTable.jsx */ \"./src/components/DisplayTable.jsx\");\n/* harmony import */ var _components_DonutChart_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/DonutChart.jsx */ \"./src/components/DonutChart.jsx\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n// import FoodList from \"./components/FoodList.jsx\";\n\n\n\n\nconst App = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Header_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"row mt-3 justify-content-between\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"col-sm-8 p-3 border border-secondary\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h4\", {\n    className: \"p-1 mb-1 mt-1 text-center bg-secondary text-white\"\n  }, \" Table\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_DisplayTable_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"col-sm-4 p-3  border-bottom border-top border-right border-secondary\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h4\", {\n    className: \"p-1 mb-1 mt-1 text-center bg-secondary text-white\"\n  }, \" Chart\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_DonutChart_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"row  mt-3 mb-3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"col-sm p-3 border border-secondary\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Emulator_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Footer_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://microfrontend/./src/App.jsx?");

/***/ }),

/***/ "./src/bootstrap.js":
/*!**************************!*\
  !*** ./src/bootstrap.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?3b74\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ \"./node_modules/react-dom/client.js\");\n/* harmony import */ var _App_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.jsx */ \"./src/App.jsx\");\n/* harmony import */ var react_terminal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-terminal */ \"./node_modules/react-terminal/dist/index.es.js\");\n\n\n\n\nconst rootElement = document.getElementById(\"terminal\");\nconst root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(rootElement);\nroot.render(\n/*#__PURE__*/\n// <StrictMode>\nreact__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_terminal__WEBPACK_IMPORTED_MODULE_3__.TerminalContextProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_App_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null))\n// </StrictMode>\n);\n\n//# sourceURL=webpack://microfrontend/./src/bootstrap.js?");

/***/ }),

/***/ "./src/components/DisplayTable.jsx":
/*!*****************************************!*\
  !*** ./src/components/DisplayTable.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?3b74\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _service_axiosInstance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/axiosInstance */ \"./src/service/axiosInstance.js\");\n/* harmony import */ var _constants_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/constant */ \"./src/constants/constant.js\");\n\n\n\nconst TableData = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() */ \"webpack_container_remote_TableInHost_TableData\").then(__webpack_require__.t.bind(__webpack_require__, /*! TableInHost/TableData */ \"webpack/container/remote/TableInHost/TableData\", 23)));\nconst DisplayTable = () => {\n  const [header, setHeader] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    _service_axiosInstance__WEBPACK_IMPORTED_MODULE_1__.axiosInstance.get('/products') // Replace with your API endpoint\n    .then(response => {\n      if (response.data) {\n        setHeader(_constants_constant__WEBPACK_IMPORTED_MODULE_2__.headerEnum);\n        if (response.data['products']) {\n          setData(response.data['products'].slice(0, 8));\n        }\n      }\n    }).catch(error => {\n      console.error('Error fetching data:', error);\n    });\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"table-responsive\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {\n    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Loading...\")\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TableData, {\n    header: header,\n    data: data\n  })));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisplayTable);\n\n//# sourceURL=webpack://microfrontend/./src/components/DisplayTable.jsx?");

/***/ }),

/***/ "./src/components/DonutChart.jsx":
/*!***************************************!*\
  !*** ./src/components/DonutChart.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?3b74\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/constant */ \"./src/constants/constant.js\");\n\n\n\nconst DonutChart = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() */ \"webpack_container_remote_DonutChartInHost_DonutChart\").then(__webpack_require__.t.bind(__webpack_require__, /*! DonutChartInHost/DonutChart */ \"webpack/container/remote/DonutChartInHost/DonutChart\", 23)));\nconst DonutCharts = () => {\n  const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_constants_constant__WEBPACK_IMPORTED_MODULE_1__.chartInlData);\n  const handleCusomEvent = e => {\n    if (e.detail.data) {\n      const chartData = [];\n      chartData.push(_constants_constant__WEBPACK_IMPORTED_MODULE_1__.ChartHeaderEnum);\n      const chartRow = [];\n      _constants_constant__WEBPACK_IMPORTED_MODULE_1__.ChartHeaderEnum.map(item => {\n        chartRow.push(e.detail.data[item]);\n      });\n      chartData.push(chartRow);\n      setData(chartData);\n    }\n  };\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    window.addEventListener(_constants_constant__WEBPACK_IMPORTED_MODULE_1__.MY_CUSTOM_EVENT, handleCusomEvent);\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"todo-list-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {\n    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Loading...\")\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DonutChart, {\n    data: data,\n    options: _constants_constant__WEBPACK_IMPORTED_MODULE_1__.options\n  })));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DonutCharts);\n\n//# sourceURL=webpack://microfrontend/./src/components/DonutChart.jsx?");

/***/ }),

/***/ "./src/components/Emulator.jsx":
/*!*************************************!*\
  !*** ./src/components/Emulator.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?3b74\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/constant */ \"./src/constants/constant.js\");\n\n\n\nconst Emulator = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() */ \"webpack_container_remote_EmulatorInHost_Emulator\").then(__webpack_require__.t.bind(__webpack_require__, /*! EmulatorInHost/Emulator */ \"webpack/container/remote/EmulatorInHost/Emulator\", 23)));\nconst ConsoleEmulators = () => {\n  const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_constants_constant__WEBPACK_IMPORTED_MODULE_1__.dataVal);\n  const handleCusomEvent = e => {\n    let welLblVal = \"\";\n    if (e.detail.data) {\n      _constants_constant__WEBPACK_IMPORTED_MODULE_1__.welLblEnum.map(item => {\n        welLblVal = `${[(0,_constants_constant__WEBPACK_IMPORTED_MODULE_1__.capitalizeFirstLetter)(item)]} : ${e.detail.data[item]}`;\n      });\n      setData(welLblVal);\n    }\n  };\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    window.addEventListener(_constants_constant__WEBPACK_IMPORTED_MODULE_1__.MY_CUSTOM_EVENT, handleCusomEvent);\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {\n    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Loading...\")\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Emulator, {\n    data: data\n  })));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConsoleEmulators);\n\n//# sourceURL=webpack://microfrontend/./src/components/Emulator.jsx?");

/***/ }),

/***/ "./src/components/Footer.jsx":
/*!***********************************!*\
  !*** ./src/components/Footer.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?3b74\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/constant */ \"./src/constants/constant.js\");\n\n\nconst Footer = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"footer\"\n  }, _constants_constant__WEBPACK_IMPORTED_MODULE_1__.footerLbl);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);\n\n//# sourceURL=webpack://microfrontend/./src/components/Footer.jsx?");

/***/ }),

/***/ "./src/components/Header.jsx":
/*!***********************************!*\
  !*** ./src/components/Header.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?3b74\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/constant */ \"./src/constants/constant.js\");\n\n\nconst Header = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"header\"\n  }, _constants_constant__WEBPACK_IMPORTED_MODULE_1__.headerLbl);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n//# sourceURL=webpack://microfrontend/./src/components/Header.jsx?");

/***/ }),

/***/ "./src/constants/constant.js":
/*!***********************************!*\
  !*** ./src/constants/constant.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ChartHeaderEnum: () => (/* binding */ ChartHeaderEnum),\n/* harmony export */   MY_CUSTOM_EVENT: () => (/* binding */ MY_CUSTOM_EVENT),\n/* harmony export */   capitalizeFirstLetter: () => (/* binding */ capitalizeFirstLetter),\n/* harmony export */   chartInlData: () => (/* binding */ chartInlData),\n/* harmony export */   dataVal: () => (/* binding */ dataVal),\n/* harmony export */   footerLbl: () => (/* binding */ footerLbl),\n/* harmony export */   headerEnum: () => (/* binding */ headerEnum),\n/* harmony export */   headerLbl: () => (/* binding */ headerLbl),\n/* harmony export */   options: () => (/* binding */ options),\n/* harmony export */   welLblEnum: () => (/* binding */ welLblEnum)\n/* harmony export */ });\nconst headerEnum = [\"id\", \"category\", \"price\", \"brand\", \"availabilityStatus\"];\nconst ChartHeaderEnum = [\"brand\", \"price\"];\nconst chartInlData = [[\"brand\", \"price\"], [\"Essence\", 50], [\"Glamour Beauty\", 300], [\"Velvet Touch\", 500], [\"Nail Couture\", 100] // CSS-style declaration\n];\nconst options = {\n  title: \"\",\n  pieHole: 0.4,\n  is3D: false\n};\nconst dataVal = \"\";\nconst MY_CUSTOM_EVENT = 'tableRowClick';\nconst welLblEnum = [\"brand\"];\nconst capitalizeFirstLetter = string => {\n  return string.charAt(0).toUpperCase() + string.slice(1);\n};\nconst headerLbl = 'Microfrontend Host Application';\nconst footerLbl = 'Micro frontends demo';\n\n//# sourceURL=webpack://microfrontend/./src/constants/constant.js?");

/***/ }),

/***/ "./src/service/axiosInstance.js":
/*!**************************************!*\
  !*** ./src/service/axiosInstance.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   axiosInstance: () => (/* binding */ axiosInstance)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n\nconst axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n  baseURL: 'https://dummyjson.com',\n  // Replace with your API base URL\n  timeout: 10000,\n  headers: {\n    'Content-Type': 'application/json'\n  }\n}); // Create the axios instance\n\n// Add a request interceptor\naxiosInstance.interceptors.request.use(function (config) {\n  // Do something before the request is sent\n  // For example, add an authentication token to the headers\n  const token = localStorage.getItem('authToken') || \"dummy token\"; // taking auth token from local Storage\n  if (token) {\n    config.headers.Authorization = `Bearer ${token}`;\n  }\n  // console.log('Request:',token, config);\n  return config;\n}, function (error) {\n  // Handle the error\n  return Promise.reject(error);\n});\n\n//# sourceURL=webpack://microfrontend/./src/service/axiosInstance.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://microfrontend/./src/style.css?");

/***/ })

}]);