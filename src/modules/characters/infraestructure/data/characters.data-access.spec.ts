import { Test, TestingModule } from '@nestjs/testing';
import { CharactersDataAccess } from './characters.data-access';

describe('CharactersDataAccessTs', () => {
  let provider: CharactersDataAccess;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CharactersDataAccess],
    }).compile();

    provider = module.get<CharactersDataAccess>(CharactersDataAccess);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
