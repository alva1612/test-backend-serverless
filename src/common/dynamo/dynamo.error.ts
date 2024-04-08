export class DynamoException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'DynamoDBServiceException';
  }
}
