// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
// import { sync } from 'vuex-router-sync'
import 'vuetify/dist/vuetify.min.css'
import ClassGenerator from '@/components/ClassGenerator'

Vue.config.productionTip = false

Vue.use(Vuetify)

Vue.component('classGenerator', ClassGenerator) // component to generate classes

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
