import { Pokemon } from "@acme/api/src/router/pokemon";
import type { NextPage } from "next";
import { trpc } from "../utils/trpc";

const PokemonCard: React.FC<{
  pokemon: Pokemon;
}> = ({ pokemon: { name, ThumbnailImage, ThumbnailAltText, number } }) => {
  return (
    <div
     className="flex flex-col align-center justify-center p-4 bg-gray-300">
      <img className="w-64" src={ThumbnailImage} alt={ThumbnailAltText} />
      <p className="text-2xl font-bold text-center text-gray-800">{name}</p>
      <p className="text-gray-600 text-base">{"#" + number}</p>
    </div>
  );
};

const Home: NextPage = () => {
  const postQuery = trpc.pokemon.all.useQuery();

  return (
    <>
      <main className="container flex flex-col items-center justify-center min-h-screen p-4 mx-auto">
        <img className="w-64" src={"https://logos-world.net/wp-content/uploads/2020/05/Pokemon-Logo.png"} />
        <div className="flex items-center justify-center w-full pt-6 text-2xl text-blue-500">
          {postQuery.data ? (
            <div className="flex gap-4 flex-wrap">
              {postQuery.data
                .filter((value, index, self) => index === self.findIndex((t) => t.number === value.number && t.name === value.name))
                .map((p) => {
                  return <PokemonCard key={p.id} pokemon={p} />;
                })}
            </div>
          ) : (
            <p>Loading..</p>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
