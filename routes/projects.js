const knex = require('../config/knex')
const router = require('express').Router()

router.get('/', async (req, res, next) => {
  const allProjects = await knex.select().table('projects')

  res.json(allProjects)
})

router.get('/:id', async (req, res, next) => {
  const project = await knex.select().table('projects')
                            .where('id', `${req.params.id}`)

  const components = await knex.select().table('components')
                               .where('project_id', `${req.params.id}`)
  
  project[0].components = components
  
  res.json(project[0])
})

module.exports = router