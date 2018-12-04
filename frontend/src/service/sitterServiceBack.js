import axios from 'axios';

const BASE_URL = 'http://localhost:3003'



function query(filterLocation = '', filterProperty = '', sortKey) {
    // function query(filter = {username:'shira',license: true}) {
    const params = new URLSearchParams

    if (filterLocation) {
        params.set('sTime', filterLocation.schedule.startTime)
        params.set('eTime', filterLocation.schedule.endTime)

        // TO DO = BUILD LAT / LNG FILTER - BY RADIUS
        if (filterLocation.coords.lat) {
            params.set('lat', filterLocation.coords.lat)
            params.set('lng', filterLocation.coords.lon)
            params.set('radius', filterLocation.coords.radius)
        }
    }

    if (filterProperty) {
        console.log('IM WORKING', filterProperty)
        // FILTER FULL NAME
        // if (filterProperty.ageRange) {
            params.set('minAge', filterProperty.ageRange[0])
            params.set('maxAge', filterProperty.ageRange[1])
            // console.log()
            params.set('name', filterProperty.fullName)
        
    }

    
// this params adds key sort (rate as default)
    console.log('sortBy', sortKey);

    params.set('sortBy', sortKey)

    // if (filter.username && filter.license) {
    //     console.log('got here')

    // params.set('license', filter.license)
    // }

    // params.name = filter.name
    // params.filter = filter
    // params.set('name', filter.name)
    return axios.get(`${BASE_URL}/baby?${params}`).then(res => res.data)
}




function getById(id) {
    return axios.get(`${BASE_URL}/baby/${id}`).then(res => res.data)
}


function getByUsername(username) {
    return axios.get(`${BASE_URL}/baby/username/${username}`).then(res => res.data)
}

function updateUser(user) {
    return axios.put(`${BASE_URL}/baby/${user._id}`, user)
}


function getSitterByUsername(username) {
    return axios.get(`${BASE_URL}/baby/sitter/${username}`).then(res => res.data)
}

function getByParentUsername(username) {
    return axios.get(`${BASE_URL}/baby/parent/${username}`).then(res => res.data)

}


function updateSitter(user){
    return axios.put(`${BASE_URL}/baby/sitter/${user._id}`,user)
}

function updateParent(user) {
    return axios.put(`${BASE_URL}/baby/parent/${user._id}`, user)
}



function createNotification(from) {
    return {
        from,
        isRead: false,
        createdAt: Date.now()
    }
}


function addNewSitter(newSitter) {
    return axios.post(`${BASE_URL}/signup`, newSitter)
        .then(res => res.data)

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
