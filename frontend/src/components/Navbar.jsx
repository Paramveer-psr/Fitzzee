import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NavLink = ({ to, children }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    <Link to={to} className="hover:text-blue-200 transition-colors">
      {children}
    </Link>
  </motion.div>
);

const MobileNavLink = ({ to, onClick, children }) => (
  <motion.div
    whileTap={{ scale: 0.95 }}
  >
    <Link 
      to={to} 
      className="block px-2 py-1 text-white hover:bg-blue-700 rounded transition-colors"
      onClick={onClick}
    >
      {children}
    </Link>
  </motion.div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="text-2xl font-bold flex items-center">
            <span className="mr-2">💪</span>
            <span>FitLife</span>
          </Link>
        </motion.div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-blue-200 hover:border-blue-200"
          >
            <svg 
              className="fill-current h-5 w-5" 
              viewBox="0 0 20 20" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              {isOpen ? (
                <path 
                  fillRule="evenodd" 
                  clipRule="evenodd" 
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" 
                />
              ) : (
                <path 
                  fillRule="evenodd" 
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" 
                  clipRule="evenodd"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop navigation */}
        <motion.div 
          className="hidden md:flex space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, staggerChildren: 0.1, delayChildren: 0.2 }}
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/bmi">BMI Calculator</NavLink>
          <NavLink to="/disease-prediction">Disease Prediction</NavLink>
          <NavLink to="/vlogs">Health Vlogs</NavLink>
          <NavLink to="/nutrition">Nutrition</NavLink>
          <NavLink to="/login">Login</NavLink>
        </motion.div>
      </div>

      {/* Mobile navigation */}
      <motion.div 
        className={`${isOpen ? 'block' : 'hidden'} md:hidden`}
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col mt-4 space-y-2">
          <MobileNavLink to="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
          <MobileNavLink to="/bmi" onClick={() => setIsOpen(false)}>BMI Calculator</MobileNavLink>
          <MobileNavLink to="/disease-prediction" onClick={() => setIsOpen(false)}>Disease Prediction</MobileNavLink>
          <MobileNavLink to="/vlogs" onClick={() => setIsOpen(false)}>Health Vlogs</MobileNavLink>
          <MobileNavLink to="/nutrition" onClick={() => setIsOpen(false)}>Nutrition</MobileNavLink>
          <MobileNavLink to="/login" onClick={() => setIsOpen(false)}>Login</MobileNavLink>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar; 