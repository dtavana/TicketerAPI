const express = require('express')
  , router = express.Router()

router.get('/', (req, res) => {
    console.log(1);
    res.send(200);
})

module.exports = router