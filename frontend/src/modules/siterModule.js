import siterService from '../services/siterService'

export default {
    state: {
        siters:[],
        currentSiter:{},
    },
    mutations: {
        setsiters(state,{siters}){
            state.siters = siters
        },
        setCurrentSiter(state,siter){
            state.currentSiter = siter
        },
        removeSiter(state, siterIdx){
            state.siters.splice(siterIdx,1)
        },
        updateSiter(state,siter){
            const siterIdx = state.siters.findIndex(currSiter => currSiter.id === siter.id)
            state.siters.splice(siterIdx,1,1)
        }
    },
    actions: {
        getsitersList(context){
            return siterService.query()
                .then(siters => {
                    context.commit({type:'setsiters',siters})
            })
        },
        getById(context,id){
            return siterService.getById(id)
                .then(siter => context.commit('setCurrentSiter',siter))
        },
        removeSiter(context,id){
            return siterService.removeSiter(id)
            .then(siterIdx => context.commit('removeSiter',siterIdx))
        },
        updateSiter(context,siter){
            return siterService.updateSiter(siter)
                .then(siter => context.commit('updateSiter',siter))
        },
        setFilter(filter){
            siterService.query(filter)
              .then(siters => context.commit('setsiters',siters))
                },    
    },
    getters: {
        getSiters: (state) => {return state.siters},
        getCurrentSiter: (state) => {return state.currentSiter},
    }
}
  
  