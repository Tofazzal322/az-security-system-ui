import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchAsyncMovies= createAsyncThunk('movies/fetchAsyncMovies', asy)

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
