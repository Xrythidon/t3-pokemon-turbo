import { t } from "../trpc";

export interface Pokemon {
  abilities: Array<string>;
  detailPageURL: string;
  weight: number;
  weakness: Array<string>;
  number: string;
  height: number;
  collectibles_slug: string;
  featured: string;
  slug: string;
  name: string;
  ThumbnailAltText: string;
  ThumbnailImage: string;
  id: number;
  type: Array<string>;
}

export const pokemonRouter = t.router({
  all: t.procedure.query(({ ctx }) => {
    return fetch("https://www.pokemon.com/us/api/pokedex/kalos")
      .then((res) => res.json())
      .then((data: Array<Pokemon>) => data)
  })
});
