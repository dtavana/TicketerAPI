const express = require('express')
const router = express.Router()
const passport = require('passport');
const DiscordStrategy = require('passport-discord').Strategy;
const User = require('../../../../models/user')

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use(new DiscordStrategy({
    clientID: process.env.DISCORD_CLIENT_ID,
    clientSecret: process.env.DISCORD_CLIENT_SECRET,
    callbackURL: process.env.HOSTNAME + 3000 + "/api/auth/discord/return",
    scope: ['identify']
  },
  function (accessToken, refreshToken, profile, cb) {
  
    console.log(profile)
    process.nextTick(function() {
      return cb(null, profile);
    });
  }));

router.get('/', passport.authenticate('discord'))
router.get('/return', passport.authenticate('discord', {
    failureRedirect: '/api/auth/discord'
}), function (req, res) {
  res.redirect(req.originalUrl)
});

module.exports = router