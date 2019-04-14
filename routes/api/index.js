var router = require('express').Router();
const utils = require('../../utils/utils')

router.use('/settings', utils.ensureAuthenticated, require('./settings'));
router.use('/auth', require('./auth'));
router.use('/webhook', utils.checkSecret, require('./webhook'));
router.use('/guilds', utils.ensureAuthenticated, require('./guilds'));
router.use('/ticketcontent', utils.ensureAuthenticated, require('./ticketcontent'))
//router.use('/channels', utils.ensureAuthenticated, require('./channels'))
router.use('/channels', require('./channels'))

module.exports = router;