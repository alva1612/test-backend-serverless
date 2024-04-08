import { SwapiCharacters } from '../dto/get-characters-swapi.dto';
import { TranslatedCharacter } from '../dto/translated-character.dto';

export interface ICharacterService {
  getPageTranslated(page: number): Promise<TranslatedCharacter[]>;

  createCustomCharacter(character: SwapiCharacters): Promise<SwapiCharacters>;
}
