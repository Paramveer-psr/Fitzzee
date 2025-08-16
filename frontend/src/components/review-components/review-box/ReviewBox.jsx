import "./ReviewBox.css";
import { FaStar } from "react-icons/fa";

function ReviewBox({ review }) {
  return (
    <>
      <div className="review-box-layout">
        <div className="review-box-container">
          <div className="customer-feedback">
            <i class="fa-solid fa-quote-left"></i>
            <p>{review.feedback}</p>
          </div>
          <div className="user-rating">
            <i class="fa-regular fa-user"></i>
            <div className="user-info">
              <div>
                {review.user.name}
                <br />
                {[...Array(review.rating)].map((_, index) => (
                  <FaStar color="#facc15" key={index} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReviewBox;
