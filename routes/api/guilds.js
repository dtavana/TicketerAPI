var router = require('express').Router();
const panelinfo = require('../../controllers/panelinfo.controller')

router.use('/', panelinfo.getGuilds);

module.exports = router;