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

/***/ "./src/input/input.ts":
/*!****************************!*\
  !*** ./src/input/input.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Input = /** @class */ (function () {\n    function Input() {\n        var _this = this;\n        this.canvas = document.getElementById(\"mainCanvas\");\n        this.map = {\n            mouseX: 0,\n            mouseY: 0\n        };\n        document.addEventListener('keydown', function (e) {\n            _this.map[e.key] = 1;\n        });\n        document.addEventListener('keyup', function (e) {\n            _this.map[e.key] = 0;\n        });\n        document.addEventListener('mousemove', function (e) {\n            var mouseX = Math.round((e.clientX - _this.canvas.offsetLeft) * (_this.canvas.width / _this.canvas.clientWidth));\n            var mouseY = Math.round((e.clientY - _this.canvas.offsetTop) * (_this.canvas.height / _this.canvas.clientHeight));\n            _this.map['mouseX'] = mouseX;\n            _this.map['mouseY'] = mouseY;\n        });\n        document.addEventListener('mousedown', function (e) {\n            _this.map['mouse1'] = 1;\n        });\n        document.addEventListener('mouseup', function (e) {\n            _this.map['mouse1'] = 0;\n        });\n    }\n    Input.prototype.poll = function (key) {\n        return this.map[key];\n    };\n    return Input;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);\n\n\n//# sourceURL=webpack://example/./src/input/input.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _video_video__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video/video */ \"./src/video/video.ts\");\n/* harmony import */ var _input_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input/input */ \"./src/input/input.ts\");\n\n\nvar Game = /** @class */ (function () {\n    function Game() {\n        var _this = this;\n        this.video = new _video_video__WEBPACK_IMPORTED_MODULE_0__[\"default\"](640, 480);\n        this.input = new _input_input__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n        requestAnimationFrame(function () {\n            _this.main();\n        });\n    }\n    Game.prototype.main = function () {\n        var _this = this;\n        this.video.render(this.input);\n        requestAnimationFrame(function () {\n            _this.main();\n        });\n    };\n    return Game;\n}());\n(function () {\n    new Game();\n})();\n\n\n//# sourceURL=webpack://example/./src/main.ts?");

/***/ }),

/***/ "./src/video/video.ts":
/*!****************************!*\
  !*** ./src/video/video.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _shaders_frag_glsl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shaders/frag.glsl */ \"./src/video/shaders/frag.glsl\");\n/* harmony import */ var _shaders_vert_glsl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shaders/vert.glsl */ \"./src/video/shaders/vert.glsl\");\n\n\nvar Video = /** @class */ (function () {\n    function Video(width, height) {\n        this.rotate = 0;\n        this.width = width;\n        this.height = height;\n        //Initialize canvas\n        document.body.style.backgroundColor = '#000000';\n        this.canvas = document.createElement('canvas');\n        this.canvas.width = width;\n        this.canvas.height = height;\n        this.canvas.style.position = 'absolute';\n        this.canvas.style.left = '0px';\n        this.canvas.style.right = '0px';\n        this.canvas.style.top = '0px';\n        this.canvas.style.bottom = '0px';\n        this.canvas.style.margin = 'auto';\n        this.canvas.style.width = 'width: 56.25vh';\n        this.canvas.style.height = '100vh';\n        this.canvas.style.maxHeight = '177.78voadObjw';\n        this.canvas.style.maxWidth = '100vw';\n        this.canvas.style.imageRendering = 'optimizeSpeed';\n        this.canvas.id = 'mainCanvas';\n        document.body.appendChild(this.canvas);\n        //Initialize WebGL context\n        this.gl = this.canvas.getContext('webgl');\n        this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);\n        this.gl.clearColor(0.1, 0.1, 0.1, 1);\n        //Load Programs\n        this.progs = {};\n        this.addProg('prog', _shaders_vert_glsl__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _shaders_frag_glsl__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n        //Load Buffer\n        this.buffers = {};\n        this.addBuffer('buffPos', [\n            0, 0,\n            32, 0,\n            32, 32,\n            32, 32,\n            0, 32,\n            0, 0\n        ]);\n        this.textures = {};\n        this.matrix = [\n            1, 0, 0,\n            0, 1, 0,\n            16, 16, 1\n        ];\n    }\n    Video.prototype.addTexture = function (file) {\n        var _this = this;\n        var image = new Image();\n        image.src = 'img/' + file + '.jpg';\n        image.onload = function () {\n            var texture = _this.gl.createTexture();\n            _this.gl.bindTexture(_this.gl.TEXTURE_2D, texture);\n            _this.gl.texParameteri(_this.gl.TEXTURE_2D, _this.gl.TEXTURE_WRAP_S, _this.gl.CLAMP_TO_EDGE);\n            _this.gl.texParameteri(_this.gl.TEXTURE_2D, _this.gl.TEXTURE_WRAP_T, _this.gl.CLAMP_TO_EDGE);\n            _this.gl.texParameteri(_this.gl.TEXTURE_2D, _this.gl.TEXTURE_MIN_FILTER, _this.gl.NEAREST);\n            _this.gl.texParameteri(_this.gl.TEXTURE_2D, _this.gl.TEXTURE_MAG_FILTER, _this.gl.NEAREST);\n            _this.gl.texImage2D(_this.gl.TEXTURE_2D, 0, _this.gl.RGBA, _this.gl.RGBA, _this.gl.UNSIGNED_BYTE, image);\n        };\n    };\n    Video.prototype.addProg = function (progName, vertShader, fragShader) {\n        var vShader = this.gl.createShader(this.gl.VERTEX_SHADER);\n        var fShader = this.gl.createShader(this.gl.FRAGMENT_SHADER);\n        this.gl.shaderSource(vShader, vertShader);\n        this.gl.shaderSource(fShader, fragShader);\n        this.gl.compileShader(vShader);\n        this.gl.compileShader(fShader);\n        var program = this.gl.createProgram();\n        this.gl.attachShader(program, vShader);\n        this.gl.attachShader(program, fShader);\n        this.gl.linkProgram(program);\n        this.progs[progName] = program;\n    };\n    Video.prototype.addBuffer = function (bufferName, data) {\n        var buffer = this.gl.createBuffer();\n        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);\n        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(data), this.gl.STATIC_DRAW);\n        this.buffers[bufferName] = buffer;\n    };\n    Video.prototype.setProg = function (prog) {\n        this.gl.useProgram(this.progs[prog]);\n    };\n    Video.prototype.setAttr = function (prog, attr, size, buffer) {\n        var index = this.gl.getAttribLocation(this.progs[prog], attr);\n        this.gl.enableVertexAttribArray(index);\n        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffers[buffer]);\n        this.gl.vertexAttribPointer(index, size, this.gl.FLOAT, false, 0, 0);\n    };\n    Video.prototype.setUnif = function (prog, unif, type, data) {\n        var index = this.gl.getUniformLocation(this.progs[prog], unif);\n        if (type == 'vec') {\n            if (data.length == 1)\n                this.gl.uniform1f(index, data[0]);\n            if (data.length == 2)\n                this.gl.uniform2f(index, data[0], data[1]);\n            if (data.length == 3)\n                this.gl.uniform3f(index, data[0], data[1], data[2]);\n            if (data.length == 4)\n                this.gl.uniform4f(index, data[0], data[1], data[2], data[4]);\n        }\n        if (type == 'mat') {\n            if (data.length == 9)\n                this.gl.uniformMatrix3fv(index, false, data);\n        }\n    };\n    Video.prototype.clear = function () {\n        this.gl.clear(this.gl.COLOR_BUFFER_BIT);\n    };\n    Video.prototype.render = function (input) {\n        if (input.poll('ArrowLeft'))\n            this.rotate += .01;\n        if (input.poll('ArrowRight'))\n            this.rotate -= .01;\n        this.matrix[0] = Math.cos(this.rotate);\n        this.matrix[1] = -Math.sin(this.rotate);\n        this.matrix[3] = Math.sin(this.rotate);\n        this.matrix[4] = Math.cos(this.rotate);\n        this.clear();\n        this.setProg('prog');\n        this.setAttr('prog', 'a_pos', 2, 'buffPos');\n        this.setUnif('prog', 'u_res', 'vec', [this.width, this.height]);\n        this.setUnif('prog', 'u_mat', 'mat', this.matrix);\n        this.gl.drawArrays(this.gl.LINE_STRIP, 0, 6);\n    };\n    return Video;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Video);\n\n\n//# sourceURL=webpack://example/./src/video/video.ts?");

/***/ }),

/***/ "./src/video/shaders/frag.glsl":
/*!*************************************!*\
  !*** ./src/video/shaders/frag.glsl ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"precision mediump float;\\n\\nuniform sampler2D u_img;\\n\\nvarying vec2 v_tex;\\n \\nvoid main() {\\n  gl_FragColor = vec4(1,1,1,1);\\n}\");\n\n//# sourceURL=webpack://example/./src/video/shaders/frag.glsl?");

/***/ }),

/***/ "./src/video/shaders/vert.glsl":
/*!*************************************!*\
  !*** ./src/video/shaders/vert.glsl ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"uniform vec2 u_res;\\nuniform mat3 u_mat;\\nattribute vec2 a_pos;\\n\\nvoid main(){\\n    vec3 matPos = u_mat * vec3(a_pos,1);\\n    vec2 clip2 = matPos.xy / u_res;\\n    vec2 clip1 = clip2 * 2.0;\\n    vec2 clipPos = clip1 - 1.0;\\n\\n    gl_Position = vec4(clipPos * vec2(1,-1),0,1);\\n}\");\n\n//# sourceURL=webpack://example/./src/video/shaders/vert.glsl?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;