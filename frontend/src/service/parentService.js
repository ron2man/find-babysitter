import axios from 'axios';


const BASE_URL = process.env.NODE_ENV !== 'development'
    ? ''
    : 'http://localhost:3003'




function getParentById(id) {
    return axios.get(`${BASE_URL}/parent/${id}`).then(res =>{
       return res.data
    })
}


export default {
    getParentById
}