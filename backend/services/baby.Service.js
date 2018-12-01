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


function checkLoginP(typedDetails){
    return parent = mongoService.connectToDb()
    .then(db => {
        const collection = db.collection('parents');
        // todo - find out why parents collection dosent come back with obj
        // return collection.find({username :typedDetails.nickName}).toArray()
        return collection.find({ $and: [{ username: typedDetails.nickName }, { pwd: typedDetails.pwd }] }).toArray()
    })
}

function checkLogin(typedDetails) {
    // console.log('check typed', typedDetails);
    // const parent = mongoService.connectToDb()
    //     .then(db => {
    //         const collection = db.collection('parents');
    //         // todo - find out why parents collection dosent come back with obj
    //         // return collection.find({username :typedDetails.nickName}).toArray()
    //         return collection.find({ $and: [{ username: typedDetails.nickName }, { pwd: typedDetails.pwd }] }).toArray()
    //     })
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('sitters');
            return collection.find({ $and: [{ username: typedDetails.nickName }, { pwd: typedDetails.pwd }] }).toArray()
        })
    // return Promise.all([sitter, parent]).then(potenUsers => {
    //     for (var i = 0; i < potenUsers.length; i++) {
    //         if (potenUsers[i]) return potenUsers[i]
    //     }
    // })

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


function remove() {
    sitterId = new ObjectId(sitterId)
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('sitters');
            return collection.remove({ _id: sitterId })
        })
}

function update(user) {
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
    getByUsername,
    checkLogin,
    checkLoginP
}
