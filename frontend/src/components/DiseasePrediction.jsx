import React, { useState } from 'react';
import { motion } from 'framer-motion';

const DiseasePrediction = () => {
  const [formData, setFormData] = useState({
    symptoms: '',
    age: '',
    gender: '',
    duration: '',
    severity: 'mild'
  });

  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const diseases = {
    'Common Cold': {
      symptoms: ['runny nose', 'sore throat', 'cough', 'congestion', 'sneezing'],
      confidence: 85,
      recommendations: [
        'Rest well and stay hydrated',
        'Take over-the-counter cold medicine',
        'Use a humidifier',
        'Gargle with warm salt water',
        'Avoid close contact with others'
      ],
      severity: 'mild'
    },
    'Influenza (Flu)': {
      symptoms: ['fever', 'body aches', 'fatigue', 'cough', 'headache'],
      confidence: 75,
      recommendations: [
        'Get plenty of rest',
        'Stay hydrated',
        'Take antiviral medications if prescribed',
        'Use fever reducers',
        'Stay home to prevent spread'
      ],
      severity: 'moderate'
    },
    'COVID-19': {
      symptoms: ['fever', 'cough', 'shortness of breath', 'loss of taste/smell', 'fatigue'],
      confidence: 70,
      recommendations: [
        'Isolate yourself',
        'Get tested for COVID-19',
        'Monitor oxygen levels',
        'Stay hydrated',
        'Seek medical attention if symptoms worsen'
      ],
      severity: 'moderate'
    },
    'Bronchitis': {
      symptoms: ['persistent cough', 'mucus production', 'wheezing', 'chest discomfort', 'fatigue'],
      confidence: 65,
      recommendations: [
        'Use a humidifier',
        'Take prescribed medications',
        'Avoid irritants',
        'Stay hydrated',
        'Get plenty of rest'
      ],
      severity: 'moderate'
    },
    'Pneumonia': {
      symptoms: ['high fever', 'cough with phlegm', 'chest pain', 'shortness of breath', 'fatigue'],
      confidence: 60,
      recommendations: [
        'Seek immediate medical attention',
        'Take prescribed antibiotics',
        'Rest in bed',
        'Stay hydrated',
        'Monitor breathing'
      ],
      severity: 'severe'
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      const symptoms = formData.symptoms.toLowerCase();
      const possibleDiseases = Object.entries(diseases).filter(([_, disease]) =>
        disease.symptoms.some(symptom => symptoms.includes(symptom))
      );

      if (possibleDiseases.length > 0) {
        const [diseaseName, diseaseData] = possibleDiseases[0];
        setPrediction({
          disease: diseaseName,
          ...diseaseData,
          age: formData.age,
          gender: formData.gender,
          duration: formData.duration
        });
      } else {
        setPrediction({
          disease: 'Unknown Condition',
          confidence: 40,
          recommendations: [
            'Consult a healthcare professional',
            'Monitor symptoms',
            'Rest and stay hydrated',
            'Keep track of temperature',
            'Seek emergency care if symptoms worsen'
          ]
        });
      }
      setLoading(false);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-xl rounded-2xl p-8"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-2 text-center">
            Disease Prediction
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Enter your symptoms and details to get a preliminary assessment
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  value={formData.age}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="symptoms" className="block text-sm font-medium text-gray-700">
                Describe your symptoms
              </label>
              <textarea
                id="symptoms"
                name="symptoms"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Enter your symptoms here (e.g., fever, cough, headache)..."
                value={formData.symptoms}
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
                  Duration of symptoms
                </label>
                <input
                  type="text"
                  id="duration"
                  name="duration"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="e.g., 3 days"
                  value={formData.duration}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="severity" className="block text-sm font-medium text-gray-700">
                  Severity
                </label>
                <select
                  id="severity"
                  name="severity"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  value={formData.severity}
                  onChange={handleChange}
                >
                  <option value="mild">Mild</option>
                  <option value="moderate">Moderate</option>
                  <option value="severe">Severe</option>
                </select>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${loading ? 'opacity-75 cursor-not-allowed' : ''}`}
            >
              {loading ? 'Analyzing...' : 'Predict Disease'}
            </motion.button>
          </form>

          {prediction && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Prediction Results</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-500">Predicted Disease</p>
                  <p className="text-xl font-medium text-gray-900">{prediction.disease}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Confidence Level</p>
                  <div className="flex items-center">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-indigo-600 h-2.5 rounded-full"
                        style={{ width: `${prediction.confidence}%` }}
                      ></div>
                    </div>
                    <span className="ml-2 text-sm font-medium text-gray-900">{prediction.confidence}%</span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-lg font-medium text-gray-900 mb-3">Recommendations</h4>
                <ul className="space-y-3">
                  {prediction.recommendations.map((rec, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <span className="text-indigo-500 mr-2">•</span>
                      <span className="text-gray-700">{rec}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <p className="text-sm text-yellow-800">
                  <span className="font-medium">Disclaimer:</span> This is a preliminary assessment based on the information provided. Please consult a healthcare professional for accurate diagnosis and treatment.
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default DiseasePrediction; 