var router = require('express').Router();
const utils = require('../../utils/utils');
const webhook = require('../../controllers/webhook.controller')

router.use('/votes', webhook.handleVote);
router.use('/premium', webhook.handlePremium);

module.exports = router;