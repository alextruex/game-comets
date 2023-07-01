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

/***/ "./src/game.ts":
/*!*********************!*\
  !*** ./src/game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _video_video__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video/video */ \"./src/video/video.ts\");\n/* harmony import */ var _input_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input/input */ \"./src/input/input.ts\");\n/* harmony import */ var _stage_stage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stage/stage */ \"./src/stage/stage.ts\");\n\n\n\nvar Game = /** @class */ (function () {\n    function Game() {\n        var _this = this;\n        this.video = new _video_video__WEBPACK_IMPORTED_MODULE_0__[\"default\"](640, 480);\n        this.input = new _input_input__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n        this.stage = new _stage_stage__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this);\n        requestAnimationFrame(function () {\n            _this.main();\n        });\n    }\n    Game.prototype.main = function () {\n        var _this = this;\n        this.stage.update(this);\n        this.video.render();\n        requestAnimationFrame(function () {\n            _this.main();\n        });\n    };\n    return Game;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);\n\n\n//# sourceURL=webpack://example/./src/game.ts?");

/***/ }),

/***/ "./src/geometry/cannon.ts":
/*!********************************!*\
  !*** ./src/geometry/cannon.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar vertices = [-20.0, -10.0, 20.0, -10.0, -20.0, 10.0, 20.0, 10.0];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (vertices);\n\n\n//# sourceURL=webpack://example/./src/geometry/cannon.ts?");

/***/ }),

/***/ "./src/geometry/geometry.ts":
/*!**********************************!*\
  !*** ./src/geometry/geometry.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   asteroid: () => (/* binding */ asteroid),\n/* harmony export */   cannon: () => (/* binding */ cannon),\n/* harmony export */   cube: () => (/* binding */ cube)\n/* harmony export */ });\nvar asteroid = [\n    0, -8,\n    6, -6,\n    6, -6,\n    8, 0,\n    8, 0,\n    6, 6,\n    6, 6,\n    0, 8,\n    0, 8,\n    -6, 6,\n    -6, 6,\n    -8, 0,\n    -8, 0,\n    -6, -6,\n    -6, -6,\n    0, -8\n];\nvar cube = [\n    -8, -8,\n    8, -8,\n    8, -8,\n    8, 8,\n    8, 8,\n    -8, 8,\n    -8, 8,\n    -8, -8,\n];\nvar cannon = [\n    -16, -8,\n    16, -8,\n    16, -8,\n    16, 8,\n    16, 8,\n    -16, 8,\n    -16, 8,\n    -16, -8,\n];\n\n\n\n//# sourceURL=webpack://example/./src/geometry/geometry.ts?");

/***/ }),

/***/ "./src/input/input.ts":
/*!****************************!*\
  !*** ./src/input/input.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Input = /** @class */ (function () {\n    function Input() {\n        var _this = this;\n        this.canvas = document.getElementById(\"glCanvas\");\n        this.map = {\n            mouseX: 0,\n            mouseY: 0\n        };\n        document.addEventListener('keydown', function (e) {\n            _this.map[e.key] = 1;\n        });\n        document.addEventListener('keyup', function (e) {\n            _this.map[e.key] = 0;\n        });\n        document.addEventListener('mousemove', function (e) {\n            var mouseX = Math.round((e.clientX - _this.canvas.offsetLeft) * (_this.canvas.width / _this.canvas.clientWidth));\n            var mouseY = Math.round((e.clientY - _this.canvas.offsetTop) * (_this.canvas.height / _this.canvas.clientHeight));\n            _this.map['mouseX'] = mouseX;\n            _this.map['mouseY'] = mouseY;\n        });\n        document.addEventListener('mousedown', function (e) {\n            _this.map['mouse1'] = 1;\n        });\n        document.addEventListener('mouseup', function (e) {\n            _this.map['mouse1'] = 0;\n        });\n    }\n    Input.prototype.poll = function (key) {\n        return this.map[key];\n    };\n    return Input;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);\n\n\n//# sourceURL=webpack://example/./src/input/input.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.ts\");\n\n(function () {\n    new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n})();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n//# sourceURL=webpack://example/./src/main.ts?");

/***/ }),

/***/ "./src/math/matrix.ts":
/*!****************************!*\
  !*** ./src/math/matrix.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction m3Multiply(a, b) {\n    var a00 = a[0 * 3 + 0];\n    var a01 = a[0 * 3 + 1];\n    var a02 = a[0 * 3 + 2];\n    var a10 = a[1 * 3 + 0];\n    var a11 = a[1 * 3 + 1];\n    var a12 = a[1 * 3 + 2];\n    var a20 = a[2 * 3 + 0];\n    var a21 = a[2 * 3 + 1];\n    var a22 = a[2 * 3 + 2];\n    var b00 = b[0 * 3 + 0];\n    var b01 = b[0 * 3 + 1];\n    var b02 = b[0 * 3 + 2];\n    var b10 = b[1 * 3 + 0];\n    var b11 = b[1 * 3 + 1];\n    var b12 = b[1 * 3 + 2];\n    var b20 = b[2 * 3 + 0];\n    var b21 = b[2 * 3 + 1];\n    var b22 = b[2 * 3 + 2];\n    return [\n        b00 * a00 + b01 * a10 + b02 * a20,\n        b00 * a01 + b01 * a11 + b02 * a21,\n        b00 * a02 + b01 * a12 + b02 * a22,\n        b10 * a00 + b11 * a10 + b12 * a20,\n        b10 * a01 + b11 * a11 + b12 * a21,\n        b10 * a02 + b11 * a12 + b12 * a22,\n        b20 * a00 + b21 * a10 + b22 * a20,\n        b20 * a01 + b21 * a11 + b22 * a21,\n        b20 * a02 + b21 * a12 + b22 * a22,\n    ];\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (m3Multiply);\n\n\n//# sourceURL=webpack://example/./src/math/matrix.ts?");

/***/ }),

