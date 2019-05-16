const express = require('express')
const router = express.Router()
const pages = require('../../controllers/pages')
const utils = require('../../utils/utils');


router.get('/', pages.home)
router.get('/settings', utils.ensureAuthenticated, pages.settings)

module.exports = router