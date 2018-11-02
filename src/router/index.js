import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const test1 = () =>
  import( /* webpackChunkName: "page/test1" */ '../page/test1.vue')

const demo1 = {
  template: '<div>demo1</div>'
}
const demo2 = {
  template: '<div>demo2</div>'
}

const routes = [


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