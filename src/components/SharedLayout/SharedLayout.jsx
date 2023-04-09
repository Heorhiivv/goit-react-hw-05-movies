import React, { Suspense } from 'react';
import { StyledNavLink } from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

const SharedLayout = () => (
  <div>
    <nav>
      <StyledNavLink to="/" end>
        Home
      </StyledNavLink>
      <StyledNavLink to="/movies">Movies</StyledNavLink>
    </nav>

    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
  </div>
);

SharedLayout.propTypes = {
  // bla: PropTypes.string,
};

SharedLayout.defaultProps = {
  // bla: 'test',
};

export default SharedLayout;
