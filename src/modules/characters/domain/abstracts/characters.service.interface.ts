import { TranslatedCharacter } from '../dto/translated-character.dto';

export interface ICharacterService {
  getPageTranslated(page: number): Promise<TranslatedCharacter[]>;
}
