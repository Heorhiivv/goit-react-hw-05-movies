import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../serviceAPI';
import MovieList from '../../components/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const trendingMovies = async () => {
      const movies = await getTrendingMovies();
      setMovies(movies);
    };
    trendingMovies();
  }, []);

  return movies.length > 0 && <MovieList movies={movies} />;
};

export default Home;
