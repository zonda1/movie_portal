import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  setSelectedMovieAction,
  setMoviesAction,
  setActorsAction,
  setSelectedActorAction,
  setPages,
  startLoadingAction,
  endLoadingAction,
} from '../actions/actions';

export const fetchActors = createAsyncThunk(
  'fetchActors',
  async (page, { dispatch, extra: api }) => {
    const { data } = await api.get(`/person/popular`, {
      params: {
        page,
      },
    });
    if (page === 1) {
      dispatch(setPages(data.total_pages));
    }
    dispatch(setActorsAction(data.results));
  }
);


export const fetchActorsByQuery = createAsyncThunk(
  'fetchActorsByQuery',
  async ({ query, page }, { dispatch, extra: api }) => {
    const { data } = await api.get(`/search/person`, {
      params: {
        query,
        page,
      },
    });
    dispatch(setPages(data.total_pages));
    dispatch(setActorsAction(data.results));
  }
);


export const fetchActorById = createAsyncThunk(
  'fetchActorById',
  async (id, { dispatch, extra: api }) => {
    dispatch(startLoadingAction());
    const { data } = await api.get(`/person/${id}`);
    dispatch(setSelectedActorAction(data));
    dispatch(endLoadingAction());
  }
);

// export const fetchActorById = (id) => {
//   return (dispatch) => {
//     dispatch(startLoadingAction());
//     axios
//       .get(`${API_BASE_URL}/person/${id}`, {
//         params: {
//           api_key: API_KEY,
//         },
//       })
//       .then((response) => dispatch(setSelectedActorAction(response.data)))
//       .finally(() => dispatch(endLoadingAction()));
//   };
// };

export const fetchMoviesByQuery = createAsyncThunk(
  'fetchMoviesByQuery',
  async ({ query, page }, { dispatch, extra: api }) => {
    const { data } = await api.get(`/search/movie`, {
      params: {
        query,
        page,
      },
    });
    dispatch(setPages(data.total_pages));
    dispatch(setMoviesAction(data.results));
  }
);


export const fetchMoviesByCategory = createAsyncThunk(
  'fetchMoviesByCategory',
  async ({ category, page }, { dispatch, extra: api }) => {
    const { data } = await api.get(`/movie/${category}`, {
      params: {
        page,
      },
    });
    if (page === 1) {
      dispatch(setPages(data.total_pages));
    }
    dispatch(setMoviesAction(data.results));
  }
);

export const fetchMovieById = createAsyncThunk(
  'fetchMovieById',
  async (id, { dispatch, extra: api }) => {
    dispatch(startLoadingAction());
    const { data } = await api.get(`/movie/${id}`);
    dispatch(setSelectedMovieAction(data));
    dispatch(endLoadingAction());
  }
);

// export const fetchMovieById = (id) => {
//   return (dispatch) => {
//     dispatch(startLoadingAction());
//     axios
//       .get(`${API_BASE_URL}/movie/${id}`, { params: { api_key: API_KEY } })
//       .then((response) => dispatch(setSelectedMovieAction(response.data)))
//       .finally(() => dispatch(endLoadingAction()));
//   };
// };
