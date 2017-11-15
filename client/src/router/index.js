import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import CaptionistClassPage from '@/components/CaptionistClassPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/captionistclass',
      name: 'CaptionistClassPage',
      component: CaptionistClassPage
    }
  ]
})
