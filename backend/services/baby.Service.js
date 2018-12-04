const mongoService = require('./mongo.service')

const ObjectId = require('mongodb').ObjectId;

function query({ minAge = 0, maxAge = 100, sTime = 1512311933000, eTime = 1512311933000, name = '' , sortBy='aveRate'}) {
    

    // 
    // if (filter.lat) var lat = +filter.lat

    // START QUERY BY LOCATION 
    // var addressFilter = {

    // }
    // START QUERY BY NAME SEARCH
    // const regEx = new RegExp( '.*' + name + '.*', 'i') 
    var nameFilter = {
        'name.fullName': { $regex: '.*' + name + '.*', $options: 'i' }
    }

    // END QUERY BY NAME SEARCH

    // START QUERY BY AGE
    var ageFilter = {
        age: { $gte: +minAge, $lte: +maxAge }
    }
    // END QUERY BY AGE

    // START QUERY BY TIME GAP
    // if (filter.sTime) var startTime = +sTime;
    // if (filter.eTime) var endTime = +eTime;

    // RETURN DATA WITH AVAILABLE REQUESTED TIME SLOT
    var timeGapFilter = {
        $nor:
            [{ schedule: { $elemMatch: { sTime: { $gte: +sTime, $lte: +eTime } } } },
            { schedule: { $elemMatch: { eTime: { $gte: +sTime, $lte: +eTime } } } }]
    }
    // END QUERY BY TIME GAP

    // console.log({nameFilter})


    console.log('filter at service back',sortBy);


    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('sitters');
            // return collection.find(ageFilter).toArray()
        //     var sitters = collection.find({ $and: [timeGapFilter, ageFilter, nameFilter, {}] }).sort( { [sortBy]: -1 } ).toArray()
        //    sitters.then(res=>console.log('res from mongo',res))
            return collection.find({ $and: [timeGapFilter, ageFilter, nameFilter, {}] }).sort( { [sortBy]: -1 } ).toArray()
            
        })
}


function checkParentLogin(typedDetails) {
    return parent = mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('parents');
            return collection.find({ $and: [{ username: typedDetails.nickName }, { pwd: typedDetails.pwd }] }).toArray()
        })
}

function checkSitterLogin(typedDetails) {
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('sitters');
            return collection.find({ $and: [{ username: typedDetails.nickName }, { pwd: typedDetails.pwd }] }).toArray()
        })
}


function getById(sitterId) {
    sitterId = new ObjectId(sitterId)
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('sitters');
            return collection.findOne({ _id: sitterId })
        })
}

function getByUsernameSitter(username) {
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('sitters');
            return collection.findOne({ username: username })
        })
}

function getByUsernameParent(username) {
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('parents');
            return collection.findOne({ username: username })
        })
}



function remove() {
    sitterId = new ObjectId(sitterId)
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('sitters');
            return collection.remove({ _id: sitterId })
        })
}

function updateSitter(user) {
    user._id = new ObjectId(user._id)
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('sitters');
            return collection.updateOne({ _id: user._id }, { $set: user })
                .then(result => {
                    // return result;
                    // })
                    // console.log(result)
                })
        })
}

function updateParent(user) {
    user._id = new ObjectId(user._id)
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('parents');
            return collection.updateOne({ _id: user._id }, { $set: user })
                .then(result => {
                    console.log(result)
                    return result;
                })
        })
}


function addSitter(userdetails) {
    var newUser = userdetails
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('sitters')
            return collection.insert(userdetails)
                .then(user => {
                    newUser._id = user.insertedIds
                    return newUser
                })
        })


}



module.exports = {
    query,
    getById,
    remove,
    updateSitter,
    updateParent,
    getByUsernameSitter,
    getByUsernameParent,
    checkSitterLogin,
    checkParentLogin,
    addSitter
}

// historymsgs = {['etishimrit']:[]}