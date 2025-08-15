import React, { useEffect, useRef } from 'react';
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar';
import MiniFooter from '../../components/mini-footer/MiniFooter';
import HeroSection from '../../components/heroSection/HeroSection';
import About from '../../components/about/About';
import { useLocation, useNavigate } from 'react-router-dom';


function Home() {
    const aboutRef = useRef(null);
    const contactRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const scrollTarget = location.state?.scrollTo;

        if (scrollTarget === 'about') {
            aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
        } else if (scrollTarget === 'contact') {
            contactRef.current?.scrollIntoView({ behavior: 'smooth' });
        }

        // ⚠️ Clear state to prevent repeated scrolling on refresh
        if (scrollTarget) {
            navigate(location.pathname, { replace: true, state: {} });
        }
    }, [location, navigate]);

    // Listen for custom event if already on home
    useEffect(() => {
        const handleScrollEvent = (e) => {
            const target = e.detail;
            if (target === 'about') {
                aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
            } else if (target === 'contact') {
                contactRef.current?.scrollIntoView({ behavior: 'smooth' });
            }
        };

        window.addEventListener('scrollToSection', handleScrollEvent);
        return () => window.removeEventListener('scrollToSection', handleScrollEvent);
    }, []);

    return (
        <>
            <Navbar />
            <HeroSection />
            <div ref={aboutRef}>
                <About />
            </div>
            <div ref={contactRef}>
                <Footer />
            </div>
        </>
    );
}

export default Home
