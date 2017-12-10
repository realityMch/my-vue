import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App.vue'

import Book from './Book.vue'
import Books from './Books.vue'

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/bookput', component: Book},
    {path: '/booklist', component: Books}
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
