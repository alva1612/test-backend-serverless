import {
  Body,
  Controller,
  Get,
  HttpException,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { CharactersService } from '@modules/characters/application/characters.service';
import { SwapiCharacters } from '@modules/characters/domain/dto/get-characters-swapi.dto';
import { CreationError } from '../../domain/errors/Creation.error';
import {
  ApiExtraModels,
  ApiOkResponse,
  ApiTags,
  getSchemaPath,
} from '@nestjs/swagger';
import { TranslatedCharacter } from '../../domain/dto/translated-character.dto';

@ApiTags('Characters')
@ApiExtraModels(TranslatedCharacter)
@Controller('characters')
export class CharactersController {
  constructor(private readonly charactersService: CharactersService) {}

  @ApiOkResponse({
    description: 'Get page of characters translated from SWAPI',
    schema: {
      allOf: [{ $ref: getSchemaPath(TranslatedCharacter) }],
    },
  })
  @Get('getPage/:page')
  async getPage(@Param('page', ParseIntPipe) page: number) {
    try {
      return await this.charactersService.getPageTranslated(page);
    } catch (error) {
      return new HttpException('Error getting page', error.status);
    }
  }

  @Post('create')
  async createCharacter(@Body() body: SwapiCharacters) {
    try {
      return await this.charactersService.createCustomCharacter(body);
    } catch (error) {
      return new CreationError(error.status);
    }
  }

  @Get('getCustom/:id')
  async getCustomCharacter(@Param('id', ParseUUIDPipe) id: string) {
    try {
      const character = await this.charactersService.getCustomCharacter(id);
      return character;
    } catch (error) {
      return new HttpException('Error finding character', error.status);
    }
  }
}
