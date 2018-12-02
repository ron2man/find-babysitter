import axios from 'axios'

const BASE_URL = 'http://localhost:3003'

function login( typedDetails) {    
    return axios.put(`${BASE_URL}/login`, typedDetails)
        .then(res=>res.data)
}


export default {
    login

}

