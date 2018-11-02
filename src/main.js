import Vue from 'vue'
import VueMeta from 'vue-meta'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Css from './main.less';
import Main from './main.vue'

import router from './router/index'


Vue.use(ElementUI)
Vue.use(VueMeta)

new Vue({
  router,
  el: '#main',
  render: h => h(Main)
})