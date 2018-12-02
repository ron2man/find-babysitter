const mongoService = require('./mongo.service')

const ObjectId = require('mongodb').ObjectId;

function query(time) {
    // const start = parseInt(startTime)
    // const end = parseInt(endTime)
    var startTime;
    var endTime;
    if (time.sTime) startTime = +time.sTime;
    if (time.eTime) endTime = +time.eTime;

    console.log(startTime, endTime)

    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('sitters');
            return collection.find({
                $nor:
                    [{ schedule: { $elemMatch: { sTime: { $gte: startTime, $lte: endTime } } } },
                    { schedule: { $elemMatch: { eTime: { $gte: startTime, $lte: endTime } } } }]
            }).toArray()



            // 
            // db.getCollection('sitters').find({
            //     $nor: [
            //         { schedule: { "$elemMatch": { sTime: { $lte: 1546336800000 }, eTime: { $gte: 1546329600000 } } } }]
            // }

            // )




            // return collection.find({}).toArray()

            // db.getCollection('sitters').find( {$nor: [ 
            //     {schedule: { $all: [
            //                    { "$elemMatch" : { sTime: { $lt: searchEndTime} }},
            //                    { "$elemMatch" : { eTime : { $gt: searchStartTime} }}
            //                  ] }}
            //   ]} )


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