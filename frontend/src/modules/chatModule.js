import sitterServiceBack from '../service/sitterServiceBack.js'

export default {

    state: {
        currNoticeUser: null,
    },
    mutations: {
        setNotificationUser(state, { user }) {
            state.currNoticeUser = user
            this.commit({ type: 'pushNotification'})
        },
        pushNotification(state){
            const currLoggedUser = JSON.parse(localStorage.getItem("loggedInUser"))
            const noticeFrom = state.currNoticeUser.notifications.findIndex(notice => {
                return notice.from === currLoggedUser.username
            })
            const notification = sitterServiceBack.createNotification(currLoggedUser)
            if (noticeFrom >= 0) state.currNoticeUser.notifications.splice(noticeFrom, 1)
            state.currNoticeUser.notifications.unshift(notification)
            if(currLoggedUser.type === 'parent') this.dispatch('updateCurrSitter',state.currNoticeUser)
            else this.dispatch('updateCurrParent',state.currNoticeUser)
        },
        changeNotification(state,from){
            const currLoggedUser = JSON.parse(localStorage.getItem("loggedInUser"))
            const noticeFrom = currLoggedUser.notifications.findIndex(notice => {
                return notice.from === from
            })
            if (noticeFrom > -1) {
                currLoggedUser.notifications[noticeFrom].isRead = true
                localStorage.setItem('loggedInUser', JSON.stringify(currLoggedUser))
                if(currLoggedUser.type === 'parent') this.dispatch('updateCurrParent',currLoggedUser)
                else this.dispatch('updateCurrSitter',currLoggedUser)    
        }
    }
    },
    actions: {
        sendNotification(context, { user }) {
            const currLoggedUser = JSON.parse(localStorage.getItem("loggedInUser"))
            if (currLoggedUser.type === 'parent') return sitterServiceBack.getSitterByUsername(user)
                .then(user => {
                    context.commit({ type: 'setNotificationUser', user })
                    return user
                })
            else sitterServiceBack.getByParentUsername(user)
                .then(user => {
                    context.commit({ type: 'setNotificationUser', user })
                    return user
                })
        },
        changeNotificationStatus(context,  {from} ) {
            context.commit('changeNotification',from)
            },
        updateCurrSitter(context,user){
            sitterServiceBack.updateSitter(user)
        },
        updateCurrParent(context,user){
            sitterServiceBack.updateParent(user)
        }
    }
}