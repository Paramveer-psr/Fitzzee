import React from 'react'
import { Link } from 'react-router-dom';
import '../footer/Footer.css'
import setupFormListener from '../footer/contactMessage' 

const Footer = () => {

  return (
  <div id="contact">
    <div className="elements">
      <div className="left-elements">
        <div className="footer-icons">
          <h2>Fitzzee</h2>
          <p>"Thanks for visiting our website. Your support means the <br/>world to us. Explore, enjoy, and stay
            connected
            for more <br/>exciting updates!"<br/><br/></p>
          <p><i className="fas fa-paper-plane"></i>example@domain</p>
          <p><i className="fa-solid fa-phone"></i>+91-XXXXX XXXXX</p>
          <div className="social-icons">
            <a className="LinkedIn" href="#" target="_blank"><i className="fab fa-linkedin"></i></a>
            <a className="Facebook" href="#" target="_blank"><i className="fa-brands fa-facebook"></i></a>
            <a className="Twitter" href="#" target="_blank"><i className="fa-brands fa-square-x-twitter"></i></a>
            <a className="Instagram" href="#" target="_blank"><i className="fab fa-instagram"></i></a>
          </div>
          <div className="copyright">
            <p>Copyright © 2025 Fitzzee, All Rights Reserved.</p>
          </div>
        </div>
        <div className="important-links">
          <h2>Important Links</h2>
          <nav>
            <li><Link to="/diseasesPrediction">Disease Predictor</Link></li>
            <li><Link to="/calorieCalculator">Calorie Calculator</Link></li>
            <li><Link to="/bmiCalculator">BMI Calculator</Link></li>
            <li><Link to="#">Workout Plans</Link></li>
            <li><Link to="#">Nutrition Guidance</Link></li>
            <li><Link to="#">Blogs</Link></li>
          </nav>
        </div>
      </div>
      <div className="right-elements">
        <h2>Contact Us</h2>
        <form name="submit-to-google-sheet">
          <input type="text" name="Name" placeholder="Your Name" required/>
          <input type="email" name="Email" placeholder="Your Email" required/>
          <textarea name="Message" maxLength="200" rows="3" placeholder="Your Message" required></textarea>
          <button className='query-send-button' type="submit" onClick={setupFormListener}>
            <i className="fas fa-paper-plane"></i> <b>Send</b>
          </button>
        </form>
        <span id="msg"></span>
      </div>
    </div>
  </div>  
        );
};

export default Footer
