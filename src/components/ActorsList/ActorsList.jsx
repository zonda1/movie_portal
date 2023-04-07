import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchActors, fetchActorsByQuery } from '../../store/thunk/thunk';
import './ActorsList.css';
import { Pagination, Stack, TextField } from '@mui/material';
import { DebounceInput } from 'react-debounce-input';

const ActorsList = () => {
  const { fetchedActors, totalPages } = useSelector((state) => state.movies);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  console.log(fetchedActors);

  useEffect(() => {
    if (query.length>2) {
      dispatch(fetchActorsByQuery(query, page));
    } else {
      dispatch(fetchActors(page));
    }
  }, [page, query]);

  return (
    <div className='actors-list__wrapper'>
      <div className='actors-list__container'>
        <div className='filters actors-list__filters'>
          {/* <TextField label='Search' style={{ flex: '1 0 200px' }}>
          </TextField> */}
            <DebounceInput
              minLength={3}
              debounceTimeout={1000}
              placeholder='Search'
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
        {!!totalPages && <Stack>
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
        </Stack>}
      </div>
    </div>
  );
};

export default ActorsList;
