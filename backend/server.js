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


app.use(express.static('public'));

app.use(cors({
  origin: ['http://localhost:8080'],
  credentials: true // enable set cookie
}));
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


addSitterRoutes(app)
addUserRoutes(app)
// addParentsRoutes(app)



// socket

io.on('connection', function (socket) {
  console.log('a user connected');
  socket.on('SendMsg', details => {
    console.log(details)
    io.to(details.details).emit('SendMsg', details.msg);
  })
  socket.on('firstChat', roomname => {
    socket.join(roomname)
  })
});


const PORT = process.env.PORT || 3003;
http.listen(PORT, () => console.log(`Example app listening on port ${PORT}`))