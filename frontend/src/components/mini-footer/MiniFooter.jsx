import React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../mini-footer/MiniFooter.css'

function MiniFooter() {
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
        <div id="footer">
            <div className="footer-elements">
                <p>
                    <b><Link to="/">Home</Link> | <a onClick={() => scrollToSection('about')}>About</a> | <Link to="/reviews">Reviews</Link> | <a onClick={() => scrollToSection('contact')}>Contact</a></b>
                </p>
            </div>
            <div className="copyright">
                <p>Copyright © 2025 Fitzzee, All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default MiniFooter
