import { Test, TestingModule } from '@nestjs/testing';
import { CharactersController } from './characters.controller';
import { CharactersService } from '@modules/characters//application/characters.service';
import { CharactersRepository } from '../data/characters.repository';
import { CharactersDataAccess } from '../data/characters.data-access';
import { charactersOptions } from '@/common/dynamo/dynamo.constant';
import { DynamoModule } from '@/common/dynamo/dynamo.module';
import { ApiModule } from '@/common/api/api.module';

describe('CharactersController', () => {
  let controller: CharactersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CharactersController],
      providers: [
        CharactersService,
        CharactersDataAccess,
        CharactersRepository,
      ],
      imports: [ApiModule, DynamoModule.register(charactersOptions)],
    }).compile();

    controller = module.get<CharactersController>(CharactersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
