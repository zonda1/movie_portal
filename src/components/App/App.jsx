import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from '../Header/Header';
import MoviesList from '../MoviesList/MoviesList';
import MovieDetails from '../MovieDetails/MovieDetails';
import Footer from '../Footer/Footer';

const App=()=> {
  return (
    <>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MoviesList category='popular' />} />
          <Route path='/movies/:id' element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
