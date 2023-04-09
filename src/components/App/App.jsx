// import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import('../../pages/Home'));
const Movies = lazy(() => import('../../pages/Movies'));
const NotFound = lazy(() => import('../../pages/NotFound'));
const MovieDetails = lazy(() => import('../../pages/MovieDetails'));
const Reviews = lazy(() => import('../Reviews'));
const Cast = lazy(() => import('../Cast'));
const SharedLayout = lazy(() => import('../SharedLayout'));

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
