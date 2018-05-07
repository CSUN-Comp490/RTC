import Vue from 'vue'
import Vuex from 'vuex'
import Api from '@/services/Api'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    token: null,
    user: null,
    role: null,
    classes: [],
    isUserLoggedIn: false
  },
  getters: {
    getToken (state) {
      console.log('getToken')
      return state.token
    },
    getUser (state) {
      console.log('getUser')
      return state.user
    },
    getRole (state) {
      console.log('getRole')
      return state.role
    },
    getClasses (state) {
      return state.classes
    },
    getClass (state) {
      return state.classes.id === classId
    }
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      if (token != null) {
        state.isUserLoggedIn = true
      } else {
        state.isUserLoggedIn = false
      }
    },
    setUser (state, user) {
      state.user = user
    },
    setRole (state, role) {
      state.role = role
    },
    setClasses (state, classes) {
      state.classes = classes
    }
  },
  actions: {
    setToken ({commit}, token) {
      commit('setToken', token)
    },
    setUser ({commit}, user) {
      commit('setUser', user)
    },
    setRole ({commit}, role) {
      commit('setRole', role)
    },
    async setClasses ({commit}) {
      await Api.instance.get('/api/classes') // retrieve the classes information
        .then((response) => {
          console.log(response.map)
          commit('setClasses', response.data)
        })
        .catch((error) => { // generate error message
          console.log(error)
          return 'An error occured.' + error
        })
    }
  }
})
