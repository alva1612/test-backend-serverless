import { Injectable } from '@nestjs/common';
import { ICharacterService } from '@modules/characters/domain/abstracts/characters.service.interface';
import { TranslatedCharacter } from '@modules/characters/domain/dto/translated-character.dto';
import { Character } from '@modules/characters/domain/entities/character.entity';
import { CharactersDataAccess } from '@modules/characters/infraestructure/data/characters.data-access';
import { SwapiCharacters } from '../domain/dto/get-characters-swapi.dto';
import { CharactersRepository } from '../infraestructure/data/characters.repository';

@Injectable()
export class CharactersService implements ICharacterService {
  constructor(
    private readonly characterProvider: CharactersDataAccess,
    private readonly characterRepository: CharactersRepository,
  ) {}

  async getPageTranslated(page: number): Promise<TranslatedCharacter[]> {
    const res = await this.characterProvider.getPage(page);

    const translatedCharacters = res.results.map((character) =>
      new Character(character).toTranslated(),
    );
    return translatedCharacters;
  }

  async createCustomCharacter(char: SwapiCharacters): Promise<SwapiCharacters> {
    const character = new Character(char);
    const output = await this.characterRepository.createCharacter(character);
    return character.data;
  }

  async getCustomCharacter(charId: string): Promise<any> {
    const character = await this.characterRepository.getCustomCharacter(charId);
    return character.toTranslated();
  }
}
