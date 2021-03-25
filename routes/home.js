const getHomeJson = require('../network/home.js')
var express = require('express')
var router = express.Router()

/* GET home json. */
router.get('/', function (req, res, next) {
  getHomeJson()
    .then(value => {
      res.json(value)
    })
    .catch(reason => {
      res.write(reason)
    })
})

module.exports = router
