import sitterServiceBack from '../service/sitterServiceBack.js'
import sitterService from '../service/sitterService.js'


export default {
    state: {
        sitters: null,
        currentSitter: null,
        filterLocation: null,
        filterProperty: null,
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
        setNewSitter(state, { theSitter }) {
            state.currentSitter = theSitter
        },
        setFilterLocation(state, filter) {
            state.filterLocation = filter;
        },
        setFilterProperty(state, filter) {
            state.filterProperty = filter;
        },
        setCurrentSitter(state, sitter) {
            state.currentSitter = sitter
        }
    },
    actions: {
        getsittersList(context) {
            // console.log('filterLocation',context.state.filterLocation)
            // console.log('filterProperty',context.state.filterProperty)
            return sitterServiceBack.query(context.state.filterLocation, context.state.filterProperty)
                .then(sitters => {
                    context.commit({ type: 'setSitters', sitters })
                })
        },
        getById(context, { id }) {
            return sitterServiceBack.getById(id)
                .then(sitter => {
                    context.commit('setCurrentSitter', sitter)
                    return sitter
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
            return sitterServiceBack.addNewSitter(newSitter)
                .then(theSitter => {
                    commit({ type: 'setNewSitter', theSitter })
                    return theSitter
                })
        },
        setFilterLocation(context, filter) {
            var newFilter = JSON.parse(JSON.stringify(filter))
            context.commit('setFilterLocation', newFilter)
            context.dispatch('getsittersList')
        },
        setFilterProperty(context, filter) {
            var newFilter = JSON.parse(JSON.stringify(filter))
            context.commit('setFilterProperty', newFilter)
            context.dispatch('getsittersList')
        },

    },
    getters: {
        getSitters: (state) => { return state.sitters },
        getCurrentSitter: (state) => { return state.currentSitter },
        filterLocation(state) {
            return JSON.parse(JSON.stringify(state.filterLocation));
        },
    }
}

