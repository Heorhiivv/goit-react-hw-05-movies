import {
  useParams,
  useNavigate,
  Link,
  Outlet,
  useLocation,
} from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { getMovieDetailsbyId } from '../../serviceAPI';
import MovieAddInform from '../../components/MovieAddInform';
import MovieMainInfo from '../../components/MovieMainInfo';

const MovieDetails = () => {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState('');
  const location = useLocation();

  const backClick = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const handleClick = async () => {
      const movie = await getMovieDetailsbyId(id);
      setMovieInfo(movie);
    };

    handleClick();
  }, [id]);

  // const handleBackClick = () => {
  //   navigate('/');
  // };
  // , { replace: true }

  return (
    movieInfo && (
      <>
        <MovieMainInfo mainInfo={movieInfo} to={backClick} />
        <MovieAddInform />
        <Outlet />
      </>
    )
  );
};

export default MovieDetails;
