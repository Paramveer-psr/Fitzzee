import React, { useState } from 'react';
import { motion } from 'framer-motion';
import bmiImage from '../assets/images/bmi.jpg';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.2
    } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.3 }
  }
};

const BMICalculator: React.FC = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmiResult, setBmiResult] = useState<number | null>(null);
  const [bmiCategory, setBmiCategory] = useState('');
  const [categoryColor, setCategoryColor] = useState('');

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    const heightInMeters = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);
    const bmi = weightInKg / (heightInMeters * heightInMeters);
    setBmiResult(parseFloat(bmi.toFixed(2)));

    // Determine BMI category and set color
    if (bmi < 18.5) {
      setBmiCategory('Underweight');
      setCategoryColor('text-yellow-500');
    } else if (bmi >= 18.5 && bmi < 25) {
      setBmiCategory('Normal weight');
      setCategoryColor('text-green-500');
    } else if (bmi >= 25 && bmi < 30) {
      setBmiCategory('Overweight');
      setCategoryColor('text-orange-500');
    } else {
      setBmiCategory('Obese');
      setCategoryColor('text-red-500');
    }
  };

  return (
    <div className="min-h-screen relative py-12 px-4 sm:px-6 lg:px-8">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bmiImage} 
          alt="Fitness Background" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <motion.div 
        className="relative z-10 max-w-md mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="bg-white bg-opacity-90 rounded-lg shadow-xl overflow-hidden">
          {/* Header with wave design */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-400 p-8 relative">
            <div className="absolute bottom-0 left-0 right-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-16">
                <path fill="#ffffff" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,160C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
              </svg>
            </div>
            <motion.h2 
              className="text-3xl font-bold text-white mb-2 relative z-10"
              variants={itemVariants}
            >
              BMI Calculator
            </motion.h2>
            <motion.p 
              className="text-blue-100 relative z-10"
              variants={itemVariants}
            >
              Calculate your Body Mass Index to check if you're at a healthy weight
            </motion.p>
          </div>

          <div className="p-8">
            <motion.form 
              onSubmit={calculateBMI} 
              className="space-y-6"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <label htmlFor="height" className="block text-sm font-medium text-gray-700">
                  Height (cm)
                </label>
                <input
                  type="number"
                  id="height"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                  placeholder="e.g., 170"
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
                  Weight (kg)
                </label>
                <input
                  type="number"
                  id="weight"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                  placeholder="e.g., 70"
                />
              </motion.div>
              
              <motion.button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Calculate BMI
              </motion.button>
            </motion.form>

            {bmiResult && (
              <motion.div 
                className="mt-8 rounded-lg overflow-hidden"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-gray-50 p-6">
                  <h3 className="text-lg font-medium text-gray-900">Your Results</h3>
                  <div className="mt-4 flex flex-col items-center">
                    <motion.div 
                      className="w-40 h-40 rounded-full bg-blue-100 flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 100 }}
                    >
                      <span className="text-4xl font-bold text-blue-600">{bmiResult}</span>
                    </motion.div>
                    
                    <motion.p 
                      className={`mt-4 text-xl font-bold ${categoryColor}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {bmiCategory}
                    </motion.p>
                  </div>
                  
                  <motion.div 
                    className="mt-6 text-sm text-gray-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <p className="font-medium">BMI Categories:</p>
                    <ul className="mt-2 space-y-1">
                      <li className="flex items-center">
                        <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                        Underweight: &lt; 18.5
                      </li>
                      <li className="flex items-center">
                        <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                        Normal weight: 18.5 - 24.9
                      </li>
                      <li className="flex items-center">
                        <span className="w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                        Overweight: 25 - 29.9
                      </li>
                      <li className="flex items-center">
                        <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                        Obese: ≥ 30
                      </li>
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BMICalculator; 