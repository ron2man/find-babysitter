import axios from 'axios';

const BASE_URL = 'http://localhost:3003/baby'
// const BASE_URL = 'http://localhost:3003/baby'

function query(filter = {username:'shira',license: true}) {
    const params = new URLSearchParams
    params.append('username', filter.username)
    params.set('license', filter.license)

    // params.name = filter.name
    // params.filter = filter
    // params.set('name', filter.name)
    return axios.get(`${BASE_URL}?${params}`).then(res => res.data)
}


function getById(id){
    return axios.get(`${BASE_URL}/${id}`).then(res => res.data)
}

function getSitterByUsername(username){
    return axios.get(`${BASE_URL}/sitter/${username}`).then(res => res.data)
}

function getByParentUsername(username){
    return axios.get(`${BASE_URL}/parent/${username}`).then(res => res.data)
}


function updateSitter(user){
    return axios.put(`${BASE_URL}/${user._id}`,user)
}

function updateParent(user){
    return axios.put(`${BASE_URL}/parent/${user._id}`,user)
}



function createNotification(from){
    return {
        from,
        isRead:false,
        createdAt:Date.now()
    }
}

function addNewSitter(newSitter) {
   return axios.post(`${BASE_URL}/signup`,newSitter)
        .then(res=>res.data)
}

// function remove(id) {
//     const sitterIdx = sitters.findIndex(sitter => sitter.id === id)
//     sitters.splice(sitterIdx, 1)
//     return Promise.resolve(sitterIdx)
// }

// function update(sitter) {
//     const sitterIdx = sitters.findIndex(currSitter => currSitter.id === sitter.id)
//     sitter.splice(sitterIdx, 1, sitter)
//     return Promise.resolve(sitterIdx)
// }

export default {
    query,
    getById,
    getSitterByUsername,
    createNotification,
    updateSitter,
    updateParent,
    addNewSitter,
    getByParentUsername
    // remove,
    // update,
}