import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../footer/Footer.css'
import setupFormListener from '../footer/contactMessage' 

const Footer = () => {

  useEffect(() => {
    setupFormListener();
  }, []);

  return (
  <div id="contact">
    <div className="elements">
      <div className="left-elements">
        <div className="footer-icons">
          <h2>MyFitness</h2>
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
            <p>Copyright © 2024 MyFitness, All Rights Reserved.</p>
          </div>
        </div>
        <div className="important-links">
          <h2>Important Links</h2>
          <nav>
            <li><a href="#">Disease Predictor</a></li>
            <li><a href="#">Daily Calories Requirement</a></li>
            <li><Link to="/bmiCalculator">BMI Calculator</Link></li>
            <li><a href="#">Workout Plans</a></li>
            <li><a href="#">Nutrition Guidance</a></li>
            <li><a href="#">Blogs</a></li>
          </nav>
        </div>
      </div>
      <div className="right-elements">
        <h2>Contact Us</h2>
        <form name="submit-to-google-sheet">
          <input type="text" name="Name" placeholder="Your Name" required/>
          <input type="email" name="Email" placeholder="Your Email" required/>
          <textarea name="Message" maxLength="200" rows="3" placeholder="Your Message" required></textarea>
          <button type="submit">
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
