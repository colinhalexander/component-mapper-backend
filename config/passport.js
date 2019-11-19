const passport = require('passport')
const GitHubStrategy = require('passport-github2').Strategy

const User = require('../models/user')

passport.use(new GitHubStrategy({
    clientID: process.env['GITHUB_CLIENT_ID'],
    clientSecret: process.env['GITHUB_CLIENT_SECRET'],
    callbackURL: 'http://localhost:3001/redirect'
  }, (accessToken, refreshToken, profile, done) => {
    User.findOrCreate(profile)
      .then((err, user) => done(err, user))
  })
)

module.exports = passport