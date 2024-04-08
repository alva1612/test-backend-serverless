import { AttributeValue } from '@aws-sdk/client-dynamodb';
import { SwapiCharacters } from '../dto/get-characters-swapi.dto';
import { TranslatedCharacter } from '../dto/translated-character.dto';
import { v4 as uuidv4 } from 'uuid';

export class Character {
  data: SwapiCharacters;

  constructor(swapidata: SwapiCharacters) {
    this.data = swapidata;
  }

  toTranslated(): TranslatedCharacter {
    const character = this.data;
    return {
      nombre: character.name,
      altura: character.height,
      masa: character.mass,
      anio_nacimiento: character.birth_year,
      color_cabello: character.hair_color,
      color_ojos: character.eye_color,
      color_piel: character.skin_color,
      creado: character.created,
      editado: character.edited,
      especies: character.species,
      genero: character.gender,
      naves_estelares: character.starships,
      peliculas: character.films,
      planeta_origen: character.homeworld,
      url: character.url,
      vehiculos: character.vehicles,
    };
  }

  toDynamoDB(): Record<keyof CharacterDB, AttributeValue> {
    return {
      CharactersId: {
        S: uuidv4(),
      },
      birth_year: {
        S: this.data.birth_year,
      },
      created: {
        S: this.data.created,
      },
      edited: {
        S: this.data.edited,
      },
      eye_color: {
        S: this.data.eye_color,
      },
      gender: { S: this.data.gender },
      hair_color: {
        S: this.data.hair_color,
      },
      height: {
        S: this.data.height,
      },
      homeworld: {
        S: this.data.homeworld,
      },
      mass: {
        S: this.data.mass,
      },
      name: {
        S: this.data.name,
      },
      skin_color: {
        S: this.data.skin_color,
      },
      url: {
        S: this.data.url,
      },
      films: {
        SS: this.data.films,
      },
      species: {
        SS: this.data.species,
      },
      vehicles: {
        SS: this.data.vehicles,
      },
      starships: {
        SS: this.data.starships,
      },
    };
  }
}

export type CharacterDB = SwapiCharacters & { CharactersId: string };
