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

export const { addReviews } = movieSlice.actions;
export const getAllReviews = (state) => state.reviews.reviews;
export default movieSlice.reducer;
