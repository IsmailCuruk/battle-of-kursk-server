const Sequelize = require('sequelize')
const sequelize = require('../db')

const User = sequelize.define('users', {
  userName: {
    type: Sequelize.STRING,
    field: 'user_name',
    unique: true,
    allowNull: false,
    validate: {
      notNull: { args: true, msg: "You must enter your username" }
    }
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: { args: true, msg: "You must enter your email" }
    }
  },

  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: { args: true, msg: "You must enter your password" }
    }
  },

  firstName: {
    type: Sequelize.STRING,
    field: 'first_name',
    allowNull: false,
    validate: {
      notNull: { args: true, msg: "You must enter your first name" }
     }
  },

  lastName: {
    type: Sequelize.STRING,
    field: 'last_name',
    allowNull: false,
    validate: {
      notNull: { args: true, msg: "You must enter your last name" }
    }
  },

  country: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: { args: true, msg: "You must enter country" }
    }
  }

}, {
    timestamps: false,
    tableName: 'users'
  }
)

module.exports = User