import { PutCommandOutput } from '@aws-sdk/lib-dynamodb';
import { Character } from '@modules/characters/domain/entities/character.entity';

export interface ICharactersRepository {
  createCharacter(character: any): Promise<PutCommandOutput>;
  getCustomCharacter(charId: string): Promise<Character>;
}
