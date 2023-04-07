import axios from 'axios';
import {
  setSelectedMovieAction,
  setMoviesAction,
  setActorsAction,
  setSelectedActorAction,
  setPages,
  startLoadingAction,
  endLoadingAction,
} from '../reducer/reducer';

const API_KEY = '4f58cb7827938d0b9a7356e8f717f1d8';
const API_BASE_URL = 'https://api.themoviedb.org/3';

export const fetchActors = (page) => {
  return (dispatch) => {
    axios
      .get(`${API_BASE_URL}/person/popular`, {
        params: {
          api_key: API_KEY,
          page,
        },
      })
      .then((response) => {
        if (page === 1) {
          dispatch(setPages(response.data.total_pages));
        }
        dispatch(setActorsAction(response.data.results));
      });
  };
};

export const fetchActorsByQuery = (query, page) => {
  return (dispatch) => {
    axios
      .get(`${API_BASE_URL}/search/person`, {
        params: {
          api_key: API_KEY,
          query,
          page,
        },
      })
      .then((response) => {
        if (page === 1) {
          dispatch(setPages(response.data.total_pages));
        }
        dispatch(setActorsAction(response.data.results));
      });
  };
};

export const fetchActorById = (id) => {
  return (dispatch) => {
    dispatch(startLoadingAction());
    axios
      .get(`${API_BASE_URL}/person/${id}`, {
        params: {
          api_key: API_KEY,
        },
      })
      .then((response) => dispatch(setSelectedActorAction(response.data)))
      .finally(() => dispatch(endLoadingAction()));
  };
};

export const fetchMoviesByQuery = (query, page) => {
  return (dispatch) => {
    axios
      .get(`${API_BASE_URL}/search/movie`, {
        params: {
          api_key: API_KEY,
          query,
          page,
        },
      })
      .then((response) => {
        if (page === 1) {
          dispatch(setPages(response.data.total_pages));
        }
        dispatch(setMoviesAction(response.data.results));
      });
  };
};

export const fetchMoviesByCategory = (category, page) => {
  return (dispatch) => {
    axios
      .get(`${API_BASE_URL}/movie/${category}`, {
        params: {
          api_key: API_KEY,
          page,
        },
      })
      .then((response) => {
        if (page === 1) {
          dispatch(setPages(response.data.total_pages));
        }
        dispatch(setMoviesAction(response.data.results));
      });
  };
};

export const fetchMovieById = (id) => {
  return (dispatch) => {
    dispatch(startLoadingAction());
    axios
      .get(`${API_BASE_URL}/movie/${id}`, { params: { api_key: API_KEY } })
      .then((response) => dispatch(setSelectedMovieAction(response.data)))
      .finally(() => dispatch(endLoadingAction()));
  };
};
