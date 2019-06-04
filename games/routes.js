const express = require('express')
const bodyParser = require('body-parser')
const colors = require('colors')
const Game = require('./model')
const socketIo = require('socket.io')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(bodyParser.json()) 

app.post('/games', (req, res, next) => {
  Game
    .create(req.body)
    .then(game => {
      return res.sendStatus(201).sendStatus(game)
    })
    .catch(error => {
      console.log(error)
      next(error)
    })  
})

app.get('/games', (req, res, next) => { 
  Game.findAll()
  .then(game => {
    res.send({ games })
  })
  .catch(error => next(error))
}) 

app.put('/games/:id', (req, res, next) => {
  const id = req.params.id
  Game.findByPk(id)
  .then(game => game.update(req.body))
  .then(game => {
    res.json({ message: `Game updated with user ${game.winner} as winner` })
})
  .catch(err => {
    res.status(500).json({
      message: 'Something went wrong'
    })
  })
})

function onListen () {
  console.log('Listening on port 4000')
}

//const server = app.listen(4000, onListen)
//const io = socketIo.listen(server)
const games = []

//io.on(
//  'connection',
//  client => {
//    console.log('client.id test:', client.id)
//    dispatchMessages()
//    client.on(
//      'disconnect',
//      () => console.log('disconnect test:', client.id)
//    )
//  }
//)

module.exports = app