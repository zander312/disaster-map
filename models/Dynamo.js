var AWS = require('aws-sdk')
AWS.config.update({ region: 'us-east-1' })
var dynamodb = new AWS.DynamoDB()

function putUser(phone, state) {
  var params = {
    TableName: 'DisasterUsers',
    Item: {
      Phone: { S: '5718300561' },
      State: { S: 'va' },
      Address: { S: '802 olde georgetown ct' },
      City: { S: 'Great Falls' }
    }
  }

  dynamodb.putItem(params, function(err, data) {
    if (err) {
      console.log(err)
    } else {
      console.log(data)
    }
  })
}

module.exports = {
  putUser
}
