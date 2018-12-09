const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http, { origins: 'http://localhost:8080' });

app.use(cookieParser());
app.use(session({
  secret: 'supercalifragelistiexpialidoushess',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))
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





addSitterRoutes(app)
addUserRoutes(app)

// socket

const port = process.env.PORT || 3003;
http.listen(port, () => {
  console.log(`App listening on port ${port} !`);
});


const socketService = require('./services/socket.service')
socketService(io)
