import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//import { Test } from './MoviesList.styles';

const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, title, name }) => (
        <li key={id}>
          <Link to={`/movies/${id}`}>{title ? title : name}</Link>
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
