import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CharactersService } from '@modules/characters/application/characters.service';
import { SwapiCharacters } from '@modules/characters/domain/dto/get-characters-swapi.dto';

@Controller('characters')
export class CharactersController {
  constructor(private readonly charactersService: CharactersService) {}

  @Get('getPage/:page')
  async getPage(@Param('page', ParseIntPipe) page: number) {
    return await this.charactersService.getPageTranslated(page);
  }

  @Post('create')
  async createCharacter(@Body() body: SwapiCharacters) {
    return await this.charactersService.createCustomCharacter(body);
  }
}
