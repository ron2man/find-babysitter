import sitterServiceBack from '../service/sitterServiceBack.js'

export default {

    state: {
        currNoticeUser: {},
        currLoggedUser: JSON.parse(localStorage.getItem("loggedInUser"))
    },

    mutations: {
        setNotificationUser(state, {user}) {
            state.currNoticeUser = user
        }

    },
    getters: {

    },
    actions: {
        sendNotification(context, {user}) {
            return sitterServiceBack.getByUsername(user)
                .then(user => {
                    context.commit({ type: 'setNotificationUser', user })
                    context.dispatch({ type: 'pushNotification', user })
                    return user
                })
        },
        pushNotification(context) {
            const noticeFrom = context.state.currNoticeUser.notifications.findIndex(notice => {
                return notice.from === context.state.currLoggedUser.username
            })
            const notification = sitterServiceBack.createNotification(context.state.currLoggedUser.username)
            let copyUser = Object.assign({}, { ...context.state.currNoticeUser });
            if (noticeFrom === -1) copyUser.notifications.unshift(notification)
            else copyUser.notifications.splice(noticeFrom, 1, notification)
            return sitterServiceBack.updateUser(copyUser)
        },
        changeNotificationStatus(context,{from}){
            const noticeFrom = context.state.currLoggedUser.notifications.findIndex(notice => {
                return notice.from === from
            })
            let copyUser = Object.assign({}, { ...context.state.currLoggedUser});
            copyUser.notifications[noticeFrom].isRead = true
            localStorage.setItem('loggedInUser', JSON.stringify(copyUser))
            return sitterServiceBack.updateUser(copyUser)
        }
    }
}