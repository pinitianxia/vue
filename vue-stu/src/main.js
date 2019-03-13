// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Page01 from './components/page01'
import Page02 from './components/page02'

Vue.config.productionTip = false
Vue.use(VueRouter)
/* eslint-disable no-new */
const routes = [
  {path:'/',component:Page01},
  {path:'/02',component:Page02},
]
const router = new VueRouter({
  routes
})
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