/***/ "./src/stage/meteors.ts":
/*!******************************!*\
  !*** ./src/stage/meteors.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _geometry_geometry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../geometry/geometry */ \"./src/geometry/geometry.ts\");\n\nvar Meteors = /** @class */ (function () {\n    function Meteors(game) {\n        this.meteors = [];\n        this.xspeed = 1;\n        this.yspeed = 0;\n        this.meteors.push(game.video.createDShape(_geometry_geometry__WEBPACK_IMPORTED_MODULE_0__.asteroid));\n        game.video.translate(64, 64, this.meteors[0]);\n    }\n    Meteors.prototype.update = function (game) {\n        if (game.input.poll(' ')) {\n            game.video.position(game.stage.player.x, game.stage.player.y, this.meteors[0]);\n            this.xspeed = Math.sin(game.stage.player.angle * (Math.PI / 180)) * 5;\n            this.yspeed = -Math.cos(game.stage.player.angle * (Math.PI / 180)) * 5;\n        }\n        game.video.translate(this.xspeed, this.yspeed, 1);\n        //this.yspeed += .05;\n    };\n    return Meteors;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Meteors);\n\n\n//# sourceURL=webpack://example/./src/stage/meteors.ts?");

/***/ }),

/***/ "./src/stage/planets.ts":
/*!******************************!*\
  !*** ./src/stage/planets.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Planet = /** @class */ (function () {\n    function Planet(x, y, r) {\n        this.x = x;\n        this.y = y;\n        this.r = r;\n    }\n    return Planet;\n}());\nvar Planets = /** @class */ (function () {\n    function Planets(game) {\n        this.planets = [];\n        this.planets.push(new Planet(240, 240, 48));\n    }\n    Planets.prototype.update = function (game) {\n    };\n    return Planets;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Planets);\n\n\n//# sourceURL=webpack://example/./src/stage/planets.ts?");

/***/ }),

/***/ "./src/stage/player.ts":
/*!*****************************!*\
  !*** ./src/stage/player.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _geometry_cannon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../geometry/cannon */ \"./src/geometry/cannon.ts\");\n\nvar Player = /** @class */ (function () {\n    function Player(game) {\n        this.angle = 90;\n        this.y = 0;\n        this.x = 16;\n        this.shape = game.video.createDShape(_geometry_cannon__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n            game.video.translate(this.x, this.y, this.shape);\n    }\n    Player.prototype.update = function (game) {\n        var n = game.input;\n        var v = game.video;\n        var s = this.shape;\n        if (n.poll('ArrowUp')) {\n            v.translate(0, -2, s);\n            this.y -= 2;\n        }\n        if (n.poll('ArrowDown')) {\n            v.translate(0, 2, s);\n            this.y += 2;\n        }\n        if (n.poll('ArrowLeft')) {\n            v.rotate(-3 * (Math.PI / 180), s);\n            this.angle -= 3;\n        }\n        if (n.poll('ArrowRight')) {\n            v.rotate(3 * (Math.PI / 180), s);\n            this.angle += 3;\n        }\n    };\n    return Player;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n\n//# sourceURL=webpack://example/./src/stage/player.ts?");

