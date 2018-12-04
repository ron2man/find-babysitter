import sitterServiceBack from '../service/sitterServiceBack.js'
import sitterService from '../service/sitterService.js'


export default {
    state: {
        sitters: null,
        currentSitter: null,
        filterLocation: null,
        filterProperty: null,
        sortBy: 'aveRate',
        topSitters: null,
        isLoading: false,
    },
    mutations: {
        changeLoader(state, status){
        state.isLoading = status
        },
        setTopSitters(state, { sitters }) {
            state.topSitters = sitters
        },
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
        },
        setSort(state, payload) {
            state.sortBy = payload

        },
    },
    actions: {
        getsittersList(context) {            
            return sitterServiceBack.query(context.state.filterLocation, context.state.filterProperty, context.state.sortBy)
            .then(sitters => {
                context.commit({ type: 'setSitters', sitters })
            })
        },
        getTopSittersList(context) {
            return sitterServiceBack.Limitquery(6, 'aveRate')
                .then(sitters => {
                    context.commit({ type: 'setTopSitters', sitters })
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
        setSort(context, { sortBy }) {
            context.commit('setSort', sortBy)
            sitterServiceBack.query(context.state.filterLocation, context.state.filterProperty, context.state.sortBy, sortBy)
                .then(sitters => {
                    context.commit({type:'setSitters',sitters}) 

                })

        },
    },
    getters: {
        getSitters: (state) => { return state.sitters },
        getCurrentSitter: (state) => { return state.currentSitter },
        filterLocation(state) {
            return JSON.parse(JSON.stringify(state.filterLocation));
        },
        topSitters: (state) => { return state.topSitters },
        isLoading: (state) => {return state.isLoading}
    }
}



