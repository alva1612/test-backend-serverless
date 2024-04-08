import { Injectable } from '@nestjs/common';
import { ICharactersDataAccess } from '@modules/characters/domain/abstracts/characters.data-access.interface';
import { SwapiGetCharacterResponse } from '@modules/characters/domain/dto/get-characters-swapi.dto';
import { DataProviderError } from '@modules/characters/domain/errors/DataProvider.error';
import { ApiService } from '@/common/api/api.service';

@Injectable()
export class CharactersDataAccess implements ICharactersDataAccess {
  constructor(private readonly apiService: ApiService) {}

  async getPage(page: number) {
    try {
      const res = await this.apiService.get<SwapiGetCharacterResponse>(
        `https://swapi.py4e.com/api/people`,
        {
          page: `${page}`,
        },
      );
      return res;
    } catch (error) {
      throw new DataProviderError(error);
    }
  }
}
