const knex = require('../config/knex')
const User = require('../models/user')
const router = require('express').Router()

router.get('/:username', async (req, res, next) => {
  const user = await User.findByUsername(req.params.username),
        projects = await User.getProjects(user.id)

  user.projects = projects
  res.json(user)
})

module.exports = router