const mongoService = require('./mongo-service') 

const ObjectId = require('mongodb').ObjectId;

function query() {
    return mongoService.connect()
        .then(db => {
            const collection = db.collection('worker');
            return collection.find({}).toArray()
        })
}

function getById(workerId) {
    workerId = new ObjectId(workerId)
    return mongoService.connect()
        .then(db => {
            const collection = db.collection('worker');
            return collection.findOne({ _id: workerId })
        })
}

function remove(){
    workerId = new ObjectId(workerId)
    return mongoService.connect()
        .then(db => {
            const collection = db.collection('worker');
            return collection.remove({ _id: workerId })
        })
}

function add(worker){
    return mongoService.connect()
        .then(db => {
            const collection = db.collection('worker');
            return collection.insertOne(worker)
                .then(result => {
                    worker._id = result.insertedId;
                    return car;
                })
        })
}

function update(worker){
    worker._id = new ObjectId(worker._id)
    return mongoService.connect()
        .then(db => {
            const collection = db.collection('worker');
            return collection.updateOne({ _id: worker._id }, { $set: worker })
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
