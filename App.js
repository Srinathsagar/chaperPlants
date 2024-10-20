import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PlantsAndPots from "./components/PlantsAndPots";
import ThankYouPage from "./components/ThankYouPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PlantsAndPots />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </Router>
  );
};

export default App;
