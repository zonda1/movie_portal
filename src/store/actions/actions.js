import { createAction } from '@reduxjs/toolkit';

export const ACTIONS = {
  SET_MOVIES: 'SET_MOVIES',
  SET_SELECTED_MOVIE: 'SET_SELECTED_MOVIE',
  SET_ACTORS: 'SET_ACTORS',
  SET_SELECTED_ACTOR: 'SET_SELECTED_ACTOR',
  SET_PAGES: 'SET_PAGES',
  START_LOADING: 'START_LOADING',
  END_LOADING: 'END_LOADING',
};

export const setActorsAction = createAction(ACTIONS.SET_ACTORS, (value) => {
  return {
    payload: value,
  };
});
export const setSelectedActorAction = createAction(
  ACTIONS.SET_SELECTED_ACTOR,
  (value) => {
    return {
      payload: value,
    };
  }
);
export const setMoviesAction = createAction(
  ACTIONS.SET_MOVIES,
  (value) => {
    return {
      payload: value,
    };
  }
);
export const setSelectedMovieAction = createAction(
  ACTIONS.SET_SELECTED_MOVIE,
  (value) => {
    return {
      payload: value,
    };
  }
);
export const setPages = createAction(ACTIONS.SET_PAGES, (value) => {
  return {
    payload: value,
  };
});

export const startLoadingAction = createAction(
  ACTIONS.START_LOADING,
  (value) => {
    return {
      payload: undefined,
    };
  }
);
export const endLoadingAction = createAction(ACTIONS.END_LOADING, (value) => {
  return {
    payload: undefined,
  };
});