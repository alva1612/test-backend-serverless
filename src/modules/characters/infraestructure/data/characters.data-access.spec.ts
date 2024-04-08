import { ApiModule } from '@/common/api/api.module';
import { ApiService } from '@/common/api/api.service';
import { IApiService } from '@/common/api/api.service.interface';
import { Test, TestingModule } from '@nestjs/testing';
import { CharactersDataAccess } from './characters.data-access';

describe('CharactersDataAccessTs', () => {
  let provider: CharactersDataAccess;
  let apiService: IApiService = {
    get: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CharactersDataAccess],
      imports: [ApiModule],
    }).compile();

    provider = module.get<CharactersDataAccess>(CharactersDataAccess);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
