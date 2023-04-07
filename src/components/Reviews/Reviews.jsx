import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from '../../serviceAPI';
import PropTypes from 'prop-types';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const handleMovieReviews = async () => {
      const reviewsList = await getMovieReviews(id);
      setReviews(reviewsList);
    };
    handleMovieReviews();
  }, [id]);

  return reviews.length > 0 ? (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <p>Author: {review.author}</p>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p>This movie has no reviews yet...</p>
  );
};

// <div className="ReviewsWrapper">
//   Test content
// </div>

Reviews.propTypes = {
  // bla: PropTypes.string,
};

Reviews.defaultProps = {
  // bla: 'test',
};

export default Reviews;
