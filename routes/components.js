const knex = require('../config/knex')
const router = require('express').Router()

router.post("/", async (req, res, next) => {
  const { component, parent_id } = req.body
  const newComponent = await knex('components').insert(component, ['id'])

  await knex('component_renders').insert({
    parent_id: parseInt(parent_id),
    child_id: newComponent[0].id
  })
  
  const createdComponent = {
    ...component,
    ...newComponent[0]
  }

  res.json(createdComponent)
})

module.exports = router