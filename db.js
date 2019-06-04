const Sequelize = require('sequelize');
const colors = require('colors');


const connectionString = process.env.DATABASE_URL || 'postgres://postgres:TiRaIs@localhost:5432/postgres'
const sequelize = new Sequelize(connectionString, {define: { timestamps: false }})

sequelize.sync()
  .then(() => {
    console.log('Sequelize updated database schema'.green)
  })
  .catch(console.error)

module.exports = sequelize