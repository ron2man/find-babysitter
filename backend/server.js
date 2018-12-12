const express = require('express');
const app = express();
const session = require('express-session');

app.use(session({
  secret: 'supercalifragelistiexpialidoushess',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const http = require('http').Server(app);
const io = process.env.PORT
? require('socket.io')(http)
: require('socket.io')(http, { origins: 'http://localhost:8080' });

app.use(cookieParser());

app.use(bodyParser.json())

app.use(cors({
  origin: ['http://localhost:8080'],
  credentials: true // enable set cookie
}))

const history = require('connect-history-api-fallback');
app.use(history())
app.use(express.static('public'));


const addSitterRoutes = require('./routes/sitterRoute')
const addUserRoutes = require('./routes/userRoute')
const addParentRoutes = require('./routes/parentRoute')





addSitterRoutes(app)
addUserRoutes(app)
addParentRoutes(app)

// socket

const port = process.env.PORT || 3003;
http.listen(port, () => {
  console.log(`App listening on port ${port} !`);
});


const socketService = require('./services/socket.service')
socketService(io)
