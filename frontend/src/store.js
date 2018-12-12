import Vue from 'vue'
import Vuex from 'vuex'
import userModule from './modules/userModule.js'
import sitterModule from './modules/sitterModule.js'
import chatModule from './modules/chatModule.js'
import authService from '../src/service/authService.js'
import reservationModule from './modules/reservationModule.js'
import sitterServiceBack from './service/sitterServiceBack.js'
import parentService from './service/parentService.js'
// import { setServers } from 'dns';



Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    userModule,
    sitterModule,
    chatModule,
    reservationModule
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
    getParentById(context,parentId){
      console.log('parentId',parentId);
      
      parentService.getParentById(parentId)
      .then(parent => {
        context.commit('setCurrUser', parent)
        return parent
      })
    },
    checkIfLogin(context) {
      var userFromStorage = JSON.parse(localStorage.getItem('loggedInUser'))
      if (!userFromStorage) return false
      else {
        if (userFromStorage.type === 'sitter') {
          sitterServiceBack.getById(userFromStorage._id)
            .then(sitter => {
              console.log('sitter',sitter);
              
              context.commit('setCurrUser', sitter)
              return true
            })
        }else{                    
            parentService.getParentById(userFromStorage._id)
              .then(parent => {
                console.log('parent',parent);
                context.commit('setCurrUser', parent)
                return true
              })
        }
       
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
    getCurrentProfile: (state) => {
      return state.currUser
    },
    setLoginUser: (state) => {
      return state.currUser
    }
  }
})
