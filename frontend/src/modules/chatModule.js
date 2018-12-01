import sitterServiceBack from '../service/sitterServiceBack.js'

export default {

    state: {
        currNoticeUser: {},
        currLoggedUser:JSON.parse(localStorage.getItem("loggedInUser"))
    },

    mutations: {
        setNotificationUser(state,{user}){
            state.currNoticeUser = user
        }
   
    },
    getters: {

    },
    actions: {
        sendNotification(context,{sitter}){
            return sitterServiceBack.getByUsername(sitter)
            .then(user => {
                context.commit({ type: 'setNotificationUser', user })
                context.dispatch({ type: 'pushNotification', user })
                return sitter
            })
        },
        pushNotification(context,{user}){
           const notification = sitterServiceBack.createNotification(context.state.currLoggedUser.username)
           let copyUser = Object.assign({}, {...context.state.currNoticeUser});
            copyUser.notifications.push(notification)
            return sitterServiceBack.updateUser(copyUser)
        }
    }
}