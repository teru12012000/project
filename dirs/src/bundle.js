/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/numeron.js":
/*!************************!*\
  !*** ./src/numeron.js ***!
  \************************/
/***/ (() => {

eval("const $doc=document;\r\nWindow.onload = function() {\r\n  let $el = $doc.getElementById(\"Sounds\");\r\n  $el.play();\r\n  };\r\n  const audioPlay=()=> {\r\n    let $el1 = $doc.getElementById(\"sound1\");\r\n    $el1.play();\r\n  };\r\n\r\n  const popupImage=()=>{\r\n    var $popup = $doc.getElementById('js-popup');\r\n    if(!$popup) return;\r\n\r\n    var $blackBg = $doc.getElementById('js-black-bg');\r\n    var $closeBtn = $doc.getElementById('js-close-btn');\r\n    var $showBtn = $doc.getElementById('js-show-popup');\r\n\r\n    closePopUp($blackBg);\r\n    closePopUp($closeBtn);\r\n    closePopUp($showBtn);\r\n    function closePopUp(elem) {\r\n      if(!elem) return;\r\n        elem.addEventListener('click', function() {\r\n          $popup.classList.toggle('is-show');\r\n        });\r\n      }\r\n  }\r\n  $a_tag=$doc.getElementsByTagName('a');\r\n  $a_tag[0].addEventListener('click',(e)=>clickHandler(e));\r\n\r\n  const clickHandler=(e)=>{\r\n    e.preventDefault();\r\n  }\r\n  popupImage();\n\n//# sourceURL=webpack://opening/./src/numeron.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/numeron.js"]();
/******/ 	
/******/ })()
;