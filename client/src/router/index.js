import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Main from '@/components/Main'
import CaptionSession from '@/components/CaptionSession'
import Home from '@/components/CaptionistClassPage'
import Home2 from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: Main
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/captionsession',
      name: 'captionsession',
      component: CaptionSession
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/home2',
      name: 'home2',
      component: Home2
    }
  ]
})
