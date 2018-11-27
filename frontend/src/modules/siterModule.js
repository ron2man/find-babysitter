import siterService from '../services/siterService'

export default {
    state: {
        siters: [],
        currentSiter: {},
    },
    mutations: {
<<<<<<< HEAD
        setsiters(state, siters) {
            state.currentSiter = siters
        },
        setCurrentSiter(state, siter) {
            state.siter = siter
=======
        setsiters(state,{siters}){
            state.siters = siters
        },
        setCurrentSiter(state,siter){
            state.currentSiter = siter
>>>>>>> f6176e92c866bfd00f8d19e82d89f5302b0a4b56
        },
        removeSiter(state, siterIdx) {
            state.siters.splice(siterIdx, 1)
        },
        updateSiter(state, siter) {
            const siterIdx = state.siters.findIndex(currSiter => currSiter.id === siter.id)
            state.siters.splice(siterIdx, 1, 1)
        }
    },
    actions: {
        getsitersList(context) {
            return siterService.query()
<<<<<<< HEAD
                .then(siters => context.commit('setsiters', siters))
        },
        getById(context, id) {
=======
                .then(siters => {
                    context.commit({type:'setsiters',siters})
            })
        },
        getById(context,id){
>>>>>>> f6176e92c866bfd00f8d19e82d89f5302b0a4b56
            return siterService.getById(id)
                .then(siter => context.commit('setCurrentSiter', siter))
        },
        removeSiter(context, id) {
            return siterService.removeSiter(id)
                .then(siterIdx => context.commit('removeSiter', siterIdx))
        },
        updateSiter(context, siter) {
            return siterService.updateSiter(siter)
<<<<<<< HEAD
                .then(siter => context.commit('updateSiter', siter))
        }
=======
                .then(siter => context.commit('updateSiter',siter))
        },
        setFilter(filter){
            siterService.query(filter)
              .then(siters => context.commit('setsiters',siters))
                },    
>>>>>>> f6176e92c866bfd00f8d19e82d89f5302b0a4b56
    },
    getters: {
        getSiters: (state) => { return state.siters },
        getCurrentSiter: (state) => { return state.currentSiter },
    }
}

