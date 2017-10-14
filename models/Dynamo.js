var AWS = require('aws-sdk')
AWS.config.update({ region: 'us-east-1' })
var dynamodb = new AWS.DynamoDB()

function putUser(user) {
  console.log(user.Phone)
  var params = {
    TableName: 'DisasterUsers',
    Item: {
      Phone: { S: user.Phone },
      State: { S: user.State },
      Address: { S: user.Address },
      City: { S: user.City },
      Zipcode: { S: user.Zipcode }
    }
  }

  dynamodb.putItem(params, (err, data) => {
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
