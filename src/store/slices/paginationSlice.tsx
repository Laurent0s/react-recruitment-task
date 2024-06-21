import { createSlice } from "@reduxjs/toolkit";
import { constants } from "../../constants";

export interface Pagination {
  offset: number;
  limit: number;
  currentPage: number;
  isLastPage: boolean;
  isFirstPage: boolean;
}

export const initialState: Pagination = {
  currentPage: 1,
  offset: 0,
  limit: 20,
  isLastPage: false,
  isFirstPage: true,
};

export const PaginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    nextPage: (state) => {
      const totalPages = Math.ceil(constants.POKEMONS_HEIGHT_LIMIT / 20);
      state.currentPage += 1;
      state.offset += 20;
      state.limit = state.currentPage === totalPages ? 11 : 20;
      state.isLastPage = state.currentPage === totalPages;
      state.isFirstPage = false;
    },
    prevPage: (state) => {
      state.isLastPage = false;
      state.currentPage -= 1;
      state.offset -= 20;
      state.limit = 20;
      state.isFirstPage = state.currentPage === 1;
      state.isLastPage = false;
    },
    firstPage: (state) => {
      state.currentPage = 1;
      state.offset = 0;
      state.limit = 20;
      state.isFirstPage = true;
      state.isLastPage = false;
    },
    lastPage: (state, action) => {
      const totalPages = Math.ceil(constants.POKEMONS_HEIGHT_LIMIT / 20);
      state.currentPage = action.payload;
      state.offset = 20 * (action.payload - 1);
      state.limit = 11;
      state.isLastPage = state.currentPage === totalPages;
      state.isFirstPage = false;
    },
  },
});

export const { nextPage, prevPage, firstPage, lastPage } =
  PaginationSlice.actions;
