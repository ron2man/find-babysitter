const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const app = express()
const http = require('http').Server(app);
var io = require('socket.io')(http, { origins: 'http://localhost:8080' });


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

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.static('public'));

addSitterRoutes(app)
addUserRoutes(app)

// socket
var msgs = []

io.on('connection', function (socket) {

  socket.on('firstChat', roomname => {
    socket.join(roomname)
    if (msgs[roomname]) io.to(roomname).emit('getHistory', msgs[roomname]);
  });

  socket.on('SendMsg', details => {
    //details,details = room name
    io.to(details.details).emit('SendMsg', details.msg,details.from);
    const newMsg = {from: details.from,msg: details.msg,createdAt:details.time}
    console.log(newMsg)
    if (!msgs[`${details.details}`]) {
      msgs[`${details.details}`] = []
      msgs[`${details.details}`].push(newMsg)
    }
    else msgs[`${details.details}`].push(newMsg)
  })

})

const PORT = process.env.PORT || 3003;
http.listen(PORT, () => console.log(`Example app listening on port ${PORT}`))