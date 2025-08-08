import React from 'react'
import '../about/About.css'
import aboutImg from './images/about.gif';

function About() {
    return (
        <section>
            <div className="about">
                <div className="left-about">
                    <h1>About Fitzzee</h1>
                    <p>Welcome to Fitzzee, where we're passionate about health and fitness!</p>
                    <h4>Our Mission</h4>
                    <p>At Fitzzee, we're dedicated to helping individuals lead healthier lives through personalized fitness solutions
                        and insightful health information. Our mission is to empower you to take control of your well-being and achieve
                        your fitness goals.</p>

                    <h4>Who We Are?</h4>
                    <p>Fitzzee was founded in 2023 by a team of health enthusiasts who saw the need for accessible and reliable health
                        and fitness resources. With backgrounds in healthcare, technology, and fitness training, we bring together
                        expertise from diverse fields to provide comprehensive solutions for our users.</p>
                    <h4>Our Commitment</h4>
                    <p>At Fitzzee, we're committed to delivering accurate, up-to-date information and innovative tools to support your
                        health and fitness goals. Whether you're looking to improve your physical fitness, manage a health condition, or
                        simply live a healthier lifestyle, we're here to guide you every step of the way.</p>
                    <p><span>Join us on the path to better health and fitness with Fitzzee!</span></p>
                </div>
                <div className="right-about">
                    <img src={aboutImg} alt="about-img" />
                </div>
            </div>
        </section>
    )
}

export default About
