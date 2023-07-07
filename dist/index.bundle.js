/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nbody {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nbutton {\r\n  background: none;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n/* NAVBAR SECTION */\r\n.navbar {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  box-shadow: 1px 2px;\r\n  height: 15vh;\r\n  padding: 0 5%;\r\n  background-color: #3c948b;\r\n}\r\n\r\n.navbar-ul {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.navbar-logo img {\r\n  width: 150px;\r\n}\r\n\r\n.navbar-ul a {\r\n  color: #fff;\r\n  text-decoration: none;\r\n  margin-top: 0.2rem;\r\n}\r\n\r\n.navbar-ul a:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n#movie-number {\r\n  color: green;\r\n}\r\n\r\n.navbar-ul li {\r\n  color: black;\r\n  font-size: 1.1rem;\r\n  font-weight: 700;\r\n  text-decoration: none;\r\n  list-style: none;\r\n  padding-left: 4rem;\r\n  padding-right: 1rem;\r\n  padding-top: 0.2rem;\r\n  margin: 0.2rem;\r\n}\r\n\r\n.footer-container {\r\n  background-color: #3c948b;\r\n  height: 15vh;\r\n\r\n  /* position: absolute;\r\n  bottom: 0; */\r\n  width: 100%;\r\n  box-shadow: 0 0 1px 2px;\r\n}\r\n\r\n.footer {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 25px 5%;\r\n}\r\n\r\n.footer-logo {\r\n  width: 150px;\r\n}\r\n\r\n.footer-note {\r\n  color: #fff;\r\n  line-height: 20px;\r\n  font-weight: 700;\r\n}\r\n\r\n/* DISPLAY movieS  */\r\n.container {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 2rem;\r\n  justify-content: center;\r\n  margin: 30px 0;\r\n}\r\n\r\n.movie {\r\n  padding: 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  box-shadow: 0 0 0.5rem #bbb;\r\n  overflow: hidden;\r\n  list-style: none;\r\n}\r\n\r\n.overflow {\r\n  overflow: hidden;\r\n}\r\n\r\n.overflow img {\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n\r\n.overflow img:hover {\r\n  transform: scale(1.2);\r\n  cursor: pointer;\r\n}\r\n\r\n.movie-img {\r\n  height: 20rem;\r\n}\r\n\r\n.title-like {\r\n  margin: 10px 0;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.like-btn {\r\n  border: 1px solid black;\r\n  width: 80px;\r\n  height: 25px;\r\n}\r\n\r\n.movie-name {\r\n  font-size: 20px;\r\n}\r\n\r\n.likes {\r\n  text-align: right;\r\n}\r\n\r\n.comment-reservation {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  gap: 10px;\r\n}\r\n\r\n.comment-btn,\r\n.reservation-btn {\r\n  border: 1px solid black;\r\n  width: 130px;\r\n  height: 30px;\r\n}\r\n\r\n.material-symbols-outlined {\r\n  cursor: pointer;\r\n}\r\n\r\n.comment-container {\r\n  display: none;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  z-index: 9999;\r\n  overflow: auto;\r\n}\r\n\r\n.comment-content {\r\n  position: relative;\r\n  max-width: 600px;\r\n  margin: 100px auto;\r\n  background-color: #fff;\r\n  padding: 20px;\r\n  border-radius: 5px;\r\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.close-modal {\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n  cursor: pointer;\r\n  color: #888;\r\n}\r\n\r\n.comment-movie-img {\r\n  width: 50%;\r\n  height: auto;\r\n  border-radius: 5px;\r\n  margin: 10px auto;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.movie-names,\r\n.language-genre,\r\n.runtime-premiered,\r\n.comments-heading {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.language-genre span,\r\n.runtime-premiered span {\r\n  font-size: 16px;\r\n}\r\n\r\n.comment-list {\r\n  list-style-type: none;\r\n}\r\n\r\n.comment-form {\r\n  margin-top: 10px;\r\n}\r\n\r\n.name,\r\n.textarea,\r\n.button {\r\n  width: 100%;\r\n  padding: 10px;\r\n  margin-bottom: 10px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 5px;\r\n}\r\n\r\n.button {\r\n  background-color: #4caf50;\r\n  color: #fff;\r\n  cursor: pointer;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-capstone/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-capstone/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_fetchAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/fetchAPI.js */ \"./src/modules/fetchAPI.js\");\n/* harmony import */ var _modules_comment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/comment.js */ \"./src/modules/comment.js\");\n\n\n\n\nawait (0,_modules_fetchAPI_js__WEBPACK_IMPORTED_MODULE_1__.fetchData)();\n(0,_modules_comment_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://javascript-capstone/./src/index.js?");

/***/ }),

/***/ "./src/modules/addBtnLike.js":
/*!***********************************!*\
  !*** ./src/modules/addBtnLike.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   postLike: () => (/* binding */ postLike),\n/* harmony export */   updateLikes: () => (/* binding */ updateLikes)\n/* harmony export */ });\nconst baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';\nconst appID = 'fvEG8bcfusuKIAC9Au4g';\nlet itemLikes = [];\n\nasync function getLikes() {\n  try {\n    const response = await fetch(`${baseURL}/${appID}/likes/`, {\n      method: 'GET',\n      headers: {\n        'Content-type': 'application/json',\n      },\n    });\n\n    if (response.status === 200) {\n      itemLikes = await response.json();\n      return true;\n    }\n    return null;\n  } catch (error) {\n    throw new Error('Error getting likes:', error);\n  }\n}\nasync function getLikesByMovie(id) {\n  await getLikes();\n  const likes = itemLikes.find((item) => item.item_id === id);\n  return likes ? likes.likes : 0;\n}\nasync function updateLikes() {\n  const likes = document.querySelectorAll('.likes');\n  await Promise.all(Array.from(likes).map(async (like) => {\n    const { id } = like.parentNode.parentNode;\n    const likes = await getLikesByMovie(id);\n    like.textContent = `${likes} Likes`;\n  }));\n}\nasync function postLike(id) {\n  const response = await fetch(`${baseURL}/${appID}/likes/`, {\n    method: 'POST',\n    body: JSON.stringify({\n      item_id: id,\n    }),\n    headers: {\n      'Content-type': 'application/json; charset=UTF-8',\n    },\n  });\n\n  return response.status === 201;\n}\n\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/addBtnLike.js?");

