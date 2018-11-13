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

// var demo3 = function demo3(r) {
//   return __webpack_require__.e /* require.ensure */(4).then(
//     (function () {
//       return r(__webpack_require__(257));
//     }).bind(null, __webpack_require__)
//   ).catch(__webpack_require__.oe);
// };

const demo1 = function demo1(r) {

  // return asyncView("http://localhost:8010/page/demo1.js?81c5c746c31e129d5f71").then(
  return asyncView("https://isearch.link/project/portal/page/personal.js?a5c45ee116325f47b366").then(

    (function () {
      return r(__webpack_require__(257));
    }).bind(null, __webpack_require__)

  ).catch(__webpack_require__.oe);

}

function asyncView(url) {
  return new Promise((resolve, reject) => {
    axios({
      url: url,
      method: 'get',
      timeout: 5000,
      data: {}
    }).then((res) => {
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

  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.charset = 'utf-8';
  script.text = s;

  head.appendChild(script);

}


const demo2 = {
  template: '<div>demo2</div>'
}

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