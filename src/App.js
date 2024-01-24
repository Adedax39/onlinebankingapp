import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HorizontalNonLinearStepper from "./Components/Alltogether";
import FormFloatingBasicExample from "./LoginPage"
import TranscationPage from "./Components/userInterface";
import AdminLogin from "./Components/AdminLogin";
import TranscationAdmin from "./Components/AdminTransction";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormFloatingBasicExample />} />
        <Route path="/register" element={<HorizontalNonLinearStepper />} />
        <Route path="/transaction" element={<TranscationPage />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/transactionlog" element={<TranscationAdmin />} />
      </Routes>
    </Router>
  );
}

export default App;
