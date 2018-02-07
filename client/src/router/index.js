import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Login from '@/components/Login'
import CaptionistHome from '@/components/CaptionistHome'
import Main from '@/components/Main'
import CaptionSession from '@/components/CaptionSession'
import Home from '@/components/Home'
import PastSessions from '@/components/PastSessions'


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
      path: '/captionisthome',
      name: 'captionisthome',
      component: CaptionistHome
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
      path: '/PastSessions',
      name: 'PastSessions',
      component: PastSessions
    }
  ]
})
