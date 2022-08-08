export interface CharacterModel {
  name: string;
  gender: string;
}

export interface FilmModel {
  title: string;
  director: string;
  episode_id: number;
}

export interface StarshipModel {
  name: string;
  model: string;
  starship_class: string;
}

export interface PlanetModel {
  name: string;
  climate: string;
  terrain: string;
}

export interface List {
  results: [];
  count: number;
}
