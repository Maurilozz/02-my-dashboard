"use client";

import { useState, useEffect } from "react";
import { useAppSelector } from "@/store";
import { PokemonGrid } from "..";
import { FaHeartBroken } from "react-icons/fa";

export const FavoritePokemon = () => {
  const favoritePokemonState = useAppSelector((state) =>
    Object.values(state.pokemons.favorites)
  );
  //   console.log(Object.values(favoritePokemonState));
  // const [pokemons, setPokemons] = useState(favoritePokemonState);

  // useEffect(() => {
  //   setPokemons(favoritePokemonState);
  // }, [favoritePokemonState]);

  return (
    <>
      {favoritePokemonState.length === 0 ? (
        <NoFavorites />
      ) : (
        <PokemonGrid pokemons={favoritePokemonState} />
      )}
    </>
  );

  // Object.values() creara un nuevo array con los valores del objeto
};

export const NoFavorites = () => {
  return (
    <div className="flex flex-col items-center gap-4 mt-7 h-[50vh]">
      <FaHeartBroken size="100" className="text-red-500" />
      <span className="text-xl font-bold">Aún no hay pokemons favoritos</span>
    </div>
  );
};
