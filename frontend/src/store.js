import Vue from 'vue'
import Vuex from 'vuex'
import userModule from './store/user.module.js'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    userModule
  }
})
