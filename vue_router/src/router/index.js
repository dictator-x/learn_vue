import Vue from 'vue'
import Router from 'vue-router'

// import Home from '@/components/home.vue'
// import User from '@/components/about.vue'
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
    meta: {
      title: 'Home'
    },
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
    component: About,
    meta: {
      title: 'About'
    },
  },
  {
    path: '/user/:userId',
    component: User,
    meta: {
      title: 'User'
    },
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: 'Profile'
    },
  }
]

const router = new Router({
  routes,
  mode: 'history'
})

router.beforeEach((to, from , next) => {
  // document.title = to.meta.title
  document.title = to.matched[0].meta.title
  next()
})

router.afterEach((to, from) => {
  // console.log('afterEach')
})

export default router