/***/ }),

/***/ "./src/stage/stage.ts":
/*!****************************!*\
  !*** ./src/stage/stage.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/stage/player.ts\");\n/* harmony import */ var _meteors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meteors */ \"./src/stage/meteors.ts\");\n/* harmony import */ var _planets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./planets */ \"./src/stage/planets.ts\");\n\n\n\nvar Stage = /** @class */ (function () {\n    function Stage(game) {\n        this.player = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game);\n        this.meteors = new _meteors__WEBPACK_IMPORTED_MODULE_1__[\"default\"](game);\n        this.planets = new _planets__WEBPACK_IMPORTED_MODULE_2__[\"default\"](game);\n    }\n    Stage.prototype.update = function (game) {\n        this.player.update(game);\n        this.meteors.update(game);\n    };\n    return Stage;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Stage);\n\n\n//# sourceURL=webpack://example/./src/stage/stage.ts?");

/***/ }),

/***/ "./src/video/video.ts":
/*!****************************!*\
  !*** ./src/video/video.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _shaders_frag_glsl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shaders/frag.glsl */ \"./src/video/shaders/frag.glsl\");\n/* harmony import */ var _shaders_vert_glsl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shaders/vert.glsl */ \"./src/video/shaders/vert.glsl\");\n/* harmony import */ var _shaders_vert2_glsl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shaders/vert2.glsl */ \"./src/video/shaders/vert2.glsl\");\n/* harmony import */ var _shaders_frag2_glsl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shaders/frag2.glsl */ \"./src/video/shaders/frag2.glsl\");\n/* harmony import */ var _shaders_vert3_glsl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shaders/vert3.glsl */ \"./src/video/shaders/vert3.glsl\");\n/* harmony import */ var _shaders_frag3_glsl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shaders/frag3.glsl */ \"./src/video/shaders/frag3.glsl\");\n/* harmony import */ var _math_matrix__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../math/matrix */ \"./src/math/matrix.ts\");\n\n\n\n\n\n\n\nvar DynamicShape = /** @class */ (function () {\n    function DynamicShape(bufferIndex, bufferSize) {\n        this.x = 0;\n        this.y = 0;\n        this.angle = 0;\n        this.bufferIndex = 0;\n        this.bufferSize = 0;\n        this.bufferIndex = bufferIndex;\n        this.bufferSize = bufferSize;\n    }\n    return DynamicShape;\n}());\nvar StaticShape = /** @class */ (function () {\n    function StaticShape() {\n        this.bufferIndex = 0;\n    }\n    return StaticShape;\n}());\nvar TextBoxL = /** @class */ (function () {\n    function TextBoxL() {\n        this.x = 0;\n        this.y = 0;\n        this.text = \"\";\n    }\n    return TextBoxL;\n}());\nvar Video = /** @class */ (function () {\n    function Video(width, height) {\n        this.programs = [];\n        this.buffers = [];\n        this.textures = [];\n        this.fBuffers = [];\n        this.dShapes = [];\n        this.sShapes = [];\n        this.tBoxesL = [];\n        this.projection = [];\n        this.swap = 0;\n        //Initialize WebGL context\n        this.width = width;\n        this.height = height;\n        this.canvas = document.getElementById('glCanvas');\n        this.canvas.width = width * 2;\n        this.canvas.height = height * 2;\n        //this.canvas.style.imageRendering = 'optimizeSpeed';\n        //this.canvas.style.imageRendering = 'optimizeLegibility';\n        this.gl = this.canvas.getContext('webgl', { preserveDrawingBuffer: false, premultipliedAlpha: false });\n        this.gl.clearColor(0.1, 0.0, 0.0, 1.0);\n        //Load Programs\n        this.addProg(_shaders_vert_glsl__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _shaders_frag_glsl__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n        this.addProg(_shaders_vert3_glsl__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _shaders_frag3_glsl__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n        this.addProg(_shaders_vert2_glsl__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _shaders_frag2_glsl__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n        this.addBuff([\n            1.0, 1.0,\n            -1.0, 1.0,\n            -1.0, -1.0,\n            // Second triangle:\n            -1.0, -1.0,\n            1.0, -1.0,\n            1.0, 1.0\n        ]);\n        this.addBuff([\n            1.0, 1.0,\n            0, 1.0,\n            0, 0,\n            // Second triangle:\n            0, 0,\n            1.0, 0,\n            1.0, 1.0\n        ]);\n        var i = this.addTex();\n        this.addFrameBuff(this.textures[i]);\n        i = this.addTex();\n        this.addFrameBuff(this.textures[i]);\n    }\n    Video.prototype.addProg = function (vertShader, fragShader) {\n        var vShader = this.gl.createShader(this.gl.VERTEX_SHADER);\n        var fShader = this.gl.createShader(this.gl.FRAGMENT_SHADER);\n        this.gl.shaderSource(vShader, vertShader);\n        this.gl.shaderSource(fShader, fragShader);\n        this.gl.compileShader(vShader);\n        this.gl.compileShader(fShader);\n        var program = this.gl.createProgram();\n        this.gl.attachShader(program, vShader);\n        this.gl.attachShader(program, fShader);\n        this.gl.linkProgram(program);\n        return this.programs.push(program) - 1;\n    };\n    Video.prototype.addBuff = function (vertices) {\n        var buffer = this.gl.createBuffer();\n        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);\n        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(vertices), this.gl.STATIC_DRAW);\n        return this.buffers.push(buffer) - 1;\n    };\n    Video.prototype.addTex = function () {\n        var tex = this.gl.createTexture();\n        this.gl.bindTexture(this.gl.TEXTURE_2D, tex);\n        this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.width, this.height, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, null);\n        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.NEAREST);\n        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.NEAREST);\n        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);\n        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);\n        return this.textures.push(tex) - 1;\n    };\n    Video.prototype.addFrameBuff = function (tex) {\n        var fBuffer = this.gl.createFramebuffer();\n        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, fBuffer);\n        this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, tex, 0);\n        return this.fBuffers.push(fBuffer) - 1;\n    };\n    Video.prototype.createDShape = function (vertices) {\n        var buffer = this.gl.createBuffer();\n        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);\n        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(vertices), this.gl.STATIC_DRAW);\n        var bufferIndex = this.buffers.push(buffer) - 1;\n        var dShape = new DynamicShape(bufferIndex, vertices.length);\n        return this.dShapes.push(dShape) - 1;\n    };\n    Video.prototype.cloneDShape = function (index) {\n        var bufferIndex = this.dShapes[index].bufferIndex;\n        var dShape = new DynamicShape(bufferIndex, this.dShapes[index].bufferSize);\n        return this.dShapes.push(dShape) - 1;\n    };\n    Video.prototype.addCircle = function (x, y, text) {\n    };\n    Video.prototype.createTBox = function (x, y, text) {\n    };\n    Video.prototype.updateTBox = function () {\n    };\n    Video.prototype.translate = function (x, y, i) {\n        this.dShapes[i].x += x;\n        this.dShapes[i].y += y;\n    };\n    Video.prototype.rotate = function (angle, i) {\n        this.dShapes[i].angle -= angle;\n    };\n    Video.prototype.position = function (x, y, i) {\n        this.dShapes[i].x = x;\n        this.dShapes[i].y = y;\n    };\n    Video.prototype.render = function () {\n        // Clear\n        var a = this.swap;\n        var b = 1 - this.swap;\n        // First we bind to our framebuffer, which has a texture attached to it\n        //------------ Draw shapes to texture ----------------------\n        // Draw Static Shapes\n        // Draw Dynamic Shapes\n        this.gl.useProgram(this.programs[0]);\n        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.fBuffers[a]);\n        this.gl.viewport(0, 0, this.width, this.height);\n        for (var i = 0; i < this.dShapes.length; i++) {\n            var d = this.dShapes[i];\n            // Load buffer and vertex positions\n            var a_pos = this.gl.getAttribLocation(this.programs[0], 'a_pos');\n            this.gl.enableVertexAttribArray(a_pos);\n            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffers[d.bufferIndex]);\n            this.gl.vertexAttribPointer(a_pos, 2, this.gl.FLOAT, false, 0, 0);\n            // Generate transformation matrix\n            var u_mat = this.gl.getUniformLocation(this.programs[0], 'u_mat');\n            var matA = (0,_math_matrix__WEBPACK_IMPORTED_MODULE_6__[\"default\"])([\n                2 / this.width, 0, 0,\n                0, -2 / this.height, 0,\n                -1, 1, 1\n            ], [\n                1, 0, 0,\n                0, 1, 0,\n                d.x, d.y, 1\n            ]);\n            // Calculate Rotation\n            var matB = (0,_math_matrix__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(matA, [\n                Math.cos(d.angle), -Math.sin(d.angle), 0,\n                Math.sin(d.angle), Math.cos(d.angle), 0,\n                0, 0, 1\n            ]);\n            this.gl.uniformMatrix3fv(u_mat, false, matB);\n            //we are drawing onto our texture\n            //this.gl.clear(this.gl.COLOR_BUFFER_BIT);\n            this.gl.drawArrays(this.gl.LINES, 0, this.dShapes[i].bufferSize / 2);\n        }\n        //-------------------Draw texture to frame---------------------------\n        this.gl.useProgram(this.programs[1]);\n        this.gl.bindTexture(this.gl.TEXTURE_2D, this.textures[a]);\n        var a_pos2 = this.gl.getAttribLocation(this.programs[1], 'a_pos');\n        this.gl.enableVertexAttribArray(a_pos2);\n        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffers[0]);\n        this.gl.vertexAttribPointer(a_pos2, 2, this.gl.FLOAT, false, 0, 0);\n        var a_tex = this.gl.getAttribLocation(this.programs[1], 'a_tex');\n        this.gl.enableVertexAttribArray(a_tex);\n        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffers[1]);\n        this.gl.vertexAttribPointer(a_tex, 2, this.gl.FLOAT, false, 0, 0);\n        var u_res = this.gl.getUniformLocation(this.programs[1], 'u_res');\n        this.gl.uniform2f(u_res, this.width * 2, this.height * 2);\n        var u_texres = this.gl.getUniformLocation(this.programs[1], 'u_texres');\n        this.gl.uniform2f(u_texres, this.width, this.height);\n        var u_random = this.gl.getUniformLocation(this.programs[1], 'u_random');\n        this.gl.uniform1f(u_random, Math.random());\n        // Where to draw\n        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);\n        this.gl.viewport(0, 0, this.width * 2, this.height * 2);\n        this.gl.clear(this.gl.COLOR_BUFFER_BIT);\n        this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);\n        //-------------------- fade texture --------------\n        this.gl.useProgram(this.programs[2]);\n        this.gl.bindTexture(this.gl.TEXTURE_2D, this.textures[a]);\n        var a_pos3 = this.gl.getAttribLocation(this.programs[1], 'a_pos');\n        this.gl.enableVertexAttribArray(a_pos3);\n        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffers[0]);\n        this.gl.vertexAttribPointer(a_pos3, 2, this.gl.FLOAT, false, 0, 0);\n        var a_tex3 = this.gl.getAttribLocation(this.programs[1], 'a_tex');\n        this.gl.enableVertexAttribArray(a_tex3);\n        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffers[1]);\n        this.gl.vertexAttribPointer(a_tex, 2, this.gl.FLOAT, false, 0, 0);\n        var u_res2 = this.gl.getUniformLocation(this.programs[1], 'u_res');\n        this.gl.uniform2f(u_res2, this.width * 2, this.height * 2);\n        var u_texres2 = this.gl.getUniformLocation(this.programs[1], 'u_texres');\n        this.gl.uniform2f(u_texres2, this.width, this.height);\n        // Where to draw\n        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.fBuffers[b]);\n        this.gl.viewport(0, 0, this.width, this.height);\n        this.gl.clear(this.gl.COLOR_BUFFER_BIT);\n        this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);\n        this.swap = b;\n    };\n    return Video;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Video);\n\n\n//# sourceURL=webpack://example/./src/video/video.ts?");

