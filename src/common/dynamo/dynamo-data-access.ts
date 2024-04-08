import {
  AttributeValue,
  DynamoDBServiceException,
  GetItemCommand,
  PutItemCommand,
} from '@aws-sdk/client-dynamodb';
import { PutCommandOutput } from '@aws-sdk/lib-dynamodb';
import { Inject, Injectable } from '@nestjs/common';
import { docClient } from './dynamo.client';
import { DynamoModuleOptionsToken } from './dynamo.constant';
import { DynamoException } from './dynamo.error';
import type { DynamoModuleOptions } from './dynamo.module';

@Injectable()
export class DynamoDataAccess {
  constructor(
    @Inject(DynamoModuleOptionsToken)
    private readonly options: DynamoModuleOptions,
  ) {}

  async create(
    createDto: Record<string, AttributeValue>,
  ): Promise<PutCommandOutput> {
    try {
      const command = new PutItemCommand({
        TableName: this.options.tableName,
        Item: createDto,
      });
      const response = await docClient.send(command);
      return response;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async get(id: string): Promise<Record<string, AttributeValue>> {
    try {
      const command = new GetItemCommand({
        TableName: this.options.tableName,
        Key: {
          [this.options.partitionKey]: { S: id },
        },
      });
      const response = await docClient.send(command);
      if (!response?.Item) throw new Error('Item not found');
      return response.Item;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  outputToPlainObject<T>(output: Record<string, AttributeValue>): T {
    return Object.fromEntries(
      Object.entries(output).map(([key, value]) => {
        const data = Object.values(value)[0];
        return [key, data];
      }),
    ) as T;
  }

  private handleError(error) {
    console.error(error);

    if (error instanceof DynamoDBServiceException)
      return new DynamoException(error.message);
    return new Error('Internal server error');
  }
}
