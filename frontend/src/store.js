import Vue from 'vue'
import Vuex from 'vuex'
import userModule from './store/user.module.js'
import siterModule from './modules/siterModule'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    userModule,
    siterModule
  },
  state: {
  
  },
  mutations: {

  },
  actions: {

  }
})
