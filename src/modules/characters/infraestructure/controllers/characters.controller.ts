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
import { ApiRes } from '@/common/dtos/response.interface';

@ApiTags('Characters')
@ApiExtraModels(TranslatedCharacter, ApiRes)
@Controller('characters')
export class CharactersController {
  constructor(private readonly charactersService: CharactersService) {}

  @ApiOkResponse({
    description: 'Get page of characters translated from SWAPI',
    schema: {
      type: 'object',
      properties: {
        statusCode: { type: 'number', example: 200 },
        data: {
          description: 'Characters translated from SWAPI',
          allOf: [{ $ref: getSchemaPath(TranslatedCharacter) }],
        },
      },
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

  @ApiOkResponse({
    description: 'Create a custom character',
    schema: {
      type: 'object',
      properties: {
        statusCode: { type: 'number', example: 200 },
        data: {
          description: 'Characters created',
          $ref: getSchemaPath(SwapiCharacters),
        },
      },
    },
  })
  @Post('create')
  async createCharacter(@Body() body: SwapiCharacters) {
    try {
      return await this.charactersService.createCustomCharacter(body);
    } catch (error) {
      return new CreationError(error.status);
    }
  }

  @ApiOkResponse({
    description: 'Get one of custom characters',
    schema: {
      type: 'object',
      properties: {
        statusCode: { type: 'number', example: 200 },
        data: {
          description: 'Characters translated from SWAPI',
          $ref: getSchemaPath(TranslatedCharacter),
        },
      },
    },
  })
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
