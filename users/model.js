const Sequelize = require('sequelize')
const sequelize = require('../db')


const User = sequelize.define('users', {
  firstName: {
    type: Sequelize.STRING,
    field: 'first_name',
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    field: 'last_name',
    allowNull: false
  },
  userName: {
    type: Sequelize.STRING,
    field: 'user_name',
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    field: 'password',
    allowNull: false
  },
  country: {
    type: Sequelize.STRING,
    field: 'country',
    allowNull: false
  },
}, {
    timestamps: false,
    tableName: 'users',
    underscored: true
  })


module.exports = User