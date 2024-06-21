import { createSlice } from "@reduxjs/toolkit";
import { fetchSinglePokemon } from "./thunks";

export interface Pokemon {
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
}

export interface SinglePokemonState {
  stats: Pokemon;
  loading: boolean;
  error: string | null;
}

const initialState: SinglePokemonState = {
  stats: {
    height: 0,
    weight: 0,
    sprites: { front_default: "" },
    types: [],
    stats: [{ base_stat: 0, effort: 0, stat: { name: "", url: "" } }],
  },
  loading: false,
  error: null,
};

export const singlePokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSinglePokemon.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchSinglePokemon.fulfilled,
        (state, action: { payload: Pokemon }) => {
          state.loading = false;
          state.stats = action.payload;
          state.error = null;
        }
      )
      .addCase(
        fetchSinglePokemon.rejected,
        (state, action: { payload: any }) => {
          state.loading = false;
          state.error = action.payload ?? "An error occurred";
        }
      );
  },
});

export default singlePokemonSlice.reducer;
