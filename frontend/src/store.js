import Vue from 'vue'
import Vuex from 'vuex'
import userModule from './modules/userModule.js'
import sitterModule from './modules/sitterModule.js'
import authService from '../src/service/authService.js'


Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    userModule,
    sitterModule
  },
  state: {
    filter: {},
    currUser: {}
  },
  mutations: {
    setCurrUser(state, payload) {
      state.user = payload
    }

  },
  actions: {
    checkUser({ commit }, { details }) {
      return authService.login(details)
        .then(user => {
          commit('setCurrUser', user)
          localStorage.setItem('loggedInUser', JSON.stringify(user))
          return user
        })
    }
  }

})
