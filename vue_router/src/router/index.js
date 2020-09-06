import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home.vue'
import About from '@/components/about.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  }
]

export default new Router({
  routes,
  mode: 'history'
})
