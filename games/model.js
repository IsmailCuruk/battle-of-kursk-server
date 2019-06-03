const Sequelize = require('sequelize')
const sequelize = require('../db')


const Game = sequelize.define('games', {
  winner: {
    type: Sequelize.STRING,
    allowNull: false
  },
}, {
    timestamps: false,
    tableName: 'games',
    underscored: true
  })


module.exports = Game