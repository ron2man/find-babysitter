import axios from 'axios'


const BASE_URL =  process.env.NODE_ENV === 'production'
    ? '/'
    : 'http://localhost:3003'

function login( typedDetails) {    
    return axios.put(`${BASE_URL}/login`, typedDetails)
        .then(res=>res.data)
}


export default {
    login

}

