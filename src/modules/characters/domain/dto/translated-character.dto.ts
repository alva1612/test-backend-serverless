import { ApiProperty } from '@nestjs/swagger';
import { Gender } from './get-characters-swapi.dto';

export class TranslatedCharacter {
  @ApiProperty({ type: 'string', example: 'Luke Skywalker' })
  nombre: string;
  @ApiProperty({ example: '172' })
  altura: string;
  @ApiProperty({ example: '77' })
  masa: string;
  @ApiProperty({ example: 'blond' })
  color_cabello: string;
  @ApiProperty({ example: 'fair' })
  color_piel: string;
  @ApiProperty({ example: 'blue' })
  color_ojos: string;
  @ApiProperty({ example: '19BBY' })
  anio_nacimiento: string;
  @ApiProperty({ enum: Gender })
  genero: Gender;
  @ApiProperty({ example: 'Tatooine' })
  planeta_origen: string;
  @ApiProperty({
    examples: [
      'https://swapi.py4e.com/api/films/1/',
      'https://swapi.py4e.com/api/films/2/',
    ],
  })
  peliculas: string[];
  @ApiProperty({ examples: ['https://swapi.py4e.com/api/species/1/'] })
  especies: string[];
  @ApiProperty({
    examples: [
      'https://swapi.py4e.com/api/vehicles/14/',
      'https://swapi.py4e.com/api/vehicles/30/',
    ],
  })
  vehiculos: string[];
  @ApiProperty({
    examples: [
      'https://swapi.py4e.com/api/starships/12/',
      'https://swapi.py4e.com/api/starships/22/',
    ],
  })
  naves_estelares: string[];
  @ApiProperty({ example: '2014-12-09T13:50:51.644000Z' })
  creado: string;
  @ApiProperty({ example: '2014-12-20T21:17:56.891000Z' })
  editado: string;
  @ApiProperty({ example: 'https://swapi.py4e.com/api/people/1/' })
  url: string;
}
