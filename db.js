const Sequelize = require("sequelize")

const databaseUrl = process.env.DATABASE_URL || 'postgres://postgres:secret@localhost:5432/postgres'

const db = new Sequelize(databaseUrl)

db.sync({ force: true })
  .then(() => console.log('Database schema has been updated'))
  .catch(err => {
    console.error("Something went wrong", err)
  })

module.exports = db