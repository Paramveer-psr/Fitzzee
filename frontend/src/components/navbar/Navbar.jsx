import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../navbar/Navbar.css'
import myImage from '../../../src/images/logo.png'
import Auth from '../login-signup/Auth';
import About from '../about/About';

function Navbar() {
  const [showAuth, setShowAuth] = useState(false);
  return (
    <div>
      <header>
        <div className="heading">
          <div className="logo">
            <Link to="/"><img src={myImage} alt="Fitzzee Logo" /></Link>
            <h1>Fitzzee</h1>
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
                <li><a href="/Blog/">Blog</a></li>
                <li><a href="/Reviews/">Reviews</a></li>
                <li><Link to="#">About</Link></li>
                <li><a href="#contact">Contact</a></li>
                <li><i onClick={() => setShowAuth(true)} className="fa-regular fa-user"></i></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      {showAuth && <Auth onClose={() => setShowAuth(false)}/>}
    </div>
  )
}

export default Navbar
