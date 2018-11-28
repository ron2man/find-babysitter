const mongoService = require('./mongo.service') 

const ObjectId = require('mongodb').ObjectId;

function query() {
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('sitters');
            return collection.find({}).toArray()
        })
}

function getById(sitterId) {
    console.log(sitterId)
    sitterId = new ObjectId(sitterId)
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('sitters');
            return collection.findOne({ _id: sitterId })
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

function add(sitter){
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('sitters');
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
            const collection = db.collection('sitters');
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
