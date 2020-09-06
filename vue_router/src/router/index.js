import Vue from 'vue'
import Router from 'vue-router'

// import Home from '@/components/home.vue'
// import About from '@/components/about.vue'
// import User from '@/components/user.vue'

const Home = () => import('@/components/home.vue')
const About = () => import('@/components/about.vue')
const User = () => import('@/components/user.vue')
const homeNews = () => import('@/components/home_news.vue')
const homeMessage = () => import('@/components/home_message.vue')
const Profile = () => import('@/components/profile.vue')

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: 'news',
        component: homeNews
      },
      {
        path: 'message',
        component: homeMessage
      }
    ]
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/user/:userId',
    component: User
  },
  {
    path: '/profile',
    component: Profile
  }
]

export default new Router({
  routes,
  mode: 'history'
})
