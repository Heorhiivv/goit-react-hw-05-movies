import React, { useEffect, useState } from 'react';
import { getMovieCast } from '../../serviceAPI';
import PropTypes from 'prop-types';
import { useParams, Link, Outlet } from 'react-router-dom';
//import { Test } from './Cast.styles';
const imgBasePath = 'https://image.tmdb.org/t/p/w185/';

const Cast = () => {
  const { id } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    const handleMovieCast = async () => {
      const cast = await getMovieCast(id);
      setMovieCast(cast);
    };

    handleMovieCast();
  }, [id]);
  console.log('this is cast request --->', movieCast);

  return (
    movieCast.length > 0 && (
      <ul>
        {movieCast.map(castCrew => (
          <li key={castCrew.id}>
            <img
              src={`${imgBasePath}${castCrew.profile_path}`}
              alt="cast pic"
            />
            <p>{castCrew.name}</p>
            <p>{castCrew.character}</p>
          </li>
        ))}
      </ul>
    )
  );
};

Cast.propTypes = {
  // bla: PropTypes.string,
};

Cast.defaultProps = {
  // bla: 'test',
};

export default Cast;
