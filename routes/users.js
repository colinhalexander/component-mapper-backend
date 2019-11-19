const knex = require('../config/knex')
const User = require('../models/user')
const router = require('express').Router()

router.get('/:id', async (req, res, next) => {
  const user = await User.find(req.params.id)

  res.json(user)
})

router.post('/', (req, res, next) => {

  User.findOrCreate(req.body)
})

module.exports = router