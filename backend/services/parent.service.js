const mongoService = require('./mongo.service')

const ObjectId = require('mongodb').ObjectId;


function getParentById(parentId) {
    console.log('im heree');
    
    parentId = new ObjectId(parentId)
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('parents');
            return collection.findOne({ _id: parentId })
        })
}



module.exports = {
    getParentById
}