import { Injectable } from '@nestjs/common';
import { ICharactersDataAccess } from '../domain/abstracts/characters.data-access.interface';
import { ICharacterService } from '../domain/abstracts/characters.service.interface';
import { SwapiGetCharacterResponse } from '../domain/dto/get-characters-swapi.dto';
import { CharactersDataAccess } from '../infraestructure/data/characters.data-access';

@Injectable()
export class CharactersService implements ICharacterService {
  constructor(private readonly characterProvider: CharactersDataAccess) {}
  async getPage(page): Promise<SwapiGetCharacterResponse> {
    console.log('Populating characters...');

    const res = await this.characterProvider.getPage(page);
    console.log(res);
    return res;
  }
}
