import React, {useEffect } from 'react';
import { useParams,Link } from 'react-router-dom';
import { fetchMovieById } from '../../store/thunk/thunk';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Loader from '../Loader/Loader';
import './MovieDetails.css';

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedMovie, loading} = useSelector((state) => state.movies);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchMovieById(id));
  }, [id]);

  useEffect(() => {
    if( !loading && !selectedMovie) {
      navigate( "/not_found" , { replace: true})
    }
  }, [loading, selectedMovie])

  if (!selectedMovie) {
    return <Loader/>;
  }

  return (
    <div className='movie-details__wrapper'>
       <div className='return'>
        <Link to={'/'} className='return__link'>
          <ArrowBackIosNewIcon />
        </Link>
      </div>
      <div className='movie-details'>
        <img
          className='movie-details__poster'
          src={`https://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}`}
          alt={selectedMovie.title}
        />
        <div className='movie-details__info'>
          <h1 className='movie-details__title'>{selectedMovie.title}</h1>
          <p className='movie-details__overview'>{selectedMovie.overview}</p>
          <p>
            <strong>Released on:</strong> {selectedMovie.release_date}
          </p>
          <p>
            <strong>Runtime:</strong> {selectedMovie.runtime} minutes
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
