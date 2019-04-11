const express = require('express'), 
  app = express(),
  bodyParser = require('body-parser'),
  port = process.env.PORT || 3000,
  passport = require('passport'),
  DiscordStrategy = require('passport-discord').Strategy;


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(passport.initialize());
app.use(passport.session());
app.use(require('./routes'))

app.listen(port, () => console.log(`Listening on port ${port}`))