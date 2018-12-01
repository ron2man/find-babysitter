import axios from 'axios';

// const BASE_URL = 'http://localhost:3003/baby'
const BASE_URL = 'http://localhost:3003'

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

function getByUsername(username){
    return axios.get(`${BASE_URL}/username/${username}`).then(res => res.data)
}

function updateUser(user){
    return axios.put(`${BASE_URL}/${user._id}`,user)
}


function createNotification(from){
    return {
        from,
        isRead:false
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
    getByUsername,
    createNotification,
    updateUser,
    addNewSitter
    // remove,
    // update,
}