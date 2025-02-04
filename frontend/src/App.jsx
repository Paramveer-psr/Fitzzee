import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Home from "./pages/home/Home"
import BmiCalculator from "./pages/bmiCalculator/BmiCalculator"
import NoPage from "./pages/nopage/NoPage";

import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bmiCalculator" element={<BmiCalculator />} />
        <Route path="/*" element={<NoPage />} />
      </Routes>
      <Toaster />
    </Router>
  )
}

export default App