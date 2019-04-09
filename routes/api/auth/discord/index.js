const express = require('express')
const router = express.Router()
const passport = require('passport');
const DiscordStrategy = require('passport-discord').Strategy;
const User = require('../../../../models/user')

passport.use(new DiscordStrategy({
    clientID: process.env.DISCORD_CLIENT_ID,
    clientSecret: process.env.DISCORD_CLIENT_SECRET,
    callbackURL: process.env.HOSTNAME + 3000 + "/api/auth/discord/return",
    scope: ['identify']
  },
  function (accessToken, refreshToken, profile, cb) {
  
    console.log(profile)
    return cb(profile, null)
    // TODO: Associate the returned discord profile with a record in the database
    /*     User.findOrCreate({
          discordId: profile.id
        }, function (err, user) {
          return cb(err, user);
        }); */
  }));

router.get('/', passport.authenticate('discord'))
router.get('/return', passport.authenticate('discord', {
    failureRedirect: '/api/auth/discord'
}), function (req, res, next) {
    console.log("got here")
    next()
});

module.exports = router