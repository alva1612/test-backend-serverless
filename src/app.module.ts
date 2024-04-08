import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharactersModule } from './modules/characters/characters.module';
import { ApiModule } from './modules/api/api.module';

@Module({
  imports: [CharactersModule, ApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