/***/ }),

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentBaseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fvEG8bcfusuKIAC9Au4g/';\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentBaseUrl);\n\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/api.js?");

/***/ }),

/***/ "./src/modules/comment.js":
/*!********************************!*\
  !*** ./src/modules/comment.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _commentDisplay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentDisplay.js */ \"./src/modules/commentDisplay.js\");\n/* harmony import */ var _commentList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentList.js */ \"./src/modules/commentList.js\");\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.js */ \"./src/modules/modal.js\");\n\n\n\n\nconst fetchShowUrl = async (url) => {\n  const toReturn = await fetch(url);\n  return toReturn.json();\n};\nconst commentBtnEventListener = () => {\n  const commentBtn = document.querySelectorAll('.comment-btn');\n  commentBtn.forEach((button) => {\n    button.addEventListener('click', async (e) => {\n      const link = e.target.getAttribute('data-itemlink');\n\n      const showToDisplay = fetchShowUrl(link);\n      showToDisplay.then(async (movie) => {\n        (0,_modal_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(movie);\n        const comment = await (0,_commentDisplay_js__WEBPACK_IMPORTED_MODULE_0__.getComment)(movie.id);\n        (0,_commentList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(comment);\n      });\n\n      const commentContainer = document.querySelector('.comment-container');\n      commentContainer.style.display = 'block';\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentBtnEventListener);\n\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/comment.js?");

/***/ }),

/***/ "./src/modules/commentDisplay.js":
/*!***************************************!*\
  !*** ./src/modules/commentDisplay.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getComment: () => (/* binding */ getComment),\n/* harmony export */   postComment: () => (/* binding */ postComment)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/modules/api.js\");\n\n\nconst postComment = async (comment) => {\n  try {\n    await fetch(_api_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n      method: 'POST',\n      body: JSON.stringify(comment),\n      headers: {\n        'Content-Type': 'application/json',\n      },\n    });\n  } catch (error) {\n    throw new Error(error);\n  }\n};\n\nconst getComment = async (id) => {\n  const params = {\n    item_id: id,\n  };\n  const searchParams = new URLSearchParams(params);\n  const response = await fetch(`${_api_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]}comments?${searchParams}`, {\n    method: 'GET',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n  });\n  const data = await response.json();\n  return data;\n};\n\n\n\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/commentDisplay.js?");

/***/ }),

/***/ "./src/modules/commentList.js":
/*!************************************!*\
  !*** ./src/modules/commentList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentList = (comment) => {\n  if (!comment.error) {\n    const commentHeading = document.querySelector('.comments-heading');\n    commentHeading.textContent = `Comments (${comment.length})`;\n    let commentListString = '';\n    const commentList = document.querySelector('.comment-list');\n    comment.forEach((item) => {\n      commentListString += `<li>${item.creation_date} ${item.username}: ${item.comment}</li>`;\n    });\n    commentList.innerHTML = commentListString;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentList);\n\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/commentList.js?");

/***/ }),

/***/ "./src/modules/counter.js":
/*!********************************!*\
  !*** ./src/modules/counter.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst countItems = () => {\n  setTimeout(() => {\n    const movieNums = document.querySelectorAll('.movie').length;\n    const movieNumber = document.getElementById('movie-number');\n    movieNumber.innerHTML = movieNums;\n    return movieNums;\n  }, 1000);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countItems);\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/counter.js?");

/***/ }),

