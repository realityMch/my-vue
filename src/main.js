import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App.vue'

import Book from './Book.vue'

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/bookput', component: Book}
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
