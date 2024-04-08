import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

const client = new DynamoDBClient({
  //   credentials: { accessKeyId: 'test-key', secretAccessKey: 'test-key-secret' },
});
export const docClient = DynamoDBDocumentClient.from(client);
