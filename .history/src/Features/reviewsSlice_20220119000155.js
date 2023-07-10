import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reviews: [],
};

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    addreviews: (state, { payload }) => {
      state.reviews = payload;
    },
  },
});

export const { reviews } = reviewsSlice.actions;
export const getAllReviews = (state) => state.reviews.reviews;
export default reviewsSlice.reducer;
