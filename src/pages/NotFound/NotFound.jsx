import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './NotFound.styles';

const NotFound = props => (
  <div className="NotFoundWrapper">
    <p>It looks like something went wrong...</p>
  </div>
);

NotFound.propTypes = {
  // bla: PropTypes.string,
};

NotFound.defaultProps = {
  // bla: 'test',
};

export default NotFound;
