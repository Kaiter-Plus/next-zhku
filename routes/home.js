const getHomeJson = require('../network/home.js')
var express = require('express')
const { response } = require('express')
var router = express.Router()

/* GET home json. */
router.get('/', function (req, res, next) {
  getHomeJson()
    .then(response => {
      res.json(response)
    })
    .catch(err => {
      res.write(err)
    })
})

module.exports = router
