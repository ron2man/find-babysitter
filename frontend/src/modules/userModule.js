import authService from '../service/authService.js'

export default {

    state: {
        user: null
    },

    mutations: {
        setUser(state,payload){
            state.user = payload       
            console.log(state.user);        
        }

    },

    getters: {

    },

    actions: {
        checkUser({ commit }, { details }) {
           return authService.login(details)
                .then(user => {
                    commit('setUser', user)
                    localStorage.setItem('loggedInUser', JSON.stringify(user))
                    return user
                })



        }

    }





}