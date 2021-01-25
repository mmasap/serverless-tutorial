const AWS = require('aws-sdk');
AWS.config.update({ region: 'ap-northeast-1' });

const moment = require('moment');
const dynamodb = new AWS.DynamoDB.DocumentClient();
const tableName = process.env.USER_TABLE;

exports.handler = async (event) => {
  try {
    const parseData = JSON.parse(event.body);
    const user = {
      email: parseData.email,
      name: parseData.name,
      timestamp: moment().unix(),
    };
    await dynamodb.put({ TableName: tableName, Item: user }).promise();
    return { statusCode: 200, body: JSON.stringify(user) };
  } catch (err) {
    console.log('Error', err);
    return {
      statusCode: err.statusCode ? err.statusCode : 500,
    };
  }
};
