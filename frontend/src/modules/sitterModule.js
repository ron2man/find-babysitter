import sitterServiceBack from '../service/sitterServiceBack.js'
import sitterService from '../service/sitterService.js'


export default {
    state: {
        sitters: null,
        currentSitter: null,
        filterLocation: null,
        filterProperty: null,
        sortBy: 'aveRate',
        currentParent:'',
        currentIdxRequest:'',
        currentStatus:''
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
        },
        setSort(state, payload) {
            // console.log('mutatation sortab',payload);
            state.sortBy = payload

        },
        setParentForRequest(state,details){
            state.currentParent = details.parent
            state.currentIdxRequest = details.requestId
            const status = details.status
            if(details.status === 'decline'){
                this.dispatch({ type: "changeParentStatus",status})
                this.dispatch({ type: "removeReservation"})
            } else {
                console.log('dudi')
            }
        }
    },
    actions: {
        getsittersList(context) {
            return sitterServiceBack.query(context.state.filterLocation, context.state.filterProperty, context.state.sortBy)
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
        checkAvalability(context,reservation){
            return sitterServiceBack.checkAvalability(reservation)
                .then(sitter => {
                    return sitter
                })
        },
        sendRequest(context,reservation){
            const sender = JSON.parse(localStorage.getItem("loggedInUser"))
            let copySender = Object.assign({}, { ...sender});
            let copySitter = Object.assign({}, { ...reservation.sitter});
            copySitter.reservations.push(reservation.reservation)
            copySender.reservations.push(reservation.reservation)
            sitterServiceBack.updateSitter(copySitter)
            sitterServiceBack.updateParent(copySender)
        },
        setSort(context, { sortBy }) {
            context.commit('setSort', sortBy)
            sitterServiceBack.query(context.state.filterLocation, context.state.filterProperty, context.state.sortBy,sortBy)
                .then(sitters => {
                    // console.log('sitters in store', sitters);
                    context.commit({type:'setSitters',sitters}) 

                })

        },
        acceptRequest(context,details){
            const parent = details.parent
            const requestId = details.details
            sitterServiceBack.getByParentUsername(parent)
                .then(parent => context.commit({ type: 'setParentForRequest', parent,requestId }))
        },
        request(context,details){
            const status = details.status
            const parent = details.parent
            const requestId = details.details
            sitterServiceBack.getByParentUsername(parent)
                .then(parent => context.commit({ type: 'setParentForRequest', parent,requestId,status }))
                //delete sitter reservation
        },
        removeReservation(context){
            const sitter = JSON.parse(localStorage.getItem("loggedInUser"))
            let copySitter = Object.assign({}, { ...sitter});
            const reservationIdx = copySitter.reservations.findIndex(reservation => reservation.id === context.state.requestId)
            // copySitter.reservations.splice(reservationIdx,1)
            // sitterServiceBack.updateSitter(copySitter)
            // localStorage.setItem('loggedInUser', JSON.stringify(copySitter))
        },
        changeParentStatus(context,status){
            const copyParent = Object.assign({}, { ...context.state.currentParent});
            const reservationIdx = copyParent.reservations.findIndex(reservation => reservation.id === context.state.currentIdxRequest)
            copyParent.reservations[reservationIdx].status = status.status
            sitterServiceBack.updateParent(copyParent)
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



