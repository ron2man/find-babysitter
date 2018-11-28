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
    currUser: {},
    isFiltered: false,
    filter: { location: { lat: '', lng: '' }, date: '', startTime: '', endTime: '', radius: '10' }
  },
  mutations: {
    setCurrUser(state, payload) {
      state.user = payload
    },
    setFilter(state, payload) {
      console.log(payload)
      state.filter = payload;
      // state.isFiltered = true;
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
    },
    setFilter(context, payload) {
      context.commit('setFilter', payload)
    }
  }
})
