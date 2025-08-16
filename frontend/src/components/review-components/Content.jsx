import { useEffect, useState } from "react";
import ReviewForm from "./review-form/ReviewForm";
import "./Content.css";
import ReviewBox from "./review-box/ReviewBox";
import { api } from "../../utils/ApiService";

function Content({ user }) {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [message, setMessage] = useState("");
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    rating: 0,
    feedback: "",
  });
  const onChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  useEffect(() => {
    const getReviews = async () => {
      const { data } = await api.get("/reviews/");
      // console.log(response);
      setReviews(data.data);
    };
    getReviews();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await api.post("/reviews/add-review", formData);
    if (data.success === true) {
      formData.rating = 0;
      formData.feedback = "";
      setMessage("Review Posted");
      setReviews([...reviews, data.data]);
      setShowReviewForm(false);
      setMessage("");
    } else {
      setMessage(data.message || "Please try again");
    }
  };
  const [displayedReviews, setDisplayedReviews] = useState([]);
  const [reviewsToShow, setReviewsToShow] = useState(3);

  useEffect(() => {
    // Update displayed reviews when the reviews array or reviewsToShow count changes
    setDisplayedReviews(reviews.slice(0, reviewsToShow));
  }, [reviews, reviewsToShow]);

  const handleSeeMore = () => {
    setReviewsToShow((prevCount) => prevCount + 3);
  };

  return (
    <>
      <div className="content-layout">
        <h1 className="review-page-heading">
          Help us to improve your experience!
        </h1>
        <div className="write-review">
          <div className="review-content-wrapper">
            <i className="fa-solid fa-pen-to-square">Write a Review</i>
            <button
              onClick={() => setShowReviewForm(true)}
              className="review-button"
            >
              Click Here
            </button>
          </div>
          {showReviewForm && (
            <ReviewForm
              user={user}
              message={message}
              formData={formData}
              onChange={onChange}
              handleSubmit={handleSubmit}
              onClose={() => setShowReviewForm(false)}
            />
          )}
        </div>
        <div className="customer-reviews">
          <span>Our Latest Reviews</span>
        </div>
        <div className="review-box-wrapper" id="reviewBoxWrapper">
          {displayedReviews.map((review) => (
            <ReviewBox key={review._id || review.id} review={review} />
          ))}
        </div>
        <div className="review-loading-button">
          {reviews.length > reviewsToShow && (
            <button id="seeMoreReviews" onClick={handleSeeMore}>
              See More Reviews
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Content;
