import { Link } from 'react-router-dom';

const MovieAddInform = () => (
  <div>
    <p>Additional information</p>
    <ul>
      <li>
        <Link to="cast">Cast</Link>
      </li>
      <li>
        <Link to="reviews">Reviews</Link>
      </li>
    </ul>
  </div>
);

export default MovieAddInform;
