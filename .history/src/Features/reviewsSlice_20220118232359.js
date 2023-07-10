import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  reviews: [],
}

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    reviews: (state,{payload}) => {
     
      state.reviews =pa
    },
   
  },
})

export const { reviews, } = reviewsSlice.actions

export default reviewsSlice.reducer