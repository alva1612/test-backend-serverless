import { DynamoModule } from '@/common/dynamo/dynamo.module';
import { Test, TestingModule } from '@nestjs/testing';
import { CharactersRepository } from './characters.repository';

describe('CharactersRepository', () => {
  let provider: CharactersRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CharactersRepository],
      imports: [
        DynamoModule.register({
          tableName: 'charactersTable',
          partitionKey: 'CharactersId',
        }),
      ],
    }).compile();

    provider = module.get<CharactersRepository>(CharactersRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
