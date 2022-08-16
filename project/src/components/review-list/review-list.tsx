import { AuthorizationStatus } from '../../const';
import type { CommentAuth, Comment } from '../../types/types';

import Form from '../form/form';
import Review from '../review/review';

type ReviewListProps = {
    reviews: Comment[];
    authorizationStatus: AuthorizationStatus;
    onSubmit: (formData: Omit<CommentAuth, 'id'>) => void;
    isSubmiting: boolean;
}

const ReviewList = ({ reviews, authorizationStatus, onSubmit, isSubmiting }: ReviewListProps) => (
  <section className="property__reviews reviews">
    {reviews.length > 0 && (
      <>
        <h2 className="reviews__title">
          Reviews · <span className="reviews__amount">{reviews.length}</span>
        </h2>
        <ul className="reviews__list">
          {reviews.map((review) => (
            <Review key={review.id} {...review} />
          ))}
        </ul>
      </>)}
    {authorizationStatus === AuthorizationStatus.Auth && <Form onSubmit={onSubmit} isSubmiting={isSubmiting} />}
  </section>
);

export default ReviewList;
