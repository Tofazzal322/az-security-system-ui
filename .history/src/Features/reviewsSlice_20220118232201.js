import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    reviews: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
   
  },
})

export const { reviews, decrement, incrementByAmount } = reviewsSlice.actions

export default reviewsSlice.reducer