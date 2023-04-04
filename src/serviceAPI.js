import axios from 'axios';
const KEY = '41e808d207b72bfbdc489752dd856bd5';
const baseURL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
  try {
    const movies = await axios(`${baseURL}/trending/all/day?api_key=${KEY}`);
    return movies.data.results;
  } catch (error) {
    return error;
  }
};

export const getMovieDetailsbyId = async movieId => {
  try {
    const movie = await axios(`${baseURL}/movie/${movieId}?api_key=${KEY}`);
    return movie;
  } catch (error) {
    return error;
  }
};
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=41e808d207b72bfbdc489752dd856bd5&language=en-US
