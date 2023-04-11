import React, { useState } from 'react';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Header from '../Header/Header';
import MoviesList from '../MoviesList/MoviesList';
import MovieDetails from '../MovieDetails/MovieDetails';
import Footer from '../Footer/Footer';
import ActorsList from '../ActorsList/ActorsList';
import ActorDetails from '../ActorDetails/ActorDetails';
import NotFound from '../NotFound/NotFound';

const App = () => {
  const [stateCategory, setStateCategory] = useState('popular');

  const categoryChanger = (value) => {
    setStateCategory(value);
  };

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<Navigate to={'/movies'} />} />
        <Route
          path='/movies'
          element={
            <MoviesList category={stateCategory} filter={categoryChanger} />
          }
        ></Route>
        <Route path='/movies/:id' element={<MovieDetails />} />
        <Route path='/actors' element={<ActorsList />} />
        <Route path='/person/:id' element={<ActorDetails />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
