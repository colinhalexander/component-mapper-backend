const router = require('express').Router()

router.get('/', (req, res, next) => {
  res.send("Good Morning")
})

module.exports = router