import Vue from 'vue'
import Vuex from 'vuex'
import userModule from './modules/userModule.js'
import sitterModule from './modules/sitterModule.js'
import chatModule from './modules/chatModule.js'
import authService from '../src/service/authService.js'
// import { setServers } from 'dns';



Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    userModule,
    sitterModule,
    chatModule
  },
  state: {
    currUser: null,
    // filter: null
  },
  mutations: {
    setCurrUser(state, payload) {
      state.currUser = payload
    },
    setLoggedInUser(state, { userFromStorage }) {
      state.currUser = userFromStorage
    },
    cleanCurrUser(state) {
      state.currUser = null
    }


    // setTheFilter(state, filter) {
    //   state.filter = filter;
    // },
  },
  actions: {

    
    checkUser({ commit }, { typedDetails }) {
      return authService.login(typedDetails)
        .then(user => {
          commit('setCurrUser', user)
          localStorage.setItem('loggedInUser', JSON.stringify(user))
          return user
        })
    },
    // setFilter(context, filter) {
    //   var newFilter = JSON.parse(JSON.stringify(filter)) 
    //   context.commit('setTheFilter', newFilter)
    // },
    checkLogin() {
      var userFromStorage = JSON.parse(localStorage.getItem('loggedInUser'))
      if (!userFromStorage) return false
      else {
        return userFromStorage
      }
    },
    checkIfLogin(context) {
      var userFromStorage = JSON.parse(localStorage.getItem('loggedInUser'))
      if (!userFromStorage) return false
      else {
        context.commit({ type: 'setLoggedInUser', userFromStorage })
        return true
      }
    },
    logout({ commit }) {
      localStorage.clear();
      commit('cleanCurrUser')
    }
  },
  getters: {
    // filter(state) {
    //   return JSON.parse(JSON.stringify(state.filter));
    // },
    setLoginUser: (state) => {
      console.log('im getter', state.currUser);
      return state.currUser
    }
  }
})
