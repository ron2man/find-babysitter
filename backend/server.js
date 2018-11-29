const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const app = express()  
const http = require('http').Server(app);
var io = require('socket.io')(http, {origins:'http://localhost:8080'});

// const userService = require('./services/user-service')

const addSitterRoutes = require('./routes/sitterRoute')


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
// addParentsRoutes(app)

app.post('/singup', (req, res) => {
  const nickname = req.body.nickname
  userService.addUser({ nickname })
    .then(user => res.json(user))
})

app.put('/login', (req, res) => {
  const nickname = req.body.nickname
  userService.checkLogin({ nickname })
    .then(user => {
      req.session.user = user
      res.json(user)
    })
})


io.on('connection', function (socket) {
  socket.on('shoot', msg => {
    io.emit('shoot', msg);
  })
  socket.on('firstChat',roomname =>
  socket.join(`${roomname}`))

  
});


const PORT = process.env.PORT || 3003;
http.listen(PORT, () => console.log(`Example app listening on port ${PORT}`))