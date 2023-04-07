import React, { useEffect, useState } from 'react';
import {
  fetchMoviesByCategory,
  fetchMoviesByQuery,
} from '../../store/thunk/thunk';
import { useDispatch, useSelector } from 'react-redux';
import './MoviesList.css';
import { Pagination, Stack, TextField } from '@mui/material';
import { DebounceInput } from 'react-debounce-input';

const MoviesList = ({ category, filter }) => {
  const { fetchedMovies, totalPages } = useSelector((state) => state.movies);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const buttonClickHandler = (e) => {
    if (e.target.tagName==='BUTTON') {
      filter(e.target.value);
      setPage(1);
    }
  };

  // console.log(fetchedMovies);

  useEffect(() => {
    if (query.length>2) {
      console.log('dispatch query');
      dispatch(fetchMoviesByQuery(query, page));
    } else {
      dispatch(fetchMoviesByCategory(category, page));
    }
  }, [category, page, query]);

  return (
    <div className='movies-list__wrapper'>
      <div className='movies-list__container'>
        <div
          className='movies-list__filters filters'
          onClick={buttonClickHandler}
        >
          <button className='filters__button' value='popular' type='button'>
            Popular
          </button>
          <button className='filters__button' value='top_rated' type='button'>
            Top Rated
          </button>
          <button className='filters__button' value='upcoming' type='button'>
            Upcoming
          </button>
          {/* <TextField
            label='Search'
            onChange={(e) => setQuery(e.target.value)}
            style={{ flex: '1 0 auto', marginLeft: 'auto' }}
          ></TextField> */}
           <DebounceInput
              minLength={3}
              debounceTimeout={1000}
              placeholder='Search'
              onChange={(e) => setQuery(e.target.value)}
            ></DebounceInput>
        </div>
        <h2 className='movies-list__title'>
          {!!category && category.split('_').join(' ')} movies
        </h2>
        <ul className='movies-list'>
          {fetchedMovies.map((movie) => (
            <li className='movie-item' key={movie.id}>
              <a className='movie-link' href={`/movies/${movie.id}`}>
                <img
                  className='movie-poster'
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                />
                <span className='movie-title'>{movie.title}</span>
              </a>
            </li>
          ))}
        </ul>
        {!!totalPages && <Stack>
        <Pagination
          count={totalPages < 500 ? totalPages : 500}
          page={page}
          color='primary'
          size="large"
          showFirstButton
          showLastButton
          onChange={(_, num) => setPage(num)}
          sx={{marginX:'auto',marginY:2}}
        ></Pagination>
        </Stack>}
      </div>
    </div>
  );
};

export default MoviesList;
