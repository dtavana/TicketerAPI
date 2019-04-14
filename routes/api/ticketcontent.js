var router = require('express').Router();
const panelinfo = require('../../controllers/panelinfo.controller')

router.use('/', panelinfo.getTicketContent);

module.exports = router;