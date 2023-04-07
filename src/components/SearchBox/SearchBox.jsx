import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './SearchBox.styles';

const SearchBox = ({ getMovies, updateQueryString, searchMovie }) => (
  <form onSubmit={getMovies}>
    <input
      type="text"
      name="searchMovie"
      value={searchMovie}
      onChange={e => updateQueryString(e.target.value)}
    />

    <button type="submit">Search</button>
  </form>
);

SearchBox.propTypes = {
  getMovies: PropTypes.func.isRequired,
  updateQueryString: PropTypes.func.isRequired,
  searchMovie: PropTypes.string.isRequired,
  // bla: PropTypes.string,
};

SearchBox.defaultProps = {
  // bla: 'test',
};

export default SearchBox;
