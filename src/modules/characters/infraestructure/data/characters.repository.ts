import { DynamoDataAccess } from '@/common/dynamo/dynamo-data-access';
import { Injectable } from '@nestjs/common';
import { Character } from '@modules/characters/domain/entities/character.entity';
import { SwapiCharacters } from '../../domain/dto/get-characters-swapi.dto';
import { PutCommandOutput } from '@aws-sdk/lib-dynamodb';
import { ICharactersRepository } from '../../domain/abstracts/characters.repository.interface';

@Injectable()
export class CharactersRepository implements ICharactersRepository {
  constructor(private readonly dynamoDataAccess: DynamoDataAccess) {}

  async createCharacter(character: Character): Promise<PutCommandOutput> {
    const output = await this.dynamoDataAccess.create({
      ...character.toDynamoDB(),
    });
    return output;
  }

  async getCustomCharacter(charId: string): Promise<Character> {
    const output = await this.dynamoDataAccess.get(charId);
    const character = new Character(
      this.dynamoDataAccess.outputToPlainObject<SwapiCharacters>(output),
    );
    return character;
  }
}
