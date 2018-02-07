import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Login from '@/components/Login'
import StudentHome from '@/components/StudentHome'
import CaptionistHome from '@/components/CaptionistHome'
import AdminHome from '@/components/AdminHome'
import CaptionSession from '@/components/CaptionSession'
import PastSessions from '@/components/PastSession'
import Quill from '@/components/Quill'
import Main from '@/components/Main'

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
      path: '/session',
      name: 'captionsession',
      component: CaptionSession
    },
    {
      path: '/home',
      name: 'home',
      component: Main
    },
    {
      path: '/captionist',
      name: 'captionist',
      component: CaptionistHome
    },
    {
      path: '/pastsession',
      name: 'PastSessions',
      component: PastSessions
    },
    {
      path: '/quill',
      name: 'quill',
      component: Quill
    },
    {
      path: '/student',
      name: 'student',
      component: StudentHome
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminHome
    }
  ]
})
/*
const router = new Router({routes, mode: 'history'})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const authUser = JSON.parse(window.localStorage.getItem('lbUser'))
    if (!authUser || !authUser.token) {
      next({name: 'login'})
    } else if (to.meta.adminAuth) {
      const authUser = JSON.parse(window.localStorage.getItem('lbUser'))
      if (authUser.data.role_id === 'ADMIN') {
        next()
      } else if (authUser.data.role_id === 'CAPTIONIST') {
        next('/captionist')
      } else {
        next('/student')
      }
    } else if (to.meta.captionistAuth) {
      const authUser = JSON.parse(window.localStorage.getItem('lbUser'))
      if (authUser.data.role_id === 'CAPTIONIST') {
        next()
      } else if (authUser.data.role_id === 'ADMIN') {
        next('/admin')
      } else {
        next('/student')
      }
    } else if (to.meta.studentAuth) {
      const authUser = JSON.parse(window.localStorage.getItem('lbUser'))
      if (authUser.data.role_id === 'STUDENT') {
        next()
      } else if (authUser.data.role_id === 'CAPTIONIST') {
        next('/captionist')
      } else {
        next('/admin')
      }
    } else {
      next()
    }
  }
})

export default router
*/
