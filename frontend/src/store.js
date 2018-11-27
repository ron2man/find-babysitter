import Vue from 'vue'
import Vuex from 'vuex'
import userModule from './modules/userModule.js'
import siterModule from './modules/siterModule.js'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    userModule,
    siterModule
  },
  state: {
    filter:{}
  },
  mutations: {

  },
  actions: {
      }
})
