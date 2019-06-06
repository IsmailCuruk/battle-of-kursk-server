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
  },
  playerOneArmoredVehiclesCount: {
    type: Sequelize.INTEGER,
    field: 'player_one_armored_vehicles_count',
    allowNull: false
  },
  playerOneArmoredVehiclesSize: {
    type: Sequelize.INTEGER,
    field: 'player_one_armored_vehicles_size',
    allowNull: false
  },
  playerOneLightTanksCount: {
    type: Sequelize.INTEGER,
    field: 'player_one_light_tanks_count',
    allowNull: false
  },
  playerOneLightTanksSize: {
    type: Sequelize.INTEGER,
    field: 'player_one_light_tanks_size',
    allowNull: false
  },
  playerOneMediumTanksCount: {
    type: Sequelize.INTEGER,
    field: 'player_one_medium_tanks_count',
    allowNull: false
  },
  playerOneMediumTanksSize: {
    type: Sequelize.INTEGER,
    field: 'player_one_medium_tanks_size',
    allowNull: false
  },
  playerOneHeavyTanksCount: {
    type: Sequelize.INTEGER,
    field: 'player_one_heavy_tanks_count',
    allowNull: false
  },
  playerOneHeavyTanksSize: {
    type: Sequelize.INTEGER,
    field: 'player_one_heavy_tanks_size',
    allowNull: false
  },
  playerTwoArmoredVehiclesCount: {
    type: Sequelize.INTEGER,
    field: 'player_two_armored_vehicles_count',
    allowNull: false
  },
  playerTwoArmoredVehiclesSize: {
    type: Sequelize.INTEGER,
    field: 'player_two_armored_vehicles_size',
    allowNull: false
  },
  playerTwoLightTanksCount: {
    type: Sequelize.INTEGER,
    field: 'player_two_light_tanks_count',
    allowNull: false
  },
  playerTwoLightTanksSize: {
    type: Sequelize.INTEGER,
    field: 'player_two_light_tanks_size',
    allowNull: false
  },
  playerTwoMediumTanksCount: {
    type: Sequelize.INTEGER,
    field: 'player_two_medium_tanks_count',
    allowNull: false
  },
  playerTwoMediumTanksSize: {
    type: Sequelize.INTEGER,
    field: 'player_two_medium_tanks_size',
    allowNull: false
  },
  playerTwoHeavyTanksCount: {
    type: Sequelize.INTEGER,
    field: 'player_two_heavy_tanks_count',
    allowNull: false
  },
  playerTwoHeavyTanksSize: {
    type: Sequelize.INTEGER,
    field: 'player_two_heavy_tanks_size',
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