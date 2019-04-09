require('dotenv').config();
const passport = require('passport');
const DiscordStrategy = require('passport-discord').Strategy;

const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

passport.use(new DiscordStrategy({
    clientID: process.env.DISCORD_CLIENT_ID,
    clientSecret: process.env.DISCORD_CLIENT_SECRET,
    callbackURL: `http://localhost:${port}/api/auth/discord/return`, // TODO: Refactor this to a variable
    scope: ['identify']
  },
  function (accessToken, refreshToken, profile, cb) {

    console.log(profile)

    // TODO: Associate the returned discord profile with a record in the database
    /*     User.findOrCreate({
          discordId: profile.id
        }, function (err, user) {
          return cb(err, user);
        }); */
  }));

app.use(require('./routes'))

app.listen(port, () => console.log(`Listening on port ${port}`))