/***/ }),

/***/ "./src/video/shaders/frag.glsl":
/*!*************************************!*\
  !*** ./src/video/shaders/frag.glsl ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"precision mediump float;\\n \\nvoid main() {\\n  gl_FragColor = vec4(1,1,1,1);\\n}\");\n\n//# sourceURL=webpack://example/./src/video/shaders/frag.glsl?");

/***/ }),

/***/ "./src/video/shaders/frag2.glsl":
/*!**************************************!*\
  !*** ./src/video/shaders/frag2.glsl ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"precision mediump float;\\n\\nvarying vec2 v_tex;\\n\\nuniform sampler2D u_texture;\\n\\nvoid main() {\\n  vec4 color = texture2D(u_texture, v_tex);\\n  gl_FragColor = mix(color, vec4(0.0,0.0,0.0,1.0), 0.25);\\n}\");\n\n//# sourceURL=webpack://example/./src/video/shaders/frag2.glsl?");

/***/ }),

/***/ "./src/video/shaders/frag3.glsl":
/*!**************************************!*\
  !*** ./src/video/shaders/frag3.glsl ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"precision mediump float;\\n\\n// our texture\\nuniform sampler2D u_image;\\nuniform vec2 u_texres;\\nuniform float u_random;\\n\\n// the texCoords passed in from the vertex shader.\\nvarying vec2 v_tex;\\n\\nvoid main() {\\n    vec3 color = texture2D(u_image, v_tex).xyz\\n    + texture2D(u_image, v_tex - vec2(0.0015,0.0)).xyz/2.0\\n    + texture2D(u_image, v_tex - vec2(-0.0015,0.0)).xyz/2.0\\n    + texture2D(u_image, v_tex - vec2(0.003,0.0)).xyz/4.0\\n    + texture2D(u_image, v_tex - vec2(-0.003,0.0)).xyz/4.0\\n    + texture2D(u_image, v_tex - vec2(0.0,0.0015)).xyz/2.0\\n    + texture2D(u_image, v_tex - vec2(0.0,-0.0015)).xyz/2.0\\n    + texture2D(u_image, v_tex - vec2(0.0,0.003)).xyz/4.0\\n    + texture2D(u_image, v_tex - vec2(0.0,-0.003)).xyz/4.0;\\n    //color += texture2D(u_image, v_tex - vec2(0.0,0.002)).xyz\\n\\n    //float random = u_random;\\n    float alpha = 1.0;\\n    float offsetY = mod(v_tex.y*960.0,2.0);\\n    float offsetX = mod(v_tex.x*1280.0,2.0);\\n    if(offsetY >= 0.0 && offsetY < 1.0) alpha -= 0.15;\\n    if(offsetX >= 0.0 && offsetX < 1.0) alpha -= 0.15;\\n    //if(offsetY >= 1.0 && offsetY < 2.0) alpha -= 0.15;\\n    //if(offsetX >= 1.0 && offsetX < 2.0) alpha -= 0.15;\\n    \\n    gl_FragColor = vec4(color.x/1.5,color.y/1.5,color.z,alpha);\\n}\");\n\n//# sourceURL=webpack://example/./src/video/shaders/frag3.glsl?");

/***/ }),

