import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';

import styled from 'styled-components';

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;

  :hover {
    color: orangered;
  }
`;

const BackArrow = ({ to, children }) => (
  <StyledLink to={to.current}>
    <HiArrowLeft size="24" />
    {children}
  </StyledLink>
);

BackArrow.propTypes = {
  // bla: PropTypes.string,
};

BackArrow.defaultProps = {
  // bla: 'test',
};

export default BackArrow;
