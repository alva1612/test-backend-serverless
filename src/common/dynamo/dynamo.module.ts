import { DynamicModule } from '@nestjs/common';
import { Module } from '@nestjs/common';
import { DynamoDataAccess } from './dynamo-data-access';
import { DynamoModuleOptionsToken } from './dynamo.constant';

export interface DynamoModuleOptions {
  tableName: string;
}

@Module({})
export class DynamoModule {
  static register(options: DynamoModuleOptions): DynamicModule {
    return {
      module: DynamoModule,
      providers: [
        {
          provide: DynamoModuleOptionsToken,
          useValue: options,
        },
        DynamoDataAccess,
      ],
      exports: [DynamoDataAccess],
    };
  }
}
