const environment = require('../knexfile').development
const knex = require('knex')(environment)

module.exports = knex