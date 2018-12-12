const chatService = require('../services/chat.service')

module.exports = io => {
    var twoUsersRoom = ''

    io.on('connection', socket => {

        socket.on('firstChat', roomName => {
            socket.join(roomName)
            chatService.checkMessages(roomName)
                .then(res => {
                    if (res.length !== 0) io.to(roomName).emit('getHistory', res);
                    else chatService.createRoom(roomName)
                    twoUsersRoom = roomName
                })
        });

        socket.on('SendMsg', details => {
            const newMsg = { from: details.from, msg: details.msg, createdAt: details.time }
            io.to(details.details).emit('SendMsg', newMsg);
            chatService.pushMessage(newMsg, twoUsersRoom)
        })

        socket.on('createMyOwnRoom', roomName=>{
            socket.join(roomName)
            console.log('roomName',roomName);
        })

        socket.on('notifications', roomName =>{
            console.log(roomName,'roomnameAfterBooking')
            io.to(roomName).emit('getNotifactions');
            
        })



    })



}