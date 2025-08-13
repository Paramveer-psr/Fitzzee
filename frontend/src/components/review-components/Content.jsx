import React from "react";
import { useState } from "react";
import ReviewForm from "./review-form/ReviewForm";
import "./Content.css";

function Content({ user }) {
  const [showReviewForm, setShowReviewForm] = useState(false);
  return (
    <>
      <h1 className="review-page-heading">
        Help us to improve your experience!
      </h1>
      <div className="write-review">
        <i class="fa-solid fa-pen-to-square">Write a Review</i>
        <button
          onClick={() => setShowReviewForm(true)}
          className="review-content"
        >
          Click Here
        </button>
        {showReviewForm && (
          <ReviewForm user={user} onClose={() => setShowReviewForm(false)} />
        )}
      </div>
    </>
  );
}

export default Content;
