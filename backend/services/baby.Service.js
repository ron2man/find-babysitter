const mongoService = require('./mongo.service')

const ObjectId = require('mongodb').ObjectId;

function query(filter) {
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('sitters');
            return collection.find({}).toArray()
            // return collection.find({$and:[{"username" : filter.username},{"license":JSON.parse(filter.license)}]}).toArray()
            // return collection.find({$and:[{"license" : !!filter.license}]}).toArray()
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
                    console.log(result)
                    return result;
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