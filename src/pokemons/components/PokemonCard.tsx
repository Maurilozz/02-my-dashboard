"use client";

import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/store";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { SimplePokemon } from "..";
import { togglePokemon } from "@/store/pokemons/pokemons";

// Espera un objeto con la estructura de simplePokemon
interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon;
  const isFavorite = useAppSelector((state) => !!state.pokemons.favorites[id]);
  const dispatch = useDispatch();

  const onToggle = () => {
    dispatch(togglePokemon(pokemon));
  };
  return (
    <div className="mx-auto right-0 mt-2 w-48">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className="text-center p-6 bg-gray-800 border-b">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            height={100}
            width={100}
            alt={pokemon.name}
            className="mx-auto min-h-[100px] max-h-[100px]"
          />
          <p className="pt-2 text-lg font-semibold text-gray-50">{name}</p>
          <div className="mt-5">
            <Link
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
              href={`/dashboard/pokemons/${name}`}
            >
              Más información
            </Link>
          </div>
        </div>

        <div className="border-b">
          <div
            className="px-4 py-2 cursor-pointer hover:bg-gray-100 flex"
            onClick={onToggle}
          >
            <div className="text-red-600">
              {isFavorite ? <FaHeart size={30} /> : <CiHeart size={30} />}
            </div>

            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                {isFavorite ? "Quitar Favorito" : "Agregar a Favoritos"}
              </p>

              <p className="text-xs text-gray-500">Cambiar Estado</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
