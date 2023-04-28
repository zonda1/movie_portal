import { createReducer } from '@reduxjs/toolkit';
import {
  endLoadingAction,
  setActorsAction,
  setMoviesAction,
  setPages,
  setSelectedActorAction,
  setSelectedMovieAction,
  startLoadingAction,
} from '../actions/actions';


const initialState = {
  fetchedMovies: [],
  fetchedActors: [],
  selectedMovie: null,
  selectedActor: null,
  totalPages: null,
  loading: true,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setMoviesAction, (state, action) => {
      state.fetchedMovies=action.payload;
    })
    .addCase(setSelectedMovieAction, (state, action) => {
      state.selectedMovie = action.payload;
    })
    .addCase(setActorsAction, (state, action) => {
      state.fetchedActors = action.payload;
    })
    .addCase(setSelectedActorAction, (state, action) => {
      state.selectedActor = action.payload;
    })
    .addCase(setPages, (state, action) => {
      state.totalPages = action.payload;
    })
    .addCase(startLoadingAction, (state) => {
      state.loading = true;
    })
    .addCase(endLoadingAction, (state) => {
      state.loading = false;
    })
});
