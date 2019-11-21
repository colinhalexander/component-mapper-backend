const router = require('express').Router()
const passport = require('../config/passport')

router.get('/',
  passport.authenticate('github', { scope: ['read:user', 'repo'] })
)

router.get('/callback',
  passport.authenticate('github', {
    failureRedirect: 'https://component-mapper.firebaseapp.com/?login=failed',
    session: false
  }), 
  (req, res) => {
    res.redirect(`https://component-mapper.firebaseapp.com/users/${req.user.username}`)
  }
)

module.exports = router