import axios from 'axios';

const BASE_URL = 'http://localhost:3003'

function query(filterLocation = '', filterProperty = '') {
    // function query(filter = {username:'shira',license: true}) {



    // Tuesday, January 1, 2019 10:00:00 AM GMT+02:00
var startTime = 1546329600000; 
// Tuesday, January 1, 2019 12:00:00 AM GMT+02:00
var endTime = 1546336800000;

    const params = new URLSearchParams

    if (filterLocation) {
        // TODO
        // TIMESTAMP - START FILTER
        // TIMESTAMP - END FILTER
        // console.log('if filterlocation',filterLocation)
    }

    
    if (filterProperty) {
        // FILTER FULL NAME
        if (filterProperty.fullName) params.append('fullName', filterProperty.fullName)
        // console.log('if filterproperty',filterProperty)
    }

    // if (filter.username && filter.license) {
    //     console.log('got here')
        params.set('sTime', startTime)
        params.set('eTime', endTime)
        // params.set('license', filter.license)
    // }

    // params.name = filter.name
    // params.filter = filter
    // params.set('name', filter.name)
    return axios.get(`${BASE_URL}/baby?${params}`).then(res => res.data)
}



function getById(id){
    return axios.get(`${BASE_URL}/baby/${id}`).then(res => res.data)
}


function getByUsername(username){
    return axios.get(`${BASE_URL}/baby/username/${username}`).then(res => res.data)
}

function updateUser(user){
    return axios.put(`${BASE_URL}/baby/${user._id}`,user)


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



function createNotification(from) {
    return {
        from,
        isRead: false,
        createdAt: Date.now()
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