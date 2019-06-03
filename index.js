const express = require('express');
const socketIo = require('socket.io');
const bodyParser = require('body-parser');
const gamesRouter = require('./games/routes');
const colors = require('colors');
const cors = require('cors')


const app = express()
const port = process.env.PORT || 4000

app
  .use(cors())
  .use(bodyParser.json())
  .use(gamesRouter)

const server = app.listen(port, () => console.log(`Listening on port ${port}`.green))
const io = socketIo.listen(server)

// function dispatchToClient() {
//   const action = {
//     type: 'SOME_ACTION',
//     payload: 'insert payload here...'
//   }
//   io.emit('action', action)
// }

io.on(
  'connection',
  client => {
    console.log('client.id test:'.yellow, client.id)

    dispatchMessages()

    client.on(
      'disconnect',
      () => console.log('disconnect test:'.yellow, client.id)
    )
  }
)
