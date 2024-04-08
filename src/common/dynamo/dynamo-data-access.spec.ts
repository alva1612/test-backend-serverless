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

  it('should transform output to plain object', () => {
    const output = {
      name: { S: 'Luke Skywalker' },
      height: { S: '172' },
    };
    const result = provider.outputToPlainObject(output);

    const output2 = {
      name: { S: 'Luke Skywalker' },
      height: { SS: ['172', '1'] },
    };
    const result2 = provider.outputToPlainObject(output2);
    expect(result).toEqual({ name: 'Luke Skywalker', height: '172' });
    expect(result2).toEqual({ name: 'Luke Skywalker', height: ['172', '1'] });
  });
});
