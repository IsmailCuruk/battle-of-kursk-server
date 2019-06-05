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
  playerOneBoard: {
    type: Sequelize.ARRAY(Sequelize.ARRAY(Sequelize.INTEGER)),
    allowNull: false
  },
  playerTwoBoard: {
    type: Sequelize.ARRAY(Sequelize.ARRAY(Sequelize.INTEGER)),
    allowNull: false
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


module.exports = Game