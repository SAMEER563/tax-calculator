import React, { useState } from "react";
import IncomeForm from "../components/IncomeForm";
import TaxResult from "../components/TaxResult";

const TaxCalculationPage = () => {
  const [taxResult, setTaxResult] = useState(null);

  const handleFormSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:5000/api/tax-calculate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(errorData.error || "Failed to calculate tax");
        return;
      }

      const result = await response.json();
      setTaxResult(result);
    } catch (error) {
      alert("Error connecting to the backend: " + error.message);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <header className="bg-blue-500 text-white p-4 text-center">
        <h1 className="text-3xl font-bold">Tax Calculation</h1>
      </header>
      <div className="mt-8">
        <IncomeForm onSubmit={handleFormSubmit} />
      </div>
      {taxResult && <TaxResult result={taxResult} />}
    </div>
  );
};

export default TaxCalculationPage;
