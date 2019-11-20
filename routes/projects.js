const knex = require('../config/knex')
const router = require('express').Router()

const Nester = require('../utilities/component-nester')

router.get('/', async (req, res, next) => {
  const allProjects = await knex.select().table('projects')

  res.json(allProjects)
})

router.get('/:id', async (req, res, next) => {
  const project = await knex.select().table('projects')
                            .where('id', `${req.params.id}`)

  const components = await knex.select().table('components')
                               .where('project_id', `${req.params.id}`)
  
  const componentIds = components.map(component => component.id)
  const relationships = await knex.select().table('component_renders')
                                  .whereIn('parent_id', componentIds)

  const nestedComponents = Nester.createNestedComponentsArray(relationships, components)

  project[0].components = nestedComponents
  
  res.json(project[0])
})

router.post('/', async (req, res, next) => {
  const newProject = await knex('projects')
                            .insert(req.body, ['id', 'name', 'description'])
  
  await knex('components').insert({
    name: 'App',
    type: 'Class',
    notes: '',
    project_id: newProject[0].id
  })

  res.json(newProject[0])
})

// router.patch('/:id', async (req, res, next) => {
//   const project = await knex('projects')
//                           .update({ user_id: 2 }, ['id', 'user_id'])
//                           .where('id', req.params.id)
  
//   res.json(project)
// })

router.delete('/:id', async (req, res, next) => {
  await knex('components').where('project_id', `${req.params.id}`).del()
  await knex('projects').where('id', `${req.params.id}`).del()

  res.status(204).json("No Content")
})

module.exports = router