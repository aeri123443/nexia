import {  AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_DEFAULT_REGION  } from '../env.js';
import {  DynamoDBClient  } from "@aws-sdk/client-dynamodb";

// 환경 변수에서 자격 증명 및 지역 설정
const client = new DynamoDBClient({
    region: AWS_DEFAULT_REGION, 
    credentials: {
        accessKeyId: AWS_ACCESS_KEY_ID,
        secretAccessKey: AWS_SECRET_ACCESS_KEY,
    }
});

export default client;
