const express = require('express')
const router = express.Router()
const pages = require('../../controllers/pages')


router.get('/', pages.home)
router.get('/settings', pages.settings)

module.exports = router