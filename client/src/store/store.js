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
    isUserLoggedIn: false
  },
  getters: {
    getToken (state) {
      // console.log('getToken')
      return state.token
    },
    getUser (state) {
      // console.log('getUser')
      return state.user
    },
    getRole (state) {
      // console.log('getRole')
      return state.role
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
    async updateUser ({commit}, user) {
      console.log('Old User' + user)
      await Api.instance.get('api/' + user.token + 's/id/' + user.id)
        .then(response => {
          console.log('New User' + response.data)
          commit('setUser', response.data)
          commit('setToken', JSON.stringify(response.data))
          commit('setRole', response.data.token)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
})
