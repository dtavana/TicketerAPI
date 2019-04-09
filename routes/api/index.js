var router = require('express').Router();
const utils = require('../../utils/utils')

router.use('/settings', utils.ensureAuthenticated, require('./settings'));
router.use('/auth', require('./auth'));

module.exports = router;