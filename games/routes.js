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
  const game = {
    winner: req.body.winner,
    loser: req.body.loser,
    playerOne: req.body.playerOne,
    playerTwo: req.body.playerTwo,
    playerOneBoard:  new Array(10).fill(0)
      .map(() => new Array(10).fill(0)),
    playerTwoBoard:  new Array(10).fill(0)
      .map(() => new Array(10).fill(0)),
    playerOneArmoredVehiclesCount: 3,
    playerOneArmoredVehiclesSize: 2,
    playerOneLightTanksCount: 2,
    playerOneLightTanksSize: 3,
    playerOneMediumTanksCount: 2,
    playerOneMediumTanksSize: 4,
    playerOneHeavyTanksCount: 1,
    playerOneHeavyTanksSize: 5,
    playerTwoArmoredVehiclesCount: 3,
    playerTwoArmoredVehiclesSize: 2,
    playerTwoLightTanksCount: 2,
    playerTwoLightTanksSize: 3,
    playerTwoMediumTanksCount: 2,
    playerTwoMediumTanksSize: 4,
    playerTwoHeavyTanksCount: 1,
    playerTwoHeavyTanksSize: 5
}

  Game
    .create(game)
    .then(game => {
      return res.status(201).json(game)
    })
    .catch(error => {
      console.log(error)
      next(error)
    })  
})

app.get('/games', (req, res, next) => { 
  Game.findAll({order:[['id', 'DESC']]})
  .then(games => {
    res.json({ games: games })
  })
  .catch(error => next(error))
}) 

app.get('/games/:id', (req, res) => {
  const id = req.params.id
  Game.findByPk(id)
  .then(game => {
    res.json({ game: game })
  })
  .catch(err => {
    res.status(500).json({
      message: 'Something went wrong'
    })
  })
})

app.put('/games/:id', (req, res, next) => {
  const id = req.params.id
  Game.findByPk(id)
  .then(game => game.update(req.body))
  .then(game => {
    res.json({ message: `Game updated. 
                Player 1: ${game.playerOne} 
                Player 2: ${game.playerTwo} 
                Winner: ${game.winner}` })
})
  .catch(err => {
    res.status(500).json({
      message: 'Something went wrong'
    })
  })
})


module.exports = app