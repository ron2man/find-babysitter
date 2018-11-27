const mongoService = require('./mongo.service') 

const ObjectId = require('mongodb').ObjectId;

function query() {
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('sitter');
            return collection.find({}).toArray()
        })
}

function getById(sitterId) {
    sitterId = new ObjectId(sitterId)
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('sitter');
            return collection.findOne({ _id: sitterId })
        })
}

function remove(){
    sitterId = new ObjectId(sitterId)
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('sitter');
            return collection.remove({ _id: sitterId })
        })
}

function add(sitter){
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('sitter');
            return collection.insertOne(sitter)
                .then(result => {
                    sitter._id = result.insertedId;
                    return car;
                })
        })
}

function update(sitter){
    sitter._id = new ObjectId(sitter._id)
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('sitter');
            return collection.updateOne({ _id: sitter._id }, { $set: sitter })
                .then(result => {
                    return result;
                })
        })
}


module.exports = {
    query,
    getById,
    remove,
    add,
    update
}
