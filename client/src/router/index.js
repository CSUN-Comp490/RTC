import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Login from '@/components/Login'
import StudentHome from '@/components/StudentHome'
import CaptionistHome from '@/components/CaptionistHome'
import AdminHome from '@/components/AdminHome'
import CaptionSession from '@/components/CaptionSession'
import StudentSession from '@/components/StudentSession'
import PastSessions from '@/components/PastSession'
import Main from '@/components/Main'
import store from '@/store/store'

Vue.use(Router)

var router = new Router({
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
      path: '/captionist/session/:roomnumber',
      name: 'captionsession',
      component: CaptionSession
    },
    {
      path: '/captionist/:id',
      name: 'captionist',
      component: CaptionistHome,
      // meta: {requiresAuth: true, adminAuth: false, captionistAuth: true, studentAuth: false}
      // FOR DEMO
      meta: {requiresAuth: true, adminAuth: false, captionistAuth: true, studentAuth: false}
    },
    {
      path: '/pastsession/:sessionid',
      name: 'PastSessions',
      component: PastSessions
    },
    {
      path: '/student/:id',
      name: 'student',
      component: StudentHome,
      meta: {requiresAuth: true, adminAuth: false, captionistAuth: false, studentAuth: true}
    },
    {
      path: '/student/session/:roomnumber',
      name: 'studentsession',
      component: StudentSession
    },
    {
      path: '/admin/:id',
      name: 'admin',
      component: AdminHome,
      meta: {requiresAuth: true, adminAuth: true, captionistAuth: false, studentAuth: false}
    }
  ],
  mode: 'history'
})

// Routes must be checked before they change pages
router.beforeEach((to, from, next) => {
  // Get the token from server
  const authUser = JSON.parse(window.localStorage.getItem('userToken'))
  // console.log(to.name)
  // If the page requires authentication
  if (to.meta.requiresAuth) {
    // console.log('START')
    // If the page requires admin authentication and the user is an admin
    if (to.meta.adminAuth && authUser.token === 'admin') {
      // console.log('admin')
      next()
      // If the page requires captionist authentication and the user is a captionist
    } else if (to.meta.captionistAuth && authUser.token === 'captionist') {
      // console.log('captionist')
      next()
      // If the page requires student authentication and the user is a student
    } else if (to.meta.studentAuth && authUser.token === 'student') {
      // console.log('student')
      next()
      // If the user is not a valid user, just route them to the login page
    } else {
      // console.log('login')
      next({ name: 'login' })
    }
  } else if (to.name === 'root' && to.name === 'login' && authUser != null) {
    if (authUser.token === 'admin') {
      // console.log('admin-login')
      next({ 'name': 'admin' })
    } else if (authUser.token === 'captionist') {
      // console.log('cap-login')
      next({ 'name': 'captionist' })
    } else if (authUser.token === 'student') {
      // console.log('student-login')
      next({
        'name': 'student',
        'params': {'id': store.getters.getUser.id}
      })
    }
  } else {
    // console.log('next')
    next()
  }
})

export default router
