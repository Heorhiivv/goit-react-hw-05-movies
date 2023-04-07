import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const imgBasePath = 'https://image.tmdb.org/t/p/w185/';

const MovieMainInfo = ({ mainInfo, to }) => {
  const {
    poster_path,
    title,
    name,
    release_date,
    vote_average,
    genres,
    overview,
  } = mainInfo;
  return (
    <>
      <Link to={to.current}>
        <button type="button">Go back</button>
      </Link>
      <div>
        <img src={`${imgBasePath}${poster_path}`} alt="movie poster" />
        <h3>
          {title ? title : name} ({release_date.slice(0, -6)})
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
    </>
  );
};

MovieMainInfo.propTypes = {
  mainInfo: PropTypes.object,
  backBtnClick: PropTypes.func,
};

MovieMainInfo.defaultProps = {
  // bla: 'test',
};

export default MovieMainInfo;
