var express = require('express'),
  router = express.Router()

router.use('/dynamo', require('./dynamo'))
router.use('/cars', require('./cars'))

//routes should not render pages -- included for reference purposes
// router.get('/', function(req, res) {
//   res.send('Home page')
// })

// router.get('/about', function(req, res) {
//   res.send('Learn about us')
// })

module.exports = router

//controllers/index.js will be responsible for loading all controllers,
//which you’ve already implemented. It will also define some more routes but without prefix,
//like a home page and an about page.
