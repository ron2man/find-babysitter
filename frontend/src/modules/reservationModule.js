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
            const status = details.status
            if(details.status === 'decline'){
                this.dispatch({ type: "removeReservation"})
                this.dispatch({ type: "changeParentStatus",status})
            } else {
                console.log('dudi')
            }
        },
        setSitter(state, sitter) {
            state.currentUser = sitter
        },
    },
    actions: {
        checkAvalability(context, reservation) {
            return sitterServiceBack.checkAvalability(reservation)
                .then(sitter => {
                    return sitter
                })
        },
        sendRequest(context, reservation) {
            const sender = JSON.parse(localStorage.getItem("loggedInUser"))
            // let copySender = Object.assign({}, { ...sender });
            let copySitter = Object.assign({}, { ...reservation.sitter });
            copySitter.reservations.push(reservation.reservation)
            sender.reservations.push(reservation.reservation)
            sitterServiceBack.updateSitter(copySitter)
            sitterServiceBack.updateParent(sender)
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
            const requestId = `${details.details}`
            sitterServiceBack.getByParentUsername(parent)
                .then(parent => context.commit({ type: 'setParentForRequest', parent,requestId,status }))
        },
        removeReservation(context){
            const sitter = context.state.currentUser
            let copySitter = Object.assign({}, { ...sitter});
            const reservationIdx = copySitter.reservations.findIndex(reservation => {return reservation.id === context.state.currentIdxRequest})
            copySitter.reservations.splice(reservationIdx,1)
            context.state.currentUser = copySitter
            sitterServiceBack.updateSitter(copySitter)
            localStorage.setItem('loggedInUser', JSON.stringify(copySitter))
        },
        changeParentStatus(context,status){
            const copyParent = Object.assign({}, { ...context.state.currentParent});
            const reservationIdx = copyParent.reservations.findIndex(reservation => reservation.id === context.state.currentIdxRequest)
            copyParent.reservations[reservationIdx].status = status.status
            sitterServiceBack.updateParent(copyParent)
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