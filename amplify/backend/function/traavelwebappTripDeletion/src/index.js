/* Amplify Params - DO NOT EDIT
	API_TRAAVELWEBAPP_ACTIVITYTABLE_ARN
	API_TRAAVELWEBAPP_ACTIVITYTABLE_NAME
	API_TRAAVELWEBAPP_DAYTABLE_ARN
	API_TRAAVELWEBAPP_DAYTABLE_NAME
	API_TRAAVELWEBAPP_GRAPHQLAPIIDOUTPUT
	API_TRAAVELWEBAPP_TRIPTABLE_ARN
	API_TRAAVELWEBAPP_TRIPTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require("aws-sdk");

const client = new AWS.DynamoDB.DocumentClient();

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "DELETE, OPTIONS",
  };

  if (event.httpMethod !== "DELETE") {
    return {
      statusCode: 400,
      headers,
      body: "Only DELETE method is allowed",
    };
  }

  try {
    // Fetch the tripId from event query params.
    const { tripId } = event.queryStringParameters;

    // Query to get all Days associated with the Trip.
    const queryDaysParams = {
      TableName: process.env.API_TRAAVELWEBAPP_DAYTABLE_NAME,
      IndexName: "byTrip",
      KeyConditionExpression: "tripId = :tripId",
      ExpressionAttributeValues: { ":tripId": tripId },
      ProjectionExpression: "id",
    };
    const { Items: days } = await client.query(queryDaysParams).promise();
    console.log(`DAYS: ${JSON.stringify(days)}`);

    // For each Day, get all associated Activities
    const activityDeletionPromises = [];
    const dayDeletionPromises = [];
    for (const day of days) {
      const queryActivitiesParams = {
        TableName: process.env.API_TRAAVELWEBAPP_ACTIVITYTABLE_NAME,
        IndexName: "byDay",
        KeyConditionExpression: "dayId = :dayId",
        ExpressionAttributeValues: { ":dayId": day.id },
        ProjectionExpression: "id",
      };

      const { Items: activities } = await client
        .query(queryActivitiesParams)
        .promise();
      console.log(`ACTIVITIES: ${JSON.stringify(activities)}`);

      // Delete activities associated with this day
      for (const activity of activities) {
        const deleteActivityParams = {
          TableName: process.env.API_TRAAVELWEBAPP_ACTIVITYTABLE_NAME,
          Key: { id: activity.id },
        };
        activityDeletionPromises.push(
          client.delete(deleteActivityParams).promise()
        );
      }

      // Delete this day
      const deleteDayParams = {
        TableName: process.env.API_TRAAVELWEBAPP_DAYTABLE_NAME,
        Key: { id: day.id },
      };
      dayDeletionPromises.push(client.delete(deleteDayParams).promise());
    }

    // Delete the Trip
    const deleteTripParams = {
      TableName: process.env.API_TRAAVELWEBAPP_TRIPTABLE_NAME,
      Key: { id: tripId },
    };
    const tripDeletionPromises = [client.delete(deleteTripParams).promise()];

    // Wait for all deletions to complete
    await Promise.all([
      ...activityDeletionPromises,
      ...dayDeletionPromises,
      ...tripDeletionPromises,
    ]);

    return { statusCode: 200, headers, body: "Successfully deleted item" };
  } catch (error) {
    console.log(`Error: ${error}`);
    return { statusCode: 500, headers, error };
  }
};
