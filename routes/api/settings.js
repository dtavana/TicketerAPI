const express = require('express')
const router = express.Router()
const settings = require('../../controllers/settings.controller')


router.get('/', settings.getAllSettings)
router.post('/prefix', settings.setPrefix)
router.post('/logchannel', settings.setLogChannel)
router.post('/transcriptchannel', settings.setTranscriptChannel)
router.post('/ticketchannel', settings.setTicketChannel)
router.post('/ticketcategory', settings.setTicketCategory)
router.post('/ticketprefix', settings.setTicketPrefix)
router.post('/ticketcount', settings.setTicketCount)
router.post('/transcripts', settings.setTranscripts)
router.post('/cleannew', settings.setCleanNew)
router.post('/cleanall', settings.setCleanAll)
router.post('/steamauth', settings.setSteamAuth)
router.post('/adminclose', settings.setAdminClose)
router.post('/dmonjoin', settings.setDMOnJoin)
router.post('/enforcesubject', settings.setEnforceSubject)
router.post('/ticketonjoin', settings.setTicketOnJoin)
router.post('/newmemberwelcomemessage', settings.setNewMemberWelcomeMessage)

module.exports = router