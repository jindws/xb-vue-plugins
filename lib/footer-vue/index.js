(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("index", [], factory);
	else if(typeof exports === 'object')
		exports["index"] = factory();
	else
		root["index"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 52);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/footer-vue/Footer.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Footer = ({
  name: 'footer-vue'
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-01102ca0","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/footer-vue/Footer.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "footer", attrs: { id: "footer" } }, [
      _c("div", { staticClass: "footer_left" }, [
        _c("img", { attrs: { src: __webpack_require__(53), alt: "" } }),
        _vm._v(" "),
        _c("div", { staticClass: "foooter_p" }, [
          _c("p", [_vm._v("校宝学院是「校宝在线」倾力打造的培训行业校长在线学习平台")]),
          _vm._v(" "),
          _c("p", [
            _vm._v("已为超过120,000人次培训机构校长和350,000人次培训机构管理人员提供办学所需的理论知识和经验分享。")
          ]),
          _vm._v(" "),
          _c("p", [_vm._v("在这里，每周二、周四下午2:30，您可以观看免费直播课程，与行业名师零距离互动；")]),
          _vm._v(" "),
          _c("p", [_vm._v("同时我们还为大家提供了系统的办学内容，详情请关注校宝学院VIP课程")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "foooter_p" }, [
          _c("p", [
            _vm._v(
              "© 校宝在线(杭州)科技股份有限公司 All Rights Reserved  |  备案信息：浙ICP备11003236号-6 "
            )
          ]),
          _vm._v(" "),
          _c("p", [_vm._v("客服电话：400-6999-707")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "footer_right" }, [
        _c("img", {
          attrs: {
            src:
              "//cdn.xueyuan.xiaobao100.com/shield/image/plugin-pic/erweima.jpg",
            height: "180",
            width: "180",
            alt: ""
          }
        })
      ])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var footer_vue_Footer = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-01102ca0", esExports)
  }
}
// CONCATENATED MODULE: ./src/footer-vue/Footer.vue
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  Footer,
  footer_vue_Footer,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/footer-vue/Footer.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-01102ca0", Component.options)
  } else {
    hotAPI.reload("data-v-01102ca0", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var src_footer_vue_Footer = (Component.exports);

// EXTERNAL MODULE: ./src/footer-vue/footer.css
var footer = __webpack_require__(54);
var footer_default = /*#__PURE__*/__webpack_require__.n(footer);

// CONCATENATED MODULE: ./src/footer-vue/index.js



if (true) {
    src_footer_vue_Footer.install = function (Vue) {
        return Vue.component(src_footer_vue_Footer.name, src_footer_vue_Footer);
    };
}
/* harmony default export */ var footer_vue = __webpack_exports__["default"] = (src_footer_vue_Footer);

/***/ }),

/***/ 53:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 54:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
});