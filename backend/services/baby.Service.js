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

function getById(sitterId) {
    sitterId = new ObjectId(sitterId)
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('sitters');
            return collection.findOne({ _id: sitterId })
        })
}

function getByUsername(username) {
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('sitters');
            return collection.findOne({ username: username })
        })
}


function remove(){
    sitterId = new ObjectId(sitterId)
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('sitters');
            return collection.remove({ _id: sitterId })
        })
}

function update(user){
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


module.exports = {
    query,
    getById,
    remove,
    update,
    getByUsername
}
