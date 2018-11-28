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
    filter: {location:{lat:'',lng:''},date:'',startTime:'',endTime:'',radius:'10'}
  },
  mutations: {
    setFilter(state, payload) {
      state.filter
     console.log(payload)
    }
  },
  actions: {
    setFilter(context, payload) {
      context.commit('setFilter', payload)
    }
  }
})
