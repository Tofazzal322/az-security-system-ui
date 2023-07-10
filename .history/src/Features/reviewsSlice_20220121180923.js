import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: {},
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addReviews: (state, { payload }) => {
      state.reviews = payload;
    },
  },
});

export const { addReviews } = reviewsSlice.actions;
export const getAllReviews = (state) => state.reviews.reviews;
export default reviewsSlice.reducer;
