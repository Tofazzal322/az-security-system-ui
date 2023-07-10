import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const axios = require('axios');

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    try {
      const response = await axios.get(
        "https://pacific-meadow-17159.herokuapp.com/products"
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  movies: {},
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state, { payload }) => {
      state.movies = payload;
    },
  },
});

export const { addMovie } = movieSlice.actions;
export const getAllMovie = (state) => state.movies.movies;
export default movieSlice.reducer;
