import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './ReviewForm.css'; // Link to the external CSS file

function ReviewForm({ onClose }) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(null);

    return (
        <div className="review-form-overlay">
            <div className="review-form-container">
                <button className="review-form-close-button" onClick={onClose}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
                <h2 className="review-title">Customer Feedback</h2>
                <form className="review-form">
                    {/* Name Input */}
                    <div className="review-form-group">
                        <label className="review-form-label"><b>Name</b></label>
                        <input
                            type="text"
                            className="form-input"
                            placeholder="Enter your name"
                        />
                    </div>

                    {/* Star Rating */}
                    <div className="review-form-group">
                        <label className="review-form-label"><b>Rating</b></label>
                        <div className="star-rating">
                            {[...Array(5)].map((_, index) => {
                                const currentRating = index + 1;
                                return (
                                    <button
                                        type="button"
                                        key={index}
                                        className="star-button"
                                        onClick={() => setRating(currentRating)}
                                        onMouseEnter={() => setHover(currentRating)}
                                        onMouseLeave={() => setHover(null)}
                                    >
                                        <FaStar
                                            size={28}
                                            className={`star-icon ${currentRating <= (hover || rating)
                                                ? 'active'
                                                : ''
                                                }`}
                                        />
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Textarea */}
                    <div className="review-form-group">
                        <label className="review-form-label"><b>Feedback</b></label>
                        <textarea
                            rows="4"
                            className="form-textarea"
                            placeholder="Write your feedback here..."
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="review-form-submit">
                        <button type="submit" className="review-submit-button">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ReviewForm;
