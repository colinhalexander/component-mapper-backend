const knex = require('../config/knex')
const router = require('express').Router()

router.get('/user/:id', (req, res, next) => {

  res.json({ msg: "success" })
})

module.exports = router