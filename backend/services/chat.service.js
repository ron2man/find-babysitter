const mongoService = require('./mongo.service')

function checkMessages(roomName){
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('msgs')
            return collection.find({roomName:`${roomName}`}).toArray()
        })
}

function createRoom(roomName){
    return mongoService.connectToDb()
    .then(db => {
        const collection = db.collection('msgs')
        return collection.insert({roomName:`${roomName}`,msgs:[]})
    })
}

function pushMessage(msg,roomName){
    return mongoService.connectToDb()
    .then(db => {
        const collection = db.collection('msgs')
        return collection.update({roomName:`${roomName}`},{$push:{msgs:{msg:`${msg.msg}`,createdAt:`${msg.createdAt}`,from:`${msg.from}`}}})
    })
}

module.exports = {
    checkMessages,
    createRoom,
    pushMessage
}
