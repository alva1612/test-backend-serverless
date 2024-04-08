import { Test, TestingModule } from '@nestjs/testing';
import { DynamoDataAccess } from './dynamo-data-access';
import { charactersOptions, DynamoModuleOptionsToken } from './dynamo.constant';

describe('DynamoDataAccess', () => {
  let provider: DynamoDataAccess;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DynamoDataAccess,
        { provide: DynamoModuleOptionsToken, useValue: charactersOptions },
      ],
    }).compile();

    provider = module.get<DynamoDataAccess>(DynamoDataAccess);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
