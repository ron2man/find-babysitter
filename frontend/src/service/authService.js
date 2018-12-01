import parentService from '../service/parentsService.js'
import sitterService from '../service/sitterServiceBack.js'



function login({ nickName, pwd }) {    
    var parent = parentService.query()
        .then(users => users.find(user => {
            return nickName === user.username && pwd === user.pwd
        }))

    var sitter = sitterService.query()
        .then(sitters => sitters.find(sitter => {
            return nickName === sitter.username && pwd === sitter.pwd
        }))

       return Promise.all([parent, sitter]).then(potenUsers=>{
           for (var i=0; i<potenUsers.length;i++){
                if (potenUsers[i]) return potenUsers[i]
           } 
        })
}








export default {
    login

}