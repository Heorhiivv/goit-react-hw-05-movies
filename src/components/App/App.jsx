// import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { StyledNavLink } from './App.styled';

import Home from '../../pages/Home';
import Movies from '../../pages/Movies';
import NotFound from '../../pages/NotFound';
import MovieDetails from '../../pages/MovieDetails';

import Cast from '../Cast';
import Reviews from '../Reviews';
import SharedLayout from '../SharedLayout';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
