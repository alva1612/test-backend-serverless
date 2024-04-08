import { SwapiGetCharacterResponse } from '../dto/get-characters-swapi.dto';

export interface ICharacterService {
  getPage(page: number): Promise<SwapiGetCharacterResponse>;
}
