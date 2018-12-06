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
        handleRequest(state,details){
            state.currentReservation = details.reservation
    //set the values in store for curr reservation
            state.currentParent = details.parent
            state.currentReservation.imgUrl = details.parent.imgUrl
            state.currentId = details.reservation.id
            state.currentStatus = details.status
    // //change status res parent
            state.resParentIdx = state.currentParent.reservations.findIndex(reservation => reservation.id === state.currentId)
            state.resSitterIdx = state.currentUser.reservations.findIndex(reservation => reservation.id === state.currentId)
            state.currentParent.reservations[state.resParentIdx].status = state.currentStatus
            if(state.currentStatus === 'decline') state.currentUser.reservations.splice(state.resSitterIdx,1) 
            else if(state.currentStatus === 'confirmed'){
                this.dispatch({type:'checkAvalability',reservation:details.reservation})
                    .then(res => { 
                        if(res.length === 0)this.commit({ type: 'acceptReservation'})
                        else this.commit({ type: 'declineReservation'})
                    })
            }
        },
        acceptReservation(state){
            state.currentUser.schedule.push(state.currentReservation)
            state.currentParent.schedule.push(state.currentReservation)
            state.currentUser.reservations.splice(state.resSitterIdx,1) 
            state.currentParent.reservations[state.resParentIdx].status = 'confirmed'
            this.dispatch({ type: "updateParent"})
            this.dispatch({ type: "deleteReservation"})
        },
        setSitter(state, sitter) {
            state.currentUser = sitter
        },
        declineReservation(state){
            state.currentUser.reservations.splice(state.resSitterIdx,1) 
            state.currentParent.reservations[state.resParentIdx].status = 'decline'
            this.dispatch({ type: "updateParent"})
            this.dispatch({ type: "deleteReservation"})
        },
        pushReservation(state,{reservation}){
            const sender = JSON.parse(localStorage.getItem("loggedInUser"))
            reservation.imgUrl = sender.imgUrl
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
            const status = details.state
            const reservation = details.details
            sitterServiceBack.getByParentUsername(details.details.from)
                .then(parent => context.commit({ type: 'handleRequest', parent,status,reservation }))
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