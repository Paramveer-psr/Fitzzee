import React from 'react'
import './Testimonials.css'
import pic1 from '../../images/pic1.jpg'
import pic2 from '../../images/pic2.jpg'
import pic3 from '../../images/pic3.jpg'


function Testimonials() {

    const testimonial = [
        {
            name: 'Sudershan K.',
            feedback: "Joining Fitzee was the best decision I made this year. The trainers are supportive, and the workouts are fun but challenging. I’ve never felt stronger!",
            image: pic1,
        },
        {
            name: 'George H.',
            feedback: "Fitzee helped me transform my lifestyle. The meal plans, personalized workouts, and motivation kept me consistent. I lost 8kg in 3 months!",
            image: pic3,
        },
        {
            name: 'Andrea W.',
            feedback: "The atmosphere at Fitzee is amazing! It’s more than a gym — it’s a community that pushes you to be your best every day and motivates you.",
            image: pic2,
        },
    ];

    const stars = Array.from({ length: 5 });
    return (
        <>
            <div className='testimonials-layout'>
                <h1 className="testimonial-heading">Client's Testimonials</h1>
                <div className='testimonials-container'>
                {testimonial.map((item, index) => (
                    <div className='client-testimonial'>
                        <div className='client-detail-wrapper'>
                            <img className='client-pic' src={item.image} alt='user' />
                            <div className='client-name-rating'>
                                <h4 className='client-name'>{item.name}</h4>
                                <div>
                                    {stars.map((_, index) => (
                                        <i key={index} className="fa-solid fa-star" ></i>
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                        <p className='client-feedback'><i class="fa-solid fa-quote-left"></i><br/>{item.feedback}</p>
                    </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Testimonials
