const router = require('express').Router()

router.get('/', (req, res, next) => {
  res.send("Ya made it")
});

module.exports = router;