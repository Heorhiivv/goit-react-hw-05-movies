// import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { StyledNavLink } from './App.styled';

import Home from '../../pages/Home';
import Movies from '../../pages/Movies';
import NotFound from '../../pages/NotFound';
import MovieDetails from '../../pages/MovieDetails';

const App = () => {
  return (
    <div>
      <nav>
        <StyledNavLink to="/" end>
          Home
        </StyledNavLink>
        <StyledNavLink to="/movies">Movies</StyledNavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
