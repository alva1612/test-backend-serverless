import { Module } from '@nestjs/common';
import { ApiModule } from '../api/api.module';
import { CharactersService } from './application/characters.service';
import { CharactersController } from './infraestructure/controllers/characters.controller';
import { CharactersDataAccess } from './infraestructure/data/characters.data-access';

@Module({
  controllers: [CharactersController],
  providers: [CharactersService, CharactersDataAccess],
  imports: [ApiModule],
})
export class CharactersModule {}
