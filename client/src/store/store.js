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
      // console.log('getToken')
      return state.token
    },
    getUser (state) {
      // console.log(state.user)
      return state.user
    },
    getRole (state) {
      // console.log('getRole')
      return state.role
    },
    getClasses (state) {
      return state.classes
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
      await Api.instance.get('/api/classes/')
        .then(response => {
          commit('setClasses', response.data)
        })
        .catch(error => {
          console.log(error)
        })
    },
    async updateUser ({commit}, user) {
      console.log('Old User' + user)
      await Api.instance.get('api/' + user.token + 's/id/' + user.id)
        .then(response => {
          console.log('New User' + response.data)
          let user = response.data
          commit('setUser', user)
          commit('setToken', JSON.stringify(user))
          commit('setRole', user.token)
          // commit('setClasses', user.classes)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
})
