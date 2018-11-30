import sitterServiceBack from '../service/sitterServiceBack.js'

export default {

    state: {
        currentParent: {}
    },

    mutations: {
     
   
    },
    getters: {

    },
    actions: {
        sendNotification(context,username){
            return sitterServiceBack.getByUsername(username)
            .then(sitter => {
                return sitter
            })
        }
    }
}