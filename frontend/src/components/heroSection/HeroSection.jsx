import React, { useState } from 'react';
import '../heroSection/HeroSection.css';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';

const posters = [
  {
    image: img1,
    text: (
      <>
        Welcome to Fitzee!<br />
        Where Your Fitness Journey Begins - and Grows for Life.
      </>
    ),
  },
  {
    image: img2,
  },
  {
    image: img3,
  },
];

function HeroSection() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % posters.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + posters.length) % posters.length);

  return (
    <div className="hero-section">
      <div className="hero-slider">
        <img src={posters[current].image} alt="Fitness Poster" className="hero-image" />
        <div className="hero-overlay">
          <h1 className="hero-text">{posters[current].text}</h1>
        </div>
        <button className="hero-btn hero-btn-left" onClick={prevSlide}><i className="fa-solid fa-arrow-left"></i></button>
        <button className="hero-btn hero-btn-right" onClick={nextSlide}><i className="fa-solid fa-arrow-right"></i></button>
      </div>
    </div>
  );
}

export default HeroSection;