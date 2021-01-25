const AWS = require('aws-sdk');
AWS.config.update({ region: 'ap-northeast-1' });

const dynamodb = new AWS.DynamoDB.DocumentClient();
const tableName = process.env.USER_TABLE;

exports.handler = async (event) => {
  try {
    const email = decodeURIComponent(event.queryStringParameters.email);
    const params = { TableName: tableName, Key: { email } };
    const response = await dynamodb.get(params).promise();
    return { statusCode: 200, body: JSON.stringify(response.Item) };
  } catch (err) {
    console.log('Error', err);
    return { statusCode: err.statusCode ? err.statusCode : 500 };
  }
};
