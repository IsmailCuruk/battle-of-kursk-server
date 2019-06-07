const Sequelize = require('sequelize')
const sequelize = require('../db')


const Roman = sequelize.define('romans', {
  winner: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  loser: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  playerOne: {
    type: Sequelize.INTEGER,
    field: 'player_one',
    allowNull: true
  },
  playerTwo: {
    type: Sequelize.INTEGER,
    field: 'player_two',
    allowNull: true
  },
  roundsPlayed: {
    type: Sequelize.INTEGER,
    field: 'rounds_played',
    allowNull: false
  },
  numbers: {
    type: Sequelize.ARRAY(Sequelize.INTEGER),
    allowNull: false
  },
  answer: {
    type: Sequelize.STRING,
    allowNull: true
  }
  /*playTime: {
    type: Sequelize.STRING,
    allowNull: true
  } */
}, {
    timestamps: false,
    tableName: 'games',
    underscored: true
  })


module.exports = Roman