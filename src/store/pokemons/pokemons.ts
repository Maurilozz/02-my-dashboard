// SNIPET: rxSlice
import { SimplePokemon } from "@/pokemons";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/* 
    {
      favorites: {
           "1": {id: "1", name: "bulbasaur"}
           "2": {id: "2", name: "bulbasaur"}
       }
    }
*/

interface PokemonsState {
  // Aqui se dice que tendremos un montón de llaves y esas llaves tendran un valor de la estructura de simplepokemon
  favorites: { [key: string]: SimplePokemon };
}

/* const getInitialState = (): PokemonsState => {
    //! Solución rapida pero mal hecha por error de hidratación
    // if (typeof localStorage === "undefined") return {}

    const favorites = JSON.parse(localStorage.getItem("favorite-pokemons") ?? "{}")
    // console.log(favorites)
    return favorites
} */

const initialState: PokemonsState = {
  //$ Este estado inical se asegurara de que el lado del cliente y el servidor sean los mismos
  favorites: {},
  // ...getInitialState()
  //  "1": {id: "1", name: "bulbasaur"},
  //  "2": {id: "2", name: "bulbasaur"},
  //  "5": {id: "5", name: "bulbasaur"},
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setFavoritesPokemons(
      state,
      action: PayloadAction<{ [key: string]: SimplePokemon }>
    ) {
      state.favorites = action.payload;
    },

    togglePokemon(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      if (!!state.favorites[id]) {
        delete state.favorites[id];
        // return;
      } else {
        state.favorites[id] = pokemon;
      }

      //! MALA PRACTICA (NO SE DEBE DISPARAR EFECTOS SECUNDARIOS EN LOS REDUCERS)
      localStorage.setItem(
        "favorite-pokemons",
        JSON.stringify(state.favorites)
      );
    },
  },
});

export const { togglePokemon, setFavoritesPokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
