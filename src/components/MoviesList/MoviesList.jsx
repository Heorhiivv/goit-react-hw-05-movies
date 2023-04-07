import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
//import { Test } from './MoviesList.styles';
import { getSearchMovies } from '../../serviceAPI';

const MoviesList = ({ movies, navProp }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(({ id, title, name }) => (
        <li key={id}>
          {navProp ? (
            <Link to={`${id}`} state={{ from: location }}>
              {title ? title : name}
            </Link>
          ) : (
            <Link to={`movies/${id}`}>{title ? title : name}</Link>
          )}
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array,
};

MoviesList.defaultProps = {
  // bla: 'test',
};

export default MoviesList;
