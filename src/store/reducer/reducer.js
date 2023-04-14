import { ACTIONS } from '../actions/actions';

const initialState = {
  fetchedMovies: [],
  selectedMovie: null,
  fetchedActors: [],
  selectedActor: null,
  totalPages: null,
  loading: true,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_MOVIES:
      return {
        ...state,
        fetchedMovies: action.payload,
      };

    case ACTIONS.SET_SELECTED_MOVIE:
      return {
        ...state,
        selectedMovie: action.payload,
      };
    case ACTIONS.SET_ACTORS:
      return {
        ...state,
        fetchedActors: action.payload,
      };
    case ACTIONS.SET_SELECTED_ACTOR:
      return {
        ...state,
        selectedActor: action.payload,
      };
    case ACTIONS.SET_PAGES:
      return {
        ...state,
        totalPages: action.payload,
      };

    case ACTIONS.START_LOADING:
      return {
        ...state,
        loading: true,
      };

    case ACTIONS.END_LOADING:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
