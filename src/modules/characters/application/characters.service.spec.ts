import { ApiModule } from '@/common/api/api.module';
import { charactersOptions } from '@/common/dynamo/dynamo.constant';
import { DynamoModule } from '@/common/dynamo/dynamo.module';
import { Test, TestingModule } from '@nestjs/testing';
import { CharactersDataAccess } from '../infraestructure/data/characters.data-access';
import { CharactersRepository } from '../infraestructure/data/characters.repository';
import { CharactersService } from './characters.service';

describe('CharactersService', () => {
  let service: CharactersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CharactersService,
        CharactersDataAccess,
        CharactersRepository,
      ],
      imports: [ApiModule, DynamoModule.register(charactersOptions)],
    }).compile();

    service = module.get<CharactersService>(CharactersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
