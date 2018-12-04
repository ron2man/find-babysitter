import sitterServiceBack from '../service/sitterServiceBack.js'
export default {
    state: {
        currentParent:'',
        currentIdxRequest:'',
        currentStatus:'',
        currentUser: null,
    },
    mutations: {
        setParentForRequest(state,details){
            state.currentParent = details.parent
            state.currentIdxRequest = details.requestId
            state.currentStatus = details.status
            const reservationIdx = state.currentParent.reservations.findIndex(reservation => reservation.id === state.currentIdxRequest)
            state.currentParent.reservations[reservationIdx].status = state.currentStatus
            if(details.status === 'decline'){
                const reservationIdx = state.currentUser.reservations.findIndex(reservation => {return reservation.id === state.currentIdxRequest})
                state.currentUser.reservations.splice(reservationIdx,1) 
                this.dispatch({ type: "removeReservation"})
                this.dispatch({ type: "changeParentStatus"})
            } else {
                this.dispatch({ type: "changeParentStatus"})
            }
        },
        setSitter(state, sitter) {
            state.currentUser = sitter
        },
        pushReservation(state,{reservation}){
            const sender = JSON.parse(localStorage.getItem("loggedInUser"))
            reservation.sitter.reservations.push(reservation.reservation)
            sender.reservations.push(reservation.reservation)
            localStorage.setItem('loggedInUser', JSON.stringify(sender))
            sitterServiceBack.updateSitter(reservation.sitter)
            sitterServiceBack.updateParent(sender)
        }
    },
    actions: {
        checkAvalability(context, reservation) {
            return sitterServiceBack.checkAvalability(reservation)
                .then(sitter => {
                    return sitter
                })
        },
        sendRequest(context, reservation) {
            context.commit({ type: 'pushReservation', reservation })
        },
        request(context,details){
            const status = details.status
            const parent = details.parent
            const requestId = `${details.details}`
            sitterServiceBack.getByParentUsername(parent)
                .then(parent => context.commit({ type: 'setParentForRequest', parent,requestId,status }))
        },
        removeReservation(context){
            sitterServiceBack.updateSitter(context.state.currentUser)
        },
        changeParentStatus(context){
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
        getCurrentUser: (state) => { return state.currentUser },
    },
}