const passport = require('passport')
const GitHubStrategy = require('passport-github2').Strategy

const User = require('../models/user')

passport.use(new GitHubStrategy({
    clientID: process.env['GITHUB_CLIENT_ID'],
    clientSecret: process.env['GITHUB_CLIENT_SECRET'],
    callbackURL: 'http://localhost:3000/auth/callback'
  }, 
  async (accessToken, refreshToken, profile, done) => {
    const formattedProfile = formatProfile(profile._json)
    const user = await User.findOrCreate(formattedProfile)

    return done(null, user)
  })
)

function formatProfile(profile) {
  return {
    github_id: profile.id,
    email: profile.email,
    avatar_url: profile.avatar_url,
    display_name: profile.name,
    username: profile.login,
    bio: profile.bio
  }
}

module.exports = passport