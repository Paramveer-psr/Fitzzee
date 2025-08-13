import React from 'react'
import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../navbar/Navbar.css'
import myImage from '../../../src/images/logo.png'
import Auth from '../login-signup/Auth';


function Navbar() {
  const [showAuth, setShowAuth] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (section) => {
    if (location.pathname === '/') {
      // Already at home – dispatch custom scroll event
      const event = new CustomEvent('scrollToSection', { detail: section });
      window.dispatchEvent(event);
    } else {
      // Navigate to home, then scroll via location.state
      navigate('/', { state: { scrollTo: section } });
    }
  };
  return (
    <>
      <header>
        <div className="heading">
          <div className="logo">
            <Link to="/"><img src={myImage} alt="Fitzzee Logo" /></Link>
            <h1 className='website-name'>Fitzzee</h1>
          </div>
          <div className="navigation-menu">
            <nav>
              <ul>
                <li className="dropdown">
                  <a href="#services">Services &#9662;</a>
                  <ul className="submenu">
                    <li><Link to="/bmiCalculator">BMI Calculator</Link></li>
                    <li><Link to="/calorieCalculator">Calorie Calculator</Link></li>
                    <li><Link to="/diseasesPrediction">Disease Predictor</Link></li>
                    <li><a href="Workout-Plans">Workout Plans</a></li>
                    <li><a href="Nutrition-Guidance">Nutrition Guidance</a></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#health-conditions">Health Conditions &#9662;</a>
                  <ul className="submenu">
                    <li><a href="#">Dermatology</a></li>
                    <li><a href="#">Gastroenterology</a></li>
                    <li><a href="#">Gynaecology</a></li>
                    <li><a href="#">Urology</a></li>
                    <li><a href="#">Oncology</a></li>
                    <li><a href="#">Neurology</a></li>
                    <li><a href="#">Cardiology</a></li>
                  </ul>
                </li>
                <li><Link to="/blog">Blog</Link></li>
                <li><a href="/Reviews/">Reviews</a></li>
                <li onClick={() => scrollToSection('about')}>About</li>
                <li onClick={() => scrollToSection('contact')}>Contact</li>
                <li><i onClick={() => setShowAuth(true)} className="fa-regular fa-user"></i></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      {showAuth && <Auth onClose={() => setShowAuth(false)} />}
    </>
  )
}

export default Navbar
