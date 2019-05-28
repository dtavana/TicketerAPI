const express = require('express');
const router = express.Router();
const passport = require('passport');
const DiscordStrategy = require('passport-discord').Strategy;
const User = require('../../../../models/user');
require('dotenv').config();

const scopes = ['identify', 'guilds'];

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(new DiscordStrategy({
  clientID: process.env.DISCORD_CLIENT_ID,
  clientSecret: process.env.DISCORD_CLIENT_SECRET,
  callbackURL: process.env.HOSTNAME + '/api/auth/discord/return',
  scope: scopes
},
  function (accessToken, refreshToken, profile, cb) {
    process.nextTick(function () {
      return cb(null, profile);
    })
  }));

router.get('/', passport.authenticate('discord', { scope: scopes }), function (req, res) { });
router.get('/return', passport.authenticate('discord', {
  failureRedirect: '/api/auth/discord'
}),
  function (req, res, next) {
    res.redirect('/dashboard')
  }
);

module.exports = router