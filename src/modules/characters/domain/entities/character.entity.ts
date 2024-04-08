import { SwapiCharacters } from '../dto/get-characters-swapi.dto';
import { TranslatedCharacter } from '../dto/translated-character.dto';

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
}
