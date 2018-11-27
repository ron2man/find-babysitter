const axios = require('axios')

const BASE_URL = 'http://localhost:3003/baby'


function query() {
    return axios.get(`${BASE_URL}`).then(res => res.data)
}

function getById(id){
    return axios.get(`${BASE_URL}/${id}`).then(res => res.data)
}

function remove(id){
    return axios.delete(`${BASE_URL}/${id}`).then(res => res.data)
}

function update(siter){
    return axios.put(`${BASE_URL}`,siter).then(res => res.data)
}

export default {
    query,
    getById,
    remove,
    update
}