/***/ "./src/modules/fetchAPI.js":
/*!*********************************!*\
  !*** ./src/modules/fetchAPI.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   fetchData: () => (/* binding */ fetchData)\n/* harmony export */ });\n/* harmony import */ var _addBtnLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addBtnLike.js */ \"./src/modules/addBtnLike.js\");\n/* harmony import */ var _counter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counter.js */ \"./src/modules/counter.js\");\n\n\n\nconst baseURL = 'https://api.tvmaze.com/search/shows?q=war';\nconst container = document.querySelector('.container');\n\nasync function fetchData() {\n  try {\n    const response = await fetch(baseURL);\n    const data = await response.json();\n\n    const code = data.map(\n      (movie) => `\n    <ul class=\"movie\" id=\"${movie.show.id}\">\n    <li class=\"overflow\">\n      <img src=\"${movie.show.image.original}\" alt=\"girl picture\" class=\"movie-img\" />\n    </li>\n    <li class=\"title-like\">\n    <h2 class=\"movie-name\">${movie.show.name}</h2>\n    <button class=\"like-btn\" data-show=\"${movie.show.id}\">Like</button>\n  </li>\n  <li><p class=\"likes\">0 Likes</p></li> \n  <li class=\"comment-reservation\">\n \n    <button class=\"comment-btn\" data-id=\"${movie.show.id}\" data-movie=\"${movie}\" data-itemlink=\"${movie.show._links.self.href}\">Comment</button>\n    <button class=\"reservation-btn\">reservation</button>\n  </li>\n  </ul>\n    `,\n    );\n\n    container.innerHTML = code;\n    (0,_counter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const likeBtns = document.querySelectorAll('.like-btn');\n    likeBtns.forEach((btn) => {\n      btn.addEventListener('click', async () => {\n        const id = btn.dataset.show;\n        if (btn.innerHTML === 'Like') {\n          const movie = await (0,_addBtnLike_js__WEBPACK_IMPORTED_MODULE_0__.postLike)(id);\n          if (movie) {\n            btn.innerHTML = 'Liked';\n            await (0,_addBtnLike_js__WEBPACK_IMPORTED_MODULE_0__.updateLikes)();\n          }\n        } else {\n          // eslint-disable-next-line no-alert\n          alert('Already liked this!');\n        }\n      });\n    });\n    await (0,_addBtnLike_js__WEBPACK_IMPORTED_MODULE_0__.updateLikes)();\n  } catch (error) {\n    throw new Error(error);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchData);\n\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/fetchAPI.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _commentDisplay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentDisplay.js */ \"./src/modules/commentDisplay.js\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.js */ \"./src/modules/api.js\");\n/* harmony import */ var _commentList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commentList.js */ \"./src/modules/commentList.js\");\n\n\n\n\nconst modalView = (movie) => {\n  const commentContainer = document.querySelector('.comment-container');\n  const commentContent = document.createElement('div');\n  commentContent.classList.add('comment-content');\n  commentContent.innerHTML = `<span class=\"material-symbols-outlined close-modal\">\n                           close\n                    </span>\n          <img src=\"${movie.image.original}\" alt=\"movie-img\" class=\"comment-movie-img\" />\n          <h3 class=\"movie-names\">${movie.name}</h3>\n          <div class=\"features\">\n            <div class=\"language-genre\">\n              <span>Language: ${movie.language}</span>\n              <span>Genre: ${movie.type}</span>\n            </div>\n            <div class=\"runtime-premiered\">\n              <span>Runtime: ${movie.runtime}mins</span>\n              <span>Premiered: ${movie.premiered}</span>\n            </div>\n          </div>\n          <h4 class=\"comments-heading\">Comments ()</h4>\n          <div class=\"comments\">\n            <ul class=\"comment-list\">\n             \n           </ul>\n          </div>\n        <form action=\"submit\" class=\"comment-form\" data-id=\"${movie.id}\">\n          <input type=\"text\" placeholder=\"Your name\" class=\"name input\"/>\n          <textarea\n            name=\"\"\n            id=\"textarea\"\n            class=\"textarea input\"\n            placeholder=\"Your insights\"\n            cols=\"30\"\n            rows=\"2\"\n          ></textarea>\n          <button class=\"button\">Comment</button>\n        </form>\n         `;\n  commentContainer.appendChild(commentContent);\n\n  const closeModalBtn = document.querySelector('.close-modal');\n  const closeModal = () => {\n    commentContainer.style.display = 'none';\n    commentContainer.innerHTML = '';\n  };\n\n  const form = document.querySelector('.comment-form');\n  form.addEventListener('submit', async (e) => {\n    e.preventDefault();\n    const id = e.target.getAttribute('data-id');\n\n    const name = document.querySelector('.name').value;\n    const commentMessage = document.querySelector('.textarea').value;\n    try {\n      await fetch(`${_api_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]}comments`, {\n        method: 'POST',\n        headers: {\n          'content-type': 'application/json',\n        },\n        body: JSON.stringify({\n          item_id: id,\n          username: name,\n          comment: commentMessage,\n        }),\n      });\n      const comment = await (0,_commentDisplay_js__WEBPACK_IMPORTED_MODULE_0__.getComment)(id);\n      (0,_commentList_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(comment);\n    } catch (error) {\n      throw new Error(error);\n    }\n    document.querySelector('.name').value = '';\n    document.querySelector('.textarea').value = '';\n  });\n\n  closeModalBtn.addEventListener('click', closeModal);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalView);\n\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/modal.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;