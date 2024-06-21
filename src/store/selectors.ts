import { RootState } from "./store";

export const selectPagination = (state: RootState) => state.pagination;

export const selectSinglePokemon = (state: RootState) =>
  state.singlePokemon.stats;
