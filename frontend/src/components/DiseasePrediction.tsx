import React, { useState } from 'react';

const commonSymptoms = [
  'Fever',
  'Cough',
  'Fatigue',
  'Difficulty Breathing',
  'Headache',
  'Body Aches',
  'Sore Throat',
  'Nausea',
  'Diarrhea',
  'Loss of Taste/Smell',
  'Chest Pain',
  'Dizziness',
];

interface Disease {
  name: string;
  probability: number;
  description: string;
  recommendations: string[];
}

const DiseasePrediction: React.FC = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [predictions, setPredictions] = useState<Disease[]>([]);

  const handleSymptomToggle = (symptom: string) => {
    setSelectedSymptoms((prev) =>
      prev.includes(symptom)
        ? prev.filter((s) => s !== symptom)
        : [...prev, symptom]
    );
  };

  const predictDisease = (e: React.FormEvent) => {
    e.preventDefault();
    // This is a mock prediction - in a real app, you would call an API
    const mockPredictions: Disease[] = [
      {
        name: 'Common Cold',
        probability: 0.75,
        description: 'A viral infection of the upper respiratory tract.',
        recommendations: [
          'Rest and stay hydrated',
          'Take over-the-counter cold medications',
          'Use a humidifier',
          'Gargle with salt water',
        ],
      },
      {
        name: 'Seasonal Allergies',
        probability: 0.45,
        description: 'An allergic response to environmental triggers.',
        recommendations: [
          'Take antihistamines',
          'Avoid known allergens',
          'Use air purifiers',
          'Keep windows closed during high pollen times',
        ],
      },
    ];

    setPredictions(mockPredictions);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center mb-8">Disease Prediction</h2>
        <form onSubmit={predictDisease} className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Select Your Symptoms</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {commonSymptoms.map((symptom) => (
                <div
                  key={symptom}
                  className={`p-3 border rounded-md cursor-pointer transition-colors ${
                    selectedSymptoms.includes(symptom)
                      ? 'bg-blue-100 border-blue-500'
                      : 'hover:bg-gray-50'
                  }`}
                  onClick={() => handleSymptomToggle(symptom)}
                >
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-blue-600"
                      checked={selectedSymptoms.includes(symptom)}
                      onChange={() => {}}
                    />
                    <span className="ml-2">{symptom}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>
          <button
            type="submit"
            disabled={selectedSymptoms.length < 2}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Predict Possible Conditions
          </button>
        </form>

        {predictions.length > 0 && (
          <div className="mt-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Possible Conditions</h3>
            <div className="space-y-6">
              {predictions.map((prediction) => (
                <div
                  key={prediction.name}
                  className="bg-gray-50 rounded-lg p-6"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-xl font-medium text-gray-900">
                      {prediction.name}
                    </h4>
                    <span className="text-sm font-medium text-blue-600">
                      {(prediction.probability * 100).toFixed(0)}% match
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{prediction.description}</p>
                  <div>
                    <h5 className="font-medium text-gray-900 mb-2">Recommendations:</h5>
                    <ul className="list-disc pl-5 space-y-1">
                      {prediction.recommendations.map((rec, index) => (
                        <li key={index} className="text-gray-600">
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-sm text-gray-500">
              <p className="font-medium">Disclaimer:</p>
              <p>
                This is not a medical diagnosis. Please consult with a healthcare
                professional for proper medical advice and treatment.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiseasePrediction; 