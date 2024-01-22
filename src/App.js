import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HorizontalNonLinearStepper from "./Components/Alltogether";
import FormFloatingBasicExample from "./LoginPage"
import TranscationPage from "./Components/userInterface";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormFloatingBasicExample />} />
        <Route path="/register" element={<HorizontalNonLinearStepper />} />
        <Route path="/transaction" element={<TranscationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
