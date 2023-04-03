import React, { useEffect, useState } from 'react';
import { fetchMoviesByCategory } from '../API/fetchApi';

import './MoviesList.css';

const MoviesList=({ category })=> {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const movies = await fetchMoviesByCategory(category);

      setMovies(movies);
    };

    fetchData();
  }, [category]);

  return (
    <div className='movies-list__container'>
      <h2 className='movies-list__title'>{category} movies</h2>

      <ul className='movies-list'>
        {movies.map((movie) => (
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
    </div>
  );
}

export default MoviesList;
