const babyService = require('./baby.Service')

module.exports = io => {
    io.on('connection', socket => {

        socket.on('firstChat', roomname => {
            socket.join(roomname)
            babyService.checkMessages(roomname)
                .then(res => {
                    if (res.length !== 0) io.to(roomname).emit('getHistory', res);
                    else babyService.createRoom(roomname)
                    twousersroom = roomname
                })
        });

        socket.on('SendMsg', details => {
            const newMsg = { from: details.from, msg: details.msg, createdAt: details.time }
            io.to(details.details).emit('SendMsg', newMsg);
            babyService.pushMessage(newMsg, twousersroom)
        })
    })

}