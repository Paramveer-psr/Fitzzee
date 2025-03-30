import React from 'react';
import { motion } from 'framer-motion';

const NutritionGuide = () => {
  const nutritionTips = [
    {
      id: 1,
      title: 'Balanced Diet',
      description: 'Learn about the importance of a balanced diet and how to achieve it.',
      tips: [
        'Include proteins, carbs, and healthy fats in every meal',
        'Eat plenty of fruits and vegetables',
        'Stay hydrated with water throughout the day'
      ]
    },
    {
      id: 2,
      title: 'Portion Control',
      description: 'Understanding portion sizes and their impact on your health.',
      tips: [
        'Use smaller plates to control portions',
        'Listen to your body\'s hunger cues',
        'Avoid eating while distracted'
      ]
    },
    {
      id: 3,
      title: 'Meal Planning',
      description: 'Tips for effective meal planning and preparation.',
      tips: [
        'Plan your meals for the week',
        'Prep ingredients in advance',
        'Keep healthy snacks readily available'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Nutrition Guide
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nutritionTips.map((tip) => (
              <motion.div
                key={tip.id}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {tip.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {tip.description}
                </p>
                <ul className="space-y-2">
                  {tip.tips.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <span className="text-indigo-500 mr-2">•</span>
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
                >
                  Learn More
                </motion.button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 bg-white rounded-lg shadow-lg p-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Need Personalized Nutrition Advice?
            </h3>
            <p className="text-gray-600 mb-6">
              Get a customized nutrition plan tailored to your specific needs and goals.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Schedule Consultation
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NutritionGuide; 