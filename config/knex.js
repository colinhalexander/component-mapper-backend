const environment = require('../knexfile').production
const knex = require('knex')(environment)

module.exports = knex