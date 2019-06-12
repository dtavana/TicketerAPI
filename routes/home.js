const express = require('express')
const router = express.Router()
const pages = require('../controllers/pages.controller')


router.use('/', pages.home);

module.exports = router
