import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

import { Container, CardWrapper, MovieName } from './MoviesList.styled';

const MoviesList = ({ movies, navProp }) => {
  const location = useLocation();

  return (
    <Container>
      {movies.map(({ id, title, name }) => (
        <CardWrapper key={id}>
          {navProp ? (
            <Link to={`${id}`} state={{ from: location }}>
              <MovieName>{title ? title : name}</MovieName>
            </Link>
          ) : (
            <Link to={`movies/${id}`}>
              <MovieName>{title ? title : name}</MovieName>
            </Link>
          )}
        </CardWrapper>
      ))}
    </Container>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
  navProp: PropTypes.object,
};

MoviesList.defaultProps = {
  // bla: 'test',
};

export default MoviesList;
