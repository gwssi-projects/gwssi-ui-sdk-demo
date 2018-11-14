import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'

Vue.use(VueRouter);

const test1 = r => require.ensure([], () => r(require('../page/test1')), 'page/test1')

const index = {
  template: '<div>index</div>'
}

//只是用来生成JS
const demo1_ = r => require.ensure([], () => r(require('../page/demo1')), 'page/demo1')

const demo1 = function demo1(r) {

  // return asyncView("http://localhost:8010/page/demo1.js?81c5c746c31e129d5f71").then(
  // return asyncView("https://isearch.link/page/demo1.js?c808abe8cd7a17a36827").then(
  return asyncView("https://isearch.link/project/portal/page/icon/FontAwesome.js?b7a2d7c39fccef3ff0b5").then(

    (function () {
      return r(__webpack_require__(484));
    }).bind(null, __webpack_require__)

  ).catch(__webpack_require__.oe);

}

const demo2 = function demo2(r) {


  return asyncView("https://isearch.link/project/portal/page/home.js?da176d7e73da1bea4cbc").then(

    (function () {
      return r(__webpack_require__(481));
    }).bind(null, __webpack_require__)

  ).catch(__webpack_require__.oe);

}




function asyncView(url) {
  return new Promise((resolve, reject) => {
    axios({
      url: url,
      method: 'GET',
      timeout: 5000,
      data: {},
      headers: {
        //设置类型 否则无法跨域
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }).then((res) => {
      //这里加载的模块编号 很可能和已有的模块编号发生冲突
      //直接生成script内容
      createScriptElement(res.data);
      resolve(res.data);
      // console.log(res); 
    }).catch(function (error) {
      reject(error);
      // console.log(error); 
    });
  });

}

function createScriptElement(s) {

  //会直接调用 webpackJsonp
  // start chunk loading
  var head = document.getElementsByTagName('head')[0];

  //几个基础组件对应的mapping需要更改

  //normalizeComponent 组件 module.exports = function normalizeComponent (
  s = (s + "").replace("var normalizeComponent = __webpack_require__(3)", "var normalizeComponent = __webpack_require__(103)");
  //install 组件 exports.install = function (vue, browserify) {
  s = (s + "").replace("var hotAPI = __webpack_require__(1)", "var hotAPI = __webpack_require__(58)");
  //useSourceMap 这个貌似是用于加载css的 module.exports = function(useSourceMap) {
  s = (s + "").replace("exports = module.exports = __webpack_require__(2)", "exports = module.exports = __webpack_require__(33)");
  //var hasDocument = typeof document !== 'undefined'
  s = (s + "").replace("var update = __webpack_require__(6)", "var update = __webpack_require__(104)");


  // s = (s + "").replace("__webpack_require__(3)", "__webpack_require__(103)");
  // s = (s + "").replace("__webpack_require__(1)", "__webpack_require__(58)");
  // s = (s + "").replace("__webpack_require__(2)", "__webpack_require__(33)");


  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.charset = 'utf-8';
  script.text = s;

  head.appendChild(script);

}


// const demo2 = {
//   template: '<div>demo2</div>'
// }

const routes = [{
    path: '/',
    name: 'index',
    props: {},
    meta: {},
    component: index
  },

  {
    path: '/test1',
    name: 'test1',
    props: {},
    meta: {},
    component: test1
  },

  {
    path: '/demo1',
    component: demo1
  },
  {
    path: '/demo2',
    component: demo2
  }
]


const router = new VueRouter({
  routes
})


export default router;