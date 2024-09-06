import client from './userAuthenticator.js';
import {  ScanCommand, QueryCommand, PutItemCommand  } from "@aws-sdk/client-dynamodb";

const TABLE_NAME = 'test-user-name'

// DB의 모든 정보 가져오기
export const getAllUser = async () => {
    try {
        const command = new ScanCommand({
            TableName: TABLE_NAME,
        });
    
        const response = await client.send(command);
    
        if(response.$metadata.httpStatusCode === 200) {
            console.log(response.Items);
        } else {
            console.error("Error: Request failed with status code", response.$metadata.httpStatusCode);
            console.error("Full Response:", JSON.stringify(response, null, 2));
            throw new Error(`Request failed with status code ${response.$metadata.httpStatusCode}`);
        }

      return response;
    } catch(e) {
        console.error("Error:", e.message);
        return { error: e.message };
    }
};

// DB에 존재하는 모든 이름을 출력
export const getAllName = async () => {
    try {
        const command = new ScanCommand({
            ProjectionExpression: "UserName",
            TableName: TABLE_NAME,
        });
    
        const response = await client.send(command);
    
        if(response.$metadata.httpStatusCode === 200) {
            console.log(response.Items);
        } else {
            console.error("Error: Request failed with status code", response.$metadata.httpStatusCode);
            console.error("Full Response:", JSON.stringify(response, null, 2));
            throw new Error(`Request failed with status code ${response.$metadata.httpStatusCode}`);
        }
      return response;
    } catch(e) {
        console.error("Error:", e.message);
        return { error: e.message };
    }
};

// 이름을 기반으로 한 캐릭터의 정보를 출력
export const getUserByName = async (name) => {
    try {
        const command = new QueryCommand({
            KeyConditionExpression: "UserName = :userName",
            ExpressionAttributeValues: {
            ":userName": { S: name },
            },

            TableName: TABLE_NAME,
        });
    
        const response = await client.send(command);
    
        if(response.$metadata.httpStatusCode === 200) {
            console.log(response.Items);

            if(response.Items.length > 1){
                console.error("Error: Duplicate item returned. Please check the database.");
                console.error("Full Response:", JSON.stringify(response, null, 2));
                throw new Error(`Duplicate item returned. Please check the database.`);
            }
        } else {
            console.error("Error: Request failed with status code", response.$metadata.httpStatusCode);
            console.error("Full Response:", JSON.stringify(response, null, 2));
            throw new Error(`Request failed with status code ${response.$metadata.httpStatusCode}`);
        }

        const userData = response.Items[0];

        return userData;
    } catch(e) {
        console.error("Error:", e.message);
        return { error: e.message };
    }
};

// 캐릭터를 DB에 저장
export const putUserData = async ({userName, date, level, mental, physical, special, total}) => {
    try {
        const command = new PutItemCommand({
            TableName: TABLE_NAME,
            Item: {
                "UserName": { S: userName },
                "CreatedDate": { S: date },
                "Class": {S: level},
                "Mental": {N: `${mental}`},
                "Physical": {N: `${physical}`},
                "Special": {N: `${special}`},
                "Total": {N: `${total}`}

              },
        });
    
        const response = await client.send(command);
    
        if(response.$metadata.httpStatusCode === 200) {
            console.log("Data inserted successfully");
            getAllUser();
        } else {
            console.error("Error: Request failed with status code", response.$metadata.httpStatusCode);
            console.error("Full Response:", JSON.stringify(response, null, 2));
            throw new Error(`Request failed with status code ${response.$metadata.httpStatusCode}`);
        }
      return response;
    } catch(e) {
        console.error("Error:", e.message);
        return { error: e.message };
    }
};
