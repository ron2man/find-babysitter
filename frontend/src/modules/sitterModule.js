import sitterService from '../service/sitterService.js'


export default {
    state: {
        sitters: [],
        // filter: null
        currentSitter: null
    },
    mutations: {
        setSitters(state, { sitters }) {
            state.sitters = sitters
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
        },
        setTheFilter(state, filter) {
            state.filter = filter;
        },
        setCurrentSitter(state,sitter){
            state.currentSitter = sitter
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
                .then(sitter => {
                    context.commit('setCurrentSitter', sitter)
                })
        },
        removeSitter(context, id) {
            return sitterService.removeSitter(id)
                .then(sitterIdx => context.commit('removeSitter', sitterIdx))
        },
        updateSitter(context, sitter) {
            return sitterService.updateSitter(sitter)
                .then(sitter => context.commit('updateSitter', sitter))
        },
        setFilterSitter(context, filter) {
            sitterService.query(filter)
                .then(sitters => context.commit('setSitters', sitters))
        },

        setNewSitter({ commit }, { newSitter }) {
            return sitterService.addNewSitter(newSitter)
                .then(theSitter => commit({ type: 'setNewSitter', theSitter }))
        },
        // setFilter(context, filter) {
        //     var newFilter = JSON.parse(JSON.stringify(filter))
        //     context.commit('setTheFilter', newFilter)
        // },

    },
    getters: {
        getSitters: (state) => { return state.sitters },
        getCurrentSitter: (state) => { return state.currentSitter},
        // filter(state) {
        //     return JSON.parse(JSON.stringify(state.filter));
        // },
    }
}

