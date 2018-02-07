import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Login from '@/components/Login'
import StudentHome from '@/components/StudentHome'
import CaptionistHome from '@/component/CaptionistHome'
import AdminHome from '@/component/AdminHome'
import CaptionSession from '@/component/CaptionSession'
import PastSessions from '@component/PastSession'

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
      path: '/student',
      name: 'student',
      component: StudentHome,
      meta: { requiresAuth: true, studentAuth: true, captionistAuth: false, adminAuth: false }
    },
    {
      path: '/captionist',
      name: 'captionist',
      component: CaptionistHome,
      meta: { requiresAuth: true, studentAuth: false, captionistAuth: true, adminAuth: false }
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminHome,
      meta: { requiresAuth: true, studentAuth: false, captionistAuth: false, adminAuth: true }
    },
    {
      path: '/captionsession',
      name: 'captionsession',
      component: CaptionSession
    },
    {
      path: '/pastSessions',
      name: 'pastSessions',
      component: PastSessions
    },
    {
      path: '/Quill',
      name: 'QuillTest',
      component: Quill
    }
  ]
})

const router = new Router({routes, mode:'history'})

router.beforeEach((to, from, next) => {
  if(to.meta.requiresAuth) {
    const authUser = JSON.parse(window.localStorage.getItem('lbUser'))
    if(!authUser || !authUser.token) {
      next({name: 'login'})
    }else if(to.meta.adminAuth) {
      const authUser = JSON.parse(window.localStorage.getItem('lbUser'))
      if(authUser.data.role_id === 'ADMIN') {
        next()
      }else if(authUser.data.role_id === 'CAPTIONIST') {
        next('/captionist')
      }else {
        next('/student')
      }
    }else if(to.meta.captionistAuth) {
      const authUser = JSON.parse(window.localStorage.getItem('lbUser'))
      if(authUser.data.role_id === 'CAPTIONIST'){
        next()
      }else if(authUser.data.role_id === 'ADMIN'){
        next('/admin')
      }else{
        next('/student')
      }
    }else if(to.meta.studentAuth){
      const authUser = JSON.parse(window.localStorage.getItem('lbUser'))
      if(authUser.data.role_id === 'STUDENT'){
        next()
      }else if(authUser.data.role_id === 'CAPTIONIST'){
        next('/captionist')
      }else{
        next('/admin')
      }
    }else{
      next()
    }
  }
})

export default router
