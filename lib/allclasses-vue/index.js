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
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
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

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/singleclass-vue/singleclass-vue.vue
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
//
//

/* harmony default export */ var singleclass_vue = ({
  name: 'singleclass-vue',
  props: ['classtitle', 'classamount', 'classevaluate', 'classname', 'classprice', 'classpic', 'classheadpic', 'id', 'free', 'category'],
  methods: {
    //设置价格部分的样式 免费绿色,不免费为橘黄色
    notFree: function notFree(x) {
      return x != '免费';
    },
    gocourse: function gocourse() {
      if (this.id) location.href = '#/course/' + this.id;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-35d7db8d","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/singleclass-vue/singleclass-vue.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "basic-class-item", on: { click: _vm.gocourse } },
    [
      _c("div", { staticClass: "basic-class-item-pic" }, [
        _c("img", {
          staticStyle: { width: "280px", height: "163.3px" },
          attrs: {
            src: _vm.classpic,
            onerror:
              "javascript:this.src='https://cdn.xueyuan.xiaobao100.com/shield/image/plugin-pic/default.png';"
          }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "basic-class-item-info" }, [
        _c("div", { staticClass: "class-title" }, [
          _vm._v("\n        " + _vm._s(_vm.classtitle) + "\n      ")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "register-num" }, [
          _vm._v("\n        " + _vm._s(_vm.category) + "\n      ")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "class-evaluate" }),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.classheadpic,
                expression: "classheadpic"
              }
            ],
            staticClass: "class-head"
          },
          [
            _c("img", {
              staticStyle: {
                width: "24px",
                height: "24px",
                "border-radius": "12px"
              },
              attrs: { src: _vm.classheadpic }
            })
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "class-name" }, [
          _vm._v("\n        " + _vm._s(_vm.classname) + "\n      ")
        ]),
        _vm._v(" "),
        _vm.free
          ? _c("div", { staticClass: "class-price" }, [
              _vm._v("\n        免费\n      ")
            ])
          : _vm.classprice
            ? _c("div", { staticClass: "class-price orange" }, [
                _vm._v("\n        ¥" + _vm._s(_vm.classprice) + "\n      ")
              ])
            : _vm._e()
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var singleclass_vue_singleclass_vue = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-35d7db8d", esExports)
  }
}
// CONCATENATED MODULE: ./src/singleclass-vue/singleclass-vue.vue
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
  singleclass_vue,
  singleclass_vue_singleclass_vue,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/singleclass-vue/singleclass-vue.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-35d7db8d", Component.options)
  } else {
    hotAPI.reload("data-v-35d7db8d", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var src_singleclass_vue_singleclass_vue = (Component.exports);

// EXTERNAL MODULE: ./src/singleclass-vue/singleclass-vue.scss
var src_singleclass_vue_singleclass_vue_0 = __webpack_require__(15);
var singleclass_vue_default = /*#__PURE__*/__webpack_require__.n(src_singleclass_vue_singleclass_vue_0);

// CONCATENATED MODULE: ./src/singleclass-vue/index.js



if (true) {
    src_singleclass_vue_singleclass_vue.install = function (Vue) {
        return Vue.component(src_singleclass_vue_singleclass_vue.name, src_singleclass_vue_singleclass_vue);
    };
}
/* harmony default export */ var src_singleclass_vue = __webpack_exports__["default"] = (src_singleclass_vue_singleclass_vue);

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/singleclass-vue/index.js + 3 modules
var singleclass_vue = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/allclasses-vue/allclasses-vue.vue
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
//
//
//



//此组件为全部课程和分页组件的集成页面,引用了课程格子组件和分页组件
//数据在mounted中获取,并储存在data的classData中
/* harmony default export */ var allclasses_vue = ({
  props: ['index', 'pageNum', 'category'],
  watch: {
    pageNum: function pageNum(itm) {
      this._fetch();
    },
    category: function category(itm) {
      this._fetch();
    }
  },

  //从服务器获取课程数据
  mounted: function mounted() {
    this._fetch();
  },

  name: 'allclasses-vue',

  data: function data() {
    return {
      //课程数据
      classData: [],
      //用于设置一页显示的课程数,请勿修改
      page_amount: 0,
      //当前被选中的page数值,默认为1,传至<pagination-vue>分页子组件,对应selected_num
      selected_page: 1,
      //调试阶段数据,class显示上半部的图片
      // class_pics: ['../../imgs/man1.png', '../../imgs/man2.png', '../../imgs/man3.png', '../../imgs/woman1.png', ],
      class_pics: [],
      //若接收到的数据中没有teacher属性,则默认为此值
      //下方老师头像
      // class_headpics: ['../../imgs/head.png', ],
      class_headpics: [],
      //@评分数据中暂未有,数据有之后将评分部分改成  v-bind:title = "isDefined(classData)?'数据正在获取中':classData[i-1].evaluate"
      class_evaluates_default: '评分8.7',
      //默认的教师名称,用于数据传输未完成或者obj对象没有teacher属性时的显示
      teacher_name_default: '',
      //用于数据加载时的其他课程属性的显示
      info_default: '数据正在获取中'
    };
  },


  components: {
    //课程格子组件 使用: <singleclass-vue/>
    SingleclassVue: singleclass_vue["default"]
    //分页组件 使用: <pagination-vue/>
    // PaginationVue,
  },

  methods: {
    _fetch: function _fetch() {
      var _this = this;

      var url = this.index ? '/api/coulson/index_course' : '/api/course/all';
      fetch(url, {
        method: 'post',
        body: 'pageNum=' + (this.pageNum || 1) + '&pageCount=12&category=' + (this.category || ''),
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }).then(function (re) {
        return re.json();
      }).then(function (re) {
        //将数据储存至classData中,classData为一个对象,包含了12个课程对象和length属性
        _this.classData = re.data.list;
        var length = re.data.list.length;

        _this.page_amount = _this.index ? length - length % 4 : length;
        if (re.data.count) {
          _this.$emit('getcount', re.data.count);
        } else {
          _this.$emit('getcount', 0);
        }
        //@调试数据接收
        // console.log(this.classData);
      });
    },

    //用于v-for循环体中,表示第二行开始加入margin-top属性
    overFour: function overFour(x) {
      return x > 4;
    },

    //用于v-for循环体中,表示每行第一个格子无margin-left属性
    isLast: function isLast(x) {
      return x % 4 != 1;
    },

    //用于v-for循环体给子组件传值时,若数据传输   **未完毕**==>**true**
    //上方使用此函数时的三元运算符为 数据未接收到?"默认值":"接收值"  接收值写在后面
    isDefined: function isDefined(x) {
      return x == null;
    },

    //用于处理获取到的title数据,去掉期数和书名号
    getTitle: function getTitle(x) {
      // return x.slice(x.indexOf("《") + 1, x.indexOf("》"));
    },

    //用于处理获取到的课程种类和订阅人数数据
    getCatAmo: function getCatAmo(x) {
      //如果课程数据已经接收并对classData赋值完毕
      if (this.classData) {
        var amount = "";
        var category = this.classData[x - 1].category;
        if (this.classData[x - 1].count) {
          amount = this.classData[x - 1].count;
        } else {
          amount = "0";
        }
      } else {
        return this.info_default;
      }
      return category.concat(" | ").concat(amount).concat("万人报名");
    },

    //用于处理教师头像数据,若数据传输未完成返回默认头像
    getHeadpic: function getHeadpic(x) {
      if (this.classData) {
        if (this.classData[x - 1].teacher) {
          return this.classData[x - 1].teacher.headimgurl;
        } else {
          // return '../../imgs/head.png'
        }
      } else {
          // return '../../imgs/head.png'
        }
    },

    //用于处理教师名称数据 若数据传输未完成返回默认值四个字
    getName: function getName(x) {
      if (this.classData) {
        if (this.classData[x - 1].teacher) {
          return this.classData[x - 1].teacher.name;
        } else {
          return this.teacher_name_default;
        }
      } else {
        return this.teacher_name_default;
      }
    }

  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-064f7179","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./src/allclasses-vue/allclasses-vue.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "allclasses" }, [
    _c(
      "div",
      { staticClass: "middle" },
      _vm._l(_vm.page_amount, function(i) {
        return _c("singleclass-vue", {
          key: i,
          staticClass: "start-vue-class",
          class: {
            "top-margin": _vm.overFour(i),
            "left-margin": _vm.isLast(i)
          },
          attrs: {
            category: _vm.classData[i - 1].category,
            classpic: _vm.isDefined(_vm.classData)
              ? _vm.info_default
              : _vm.classData[i - 1].cover_240x140,
            classprice: _vm.isDefined(_vm.classData)
              ? _vm.info_default
              : _vm.classData[i - 1].bill,
            title: _vm.isDefined(_vm.classData)
              ? _vm.info_default
              : _vm.classData[i - 1].title,
            classtitle: _vm.classData[i - 1].title,
            classheadpic: _vm.getHeadpic(i),
            classamount: _vm.classData[i - 1].count,
            free: _vm.classData[i - 1].bill_type === "mianfei",
            classname: _vm.getName(i),
            classevaluate: _vm.class_evaluates_default,
            id: _vm.classData[i - 1]._id
          }
        })
      })
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var allclasses_vue_allclasses_vue = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-064f7179", esExports)
  }
}
// CONCATENATED MODULE: ./src/allclasses-vue/allclasses-vue.vue
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
  allclasses_vue,
  allclasses_vue_allclasses_vue,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/allclasses-vue/allclasses-vue.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-064f7179", Component.options)
  } else {
    hotAPI.reload("data-v-064f7179", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var src_allclasses_vue_allclasses_vue = (Component.exports);

// EXTERNAL MODULE: ./src/allclasses-vue/allclasses-vue.scss
var src_allclasses_vue_allclasses_vue_0 = __webpack_require__(40);
var allclasses_vue_default = /*#__PURE__*/__webpack_require__.n(src_allclasses_vue_allclasses_vue_0);

// CONCATENATED MODULE: ./src/allclasses-vue/index.js



if (true) {
    src_allclasses_vue_allclasses_vue.install = function (Vue) {
        return Vue.component(src_allclasses_vue_allclasses_vue.name, src_allclasses_vue_allclasses_vue);
    };
}
/* harmony default export */ var src_allclasses_vue = __webpack_exports__["default"] = (src_allclasses_vue_allclasses_vue);

/***/ }),

/***/ 40:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
});