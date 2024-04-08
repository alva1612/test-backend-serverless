import { DynamoDataAccess } from '@/common/dynamo/dynamo-data-access';
import { Injectable } from '@nestjs/common';
import { Character } from '@modules/characters/domain/entities/character.entity';
import { SwapiCharacters } from '../../domain/dto/get-characters-swapi.dto';

@Injectable()
export class CharactersRepository {
  constructor(private readonly dynamoDataAccess: DynamoDataAccess) {}

  async createCharacter(character: Character) {
    const output = await this.dynamoDataAccess.create({
      ...character.toDynamoDB(),
    });
    return output;
  }

  async getCustomCharacter(charId: string) {
    const output = await this.dynamoDataAccess.get(charId);
    const character = new Character(
      this.dynamoDataAccess.outputToPlainObject<SwapiCharacters>(output),
    );
    return character;
  }
}
