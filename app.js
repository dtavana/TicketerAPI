require('dotenv').config();

const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  port = process.env.PORT || 3000,
  passport = require('passport'),
  DiscordStrategy = require('passport-discord').Strategy,
  session = require('express-session'),
  path = require('path');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(session({
  secret: process.env.SECRET,
  resave: true,
  saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(require('./routes'))

app.set('view engine', 'ejs');
app.use('/static', express.static(path.resolve(__dirname, 'public')));

app.listen(port, () => console.log(`Listening on port ${port}`))

module.exports = app;