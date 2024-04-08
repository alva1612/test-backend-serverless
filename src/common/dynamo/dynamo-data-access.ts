import { AttributeValue, PutItemCommand } from '@aws-sdk/client-dynamodb';
import { PutCommand, PutCommandOutput } from '@aws-sdk/lib-dynamodb';
import { Inject, Injectable } from '@nestjs/common';
import { docClient } from './dynamo.client';
import { DynamoModuleOptionsToken } from './dynamo.constant';
import type { DynamoModuleOptions } from './dynamo.module';

@Injectable()
export class DynamoDataAccess<T extends Record<string, AttributeValue>> {
  constructor(
    @Inject(DynamoModuleOptionsToken)
    private readonly options: DynamoModuleOptions,
  ) {}

  async create(createDto: T): Promise<PutCommandOutput> {
    console.log({ createDto });
    const command = new PutItemCommand({
      TableName: this.options.tableName,
      Item: createDto,
    });
    const response = await docClient.send(command);
    return response;
  }
}
