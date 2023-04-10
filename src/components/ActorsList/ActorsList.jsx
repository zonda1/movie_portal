import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchActors, fetchActorsByQuery } from '../../store/thunk/thunk';
import { Pagination, Stack } from '@mui/material';
import { DebounceInput } from 'react-debounce-input';
import Loader from '../Loader/Loader';
import './ActorsList.css';

const ActorsList = () => {
  const { fetchedActors, totalPages } = useSelector((state) => state.movies);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (query.length > 2) {
      if (query.match('[^a-zA-Z]')) {
        throw new Error('Only letters are permitted');
      }
      dispatch(fetchActorsByQuery(query, page));
    } else {
      dispatch(fetchActors(page));
    }
  }, [page, query]);

  useEffect(()=>{
    if (page>totalPages) {
      setPage(1);
    }
  },[page,totalPages] )


  if (!fetchedActors) {
    return <Loader />;
  }

  return (
    <div className='actors-list__wrapper'>
      <div className='actors-list__container'>
        <div className='filters actors-list__filters'>
          <DebounceInput
            minLength={3}
            debounceTimeout={1000}
            placeholder='Search'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          ></DebounceInput>
        </div>
        <h2 className='actors-list__title'>Actors</h2>
        <ul className='actors-list'>
          {fetchedActors.map((actor) => (
            <li className='actors-item' key={actor.id}>
              <a className='actors-link' href={`/actors/${actor.id}`}>
                <img
                  className='actors-poster'
                  src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                  alt={actor.title}
                />
                <span className='actors-name'>{actor.name}</span>
              </a>
            </li>
          ))}
        </ul>
        {!!totalPages && (
          <Stack>
            <Pagination
              count={totalPages}
              page={page}
              color='primary'
              size='large'
              showFirstButton
              showLastButton
              onChange={(_, num) => setPage(num)}
              sx={{ marginX: 'auto', marginY: 2 }}
            ></Pagination>
          </Stack>
        )}
      </div>
    </div>
  );
};

export default ActorsList;
