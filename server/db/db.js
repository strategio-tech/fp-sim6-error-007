const Sequelize = require('sequelize')

const user = "postgres"
const host = "creature-coders-1.c4ywbhfyodwd.us-east-1.rds.amazonaws.com"
const database = "postgres"
const password = "teamerror007"
const port = "5432"

const db = new Sequelize(database, user, password, {
  host,
  port,
  dialect: 'postgres',
  logging: false
})

module.exports = db
