var router = require('express').Router();
const panelinfo = require('../../../controllers/panelinfo.controller')

router.use('/guilds', panelinfo.getGuilds);
router.use('/ticketcontent', panelinfo.getTicketContent);

module.exports = router;