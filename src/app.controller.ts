import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('Healthcheck')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Healtcheck endpoint
  @ApiOkResponse({ description: 'Healthcheck done' })
  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }
}
