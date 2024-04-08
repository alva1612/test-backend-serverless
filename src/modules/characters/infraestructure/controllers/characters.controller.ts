import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CharactersService } from '@modules/characters/application/characters.service';

@Controller('characters')
export class CharactersController {
  constructor(private readonly charactersService: CharactersService) {}

  @Get('getPage/:page')
  async getPage(@Param('page', ParseIntPipe) page: number) {
    return await this.charactersService.getPageTranslated(page);
  }
}
