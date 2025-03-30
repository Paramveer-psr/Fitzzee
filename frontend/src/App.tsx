import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import BMICalculator from './components/BMICalculator';
import DiseasePrediction from './components/DiseasePrediction';
import HealthVlogs from './components/HealthVlogs';
import NutritionGuide from './components/NutritionGuide';
import Home from './components/Home';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/bmi" element={<BMICalculator />} />
          <Route path="/disease-prediction" element={<DiseasePrediction />} />
          <Route path="/vlogs" element={<HealthVlogs />} />
          <Route path="/nutrition" element={<NutritionGuide />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
