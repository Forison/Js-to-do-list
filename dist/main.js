/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"body{\\n\\tbackground-color: #f0e8ec;\\n\\tmargin: 0;\\n}\\n\\naside{\\n\\tbackground-color: #8a0f51;\\n\\tborder-radius: 15px;\\n\\tborder-top-left-radius: 0;\\n\\tborder-bottom-left-radius: 0;\\n\\tbox-shadow: 0 1px 5px #e4e2e2cc;\\n\\tcolor: #fff;\\n\\theight: 90vh;\\n\\t\\n}\\nh1, h2{\\n\\ttext-align: center;\\n\\tmargin-top: 5px;\\n}\\n.projectWrapper{\\n\\tbackground-color: #fff;\\n\\tborder-radius: 15px;\\n\\tbox-shadow: 0 1px 5px #e4e2e2cc;\\n\\theight: 60vh;\\n\\toverflow-y: scroll;\\n\\tmargin: 15px 20px 25px 20px;\\n\\t\\n}\\n#projectName{\\n\\tborder-radius: 4px;\\n\\tmargin-left: 5px;\\n\\tmargin-bottom: 10px;\\n}\\nbutton{\\n\\tcolor: #8a0f51;\\n\\tfont-weight: bold;\\n}\\nmain{\\n\\tbackground-color: #edd3e1;\\n\\tborder-radius: 15px;\\n\\tbox-shadow: 0 1px 5px #e4e2e2cc;\\n\\theight: 90vh;\\n\\t\\n}\\n/* .th {\\n\\tpadding: 0;\\n} */\\n\\n/* .th {\\n\\tbackground-color: #8a0f51;\\n\\tpadding: 5px;\\n\\ttext-align: center;\\n\\tcolor: #fff;\\n\\tborder: 1px solid #edd3e1;\\n\\n} */\\n.todoListWrap{\\n\\t/* height: 64vh; */\\n\\ttext-align:  center;\\n\\tpadding: 0;\\n\\toverflow-y: hidden;\\n\\n}\\n.todo button,.thead-dark {\\n\\tbackground-color: #8a0f51 !important;\\n\\tcolor: #fff;\\n}\\n\\n.todo button:hover{\\n\\tbackground-color: #c75793 !important;\\n\\tcolor: #fff;\\n}\\n.projects{\\n\\ttext-align: center;\\n\\tborder-bottom: 1px solid #8a0f51;\\n\\tpadding: 10px;\\n\\tcursor: pointer;\\n\\tcolor: #000;\\n}\\n\\n.table-responsive{\\n\\tbackground-color: #fff;\\n\\tcolor: #000;\\n  height: 64vh;\\n\\toverflow-y: auto;\\n\\twidth: 100%;\\n\\n}\\n\\n.thead-dark {\\n\\toverflow: auto;\\n}\\ntbody{\\n\\toverflow: auto;\\n\\twidth: 100%\\n}\\n\\n.strike{\\n\\ttext-decoration: line-through;\\n\\tcolor: #ff0000;\\n}\\n.del{\\n\\tbackground-color:#ff0000;\\n\\tborder: 0;\\n\\tborder-radius: 3px;\\n\\tcolor:#fff;\\n\\tfont-size: 12px;\\n}\\n.edit{\\n\\tbackground-color:#008000;\\n\\tborder: 0;\\n\\tborder-radius: 3px;\\n\\tcolor:#fff;\\n\\tfont-size: 12px;\\n}\\n.edit:hover{\\n\\tbackground-color:#01aa01;\\n\\tcolor:#e0dede;\\n}\\n.del:hover{\\n\\tbackground-color:#d40404;\\n\\tcolor:#e0dede;\\n}\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/component/project.js":
/*!**********************************!*\
  !*** ./src/component/project.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return project; });\nconst project = (() => {\n\tconst stored = JSON.parse(localStorage.getItem(\"proj\")) || null\n\tlet projectList = stored || {'Default' : []}\n\tlet currProj = localStorage.getItem(\"currProj\") || \"Default\";\n\tlet currList = projectList[currProj]\n\t\n\tconst projToLocal = () => {\n\t\t  localStorage.setItem('proj', JSON.stringify(projectList)) \n\t}\n\tconst getProjFromLocal = () => {\n\t\tJSON.parse(localStorage.getItem('proj')) || null\n\t}\n\tconst setTodoFromLocal = () => {\n\t\tlocalStorage.setItem('currProj', currProj) || null\n\t}\n\t\n\tconst createProject = (projectTitle) => {\n\t\tprojectList[projectTitle] = []\n\t};\n\treturn { \n\t\tcreateProject,\n\t\tprojectList,\n\t\tprojToLocal,\n\t\tgetProjFromLocal,\n\t\tcurrList,\n\t\tsetTodoFromLocal,\n\t\tcurrProj\n\t\t\n\t }\n})();\n\n\n\n\n//# sourceURL=webpack:///./src/component/project.js?");

/***/ }),

