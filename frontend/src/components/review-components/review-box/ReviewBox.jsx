import React from 'react'
import './ReviewBox.css'

function ReviewBox() {
    function SeeMoreReviews() {
        const reviewBoxWrapper = document.getElementById('reviewBoxWrapper');
        const seeMoreReviews = document.getElementById('seeMoreReviews');

        // Get currently hidden blogs
        const hiddenReviews = reviewBoxWrapper.querySelectorAll('.review-box-layout.hidden');

        // Reveal 3 at a time
        const reviewsToShow = Array.from(hiddenReviews).slice(0, 3);
        reviewsToShow.forEach(review => review.classList.remove('hidden'));

        // Check again if any hidden blogs are left after showing
        const remainingHidden = reviewBoxWrapper.querySelectorAll('.review-box-layout.hidden');
        if (remainingHidden.length === 0) {
            seeMoreReviews.style.display = 'none';
        }
    }

    return (
        <>
            <div className='review-box-wrapper' id='reviewBoxWrapper'>
                <div className='review-box-layout'>
                    <div className='review-box-container'>
                        <div className='customer-feedback'>
                            <i class="fa-solid fa-quote-left"></i>
                            <p>Extremely well structured, and very well presented. I believe the change that I would expect would be the change in the green screen. The BG could've been more simplistic other I really love everything you guys do! Thanks to each and everyone in the team for making it possible!</p>
                        </div>
                        <div className='user-rating'>
                            <i class="fa-regular fa-user"></i>
                            <div className="user-info">
                                <p>John Doe<br />Rating</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='review-box-layout'>
                    <div className='review-box-container'>
                        <div className='customer-feedback'>
                            <i class="fa-solid fa-quote-left"></i>
                            <p>Extremely well structured, and very well presented. I believe the change that I would expect would be the change in the green screen. The BG could've been more simplistic other I really love everything you guys do! Thanks to each and everyone in the team for making it possible!</p>
                        </div>
                        <div className='user-rating'>
                            <i class="fa-regular fa-user"></i>
                            <div className="user-info">
                                <p>John Doe<br />Rating</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='review-box-layout'>
                    <div className='review-box-container'>
                        <div className='customer-feedback'>
                            <i class="fa-solid fa-quote-left"></i>
                            <p>Extremely well structured, and very well presented. I believe the change that I would expect would be the change in the green screen. The BG could've been more simplistic other I really love everything you guys do! Thanks to each and everyone in the team for making it possible!</p>
                        </div>
                        <div className='user-rating'>
                            <i class="fa-regular fa-user"></i>
                            <div className="user-info">
                                <p>John Doe<br />Rating</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='review-box-layout hidden'>
                    <div className='review-box-container'>
                        <div className='customer-feedback'>
                            <i class="fa-solid fa-quote-left"></i>
                            <p>Extremely well structured, and very well presented. I believe the change that I would expect would be the change in the green screen. The BG could've been more simplistic other I really love everything you guys do! Thanks to each and everyone in the team for making it possible!</p>
                        </div>
                        <div className='user-rating'>
                            <i class="fa-regular fa-user"></i>
                            <div className="user-info">
                                <p>John Doe<br />Rating</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='review-box-layout hidden'>
                    <div className='review-box-container'>
                        <div className='customer-feedback'>
                            <i class="fa-solid fa-quote-left"></i>
                            <p>Extremely well structured, and very well presented. I believe the change that I would expect would be the change in the green screen. The BG could've been more simplistic other I really love everything you guys do! Thanks to each and everyone in the team for making it possible!</p>
                        </div>
                        <div className='user-rating'>
                            <i class="fa-regular fa-user"></i>
                            <div className="user-info">
                                <p>John Doe<br />Rating</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='review-box-layout hidden'>
                    <div className='review-box-container'>
                        <div className='customer-feedback'>
                            <i class="fa-solid fa-quote-left"></i>
                            <p>Extremely well structured, and very well presented. I believe the change that I would expect would be the change in the green screen. The BG could've been more simplistic other I really love everything you guys do! Thanks to each and everyone in the team for making it possible!</p>
                        </div>
                        <div className='user-rating'>
                            <i class="fa-regular fa-user"></i>
                            <div className="user-info">
                                <p>John Doe<br />Rating</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='review-box-layout hidden'>
                    <div className='review-box-container'>
                        <div className='customer-feedback'>
                            <i class="fa-solid fa-quote-left"></i>
                            <p>Extremely well structured, and very well presented. I believe the change that I would expect would be the change in the green screen. The BG could've been more simplistic other I really love everything you guys do! Thanks to each and everyone in the team for making it possible!</p>
                        </div>
                        <div className='user-rating'>
                            <i class="fa-regular fa-user"></i>
                            <div className="user-info">
                                <p>John Doe<br />Rating</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='review-box-layout hidden'>
                    <div className='review-box-container'>
                        <div className='customer-feedback'>
                            <i class="fa-solid fa-quote-left"></i>
                            <p>Extremely well structured, and very well presented. I believe the change that I would expect would be the change in the green screen. The BG could've been more simplistic other I really love everything you guys do! Thanks to each and everyone in the team for making it possible!</p>
                        </div>
                        <div className='user-rating'>
                            <i class="fa-regular fa-user"></i>
                            <div className="user-info">
                                <p>John Doe<br />Rating</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='review-loading-button'>
                <button id='seeMoreReviews' onClick={SeeMoreReviews}>See More Reviews</button>
            </div>
        </>
    )
}

export default ReviewBox
