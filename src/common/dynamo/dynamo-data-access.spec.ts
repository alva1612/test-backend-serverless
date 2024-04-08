import { Test, TestingModule } from '@nestjs/testing';
import { DynamoDataAccess } from './dynamo-data-access';

describe('DynamoDataAccess', () => {
  let provider: DynamoDataAccess;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DynamoDataAccess],
    }).compile();

    provider = module.get<DynamoDataAccess>(DynamoDataAccess);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
