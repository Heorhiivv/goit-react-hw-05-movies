import { useSearchParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getSearchMovies } from '../../serviceAPI';
import MoviesList from '../../components/MoviesList';
import SearchBox from '../../components/SearchBox';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [moviesList, setMoviesList] = useState('');
  const searchMovie = searchParams.get(`query`) ?? '';
  const location = useLocation();

  useEffect(() => {
    if (!searchMovie) return;

    const getMovies = async () => {
      const movies = await getSearchMovies(searchMovie);
      setMoviesList(movies);
    };

    getMovies();
    // eslint-disable-next-line
  }, []);

  const getMoviesByClick = async e => {
    e.preventDefault();
    const movies = await getSearchMovies(searchMovie);
    setMoviesList(movies);
  };

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <>
      <SearchBox
        getMovies={getMoviesByClick}
        updateQueryString={updateQueryString}
        searchMovie={searchMovie}
      />

      {moviesList && <MoviesList movies={moviesList} navProp={location} />}
    </>
  );
};

export default Movies;
