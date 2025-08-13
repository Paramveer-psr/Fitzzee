import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Home from "./pages/home/Home";
import BmiCalculator from "./pages/bmiCalculator/BmiCalculator";
import CalorieCalculator from "./pages/calorieCalculator/CalorieCalculator";
import DiseasesPrediction from "./pages/diseasesPrediction/DiseasesPrediction";
import BlogPage from "./pages/blog/BlogPage";
import Reviews from "./pages/reviews/Reviews";
import NoPage from "./pages/nopage/NoPage";

import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bmiCalculator" element={<BmiCalculator />} />
        <Route path="/calorieCalculator" element={<CalorieCalculator />} />
        <Route path="/diseasesPrediction" element={<DiseasesPrediction />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/*" element={<NoPage />} />
      </Routes>
      <Toaster />
    </Router>
  )
}

export default App