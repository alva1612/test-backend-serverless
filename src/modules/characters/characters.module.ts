import { ApiModule } from '@/common/api/api.module';
import { charactersOptions } from '@/common/dynamo/dynamo.constant';
import { DynamoModule } from '@/common/dynamo/dynamo.module';
import { Module } from '@nestjs/common';
import { CharactersService } from './application/characters.service';
import { CharactersController } from './infraestructure/controllers/characters.controller';
import { CharactersDataAccess } from './infraestructure/data/characters.data-access';
import { CharactersRepository } from './infraestructure/data/characters.repository';

@Module({
  controllers: [CharactersController],
  providers: [CharactersService, CharactersDataAccess, CharactersRepository],
  imports: [ApiModule, DynamoModule.register(charactersOptions)],
})
export class CharactersModule {}
