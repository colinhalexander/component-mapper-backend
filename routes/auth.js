const router = require('express').Router()
const passport = require('../config/passport')

router.get('/',
  passport.authenticate('github', { scope: ['read:user', 'repo'] })
)

router.get('/callback',
  passport.authenticate('github', {
    failureRedirect: 'http://localhost:3001/?login=failed',
    session: false
  }), (req, res) => {
    console.log(req)
    res.redirect(`http://localhost:3001/?login=successful`)
  }
)

module.exports = router