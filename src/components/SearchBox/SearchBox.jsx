import React from 'react';
import { Form, Formik } from 'formik';
import PropTypes from 'prop-types';
//import { Test } from './SearchBox.styles';

import { Wrapper, Input, Icon, Button } from './SearchBox.styled';

const SearchBox = ({ getMovies, updateQueryString, searchMovie }) => (
  <Formik>
    <Form onSubmit={getMovies}>
      <Wrapper>
        <Icon />
        <Input
          type="text"
          name="searchMovie"
          value={searchMovie}
          onChange={e => updateQueryString(e.target.value)}
        />
      </Wrapper>
      <Button type="submit">Search</Button>
    </Form>
  </Formik>
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
