export const ACTIONS = {
  SET_MOVIES: 'SET_MOVIES',
  SET_SELECTED_MOVIE: 'SET_SELECTED_MOVIE',
  SET_ACTORS: 'SET_ACTORS',
  SET_SELECTED_ACTOR: 'SET_SELECTED_ACTOR',
  SET_PAGES: 'SET_PAGES',
  START_LOADING: 'START_LOADING',
  END_LOADING: 'END_LOADING',
};

export const setActorsAction = (payload) => ({
  type: ACTIONS.SET_ACTORS,
  payload,
});
export const setSelectedActorAction = (payload) => ({
  type: ACTIONS.SET_SELECTED_ACTOR,
  payload,
});

export const setMoviesAction = (payload) => ({
  type: ACTIONS.SET_MOVIES,
  payload,
});

export const setSelectedMovieAction = (payload) => ({
  type: ACTIONS.SET_SELECTED_MOVIE,
  payload,
});

export const startLoadingAction = () => ({
  type: ACTIONS.START_LOADING,
  payload: undefined,
});

export const setPages = (payload) => ({
  type: ACTIONS.SET_PAGES,
  payload,
});

export const endLoadingAction = () => ({
  type: ACTIONS.END_LOADING,
  payload: undefined,
});
