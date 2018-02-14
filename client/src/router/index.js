import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Login from '@/components/Login'
<<<<<<< HEAD
import StudentHome from '@/components/StudentHome'
import CaptionistHome from '@/components/CaptionistHome'
import AdminHome from '@/components/AdminHome'
import CaptionSession from '@/components/CaptionSession'
import StudentSession from '@/components/StudentSession'
import PastSessions from '@/components/PastSession'
import Main from '@/components/Main'
=======
import CaptionistHome from '@/components/CaptionistHome'
import Main from '@/components/Main'
import CaptionSession from '@/components/CaptionSession'
import Home from '@/components/Home'
import PastSessions from '@/components/PastSessions'
>>>>>>> 936427c9bf8c4ef83d2167476a8e1a47a2c4149d

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
<<<<<<< HEAD
      path: '/captionist/session/:roomnumber',
=======
      path: '/captionisthome',
      name: 'captionisthome',
      component: CaptionistHome
    },
    {
      path: '/captionsession',
>>>>>>> 936427c9bf8c4ef83d2167476a8e1a47a2c4149d
      name: 'captionsession',
      component: CaptionSession
    },
    {
<<<<<<< HEAD
      path: '/captionist/:id',
      name: 'captionist',
      component: CaptionistHome,
      meta: {requiresAuth: true, adminAuth: false, captionistAuth: true, studentAuth: false}
    },
    {
      path: '/pastsession/:sessionid',
=======
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/PastSessions',
>>>>>>> 936427c9bf8c4ef83d2167476a8e1a47a2c4149d
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
  // If the page requires authentication
  if (to.meta.requiresAuth) {
    // If the page requires admin authentication and the user is an admin
    if (to.meta.adminAuth && authUser.data.role === 'admin') {
      next({name: 'admin'})
    // If the page requires captionist authentication and the user is a captionist
    } else if (to.meta.captionistAuth && authUser.data.role === 'captionist') {
      next({name: 'captionist'})
    // If the page requires student authentication and the user is a student
    } else if (to.meta.studentAuth && authUser.data.role === 'student') {
      next({name: 'student'})
    // If the user is not a valid user, just route them to the login page
    } else {
      next({name: 'login'})
    }
  } else {
    next()
  }
})

export default router
