import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Import images
import heroImage from '../assets/images/fitness-hero.jpg';
import bmiImage from '../assets/images/bmi.jpg';
import healthImage from '../assets/images/health.jpg';
import nutritionImage from '../assets/images/nutrition.jpg';
import videoImage from '../assets/images/video.jpg';

const features = [
  {
    title: 'BMI Calculator',
    description: 'Calculate your Body Mass Index and get personalized health insights.',
    icon: '📊',
    link: '/bmi',
    image: bmiImage
  },
  {
    title: 'Disease Prediction',
    description: 'Check your symptoms and get preliminary health assessments.',
    icon: '🏥',
    link: '/disease-prediction',
    image: healthImage
  },
  {
    title: 'Health Vlogs',
    description: 'Watch informative videos about health and wellness.',
    icon: '🎥',
    link: '/vlogs',
    image: videoImage
  },
  {
    title: 'Nutrition Guide',
    description: 'Get personalized meal plans and nutrition advice.',
    icon: '🥗',
    link: '/nutrition',
    image: nutritionImage
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.2,
      delayChildren: 0.3
    } 
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with background image */}
      <div className="relative overflow-hidden">
        {/* Hero background image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Fitness Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Your Journey to Better Health Starts Here
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Track your health, predict conditions, and get personalized wellness advice.
            </motion.p>
            <motion.div 
              className="space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link
                to="/signup"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors"
              >
                Get Started
              </Link>
              <Link
                to="/login"
                className="inline-block bg-blue-500 text-white border border-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
              >
                Sign In
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our Features
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link
                to={feature.link}
                className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="text-3xl mr-2">{feature.icon}</span>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Take Control of Your Health?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of users who have already started their journey to better health.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/signup"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
              >
                Start Your Journey
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-gray-400">
                We're dedicated to making health and wellness accessible to everyone through
                technology and education.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/bmi" className="text-gray-400 hover:text-white">
                    BMI Calculator
                  </Link>
                </li>
                <li>
                  <Link to="/disease-prediction" className="text-gray-400 hover:text-white">
                    Disease Prediction
                  </Link>
                </li>
                <li>
                  <Link to="/vlogs" className="text-gray-400 hover:text-white">
                    Health Vlogs
                  </Link>
                </li>
                <li>
                  <Link to="/nutrition" className="text-gray-400 hover:text-white">
                    Nutrition Guide
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">
                Email: support@fitnessapp.com
                <br />
                Phone: (555) 123-4567
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; 2024 Fitness App. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home; 