import parentService from '../service/parentsService.js'



function login({ nickName, pwd }) {
   return parentService.query()
        .then(users => users.find(user => {
            return nickName === user.nickName
        }))
}








export default {
    login

}