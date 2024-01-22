import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HorizontalNonLinearStepper from "./Components/Alltogether";
import FormFloatingBasicExample from "./LoginPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormFloatingBasicExample />} />
        <Route path="/register" element={<HorizontalNonLinearStepper />} />
      </Routes>
    </Router>
  );
}

export default App;
