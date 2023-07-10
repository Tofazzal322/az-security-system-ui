import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  reviews: [],
}

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    reviews: (state,{payload}) => {
     
      state.reviews =
    },
   
  },
})

export const { reviews, } = reviewsSlice.actions

export default reviewsSlice.reducer