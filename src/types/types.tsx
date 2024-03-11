export interface Hero {
  birth_year: string;
  eye_color: string;
  films: number[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: number;
  mass: string;
  name: string;
  skin_color: string;
  created: string;
  edited: string;
  species: number[];
  starships: number[];
  url: string;
  vehicles: number[];
}

export interface Film {
  characters: number[];
  created: string;
  director: string;
  edited: string;
  episode_id: number;
  opening_crawl: string;
  planets: number[];
  producer: string;
  release_date: string;
  species: number[];
  starships: number[];
  title: string;
  url: string;
  vehicles: number[];
}
