import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import TaxCalculationPage from "./pages/TaxCalculationPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tax-calculation" element={<TaxCalculationPage />} />
    </Routes>
  );
}

export default App;
