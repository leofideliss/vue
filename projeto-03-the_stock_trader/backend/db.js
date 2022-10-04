const config = require('./db.js')
const knex = require('knex')(config)

module.exports = knex