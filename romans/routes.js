const express = require('express')
const bodyParser = require('body-parser')
const colors = require('colors')
const Roman = require('./model')
const socketIo = require('socket.io')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(bodyParser.json()) 

app.post('/romans', (req, res, next) => {
  const roman = {
    winner: req.body.winner,
    loser: req.body.loser,
    playerOne: req.body.playerOne,
    playerTwo: req.body.playerTwo,
    roundsPlayed: 0
}
  Roman
    .create(roman)
    .then(roman => {
      return res.status(201).json(roman)
    })
    .catch(error => {
      console.log(error)
      next(error)
    })  
})

app.get('/romans', (req, res, next) => { 
  Roman.findAll({order:[['id', 'DESC']]})
  .then(romans => {
    res.json({ romans: romans })
  })
  .catch(error => next(error))
}) 

app.get('/romans/:id', (req, res) => {
  const id = req.params.id
  Roman.findByPk(id)
  .then(roman => {
    res.json({ roman: roman })
  })
  .catch(err => {
    res.status(500).json({
      message: 'Something went wrong'
    })
  })
})

app.put('/romans/:id', (req, res, next) => {
  const id = req.params.id
  Roman.findByPk(id)
  .then(roman => roman.update(req.body))
  .then(roman => {
    res.json({ message: `Roman updated. 
                Player 1: ${roman.playerOne} 
                Player 2: ${roman.playerTwo} 
                Winner: ${roman.winner}` })
})
  .catch(err => {
    res.status(500).json({
      message: 'Something went wrong'
    })
  })
})


module.exports = app