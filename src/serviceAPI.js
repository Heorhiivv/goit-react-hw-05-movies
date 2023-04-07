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

    return movie.data;
  } catch (error) {
    return error;
  }
};
export const getMovieCast = async movieId => {
  try {
    const movieCast = await axios(
      `${baseURL}/movie/${movieId}/credits?api_key=${KEY}`
    );
    return movieCast.data.cast;
  } catch (error) {
    return error;
  }
};

export const getMovieReviews = async movieId => {
  try {
    const movieReviews = await axios(
      `${baseURL}/movie/${movieId}/reviews?api_key=${KEY}`
    );
    return movieReviews.data.results;
  } catch (error) {
    return error;
  }
};

export const getSearchMovies = async searchQuery => {
  try {
    const movies = await axios(
      `${baseURL}/search/movie?query=${searchQuery}&api_key=${KEY}`
    );
    return movies.data.results;
  } catch (error) {
    return error;
  }
};

// https://api.themoviedb.org/3/search/movie?api_key=256&language=en-US&page=1&include_adult=false
