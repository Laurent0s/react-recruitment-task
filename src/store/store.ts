import { configureStore } from "@reduxjs/toolkit";
import { pokemonSpeciesSlice } from "./slices/pokedexSlice";
import { PaginationSlice } from "./slices/paginationSlice";
import { singlePokemonSlice } from "./slices/singlePokemonSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    pokemonspecies: pokemonSpeciesSlice.reducer,
    pagination: PaginationSlice.reducer,
    singlePokemon: singlePokemonSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
