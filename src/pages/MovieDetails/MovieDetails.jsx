import { useParams, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieDetailsbyId } from '../../serviceAPI';

import PropTypes from 'prop-types';

const MovieDetails = () => {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState('');

  useEffect(() => {
    const handleClick = async () => {
      const movie = await getMovieDetailsbyId(id);
      setMovieInfo(movie.data);
    };
    handleClick();
  }, [id]);
  console.log(movieInfo);

  const {
    title,
    vote_average,
    name,
    overview,
    genres,
    poster_path,
    release_date,
  } = movieInfo;
  return (
    movieInfo && (
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w185/${poster_path}`}
          alt="movie poster"
        />
        <h3>
          {title ? title : name} {release_date.slice(0, -6)}
        </h3>
        <p>User score: {Math.round(Number(vote_average) * 10)}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <ul>
          {genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
    )
  );
};

// const movie = getMovieDetailsbyId(id);
// console.log(movie);

MovieDetails.propTypes = {
  // bla: PropTypes.string,
};

MovieDetails.defaultProps = {
  // bla: 'test',
};

export default MovieDetails;

// {
//   /* <img src={`https://image.tmdb.org/t/p/w185/${poster_path}`} alt="movie poster" /> */
// }
// {
//   /* <b>{movieInfo.title ? movieInfo.title : movieInfo.name}</b> */
// }
// {
//   /* <p>User scrore: ${}</p> */
// }
