/* Amplify Params - DO NOT EDIT
	API_TRAAVELWEBAPP_GRAPHQLAPIIDOUTPUT
	API_TRAAVELWEBAPP_USERTABLE_ARN
	API_TRAAVELWEBAPP_USERTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require("aws-sdk");
const ddb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  const date = new Date();

  if (event.request.userAttributes.sub) {
    let params = {
      Item: {
        id: { S: event.request.userAttributes.sub },
        __typename: { S: "User" },
        name: { S: event.request.userAttributes.name },
        email: { S: event.request.userAttributes.email },
        createdAt: { S: date.toISOString() },
        updatedAt: { S: date.toISOString() },
        _version: { N: "1" },
        _lastChangedAt: { N: Date.now().toString() },
      },
      TableName: process.env.API_TRAAVELWEBAPP_USERTABLE_NAME,
    };

    // Call DynamoDB
    try {
      await ddb.putItem(params).promise();
      console.log("Success: Everything executed correctly");
    } catch (err) {
      console.log("Error", err);
    }

    return event;
  } else {
    // Nothing to do, the user's email ID is unknown
    console.log("Error: Nothing was written to DynamoDB");
    return event;
  }
};
