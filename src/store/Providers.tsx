"use client";

// Esto por el momento solo se usa en use client

import { Provider } from "react-redux";
import { store } from "./index";
import { useEffect } from "react";
import { setFavoritesPokemons } from "./pokemons/pokemons";

interface Props {
  children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
  useEffect(() => {
    const favorites = JSON.parse(
      localStorage.getItem("favorite-pokemons") ?? "{}"
    );

    // console.log(favorites);
    store.dispatch(setFavoritesPokemons(favorites));
  }, []);

  return <Provider store={store}> {children} </Provider>;
};
