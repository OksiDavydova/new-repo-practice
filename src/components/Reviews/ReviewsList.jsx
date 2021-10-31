import { ReactComponent as ReviewsIcon } from "../images/reviewsItem.svg";
import s from "./Reviews.module.css";
import PropTypes from "prop-types";

export default function ReviewsList({ reviews }) {
  return (
    <ul className={s.reviews_list}>
      {reviews.map(({ author, content, id, created_at }) => (
        <li key={id} className={s.reviews_item}>
          <h2 className={s.reviews_subhead}>
            <ReviewsIcon className={s.reviews_icon} />
            {author}
            <span className={s.reviews_subheadPart}>
              /{created_at.substring(0, 10)}
            </span>
          </h2>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
}

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      author: PropTypes.string,
      content: PropTypes.string,
      created_at: PropTypes.string,
    })
  ),
};
