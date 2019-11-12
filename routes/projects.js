const knex = require('../knex-config')
const router = require('express').Router()

router.get('/', async (req, res, next) => {
  const allProjects = await knex.select().table('projects')

  res.json(allProjects)
})

module.exports = router