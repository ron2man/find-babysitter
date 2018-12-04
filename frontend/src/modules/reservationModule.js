import sitterServiceBack from '../service/sitterServiceBack.js'
export default {
    state: {
        currentParent:null,
        currentId:'',
        resParentIdx:'',
        resSitterIdx:'',
        currentStatus:'',
        currentUser: null,
        currentReservation:null
    },
    mutations: {
        setParentForRequest(state,details){
    //set the values in store for curr reservation
            state.currentParent = details.parent
            state.currentId = details.details.requestId
            state.currentStatus = details.details.status
    //change status res parent
            state.resParentIdx = state.currentParent.reservations.findIndex(reservation => reservation.id === state.currentId)
            state.resSitterIdx = state.currentUser.reservations.findIndex(reservation => reservation.id === state.currentId)
            state.currentParent.reservations[state.resParentIdx].status = state.currentStatus
            if(details.status === 'decline') state.currentUser.reservations.splice(state.resSitterIdx,1) 
            // else {

            // }
            // this.dispatch({ type: "updateParent"})
            // this.dispatch({ type: "deleteReservation"})
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
        request(context,{details}){
            sitterServiceBack.getByParentUsername(details.from)
                .then(parent => context.commit({ type: 'setParentForRequest', parent,details }))
        },
        deleteReservation(context){
            sitterServiceBack.updateSitter(context.state.currentUser)
        },
        updateParent(context){
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