/***/ "./src/video/shaders/vert.glsl":
/*!*************************************!*\
  !*** ./src/video/shaders/vert.glsl ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"uniform mat3 u_mat;\\nattribute vec2 a_pos;\\n\\nvoid main(){\\n    gl_Position = vec4((u_mat * vec3(a_pos, 1)).xy,0,1);\\n}\");\n\n//# sourceURL=webpack://example/./src/video/shaders/vert.glsl?");

/***/ }),

/***/ "./src/video/shaders/vert2.glsl":
/*!**************************************!*\
  !*** ./src/video/shaders/vert2.glsl ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"attribute vec2 a_pos;\\nattribute vec2 a_tex;\\n\\nuniform vec2 u_res;\\n\\nvarying vec2 v_tex;\\n\\nvoid main() {\\n   gl_Position = vec4(a_pos, 0, 1);\\n\\n   // pass the texCoord to the fragment shader\\n   // The GPU will interpolate this value between points.\\n   v_tex = a_tex;\\n}\");\n\n//# sourceURL=webpack://example/./src/video/shaders/vert2.glsl?");

/***/ }),

/***/ "./src/video/shaders/vert3.glsl":
/*!**************************************!*\
  !*** ./src/video/shaders/vert3.glsl ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"attribute vec2 a_pos;\\nattribute vec2 a_tex;\\n\\nuniform vec2 u_res;\\n\\nvarying vec2 v_tex;\\n\\nvoid main() {\\n   gl_Position = vec4(a_pos, 0, 1);\\n\\n   // pass the texCoord to the fragment shader\\n   // The GPU will interpolate this value between points.\\n   v_tex = a_tex;\\n}\");\n\n//# sourceURL=webpack://example/./src/video/shaders/vert3.glsl?");

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