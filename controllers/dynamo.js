var express = require('express')
var router = express.Router()
var Dynamo = require('../models/Dynamo')
var AWS = require('aws-sdk')
AWS.config.update({ region: 'us-east-1' })
var dynamodb = new AWS.DynamoDB()
// Domestic animals page
router.post('/putuser', function(req, res) {
  Dynamo.putUser(req.body)
    .then(data => {
      res.json({
        status: 'success'
      })
    })
    .catch(err => {
      res.json({
        status: 'fail',
        err: err
      })
    })
})

// Wild animals page
router.get('/wild', function(req, res) {
  res.send('Wolf, Fox, Eagle')
})

module.exports = router
