import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: {},
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addMovie: (state, { payload }) => {
      state.reviews = payload;
    },
  },
});

export const { addMovie } = movieSlice.actions;
export const getAllMovie = (state) => state.reviews.reviews;
export default movieSlice.reducer;
