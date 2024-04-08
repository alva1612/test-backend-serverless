import { Injectable } from '@nestjs/common';
import { ICharacterService } from '@modules/characters/domain/abstracts/characters.service.interface';
import { TranslatedCharacter } from '@modules/characters/domain/dto/translated-character.dto';
import { Character } from '@modules/characters/domain/entities/character.entity';
import { CharactersDataAccess } from '@modules/characters/infraestructure/data/characters.data-access';

@Injectable()
export class CharactersService implements ICharacterService {
  constructor(private readonly characterProvider: CharactersDataAccess) {}

  async getPageTranslated(page: number): Promise<TranslatedCharacter[]> {
    const res = await this.characterProvider.getPage(page);

    const translatedCharacters = res.results.map((character) =>
      new Character(character).toTranslated(),
    );
    return translatedCharacters;
  }
}
