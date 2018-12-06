const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const app = express()
const http = require('http').Server(app);
var io = require('socket.io')(http, { origins: 'http://localhost:8080' });
const babyService = require('./services/baby.Service')


// const userService = require('./services/user-service')

const addSitterRoutes = require('./routes/sitterRoute')
const addUserRoutes = require('./routes/userRoute')


app.use(cors({
  origin: ['http://localhost:8080'],
  credentials: true // enable set cookie
}))

app.use(bodyParser.json())
app.use(cookieParser());
app.use(session({
  secret: 'puki muki',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.use(express.static('public'));

addSitterRoutes(app)
addUserRoutes(app)

// socket
var twousersroom = ''

io.on('connection', function (socket) {

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

const PORT = process.env.PORT || 3003;
http.listen(PORT, () => console.log(`Example app listening on port ${PORT}`))