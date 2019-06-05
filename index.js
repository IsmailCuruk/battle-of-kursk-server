const express = require('express');
const socketIo = require('socket.io');
const bodyParser = require('body-parser');
const gamesRouter = require('./games/routes');
const loginRouter = require('./auth/routes')
const usersRouter = require('./users/routes')
const colors = require('colors');
const cors = require('cors')
const app = express()
const port = process.env.PORT || 4000

app
  .use(cors())
  .use(bodyParser.json())
  .use(loginRouter)
  .use(usersRouter)
  .use(gamesRouter)

function onListen() {
  console.log(`Running on port ${port}`)
}

const server = app.listen(port, onListen)
const io = socketIo.listen(server)

io.on(
  'connection', 
  user => {
  console.log('user.id test:', user.id)

    user.on(
      'disconnect', 
      () => console.log('disconnect test:', user.id))
})