import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  reviews: 0,
}

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    reviews: (state) => {
     
      state.value += 1
    },
   
  },
})

export const { reviews, } = reviewsSlice.actions

export default reviewsSlice.reducer