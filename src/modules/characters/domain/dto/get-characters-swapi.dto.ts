import { ApiProperty } from '@nestjs/swagger';

export interface SwapiGetCharacterResponse {
  count: number;
  next: string;
  previous: null;
  results: SwapiCharacters[];
}

export enum Gender {
  Female = 'female',
  Male = 'male',
  NA = 'n/a',
}

export class SwapiCharacters {
  @ApiProperty({ type: 'string', example: 'Luke Skywalker' })
  name: string;
  @ApiProperty({ example: '172' })
  height: string;
  @ApiProperty({ example: '77' })
  mass: string;
  @ApiProperty({ example: 'blond' })
  hair_color: string;
  @ApiProperty({ example: 'fair' })
  skin_color: string;
  @ApiProperty({ example: 'blue' })
  eye_color: string;
  @ApiProperty({ example: '19BBY' })
  birth_year: string;
  @ApiProperty({ type: 'enum', enum: Gender })
  gender: Gender;
  @ApiProperty({ example: 'Tatooine' })
  homeworld: string;
  @ApiProperty({ type: 'array', items: { type: 'string' } })
  films: string[];
  @ApiProperty({ type: 'array', items: { type: 'string' } })
  species: string[];
  @ApiProperty({ type: 'array', items: { type: 'string' } })
  vehicles: string[];
  @ApiProperty({ type: 'array', items: { type: 'string' } })
  starships: string[];
  @ApiProperty({ example: '2014-12-09T13:50:51.644000Z' })
  created: string;
  @ApiProperty({ example: '2014-12-20T21:17:56.891000Z' })
  edited: string;
  @ApiProperty({ example: 'https://swapi.py4e.com/api/people/1/' })
  url: string;
}
