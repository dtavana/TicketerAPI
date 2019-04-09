const express = require('express')
const router = express.Router()
const passport = require('passport');

router.get('/discord', passport.authenticate('discord'))

router.get('/discord/return', passport.authenticate('discord', {
    failureRedirect: '/'
}), function (req, res) {
    // Successful auth
});

module.exports = router;