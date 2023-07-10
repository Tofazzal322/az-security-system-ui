import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reviews: [],
};

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    reviews: (state, { payload }) => {
      state.reviews = payload;
    },
  },
});

export const { reviews } = reviewsSlice.actions;
export const getAllReviews =(state)=
export default reviewsSlice.reducer;
