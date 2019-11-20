const knex = require('../config/knex')
const User = require('../models/user')
const router = require('express').Router()

router.get('/', async (req, res, next) => {
  const users = await knex.select().from('users')

  res.json(users)
})

router.get('/:username', async (req, res, next) => {
  const user = await User.findByUsername(req.params.username),
        projects = await User.getProjects(user.id)

  user.projects = projects
  res.json(user)
})

router.post('/', async (req, res, next) => {
  const user = await User.findOrCreate(req.body)
  
  res.json(user)
})

module.exports = router