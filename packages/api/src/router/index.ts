// src/server/router/index.ts
import { t } from "../trpc";
import { pokemonRouter } from "./pokemon";

import { postRouter } from "./post";

export const appRouter = t.router({
  post: postRouter,
  pokemon: pokemonRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
