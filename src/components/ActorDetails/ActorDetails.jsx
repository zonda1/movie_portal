import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchActorById,loading } from '../../store/thunk/thunk';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import './ActorDetails.css';

const ActorDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { selectedActor,loading } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchActorById(id));
  }, [id]);

  useEffect(() => {
    if( !loading && !selectedActor) {
      navigate( "/not_found" , { replace: true})
    }
  }, [loading, selectedActor])

  if (!selectedActor) {
    return <div style={{flex:'1 0 auto',fontSize:'3rem',padding:'30px'}}>Loading...</div>;
  }

  return (
    <div className='actor-details__wrapper'>
      <div className='return'>
        <Link to={'/actors'} className='return__link'>
          <ArrowBackIosNewIcon />
        </Link>
      </div>
      <div className='actor-details'>
        <img
          className='actor-details__poster'
          src={`https://image.tmdb.org/t/p/w500/${selectedActor.profile_path}`}
          alt={selectedActor.name}
        />

        <div className='actor-details__info'>
          <h1 className='actor-details__title'>{selectedActor.name}</h1>

          <p className='actor-details__overview'>{selectedActor.biography}</p>
        </div>
      </div>
    </div>
  );
};

export default ActorDetails;
