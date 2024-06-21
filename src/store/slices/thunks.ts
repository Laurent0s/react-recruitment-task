import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosApi } from "../api/axios";

export const fetchPokemons = createAsyncThunk(
  "pokedex/fetchPokemons",
  async (
    { limit, offset }: { limit: number; offset: number },
    { rejectWithValue }
  ) => {
    try {
      const response = await axiosApi.get(
        `pokemon?limit=${limit}&offset=${offset}`
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue({
        message: error.response?.data?.message || "Unable to fetch pokemon",
      });
    }
  }
);

export const fetchSinglePokemon = createAsyncThunk(
  "pokemon/fetchSinglePokemon",
  async (name: string, { rejectWithValue }) => {
    try {
      const response = await axiosApi.get(`pokemon/${name}`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue({
        message: error.response?.data?.message || "Unable to fetch pokemon",
      });
    }
  }
);
