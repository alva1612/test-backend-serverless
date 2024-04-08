import {
  AttributeValue,
  GetItemCommand,
  PutItemCommand,
} from '@aws-sdk/client-dynamodb';
import { PutCommand, PutCommandOutput } from '@aws-sdk/lib-dynamodb';
import { Inject, Injectable } from '@nestjs/common';
import { docClient } from './dynamo.client';
import { DynamoModuleOptionsToken } from './dynamo.constant';
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
    console.log({ createDto });
    const command = new PutItemCommand({
      TableName: this.options.tableName,
      Item: createDto,
    });
    const response = await docClient.send(command);
    return response;
  }

  async get(id: string): Promise<Record<string, AttributeValue>> {
    const command = new GetItemCommand({
      TableName: this.options.tableName,
      Key: {
        [this.options.partitionKey]: { S: id },
      },
    });
    const response = await docClient.send(command);
    console.log({ item: response.Item });
    if (!response?.Item) throw new Error('Item not found');
    return response.Item;
  }
}
