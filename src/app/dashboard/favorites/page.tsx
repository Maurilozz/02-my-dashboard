import { FavoritePokemon } from "@/pokemons";

export default function FavoritePokemonsPage() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Pokemons Favoritos <small className="text-red-500">Global state</small>
      </span>

      <FavoritePokemon />
    </div>
  );
}
