import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { RootState } from "..";

export const localStorageMiddleware = (state: MiddlewareAPI) => {
return (next: Dispatch) => (action: Action) => {
    next(action);

    // console.log({state: state.getState()})
    
    if(action.type === "pokemons/togglePokemon") {
        // RootState es solo para hacer tipado
        const {pokemons} = state.getState() as RootState;
        localStorage.setItem("favorite-pokemons", JSON.stringify(pokemons))
    }
}
}