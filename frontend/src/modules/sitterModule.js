import sitterService from '../service/sitterService.js'
import authService from '../service/authService.js'


export default {
    state: {
        sitters: [],
        currentSitter:{}
    },
    mutations: {
        setSitters(state, { sitters }) {
            state.sitters = sitters
        },
        setCurrentSitter (state, sitter){
            state.currentSitter = sitter
        },
        removeSitter(state, sitterIdx) {
            state.sitters.splice(sitterIdx, 1)
        },
        updateSitter(state, sitter) {
            const sitterIdx = state.sitters.findIndex(currSitter => currSitter.id === sitter.id)
            state.sitters.splice(sitterIdx, 1, 1)
        },
        setNewSitter(state, payload) {
            state.currentSitter = payload
        }
    },
    actions: {
        getsittersList(context) {
            return sitterService.query()
                .then(sitters => {
                    context.commit({ type: 'setSitters', sitters })
                })
        },
        getById(context, {nickName}) {
            return sitterService.getById(nickName)
                .then(sitter => context.commit('setCurrentSitter', sitter))
        },
        removeSitter(context, id) {
            return sitterService.removeSitter(id)
                .then(sitterIdx => context.commit('removeSitter', sitterIdx))
        },
        updateSitter(context, sitter) {
            return sitterService.updateSitter(sitter)
                .then(sitter => context.commit('updateSitter', sitter))
        },
        setFilter(context, filter) {
            sitterService.query(filter)
                .then(sitters => context.commit('setSitters', sitters))
        },

        setNewSitter({ commit }, { newSitter }) {
            return sitterService.addNewSitter(newSitter)
                .then(theSitter => commit({ type: 'setNewSitter', theSitter }))
        },
      
    },
    getters: {
        getSitters: (state) => { return state.sitters },
        getCurrentSitter: (state) => { return state.currentSitter },
    }
}

