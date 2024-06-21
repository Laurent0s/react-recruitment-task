import { createSlice } from "@reduxjs/toolkit";
import { PokemonPreview } from "../types/PokemonPreview";
import { fetchPokemons } from "./thunks";

export interface PokemonPreviewState {
  results: PokemonPreview[];
  loading: boolean;
  error: string | null;
}

const initialState: PokemonPreviewState = {
  results: [{ name: "", url: "" }],
  loading: false,
  error: null,
};

export const pokemonSpeciesSlice = createSlice({
  name: "pokemonspecies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemons.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchPokemons.fulfilled,
        (state, action: { payload: PokemonPreviewState }) => {
          state.loading = false;
          state.results = action.payload.results;
          state.error = null;
        }
      )
      .addCase(fetchPokemons.rejected, (state, action: { payload: any }) => {
        state.loading = false;
        state.error = action.payload ?? "An error occurred";
      });
  },
});
