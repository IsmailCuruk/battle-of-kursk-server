const express = require('express');
const socketIo = require('socket.io');
const bodyParser = require('body-parser');
const gamesRouter = require('./games/routes');
const loginRouter = require('./auth/routes')
const usersRouter = require('./users/routes')
const colors = require('colors');
const cors = require('cors')

const colors = require('colors');

const app = express()
const port = process.env.PORT || 4000

app
  .use(cors())
  .use(bodyParser.json())
  .use(loginRouter)
  .use(usersRouter)
  .use(gamesRouter)

function onListen() {
  console.log('Running on PORT 4000')
}

const server = app.listen(4000, onListen)

const io = socketIo.listen(server)

io.on(
  'connection', 
  user => {
  console.log('client.id test:', user.id)

    user.on(
      'disconnect', 
      () => console.log('disconnect test:', user.id))
})