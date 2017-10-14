var express = require('express')
var router = express.Router()
var Dynamo = require('../models/Dynamo')
var AWS = require('aws-sdk')
AWS.config.update({ region: 'us-east-1' })
var dynamodb = new AWS.DynamoDB()
// Domestic animals page
router.get('/putuser', function(req, res) {
  Dynamo.putUser()
  res.json({
    animals: 'cows'
  })
})

// Wild animals page
router.get('/wild', function(req, res) {
  res.send('Wolf, Fox, Eagle')
})

module.exports = router