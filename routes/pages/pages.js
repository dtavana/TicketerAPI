const express = require('express')
const router = express.Router()
const pages = require('../../controllers/pages')
const utils = require('../../utils/utils');


router.get('/', pages.home)
//router.get('/dashboard', utils.ensureAuthenticated, pages.dashboard)
router.get('/dashboard', pages.dashboard)

module.exports = router