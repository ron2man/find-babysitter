const express = require('express');
const cors = require('cors');
const history = require('connect-history-api-fallback');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http, { origins: 'http://localhost:8080' });

const addSitterRoutes = require('./routes/sitterRoute')
const addUserRoutes = require('./routes/userRoute')

app.use(history())
app.use(cors({
  origin: ['http://localhost:8080'],
  credentials: true // enable set cookie
}))


app.use(bodyParser.json())
app.use(cookieParser());
app.use(session({
  secret: 'supercalifragelistiexpialidoushess',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.use(express.static('public'));

addSitterRoutes(app)
addUserRoutes(app)

// socket
var twousersroom = ''

const socketService = require('./services/socket.service')
socketService(io)

const PORT = process.env.PORT || 3003;
http.listen(PORT, () => console.log(`Example app listening on port ${PORT}`))