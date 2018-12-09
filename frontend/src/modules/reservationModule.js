import sitterServiceBack from '../service/sitterServiceBack.js'
export default {
    state: {
        currentParent: null,
        currSitter: null,
        currentReservation: null,
    },
    mutations: {
        handleRequest(state, details) {
            state.currSitter = details.currSitter
            state.currentParent = details.parent
            state.currentReservation = details.reservation
            state.currentReservation.imgUrl = details.parent.imgUrl
            const parentIdx = state.currentParent.reservations.findIndex(reservation => reservation.id === state.currentReservation.id)
            const sitterIdx = state.currSitter.reservations.findIndex(reservation => reservation.id === state.currentReservation.id)
            if (state.currentReservation.status === 'decline') this.commit({ type: 'declineReservation',parentIdx,sitterIdx })
            else {
                this.dispatch({ type: 'checkAvalability', reservation: state.currentReservation })
                    .then(res => {
                        if (res.length === 0) this.commit({ type: 'acceptReservation',parentIdx,sitterIdx })
                    })
            }
        },
        acceptReservation(state,idxs) {
            state.currSitter.schedule.push(state.currentReservation)
            state.currentParent.schedule.push(state.currentReservation)
            state.currSitter.reservations.splice(idxs.sitterIdx, 1)
            state.currentParent.reservations[idxs.parentIdx].status = 'confirmed'
            this.dispatch({ type: "updateParent" })
            this.dispatch({ type: "updateSitter" })
        },
        setSitter(state, sitter) {
            state.currSitter = sitter
        },
        declineReservation(state,idxs) {
            state.currSitter.reservations.splice(idxs.sitterIdx, 1)
            state.currentParent.reservations[idxs.parentIdx].status = 'decline'
            this.dispatch({ type: "updateParent" })
            this.dispatch({ type: "updateSitter" })
        },
        pushReservation(state, details) {
        state.currSitter = details.reservation.sitter
        state.currentReservation = details.reservation.reservation
        state.currentParent = details.currUser
        state.currentReservation.imgUrl = state.currSitter.imgUrl
        state.currSitter.reservations.push(state.currentReservation)
        state.currentParent.reservations.push(state.currentReservation)
        this.dispatch({ type: "updateParent" })
        this.dispatch({ type: "updateSitter" })
    }
    },
    actions: {
        checkAvalability(context,{reservation}) {
            return sitterServiceBack.checkAvalability(reservation)
                .then(sitter => {
                    return sitter
                })
        },
        sendRequest(context, reservation) {
            const currUser = context.rootState.currUser
            context.commit({ type: 'pushReservation', reservation,currUser })
        },
        request(context, details) {
            const currSitter = context.rootState.currUser
            const reservation = { ...details.reservation }
            reservation.status = details.state
            sitterServiceBack.getByParentUsername(reservation.from)
                .then(parent => {
                    context.commit({ type: 'handleRequest', reservation, parent,currSitter })
                }
                )
        },
        updateSitter(context) {
            context.rootState.sitterModule.currentSitter = context.state.currSitter
            sitterServiceBack.updateSitter(context.state.currSitter)
        },
        updateParent(context) {
            sitterServiceBack.updateParent(context.state.currentParent)
        },
        getSitterId(context, { id }) {
            return sitterServiceBack.getById(id)
                .then(sitter => {
                    context.commit('setSitter', sitter)
                    return sitter
                })
        },
    },
    getters: {
        getCurrSitter: (state) => { return state.currSitter },
    },
}