import React, { Suspense } from 'react';
import { StyledNavLink } from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';
import ReactLoading from 'react-loading';
import PropTypes from 'prop-types';

const Example = ({ type, color }) => (
  <ReactLoading type={type} color={color} height={667} width={375} />
);

const SharedLayout = () => (
  <div>
    <nav>
      <StyledNavLink to="/" end>
        Home
      </StyledNavLink>
      <StyledNavLink to="/movies">Movies</StyledNavLink>
    </nav>

    <main>
      <Suspense fallback={<Example type={'bubbles'} color={'#c4cf04'} />}>
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
