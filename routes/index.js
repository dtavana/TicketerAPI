const router = require('express').Router();
const express = require('express')
const passport = require('passport');
const DiscordStrategy = require('passport-discord').Strategy;
require('dotenv').config();

router.use('/api', require('./api'));
router.use('/', require('./pages'));

module.exports = router;