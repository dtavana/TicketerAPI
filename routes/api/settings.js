const express = require('express')
  , router = express.Router()
  , settings = require('../../controllers/settings.controller')

router.get('/', settings.test)

module.exports = router