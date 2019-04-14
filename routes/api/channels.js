var router = require('express').Router();
const panelinfo = require('../../controllers/panelinfo.controller')

router.use('/', panelinfo.getChannels);

module.exports = router;