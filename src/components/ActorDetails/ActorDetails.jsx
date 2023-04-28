import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchActorById } from '../../store/thunk/thunk';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Loader from '../Loader/Loader';
import './ActorDetails.css';

const ActorDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { selectedActor, loading } = useSelector((state) => state);
 
  useEffect(() => {
    dispatch(fetchActorById(id));
  }, [id]);

  useEffect(() => {
    if (!loading && !selectedActor) {
      navigate('/not_found', { replace: true });
    }
  }, [loading, selectedActor]);

  if (!selectedActor) {
    return <Loader />;
  }

  return (
    <div className='actor-details__wrapper'>
      <div className='return'>
        <Link to={'/actors'} className='return__link'>
          <ArrowBackIosNewIcon />
        </Link>
      </div>
      <div className='actor-details'>
        <div className='actor-details__personal'>
          <img
            className='actor-details__poster'
            src={`https://image.tmdb.org/t/p/w500/${selectedActor.profile_path}`}
            alt={selectedActor.name}
          />
          <div className='actor-details__info'>
            <p className='actor-detail actor-detail--role '>
              Profession
              <br />
              <span>{selectedActor.known_for_department}</span>
            </p>
            <p className='actor-detail actor-detail--popularity '>
              Popularity
              <br />
              <span>{selectedActor.popularity}</span>
            </p>
            <p className='actor-detail actor-detail--dob '>
              Date of birth
              <br />
              <span>{selectedActor.birthday}</span>
            </p>
            {!!selectedActor.deathday && (
              <p className='actor-detail actor-detail--dod '>
                Date of death
                <br />
                <span>{selectedActor.deathday}</span>
              </p>
            )}
            <p className='actor-detail actor-detail--place '>
              Place of birth
              <br />
              <span>{selectedActor.place_of_birth}</span>
            </p>
            <p className='actor-detail actor-detail--known-for'>
              Known as
              <br />
              {selectedActor.also_known_as.map((el,index) => (
                <span key={index}>{el}</span>
              ))}
            </p>
          </div>
        </div>

        <div className='actor-details__bio'>
          <h1 className='actor-details__title'>{selectedActor.name}</h1>
          <h2>Biography</h2>
          <p className='actor-details__overview'>{selectedActor.biography}</p>
        </div>
      </div>
    </div>
  );
};

export default ActorDetails;
