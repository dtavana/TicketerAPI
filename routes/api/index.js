var router = require('express').Router();
const utils = require('../../utils/utils')

router.use('/settings', utils.ensureAuthenticated, require('./settings'));
router.use('/auth', require('./auth'));
router.use('/webhook', utils.checkSecret, require('./webhook'));

module.exports = router;