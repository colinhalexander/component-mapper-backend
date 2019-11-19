const passport = require('passport')
const GitHubStrategy = require('passport-github2').Strategy

passport.use(new GitHubStrategy({
    clientID: process.env['CLIENT_ID'],
    clientSecret: process.env['CLIENT_SECRET'],
    callbackURL: 'http://localhost:3001/redirect'
  }, (accessToken, refreshToken, profile, done) => {
    // find or create user entry
  })
)