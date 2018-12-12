import axios from 'axios';
axios.defaults.withCredentials = true


const BASE_URL =  process.env.NODE_ENV !== 'development'
    ? ''
    : 'http://localhost:3003'



function query(filterLocation = '', filterProperty = '', sortKey) {

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
        console.log('filterProperty', filterProperty);
        
        params.set('name', filterProperty.fullName)

        params.set('minAge', filterProperty.ageRange[0])
        params.set('maxAge', filterProperty.ageRange[1])

        params.set('minWage', filterProperty.wageRange[0])
        params.set('maxWage', filterProperty.wageRange[1])
        
        params.set('cleaner', filterProperty.isCleaner)
        params.set('medical', filterProperty.isMedical)
        params.set('nonSmoking', filterProperty.isNonSmoking)
    }


    // this params adds key sort (rate as default)
    // console.log('sortBy', sortKey);

    params.set('sortBy', sortKey)

    return axios.get(`${BASE_URL}/baby?${params}`).then(res => res.data)
}

function Limitquery(limit = 6, sortBy = 'aveRate') {
    const params = new URLSearchParams
    params.set('limit', limit)
    params.set('sortBy', sortBy)

    return axios.get(`${BASE_URL}/baby?${params}`).then(res => res.data)

}

function checkAvalability(reservation) {
    const params = new URLSearchParams
    params.set('start', reservation.start)
    params.set('end', reservation.end)
    params.set('id', reservation.id)
    params.set('from', reservation.from)
    params.set('to', reservation.to)
    return axios.get(`${BASE_URL}/baby/check?${params}`).then(res => res.data)
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


function updateSitter(user) {
    return axios.put(`${BASE_URL}/baby/sitter/${user._id}`, user)
}

function updateParent(user) {
    return axios.put(`${BASE_URL}/baby/parent/${user._id}`, user)
}



function createNotification(currUser) {
    return {
        from:currUser.username,
        img:currUser.imgUrl,
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
    getByParentUsername,
    checkAvalability,
    Limitquery
    // remove,
    // update,
}
