import { Gender } from './get-characters-swapi.dto';

export interface TranslatedCharacter {
  nombre: string;
  altura: string;
  masa: string;
  color_cabello: string;
  color_piel: string;
  color_ojos: string;
  anio_nacimiento: string;
  genero: Gender;
  planeta_origen: string;
  peliculas: string[];
  especies: string[];
  vehiculos: string[];
  naves_estelares: string[];
  creado: string;
  editado: string;
  url: string;
}
