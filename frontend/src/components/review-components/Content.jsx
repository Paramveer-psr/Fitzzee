import React from 'react'
import { useState } from 'react';
import ReviewForm from './review-form/ReviewForm'
import './Content.css'
import ReviewBox from './review-box/ReviewBox';

function Content() {
  const [showReviewForm, setShowReviewForm] = useState(false);
  return (
    <>
      <div className='content-layout'>
        <h1 className='review-page-heading'>
          Help us to improve your experience!
        </h1>
        <div className='write-review'>
          <div className='review-content-wrapper'>
            <i className="fa-solid fa-pen-to-square">Write a Review</i>
            <button onClick={() => setShowReviewForm(true)} className='review-button'>Click Here</button>
          </div>
          {showReviewForm && <ReviewForm onClose={() => setShowReviewForm(false)} />}
        </div>
        <div className='customer-reviews'>
          <span>Our Latest Reviews</span>
        </div>
        <ReviewBox />
      </div>
    </>
  )
}

export default Content
