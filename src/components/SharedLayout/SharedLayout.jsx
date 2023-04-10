import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import ReactLoading from 'react-loading';

import { Link, Container, Header } from './SharedLayout.styled';

const Example = ({ type, color }) => (
  <ReactLoading type={type} color={color} height={667} width={375} />
);

const SharedLayout = () => (
  <Container>
    <Header>
      <nav>
        <Link to="/" end>
          Home
        </Link>
        <Link to="/movies">Movies</Link>
      </nav>
    </Header>
    <main>
      <Suspense fallback={<Example type={'bubbles'} color={'#c4cf04'} />}>
        <Outlet />
      </Suspense>
    </main>
  </Container>
);

export default SharedLayout;
