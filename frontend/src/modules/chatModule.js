import sitterServiceBack from '../service/sitterServiceBack.js'

export default {

    state: {
        currNoticeUser: null,
    },
    mutations: {
        setNotificationUser(state, { user }) {
            state.currNoticeUser = user

            this.dispatch({ type: 'pushNotification', user })
        }
    },
    getters: {
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
        pushNotification(context) {
            const currLoggedUser = JSON.parse(localStorage.getItem("loggedInUser"))
            const noticeFrom = context.state.currNoticeUser.notifications.findIndex(notice => {
                return notice.from === currLoggedUser.username
            })
            console.log(noticeFrom)
            const notification = sitterServiceBack.createNotification(currLoggedUser.username)
            console.log(notification)
            let copyUser = Object.assign({}, { ...context.state.currNoticeUser });
            if (noticeFrom === -1) {
                copyUser.notifications.unshift(notification)
            } else {
                copyUser.notifications.splice(noticeFrom, 1)
                copyUser.notifications.unshift(notification)
            }
            if (currLoggedUser.type === 'parent') return sitterServiceBack.updateSitter(copyUser)
            else return sitterServiceBack.updateParent(copyUser)
        },
        changeNotificationStatus(context, { from }) {
            const currLoggedUser = JSON.parse(localStorage.getItem("loggedInUser"))
            const noticeFrom = currLoggedUser.notifications.findIndex(notice => {
                return notice.from === from
            })
            if (noticeFrom > -1) {
                let copyUser = Object.assign({}, { ...currLoggedUser });
                copyUser.notifications[noticeFrom].isRead = true
                localStorage.setItem('loggedInUser', JSON.stringify(copyUser))
                if (currLoggedUser.type === 'parent') return sitterServiceBack.updateSitter(copyUser)
                else sitterServiceBack.updateParent(copyUser)
            }
        }
    }
}