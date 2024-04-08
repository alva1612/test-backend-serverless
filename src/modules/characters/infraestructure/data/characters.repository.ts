import { DynamoDataAccess } from '@/common/dynamo/dynamo-data-access';
import { Injectable } from '@nestjs/common';
import {
  Character,
  CharacterDB,
} from '@modules/characters/domain/entities/character.entity';
import { docClient } from '@/common/dynamo/dynamo.client';

@Injectable()
export class CharactersRepository {
  constructor(private readonly dynamoDataAccess: DynamoDataAccess<any>) {}

  async createCharacter(character: Character) {
    console.log('service', { character });
    const output = await this.dynamoDataAccess.create({
      ...character.toDynamoDB(),
    });
    return output;
  }
}
