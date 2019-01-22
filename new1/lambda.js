let AWS = require('aws-sdk');
const cognito_idp = new AWS.CognitoIdentityServiceProvider();

exports.handler = function (event, context, callback) {
    cognito_idp.listUsers({
        UserPoolId: process.env.UserPoolId_cognitoKNew,
        Limit: "10"
    }, function (error, data) {
        if (error) {
            // implement error handling logic here
            throw error;
        }
        // your logic goes within this block
    });
    cognito_idp.adminGetUser({
        UserPoolId: process.env.UserPoolId_cognitoKNew, /* required */
        Username: "Test" /* required */
    }, function (error, data) {
        if (error) {
            // implement error handling logic here
            throw error;
        }
        // your logic goes within this block
    });
    cognito_idp.adminEnableUser({
        UserPoolId: process.env.UserPoolId_cognitoKNew, /* required */
        Username: "Test" /* required */
    }, function (error, data) {
        if (error) {
            // implement error handling logic here
            throw error;
        }
        // your logic goes within this block
    });



    callback(null, { "message": "Successfully executed" });
}