import { ApiModule } from '@/common/api/api.module';
import { charactersOptions } from '@/common/dynamo/dynamo.constant';
import { DynamoModule } from '@/common/dynamo/dynamo.module';
import { CharactersService } from '@/modules/characters/application/characters.service';
import { CharactersController } from '@/modules/characters/infraestructure/controllers/characters.controller';
import { CharactersDataAccess } from '@/modules/characters/infraestructure/data/characters.data-access';
import { CharactersRepository } from '@/modules/characters/infraestructure/data/characters.repository';
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import supertest from 'supertest';
import { v4 as uuidV4 } from 'uuid';

describe('CharactersController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [CharactersController],
      providers: [
        CharactersService,
        CharactersDataAccess,
        CharactersRepository,
      ],
      imports: [ApiModule, DynamoModule.register(charactersOptions)],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/characters/getPage/:page (GET) 200', () => {
    return supertest(app.getHttpServer())
      .get('/characters/getPage/1')
      .expect(200);
  });
  it('/characters/getPage/:page (GET) 400', () => {
    return supertest(app.getHttpServer())
      .get('/characters/getPage/asd')
      .expect(400);
  });
  it('/characters/getCustom/:id (GET) 400', () => {
    return supertest(app.getHttpServer())
      .get('/characters/getCustom/1231')
      .expect(400);
  });
});
