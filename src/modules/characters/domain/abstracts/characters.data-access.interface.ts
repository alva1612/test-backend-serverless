import { SwapiGetCharacterResponse } from '../dto/get-characters-swapi.dto';

export interface ICharactersDataAccess {
  getPage(page: number): Promise<SwapiGetCharacterResponse>;
}
