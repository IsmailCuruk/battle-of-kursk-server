const Sequelize = require('sequelize')
const sequelize = require('../db')


const Game = sequelize.define('games', {
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
  /*playTime: {
    type: Sequelize.STRING,
    allowNull: true
  } */
}, {
    timestamps: false,
    tableName: 'games',
    underscored: true
  })


module.exports = Game