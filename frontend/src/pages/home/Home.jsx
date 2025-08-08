import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar';
import HeroSection from '../../components/heroSection/HeroSection';
import About from '../../components/about/About';

function Home() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <About />
            <Footer />

        </>
    );
}

export default Home
