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
    currUser: {},
    filter: null
  },
  mutations: {
    setCurrUser(state, {user}) {
      state.currUser = user
    },
    setTheFilter(state, filter) {
      state.filter = filter;
    },
  },
  actions: {
    
    checkUser({ commit }, { typedDetails }) {
     console.log(typedDetails);
     
      
      return authService.login(typedDetails)
              .then(user => {
                  commit('setCurrUser', user)
                  localStorage.setItem('loggedInUser', JSON.stringify(user))
                  return user
        })
    },
    setFilter(context, filter) {
      var newFilter = JSON.parse(JSON.stringify(filter)) 
      context.commit('setTheFilter', newFilter)
    },
    checkLogin(){
        var userFromStorage = JSON.parse(localStorage.getItem('loggedInUser'))
        if (!userFromStorage) return false
        // || currUser.nickName !== context.state.currUser.nickName :consider join this condition
        else {
          return userFromStorage
        } 
    }
  },
  getters: {
    filter(state) {
      return JSON.parse(JSON.stringify(state.filter));
    },
  }
})
