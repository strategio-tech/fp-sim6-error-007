const Sequelize = require('sequelize')

const user = process.env.user
const host = process.env.host
const database = process.env.database
const password = process.env.password
const port = process.env.port

const db = new Sequelize(database, user, password, {
  host,
  port,
  dialect: 'postgres',
  logging: false
})

module.exports = db
