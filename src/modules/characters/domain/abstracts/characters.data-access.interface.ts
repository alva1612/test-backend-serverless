import { SwapiGetCharacterResponse } from '@modules/characters/domain/dto/get-characters-swapi.dto';

export interface ICharactersDataAccess {
  getPage(page: number): Promise<SwapiGetCharacterResponse>;
}
