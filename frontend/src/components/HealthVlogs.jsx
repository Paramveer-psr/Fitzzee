import React from 'react';
import { motion } from 'framer-motion';

const HealthVlogs = () => {
  const vlogs = [
    {
      id: 1,
      title: 'Healthy Eating Habits',
      thumbnail: 'https://via.placeholder.com/300x200',
      description: 'Learn about the best eating habits for a healthy lifestyle.',
      duration: '10:30',
      author: 'Dr. Sarah Johnson'
    },
    {
      id: 2,
      title: 'Morning Workout Routine',
      thumbnail: 'https://via.placeholder.com/300x200',
      description: 'Start your day with this energizing workout routine.',
      duration: '15:45',
      author: 'Mike Thompson'
    },
    {
      id: 3,
      title: 'Stress Management Tips',
      thumbnail: 'https://via.placeholder.com/300x200',
      description: 'Effective techniques to manage daily stress and anxiety.',
      duration: '12:20',
      author: 'Dr. Emily Chen'
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
            Health & Fitness Vlogs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vlogs.map((vlog) => (
              <motion.div
                key={vlog.id}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-lg shadow overflow-hidden"
              >
                <img
                  src={vlog.thumbnail}
                  alt={vlog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">{vlog.title}</h3>
                  <p className="mt-1 text-sm text-gray-500">{vlog.description}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm text-gray-500">{vlog.duration}</span>
                    <span className="text-sm font-medium text-indigo-600">{vlog.author}</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
                  >
                    Watch Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HealthVlogs; 