/***/ "./src/component/todo.js":
/*!*******************************!*\
  !*** ./src/component/todo.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return todolist; });\nconst todolist = (() => {\n\tconst lists = [];\n\tconst createTodo = (title, description, dueDate, priority) => {\n\t\treturn { title, description, dueDate, priority }\n\t};\n\treturn { createTodo, lists };\n})();\n\n\n\n//# sourceURL=webpack:///./src/component/todo.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _component_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/todo */ \"./src/component/todo.js\");\n/* harmony import */ var _component_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/project */ \"./src/component/project.js\");\n\n\n\n\n\nconst $ = document.querySelector.bind(document);\nconst $$ = document.querySelectorAll.bind(document);\n\n\n\nconst main = (() => {\n\tconst addProject = () => {\n\t\t$('#addProject').addEventListener('click', (e) => {\n\t\t\te.preventDefault();\n\t\t\tconst projectName = $('#projectName').value;\n\t\t\t_component_project__WEBPACK_IMPORTED_MODULE_2__[\"default\"].createProject(projectName);\n\t\t\t_component_project__WEBPACK_IMPORTED_MODULE_2__[\"default\"].projToLocal()\n\t\t\tclearProjects();\n\t\t\tshowProject();\n\t\t})\n\t}\n\tconst clearProjects = () => {\n\t\tArray.from($$('.projects')).forEach(cell => cell.style.display = 'none')\n\t}\n\n\tconst showProject = () => {\n\t\tconst allPro = _component_project__WEBPACK_IMPORTED_MODULE_2__[\"default\"].projectList;\n\t\tclearProjects();\n\t\tfor (let key in allPro){\n\t\t\tconst project1 = document.createElement('h5')\n\t\t\tproject1.innerHTML = key\n\t\t\tproject1.classList.add('projects')\n\t\t\t$('.projectWrapper').appendChild(project1)\n\t\t\tproject1.addEventListener('click', (e) =>{\n\t\t\t\tif(_component_project__WEBPACK_IMPORTED_MODULE_2__[\"default\"].currProj == project1.innerHTML){return;}\n\t\t\t\t_component_project__WEBPACK_IMPORTED_MODULE_2__[\"default\"].currProj =  project1.innerHTML\n\t\t\t\tlocalStorage.setItem('currProj', _component_project__WEBPACK_IMPORTED_MODULE_2__[\"default\"].currProj)\n\t\t\t\ttodoObj.clearDom($('tbody'))\n\t\t\t\ttodoObj.showTodo();\n\t\t\t\tconsole.log(_component_project__WEBPACK_IMPORTED_MODULE_2__[\"default\"].currProj)\n\t\t\t})\n\t\t}\t\n\t\tlocalStorage.setItem('proj', JSON.stringify(allPro))\n\t\t_component_project__WEBPACK_IMPORTED_MODULE_2__[\"default\"].setTodoFromLocal()\n\t}\n\t\n\treturn {\n\t\taddProject,\n\t\tshowProject\n\t}\n\n\n})();\nmain.addProject()\nmain.showProject();\n\n$('#removeProject').addEventListener('click', (e) => {\n\te.preventDefault();\n})\n\nconst todoObj = (() => {\n\n\tconst clearDom = (node) => {\n    while(node.firstChild) {\n      node.removeChild(node.firstChild);\n    }\n  }\n\t\n\tconst createtodo = () => {\n\t\tconst title = $('#title').value;\n\t\tconst des = $('#description').value;\n\t\tconst dueDate = $('#dueDate').value;\n\t\tlet priority;\n\t\t$(\"#urgent\").checked ? priority = \"urgent\" : priority = 'normal';\n\t\tconst todo = _component_todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createTodo(title, des, dueDate, priority)\n\t\t_component_project__WEBPACK_IMPORTED_MODULE_2__[\"default\"].projectList[_component_project__WEBPACK_IMPORTED_MODULE_2__[\"default\"].currProj].push(todo)\n\t\t_component_project__WEBPACK_IMPORTED_MODULE_2__[\"default\"].projToLocal();\n\t\t\n\t};\n\n\tconst showTodo = () => {\n\t\tconst lists = _component_project__WEBPACK_IMPORTED_MODULE_2__[\"default\"].projectList[_component_project__WEBPACK_IMPORTED_MODULE_2__[\"default\"].currProj]\n\t\tlists.forEach((todo, index) => {\n\t\t\tlet tr = document.createElement('tr')\n\t\t\ttr.classList.add('tbody-row')\n\t\t\ttr.setAttribute('data-id', index);\n\n\t\t\tfor(let ele in todo){\n\t\t\t\tlet td = document.createElement('td')\n\t\t\t\ttd.innerHTML = todo[ele]\n\t\t\t\ttr.appendChild(td)\n\t\t\t}\n\n\t\t\tlet completed = document.createElement('td');\n\t\t\tlet checkbox = document.createElement('input');\n\t\t\tcheckbox.classList.add('complete');\n\t\t\tcheckbox.type = 'checkbox';\n\t\t\tcheckbox.name = 'completed';\n\t\t\tcompleted.appendChild(checkbox);\n\t\t\ttr.appendChild(completed)\n\n\t\t\tlet action = document.createElement('td');\n\t\t\taction.classList.add(\"d-flex\");\n\t\t\ttr.appendChild(action);\n\t\t\tconst edit = document.createElement('button');\n\t\t\tedit.classList.add('edit', 'pl-2', 'pr-2');\n\t\t\tedit.innerHTML = 'Edit';\n\t\t\tconst del = document.createElement('button');\n\t\t\tdel.innerHTML = 'Del';\n\t\t\t\n\t\t\tdel.classList.add('ml-2', 'del', 'pl-2', 'pr-2');\n\t\t\taction.appendChild(edit);\n\t\t\taction.appendChild(del);\n\n\t\t\t$('tbody').appendChild(tr)\n\t\t\tdel.addEventListener('click', (e) => {\n\t\t\t\tclearDom($('tbody'))\n\t\t\t\t_component_project__WEBPACK_IMPORTED_MODULE_2__[\"default\"].projectList[_component_project__WEBPACK_IMPORTED_MODULE_2__[\"default\"].currProj].splice(index, 1)\n\t\t\t\tshowTodo()\n\t\t\t})\n\t\t\tcheckbox.addEventListener('click', () => {\n\t\t\t\tchecking(checkbox, index)\n\t\t\t});\n\n\t\t});\n\t\tlocalStorage.setItem('proj', JSON.stringify(_component_project__WEBPACK_IMPORTED_MODULE_2__[\"default\"].projectList))\n\t}\n\tconst checking = (checkbox, index) => {\n\t\tlet elements = document.querySelectorAll('.tbody-row');\n\t\tcheckbox.checked ? elements[index].classList.add('strike') : elements[index].classList.remove('strike');\n\t}\n\n\tconst addTodo = () => {\n\t\t$('#addTodo').addEventListener('click', (e) => {\n\t\t\te.preventDefault();\n\t\t\tcreatetodo()\n\t\t\tclearDom($('tbody'))\n\t\t\tshowTodo()\n\t\t})\n\t}\n\n\treturn {\n\t\taddTodo,\n\t\tshowTodo,\n\t\tclearDom\n\t}\n})()\n\n// const delTodo = (i) =>{\n// \tconsole.log('me')\n// \t// project.projectList[project.currProj].splice(i, 1)\n// \t// localStorage.setItem('proj', JSON.stringify(project.projectList))\n// \t// todoObj.clearDom($('tbody'));\n// \ttodoObj.showTodo();\n// }\n\n\n\ntodoObj.addTodo();\ntodoObj.showTodo();\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ })

/******/ });